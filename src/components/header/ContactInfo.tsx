import { useLanguage } from "../../hooks/useLanguage";

function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div className="label-group col-span-1 sm:col-span-2 lg:col-span-3">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.language}
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-language mr-2" />
            {t.header.languageItems.chineseNative}
          </span>
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i className="fas fa-language mr-2" />{" "}
            <a href="index.html" className="transition-colors">
              {t.header.languageItems.englishFluent}
            </a>
          </span>
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i className="fas fa-language mr-2" />{" "}
            <a href="index_ja.html" className="transition-colors">
              {t.header.languageItems.japaneseAdvanced}
            </a>
          </span>
        </div>
      </div>

      <div className="label-group col-span-1 sm:col-span-2 lg:col-span-3">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.schools}
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-university mr-2" />
            <span className="hidden sm:inline">
              立命館大学(Ritsumeikan University)
            </span>
            <span className="sm:hidden">Ritsumeikan Univ.</span>
          </span>
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <span className="hidden sm:inline">
              オーストラリア国立大学（Australian National University）
            </span>
            <span className="sm:hidden">ANU</span>
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.education}
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-graduation-cap mr-2" />
            <span className="hidden sm:inline">
              Undergraduate, Class of 2026
            </span>
            <span className="sm:hidden">Undergrad 2026</span>
          </span>
        </div>
      </div>

      <div className="label-group col-span-1 sm:col-span-2 lg:col-span-2">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.major}
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-university mr-2" />
            <span className="hidden md:inline">
              Global Liberal Arts(RU) (グローバル教養学、意味不明)
            </span>
            <span className="md:hidden">Global Liberal Arts</span>
          </span>
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            Asia Pacific Affairs(ANU)
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.emailWeb}
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:admin@alansong.club"
              className="transition-colors break-all"
            >
              alansong0318@outlook.com
            </a>
          </span>
        </div>
      </div>

      <div className="label-group col-span-1 sm:col-span-2">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.emailAcademic}
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:gl0042hs@ed.ritsumei.ac.jp"
              className="transition-colors break-all"
            >
              gl0042hs@ed.ritsumei.ac.jp
            </a>
          </span>
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:u7712843@anu.edu.au"
              className="transition-colors break-all"
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
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-broadcast-tower mr-2" />
            <span className="content">BG2FGI</span>
          </span>
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-broadcast-tower mr-2" />
            <span className="content">VK1ABA</span>
          </span>
        </div>
      </div>

      <div className="label-group">
        <span className="header text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
          {t.header.pgpKeyId}
        </span>
        <div className="flex gap-2 flex-wrap">
          <span className="label text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <i aria-hidden="true" className="fas fa-key mr-2" />
            <a
              href="https://pgp.mit.edu/pks/lookup?search=0x5F1CD73F4A7C0832&op=indexb"
              className="transition-colors break-all"
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
