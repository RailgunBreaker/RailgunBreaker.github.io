import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBroadcastTower,
  FaCamera,
  FaExternalLinkAlt,
  FaFilm,
  FaGamepad,
  FaGift,
  FaGithub,
  FaGlobe,
  FaMusic,
  FaPlay,
  FaShieldAlt,
  FaUsers,
  FaWordpress,
} from "react-icons/fa";
import { SiBilibili, SiSteam } from "react-icons/si";
import { useContent } from "../../hooks/useContent";
import { Section } from "../layout/Section";
import {
  PortfolioSectionContent,
  PortfolioSectionHeading,
} from "../ui/PortfolioSection";

type HobbyChip = {
  labelKey: string;
  Icon: IconType;
};

type HobbyGroup = {
  titleKey: string;
  chips: HobbyChip[];
};

type ProfileItem = {
  labelKey: string;
  valueKey: string;
  Icon: IconType;
  href?: string;
};

const hobbyGroups: HobbyGroup[] = [
  {
    titleKey: "hobbies.mun.title",
    chips: [
      { labelKey: "hobbies.mun.delegate", Icon: FaUsers },
      { labelKey: "hobbies.mun.volunteer", Icon: FaUsers },
      { labelKey: "hobbies.mun.chair", Icon: FaUsers },
    ],
  },
  {
    titleKey: "hobbies.website.title",
    chips: [
      { labelKey: "hobbies.website.visits", Icon: FaGlobe },
      { labelKey: "hobbies.website.wordpress", Icon: FaWordpress },
    ],
  },
  {
    titleKey: "hobbies.video.title",
    chips: [
      { labelKey: "hobbies.video.premiere", Icon: FaFilm },
      { labelKey: "hobbies.video.resolve", Icon: FaFilm },
    ],
  },
  {
    titleKey: "hobbies.badminton.title",
    chips: [
      { labelKey: "hobbies.badminton.recreational", Icon: FaBolt },
      { labelKey: "hobbies.badminton.racket", Icon: FaShieldAlt },
    ],
  },
  {
    titleKey: "hobbies.postcards.title",
    chips: [{ labelKey: "hobbies.postcards.souvenir", Icon: FaGift }],
  },
  {
    titleKey: "hobbies.photography.title",
    chips: [
      { labelKey: "hobbies.photography.d7000", Icon: FaCamera },
      { labelKey: "hobbies.photography.f3", Icon: FaCamera },
      { labelKey: "hobbies.photography.z7ii", Icon: FaCamera },
      { labelKey: "hobbies.photography.bronica", Icon: FaCamera },
      { labelKey: "hobbies.photography.luminar", Icon: FaCamera },
    ],
  },
  {
    titleKey: "hobbies.radio.title",
    chips: [
      { labelKey: "hobbies.radio.typeA", Icon: FaBroadcastTower },
      { labelKey: "hobbies.radio.acma", Icon: FaBroadcastTower },
      { labelKey: "hobbies.radio.station", Icon: FaBroadcastTower },
      { labelKey: "hobbies.radio.senhaix", Icon: FaBroadcastTower },
    ],
  },
];

const profileItems: ProfileItem[] = [
  {
    labelKey: "hobbies.profile.github.label",
    valueKey: "hobbies.profile.github.value",
    Icon: FaGithub,
    href: "https://github.com/RailgunBreaker",
  },
  {
    labelKey: "hobbies.profile.website.label",
    valueKey: "hobbies.profile.website.value",
    Icon: FaGlobe,
    href: "https://railgunbreaker.icu",
  },
  {
    labelKey: "hobbies.profile.bilibili.label",
    valueKey: "hobbies.profile.bilibili.value",
    Icon: SiBilibili,
    href: "https://space.bilibili.com/272949721",
  },
  {
    labelKey: "hobbies.profile.steam.label",
    valueKey: "hobbies.profile.steam.value",
    Icon: SiSteam,
    href: "https://steamcommunity.com/id/railgunbreaker/",
  },
  {
    labelKey: "hobbies.profile.genshin.label",
    valueKey: "hobbies.profile.genshin.value",
    Icon: FaGamepad,
  },
];

const musicGameChips: HobbyChip[] = [
  { labelKey: "hobbies.music.taiko", Icon: FaMusic },
  { labelKey: "hobbies.music.phigros", Icon: FaMusic },
  { labelKey: "hobbies.music.malody", Icon: FaMusic },
  { labelKey: "hobbies.music.museDash", Icon: FaMusic },
];

const hobbiesContentRequests = [
  { sectionName: "content", contentKey: "hobbies.title" },
  { sectionName: "content", contentKey: "hobbies.profile.title" },
  { sectionName: "content", contentKey: "hobbies.music.title" },
  ...hobbyGroups.flatMap((group) => [
    { sectionName: "content", contentKey: group.titleKey },
    ...group.chips.map((chip) => ({
      sectionName: "content",
      contentKey: chip.labelKey,
    })),
  ]),
  ...profileItems.flatMap((item) => [
    { sectionName: "content", contentKey: item.labelKey },
    { sectionName: "content", contentKey: item.valueKey },
  ]),
  ...musicGameChips.map((chip) => ({
    sectionName: "content",
    contentKey: chip.labelKey,
  })),
];

type HobbyChipViewProps = HobbyChip & {
  content: Record<string, string>;
};

