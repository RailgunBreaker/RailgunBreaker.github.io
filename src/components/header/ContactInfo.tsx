import { useLanguage } from "../../hooks/useLanguage";

function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-4 md:gap-6">
      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.language}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-language mr-2" />
            {t.header.languageItems.chineseNative}
          </span>
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i className="fas fa-language mr-2" />{" "}
            <a
              href="index.html"
              className="text-gray-600 hover:text-white transition-colors"
            >
              {t.header.languageItems.englishFluent}
            </a>
          </span>
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i className="fas fa-language mr-2" />{" "}
            <a
              href="index_ja.html"
              className="text-gray-600 hover:text-white transition-colors"
            >
              {t.header.languageItems.japaneseAdvanced}
            </a>
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.schools}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-university mr-2" />
            立命館大学(Ritsumeikan University)
          </span>
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            オーストラリア国立大学（Australian National University）
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.education}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-graduation-cap mr-2" />
            Undergraduate, Class of 2026
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.major}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-university mr-2" />
            Global Liberal Arts(RU) (グローバル教養学、意味不明)
          </span>
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            Asia Pacific Affairs(ANU)
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.emailWeb}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:admin@alansong.club"
              className="text-gray-600 hover:text-white transition-colors"
            >
              alansong0318@outlook.com
            </a>
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.emailAcademic}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:gl0042hs@ed.ritsumei.ac.jp"
              className="text-gray-600 hover:text-white transition-colors"
            >
              gl0042hs@ed.ritsumei.ac.jp
            </a>
          </span>
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:u7712843@anu.edu.au"
              className="text-gray-600 hover:text-white transition-colors"
            >
              u7712843@anu.edu.au
            </a>
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.callsign}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-broadcast-tower mr-2" />
            <span className="content">BG2FGI</span>
          </span>
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-broadcast-tower mr-2" />
            <span className="content">VK1ABA</span>
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.pgpKeyId}
        </span>
        <div className="flex gap-2 flex-nowrap">
          <span className="label text-xs sm:text-sm px-3 py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-key mr-2" />
            <a
              href="https://pgp.mit.edu/pks/lookup?search=0x5F1CD73F4A7C0832&op=indexb"
              className="text-gray-600 hover:text-white transition-colors"
            >
              0x5f1cd73f4a7c0832
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
