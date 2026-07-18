import type { IconType } from "react-icons";
import {
  FaBolt,
  FaBroadcastTower,
  FaCamera,
  FaDrum,
  FaExternalLinkAlt,
  FaGamepad,
  FaGift,
  FaGithub,
  FaGlobe,
  FaMusic,
  FaPhotoVideo,
  FaPlay,
  FaShieldAlt,
  FaUsers,
  FaWordpress,
} from "react-icons/fa";
import { MdChair, MdOutlineVolunteerActivism } from "react-icons/md";
import { SiBilibili, SiDavinciresolve, SiSteam } from "react-icons/si";
import { TbBrandAdobePremier, TbLicense } from "react-icons/tb";
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
      { labelKey: "hobbies.mun.volunteer", Icon: MdOutlineVolunteerActivism },
      { labelKey: "hobbies.mun.chair", Icon: MdChair },
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
      { labelKey: "hobbies.video.premiere", Icon: TbBrandAdobePremier },
      { labelKey: "hobbies.video.resolve", Icon: SiDavinciresolve },
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
      { labelKey: "hobbies.photography.lightroom", Icon: FaPhotoVideo },
    ],
  },
  {
    titleKey: "hobbies.radio.title",
    chips: [
      { labelKey: "hobbies.radio.typeA", Icon: TbLicense },
      { labelKey: "hobbies.radio.acma", Icon: TbLicense },
      { labelKey: "hobbies.radio.station", Icon: TbLicense },
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
  { labelKey: "hobbies.music.taiko", Icon: FaDrum },
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
    <span className="group/chip inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-blue-200/25 bg-blue-400/12 px-3 py-1 text-sm leading-snug font-medium text-slate-200 transition duration-200 hover:border-blue-300/65 hover:bg-blue-400/20 hover:text-white md:text-base">
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
    <section className="rounded-xl border border-l-3 border-blue-200/18 border-l-sky-400 bg-[linear-gradient(145deg,rgb(7_26_49/0.73),rgb(6_19_37/0.72))] px-4 py-4 shadow-[0_10px_20px_rgb(3_8_18/0.32)] transition hover:border-blue-200/45 md:px-5">
      <h3 className="text-sm font-bold tracking-[0.12em] text-slate-300 uppercase md:text-base">
        {content[group.titleKey]}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
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
        <span className="min-w-0 text-sm font-semibold text-slate-100 md:text-base">
          {content[item.labelKey]}
        </span>
      </span>
      <span className="flex min-w-0 items-center gap-3 text-sm font-semibold text-blue-300 md:text-base">
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
    "group flex flex-col gap-2 rounded-lg border border-blue-200/12 bg-slate-950/14 px-4 py-3 transition hover:border-blue-200/35 hover:bg-blue-400/7 sm:flex-row sm:items-center sm:justify-between";

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

        <div className="grid items-start gap-3 md:grid-cols-2">
          {hobbyGroups.map((group) => (
            <HobbyGroupCard
              content={content}
              group={group}
              key={group.titleKey}
            />
          ))}

          <section className="rounded-xl border border-l-3 border-blue-200/18 border-l-sky-400 bg-[linear-gradient(145deg,rgb(7_26_49/0.73),rgb(6_19_37/0.72))] px-4 py-4 shadow-[0_10px_20px_rgb(3_8_18/0.32)] md:px-5">
            <h3 className="flex items-center gap-3 text-sm font-bold tracking-[0.12em] text-slate-300 uppercase md:text-base">
              <FaExternalLinkAlt
                className="size-5 shrink-0 text-blue-300"
                aria-hidden
              />
              {content["hobbies.profile.title"]}
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              {profileItems.map((item) => (
                <ProfileRow content={content} item={item} key={item.labelKey} />
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-l-3 border-blue-200/18 border-l-sky-400 bg-[linear-gradient(145deg,rgb(7_26_49/0.73),rgb(6_19_37/0.72))] px-4 py-4 shadow-[0_10px_20px_rgb(3_8_18/0.32)] md:px-5">
            <h3 className="flex items-center gap-3 text-sm font-bold tracking-[0.12em] text-slate-300 uppercase md:text-base">
              <FaPlay className="size-5 shrink-0 text-blue-300" aria-hidden />
              {content["hobbies.music.title"]}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
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