function HobbyChipView({ content, Icon, labelKey }: HobbyChipViewProps) {
  return (
    <span className="group/chip inline-flex min-h-10 max-w-full items-center gap-3 rounded-full border border-blue-200/25 bg-blue-400/12 px-4 py-1.5 text-base leading-snug font-medium text-slate-200 shadow-(--shadow-sm) transition duration-200 ease-out hover:-translate-y-1 hover:border-blue-300/65 hover:bg-blue-400/20 hover:text-white hover:shadow-[0_12px_28px_rgb(96_165_250/0.2)] sm:text-lg">
      <Icon
        className="size-5 shrink-0 text-blue-200 transition duration-200 group-hover/chip:text-blue-100"
        aria-hidden
      />
      <span className="min-w-0 wrap-break-word">{content[labelKey]}</span>
    </span>
  );
}

type HobbyGroupCardProps = {
  content: Record<string, string>;
  group: HobbyGroup;
};

function HobbyGroupCard({ content, group }: HobbyGroupCardProps) {
  return (
    <section className="mb-6 break-inside-avoid rounded-3xl border border-blue-200/18 bg-slate-950/20 px-5 py-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.035)] transition duration-300 ease-out hover:border-blue-200/35 hover:bg-blue-400/6 hover:shadow-[0_18px_42px_rgb(96_165_250/0.12),inset_0_1px_0_rgb(255_255_255/0.055)] sm:px-6 sm:py-7">
      <h3 className="text-base font-bold tracking-[0.12em] text-slate-300 uppercase sm:text-lg">
        {content[group.titleKey]}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
        {group.chips.map((chip) => (
          <HobbyChipView
            content={content}
            Icon={chip.Icon}
            key={chip.labelKey}
            labelKey={chip.labelKey}
          />
        ))}
      </div>
    </section>
  );
}

type ProfileRowProps = {
  content: Record<string, string>;
  item: ProfileItem;
};

function ProfileRow({ content, item }: ProfileRowProps) {
  const rowContent = (
    <>
      <span className="flex min-w-0 items-center gap-4">
        <item.Icon className="size-6 shrink-0 text-blue-300" aria-hidden />
        <span className="min-w-0 text-lg font-semibold text-slate-100 sm:text-xl">
          {content[item.labelKey]}
        </span>
      </span>
      <span className="flex min-w-0 items-center gap-3 text-base font-semibold text-blue-300 sm:text-lg">
        <span className="min-w-0 text-right wrap-break-word">
          {content[item.valueKey]}
        </span>
        {item.href ? (
          <FaExternalLinkAlt className="size-4 shrink-0" aria-hidden />
        ) : null}
      </span>
    </>
  );

  const className =
    "group flex flex-col gap-3 rounded-2xl border border-blue-200/12 bg-slate-950/14 px-5 py-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200/35 hover:bg-blue-400/7 hover:shadow-[0_14px_34px_rgb(96_165_250/0.12),inset_0_1px_0_rgb(255_255_255/0.045)] sm:flex-row sm:items-center sm:justify-between sm:px-6";

  if (item.href) {
    return (
      <a
        className={`${className} outline-none focus-visible:-translate-y-1 focus-visible:border-blue-200/45 focus-visible:bg-blue-400/9 focus-visible:ring-2 focus-visible:ring-blue-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`}
        href={item.href}
        rel="noreferrer"
        target="_blank"
      >
        {rowContent}
      </a>
    );
  }

  return <div className={className}>{rowContent}</div>;
}

export function Hobbies() {
  const content = useContent(hobbiesContentRequests);

  return (
    <Section>
      <PortfolioSectionContent>
        <PortfolioSectionHeading>
          {content["hobbies.title"]}
        </PortfolioSectionHeading>

        <div className="columns-1 gap-8 lg:columns-2">
          {hobbyGroups.map((group) => (
            <HobbyGroupCard
              content={content}
              group={group}
              key={group.titleKey}
            />
          ))}

          <section className="mb-6 break-inside-avoid rounded-3xl border border-blue-200/18 bg-slate-950/20 px-5 py-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.035)] transition duration-300 ease-out hover:border-blue-200/35 hover:bg-blue-400/6 hover:shadow-[0_18px_42px_rgb(96_165_250/0.12),inset_0_1px_0_rgb(255_255_255/0.055)] sm:px-6 sm:py-7">
            <h3 className="flex items-center gap-3 text-base font-bold tracking-[0.12em] text-slate-300 uppercase sm:text-lg">
              <FaExternalLinkAlt
                className="size-5 shrink-0 text-blue-300"
                aria-hidden
              />
              {content["hobbies.profile.title"]}
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              {profileItems.map((item) => (
                <ProfileRow content={content} item={item} key={item.labelKey} />
              ))}
            </div>
          </section>

          <section className="mb-6 break-inside-avoid rounded-3xl border border-blue-200/18 bg-slate-950/20 px-5 py-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.035)] transition duration-300 ease-out hover:border-blue-200/35 hover:bg-blue-400/6 hover:shadow-[0_18px_42px_rgb(96_165_250/0.12),inset_0_1px_0_rgb(255_255_255/0.055)] sm:px-6 sm:py-7">
            <h3 className="flex items-center gap-3 text-base font-bold tracking-[0.12em] text-slate-300 uppercase sm:text-lg">
              <FaPlay className="size-5 shrink-0 text-blue-300" aria-hidden />
              {content["hobbies.music.title"]}
            </h3>
            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
              {musicGameChips.map((chip) => (
                <HobbyChipView
                  content={content}
                  Icon={chip.Icon}
                  key={chip.labelKey}
                  labelKey={chip.labelKey}
                />
              ))}
            </div>
          </section>
        </div>
      </PortfolioSectionContent>
    </Section>
  );
}
