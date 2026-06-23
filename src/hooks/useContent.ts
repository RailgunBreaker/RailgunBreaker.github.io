import { z } from "zod";
import { useLanguage } from "./stores/useLanguage";

const languageSchema = z.enum(["en", "zh", "ja"]);
const localizedContentSchema = z.object({
  en: z.string().min(1),
  zh: z.string().min(1),
  ja: z.string().min(1),
});
const contentSchema = z.record(z.string().min(1), localizedContentSchema);

const contentSections = import.meta.glob("../assets/i18n/*.json", {
  eager: true,
  import: "default",
}) as Record<string, unknown>;

export type Language = z.infer<typeof languageSchema>;

type ContentRequest = {
  contentKey: string;
  sectionName: string;
};

type ContentResult = Record<string, string>;

export function useContent(requests: ContentRequest[]): ContentResult {
  const language = languageSchema.parse(useLanguage((state) => state.language));
  const validatedSections = new Map<string, z.infer<typeof contentSchema>>();
  const result: ContentResult = {};

  for (const request of requests) {
    let content = validatedSections.get(request.sectionName);

    if (!content) {
      const section =
        contentSections[`../assets/i18n/${request.sectionName}.json`];
      content = contentSchema.parse(section);
      validatedSections.set(request.sectionName, content);
    }

    const localizedContent = localizedContentSchema.parse(
      content[request.contentKey],
    );

    result[request.contentKey] = localizedContent[language];
  }

  return result;
}
