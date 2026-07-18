import type { IconType } from "react-icons";
import { FaBroadcastTower, FaEnvelope } from "react-icons/fa";
import treeImage from "../../assets/images/tree.jpg";
import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import { LanguageSelector } from "../ui/LanguageSelector";
import { RollingImages } from "../ui/RollingImages";

const overviewContentRequests = [
  { sectionName: "content", contentKey: "overview.name" },
  { sectionName: "content", contentKey: "overview.legalName.first.text" },
  { sectionName: "content", contentKey: "overview.legalName.first.annotation" },
  { sectionName: "content", contentKey: "overview.legalName.second.text" },
  {
    sectionName: "content",
    contentKey: "overview.legalName.second.annotation",
  },
  { sectionName: "content", contentKey: "overview.emailWeb.label" },
  { sectionName: "content", contentKey: "overview.emailWeb.address" },
  { sectionName: "content", contentKey: "overview.emailAcademic.label" },
  { sectionName: "content", contentKey: "overview.emailAcademic.ritsumeikan" },
  { sectionName: "content", contentKey: "overview.emailAcademic.anu" },
  { sectionName: "content", contentKey: "overview.callsign.label" },
  { sectionName: "content", contentKey: "overview.callsign.bg" },
  { sectionName: "content", contentKey: "overview.callsign.vk" },
];

type FactGroup = {
  icon: IconType;
  labelKey: string;
  items: Array<{
    contentKey: string;
    href?: string;
  }>;
};

const factGroups: FactGroup[] = [
  {
    icon: FaEnvelope,
    labelKey: "overview.emailWeb.label",
    items: [
      {
        contentKey: "overview.emailWeb.address",
        href: "mailto:ghsong@railgunbreaker.icu",
      },
    ],
  },
  {
    icon: FaEnvelope,
    labelKey: "overview.emailAcademic.label",
    items: [
      {
        contentKey: "overview.emailAcademic.ritsumeikan",
        href: "mailto:gl0042hs@ed.ritsumei.ac.jp",
      },
      {
        contentKey: "overview.emailAcademic.anu",
        href: "mailto:u7712843@anu.edu.au",
      },
    ],
  },
  {
    icon: FaBroadcastTower,
    labelKey: "overview.callsign.label",
    items: [
      { contentKey: "overview.callsign.bg" },
      { contentKey: "overview.callsign.vk" },
    ],
  },
];

type FactChipProps = {
  children: string;
  href?: string;
  Icon: IconType;
};

function FactChip({ children, href, Icon }: FactChipProps) {
  const className =
    "inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-sky-200/25 bg-sky-300/15 px-3 py-1 text-sm font-medium leading-snug text-slate-200 transition duration-200 hover:border-blue-300/65 hover:bg-blue-400/20 hover:text-white md:text-base";
  const content = (
    <>
      <Icon className="size-4 shrink-0 text-sky-200" aria-hidden />
      <span className="min-w-0 wrap-break-word">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        className={`${className} outline-none focus-visible:-translate-y-1 focus-visible:border-blue-300/65 focus-visible:bg-blue-400/20 focus-visible:text-white focus-visible:shadow-[0_12px_28px_rgb(96_165_250/0.2)] focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`}
        href={href}
      >
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}

type LegalNameProps = {
  content: Record<string, string>;
};

function LegalName({ content }: LegalNameProps) {
  const segments = [
    {
      text: content["overview.legalName.first.text"],
      annotation: content["overview.legalName.first.annotation"],
    },
    {
      text: content["overview.legalName.second.text"],
      annotation: content["overview.legalName.second.annotation"],
    },
  ];

  return (
    <span className="inline-flex items-end justify-center gap-2 sm:gap-3">
      {segments.map((segment) =>
        segment.annotation === "__none__" ? (
          <span className="leading-none" key={segment.text}>
            {segment.text}
          </span>
        ) : (
          <ruby
            className="leading-none [ruby-position:over]"
            key={segment.text}
          >
            {segment.text}
            <rt className="pb-1 text-sm font-semibold tracking-normal text-blue-100/85 sm:text-base">
              {segment.annotation}
            </rt>
          </ruby>
        ),
      )}
    </span>
  );
}

export function Overview() {
  const content = useContent(overviewContentRequests);

  return (
    <Section
      className="overflow-hidden bg-[radial-gradient(circle_at_18%_20%,rgb(92_179_255/0.20),transparent_45%),linear-gradient(125deg,#0b2b50_0%,#09213f_52%,#081b35_100%)] px-0 py-0 sm:px-0 sm:py-0 md:py-0"
      hasInnerCard={false}
    >
      <div className="relative">
        <div className="absolute top-4 right-4 z-10 hidden sm:block">
          <LanguageSelector />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 px-5 py-6 text-center md:flex-row md:justify-start md:gap-7 md:px-8 md:py-7 md:text-left">
          <div className="shrink-0 rounded-full bg-white p-1.5 shadow-[0_18px_44px_rgb(0_0_0/0.35)] md:p-2">
            <img
              alt=""
              className="size-24 rounded-full object-cover sm:size-28 md:size-32"
              src={treeImage}
            />
          </div>

          <div>
            <h1 className="text-3xl leading-tight font-bold tracking-tight text-white drop-shadow-[0_4px_3px_rgb(0_0_0/0.42)] sm:text-4xl md:text-5xl">
              <span>Railgun </span>
              <span className="whitespace-nowrap">
                <a
                  aria-label="Br, Bromine"
                  className="inline-block rounded-2xl border border-sky-200/10 bg-slate-500/35 px-3 py-1 text-white transition duration-200 hover:-translate-y-0.5 hover:border-blue-200/60 hover:bg-blue-400/20 hover:text-blue-100 hover:shadow-[0_0_26px_rgb(96_165_250/0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200"
                  href="https://en.wikipedia.org/wiki/Bromine"
                  rel="noreferrer"
                  target="_blank"
                >
                  Br
                </a>
                <span>eaker</span>
              </span>
            </h1>
            <p className="mt-2 text-xl font-semibold text-slate-300 drop-shadow-[0_3px_2px_rgb(0_0_0/0.35)] md:text-2xl">
              (<LegalName content={content} />)
            </p>
            <div className="mt-6 flex justify-center sm:hidden">
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 px-3 pb-3 sm:grid-cols-2 md:px-4 md:pb-4 lg:grid-cols-3">
          {factGroups.map((group) => (
            <section
              className="min-w-0 rounded-xl border border-blue-200/20 bg-[linear-gradient(150deg,rgb(6_23_43/0.78),rgb(5_18_35/0.78))] px-4 py-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]"
              key={group.labelKey}
            >
              <h2 className="text-base font-bold tracking-[0.12em] text-slate-200 uppercase">
                {content[group.labelKey]}
              </h2>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-blue-400" />
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <FactChip
                    key={item.contentKey}
                    href={item.href}
                    Icon={group.icon}
                  >
                    {content[item.contentKey]}
                  </FactChip>
                ))}
              </div>
            </section>
          ))}
          <div className="col-span-full">
            <RollingImages />
          </div>
        </div>
      </div>
    </Section>
  );
}
