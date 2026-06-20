import type { IconType } from "react-icons";
import {
  FaBroadcastTower,
  FaEnvelope,
  FaGraduationCap,
  FaLanguage,
  FaUniversity,
} from "react-icons/fa";
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
  { sectionName: "content", contentKey: "overview.language.label" },
  { sectionName: "content", contentKey: "overview.language.chinese" },
  { sectionName: "content", contentKey: "overview.language.english" },
  { sectionName: "content", contentKey: "overview.language.japanese" },
  { sectionName: "content", contentKey: "overview.schools.label" },
  { sectionName: "content", contentKey: "overview.schools.ritsumeikan" },
  { sectionName: "content", contentKey: "overview.schools.anu" },
  { sectionName: "content", contentKey: "overview.education.label" },
  { sectionName: "content", contentKey: "overview.education.degree" },
  { sectionName: "content", contentKey: "overview.major.label" },
  { sectionName: "content", contentKey: "overview.major.ru" },
  { sectionName: "content", contentKey: "overview.major.anu" },
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
    icon: FaLanguage,
    labelKey: "overview.language.label",
    items: [
      { contentKey: "overview.language.chinese" },
      { contentKey: "overview.language.english" },
      { contentKey: "overview.language.japanese" },
    ],
  },
  {
    icon: FaUniversity,
    labelKey: "overview.schools.label",
    items: [
      { contentKey: "overview.schools.ritsumeikan" },
      { contentKey: "overview.schools.anu" },
    ],
  },
  {
    icon: FaGraduationCap,
    labelKey: "overview.education.label",
    items: [{ contentKey: "overview.education.degree" }],
  },
  {
    icon: FaUniversity,
    labelKey: "overview.major.label",
    items: [
      { contentKey: "overview.major.ru" },
      { contentKey: "overview.major.anu" },
    ],
  },
  {
    icon: FaEnvelope,
    labelKey: "overview.emailWeb.label",
    items: [
      {
        contentKey: "overview.emailWeb.address",
        href: "mailto:alansong0318@outlook.com",
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
    "inline-flex min-h-10 max-w-full items-center gap-3 rounded-full border border-sky-200/25 bg-sky-300/15 px-4 py-1.5 text-base font-medium leading-snug text-slate-200 shadow-(--shadow-sm) transition duration-200 ease-out hover:-translate-y-1 hover:border-blue-300/65 hover:bg-blue-400/20 hover:text-white hover:shadow-[0_12px_28px_rgb(96_165_250/0.2)] sm:text-lg";
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
      className="overflow-hidden bg-[linear-gradient(135deg,rgb(28_82_125)_0%,rgb(11_43_77)_48%,rgb(5_29_58)_100%)] px-0 py-0 sm:px-0 sm:py-0 md:py-0"
      hasInnerCard={false}
    >
      <div className="relative">
        <div className="absolute top-4 right-4 z-10 hidden sm:block">
          <LanguageSelector />
        </div>

        <div className="flex min-h-90 flex-col items-center justify-center gap-9 px-6 py-12 text-center sm:px-12 md:min-h-97.5 md:flex-row md:justify-start md:gap-16 md:text-left lg:gap-20 lg:px-14">
          <div className="shrink-0 rounded-full bg-white p-1.5 shadow-[0_18px_44px_rgb(0_0_0/0.35)] md:p-2">
            <img
              alt=""
              className="size-48 rounded-full object-cover sm:size-56 lg:size-64"
              src={treeImage}
            />
          </div>

          <div>
            <h1 className="text-5xl leading-tight font-bold tracking-normal text-white drop-shadow-[0_4px_3px_rgb(0_0_0/0.42)] sm:text-6xl lg:text-7xl">
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
            <p className="mt-2 text-2xl font-semibold text-slate-300 drop-shadow-[0_3px_2px_rgb(0_0_0/0.35)] sm:text-3xl">
              (<LegalName content={content} />)
            </p>
            <div className="mt-6 flex justify-center sm:hidden">
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {factGroups.map((group) => (
            <section
              className="rounded-3xl border border-blue-200/14 bg-[rgb(3_25_48/0.78)] px-5 py-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200/35 hover:bg-blue-400/6 hover:shadow-[0_18px_42px_rgb(96_165_250/0.12),inset_0_1px_0_rgb(255_255_255/0.055)] sm:px-8"
              key={group.labelKey}
            >
              <h2 className="text-base font-bold tracking-[0.12em] text-slate-200 uppercase">
                {content[group.labelKey]}
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-blue-400" />
              <div className="mt-7 flex flex-wrap gap-3">
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
          <RollingImages />
        </div>
      </div>
    </Section>
  );
}
