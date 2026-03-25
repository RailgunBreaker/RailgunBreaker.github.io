import { useLanguage } from "../../hooks/useLanguage";
import type { ReactNode } from "react";

interface MetaSectionProps {
  title: string;
  className?: string;
  children: ReactNode;
}

function MetaSection({ title, children, className = "" }: MetaSectionProps) {
  return (
    <section className={`meta-card ${className}`}>
      <h3 className="meta-title">{title}</h3>
      <div className="meta-chip-grid">{children}</div>
    </section>
  );
}

function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="hero-meta-grid">
      <MetaSection title={t.header.language} className="meta-card-wide">
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-language mr-2" />
            {t.header.languageItems.chineseNative}
        </span>
        <span className="meta-chip">
            <i className="fas fa-language mr-2" />{" "}
            <a href="index.html" className="transition-colors">
              {t.header.languageItems.englishFluent}
            </a>
        </span>
        <span className="meta-chip">
            <i className="fas fa-language mr-2" />{" "}
            <a href="index_ja.html" className="transition-colors">
              {t.header.languageItems.japaneseAdvanced}
            </a>
        </span>
      </MetaSection>

      <MetaSection title={t.header.schools} className="meta-card-wide">
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-university mr-2" />
            <span className="hidden sm:inline">
              立命館大学(Ritsumeikan University)
            </span>
            <span className="sm:hidden">Ritsumeikan Univ.</span>
        </span>
        <span className="meta-chip">
            <span className="hidden sm:inline">
              オーストラリア国立大学（Australian National University）
            </span>
            <span className="sm:hidden">ANU</span>
        </span>
      </MetaSection>

      <MetaSection title={t.header.education}>
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-graduation-cap mr-2" />
            <span className="hidden sm:inline">
              Undergraduate, Class of 2026
            </span>
            <span className="sm:hidden">Undergrad 2026</span>
        </span>
      </MetaSection>

      <MetaSection title={t.header.major} className="meta-card-wide">
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-university mr-2" />
            <span className="hidden md:inline">
              Global Liberal Arts(RU) (グローバル教養学、意味不明)
            </span>
            <span className="md:hidden">Global Liberal Arts</span>
        </span>
        <span className="meta-chip">
            Asia Pacific Affairs(ANU)
        </span>
      </MetaSection>

      <MetaSection title={t.header.emailWeb} className="meta-card-wide">
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:admin@alansong.club"
              className="transition-colors break-all"
            >
              alansong0318@outlook.com
            </a>
        </span>
      </MetaSection>

      <MetaSection title={t.header.emailAcademic} className="meta-card-wide">
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:gl0042hs@ed.ritsumei.ac.jp"
              className="transition-colors break-all"
            >
              gl0042hs@ed.ritsumei.ac.jp
            </a>
        </span>
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-envelope mr-2" />
            <a
              href="mailto:u7712843@anu.edu.au"
              className="transition-colors break-all"
            >
              u7712843@anu.edu.au
            </a>
        </span>
      </MetaSection>

      <MetaSection title={t.header.callsign}>
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-broadcast-tower mr-2" />
            <span className="content">BG2FGI</span>
        </span>
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-broadcast-tower mr-2" />
            <span className="content">VK1ABA</span>
        </span>
      </MetaSection>

      <MetaSection title={t.header.pgpKeyId}>
        <span className="meta-chip">
            <i aria-hidden="true" className="fas fa-key mr-2" />
            <a
              href="https://pgp.mit.edu/pks/lookup?search=0x5F1CD73F4A7C0832&op=indexb"
              className="transition-colors break-all"
            >
              0x5f1cd73f4a7c0832
            </a>
        </span>
      </MetaSection>
    </div>
  );
}

export default ContactInfo;
