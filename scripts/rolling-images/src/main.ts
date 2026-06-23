import * as fs from "node:fs";
import path from "node:path";
import { chromium, type ElementHandle, type Page } from "playwright";

interface ImageData {
  images: string[];
}

async function findLoadMoreButton(
  page: Page,
): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
  try {
    const buttons = await page.$$("button");

    for (const button of buttons) {
      if (await button.isVisible()) {
        try {
          const buttonText = await button.evaluate((element: Element) => {
            function getTextContent(el: Element): string {
              let text = el.textContent || (el as HTMLElement).innerText || "";

              const children = el.querySelectorAll("*");
              for (const child of Array.from(children)) {
                if (child.textContent) {
                  text += ` ${child.textContent}`;
                }
              }

              return text.trim().toLowerCase();
            }

            return getTextContent(element);
          });

          if (buttonText && buttonText.includes("load more")) {
            return button;
          }
        } catch {
          continue;
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error finding load more button: ${error}`);
    return null;
  }
}

async function getImageLinksPlaywright(url: string): Promise<string[]> {
  let browser = null;
  let context = null;
  let page = null;

  try {
    console.log("Launching browser...");
    browser = await chromium.launch({
      headless: true,
      timeout: 120000,
      args: [
        "--disable-gpu",
        "--disable-blink-features=AutomationControlled",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-software-rasterizer",
        "--disable-extensions",
        "--disable-background-networking",
        "--disable-sync",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-first-run",
        "--safebrowsing-disable-auto-update",
        "--disable-component-update",
        "--disable-default-apps",
        "--no-zygote",
        "--disable-accelerated-2d-canvas",
        "--disable-webgl",
      ],
    });

    if (!browser.isConnected()) {
      throw new Error("Browser disconnected after launch");
    }

    context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    });
    page = await context.newPage();

    console.log(`Fetching URL: ${url}`);
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    await page.waitForTimeout(7500);

    const maxClicks = 5;
    let clickCount = 0;
    let triedFinding = false;

    while (clickCount < maxClicks) {
      const loadMoreButton = await findLoadMoreButton(page);

      if (loadMoreButton && (await loadMoreButton.isVisible())) {
        try {
          console.log(
            `Found Load More button, clicking... (attempt ${clickCount + 1})`,
          );
          clickCount++;
          await loadMoreButton.click();
          await page.waitForTimeout(2000);
        } catch (error) {
          console.error(`Error clicking button: ${error}`);
          break;
        }
      } else {
        console.log("No Load More button left to click.");
        if (!triedFinding) {
          await page.waitForTimeout(5000);
          triedFinding = true;
        } else {
          break;
        }
      }
    }

    console.log(
      `Finished clicking Load More buttons. Total clicks: ${clickCount}`,
    );

    await page.waitForTimeout(2000);

    const imgLinks = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      const links: string[] = [];

      imgs.forEach((img) => {
        const src = img.getAttribute("src") || "";
        if (src.startsWith("https://images.pexels.com/photos/")) {
          links.push(src);
        }
      });

      return links;
    });

    const processedImgLinks: string[] = [];
    for (const link of imgLinks) {
      const processedLink = link.split("?")[0];
      if (!processedImgLinks.includes(processedLink)) {
        processedImgLinks.push(processedLink);
      }
    }

    return processedImgLinks;
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    if (error instanceof Error) {
      console.error(`Error stack: ${error.stack}`);
    }
    return [];
  } finally {
    try {
      await page?.close();
      await context?.close();
      await browser?.close();
    } catch (cleanupError) {
      console.error(`Error during cleanup: ${cleanupError}`);
    }
  }
}

function saveLinksToJson(links: string[], filename: string): void {
  const outputPath = path.resolve(filename);
  const data: ImageData = {
    images: links,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Image links saved to ${outputPath}`);
}

async function main(): Promise<void> {
  const pexelsUrl = "https://www.pexels.com/@railgunbreaker/featured-uploads/";
  const links = await getImageLinksPlaywright(pexelsUrl);

  if (links.length === 0) {
    console.log("No image links were found.");
    process.exitCode = 1;
    return;
  }

  console.log(JSON.stringify(links, null, 2));
  console.log(`Total image links found: ${links.length}`);

  if (process.argv.length > 2) {
    saveLinksToJson(links, process.argv[2]);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

export { findLoadMoreButton, getImageLinksPlaywright, saveLinksToJson };
