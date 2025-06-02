import { useLanguage } from "../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (

      <div className="section footer shadow text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
        <a
          className="hosting inline-flex items-center gap-2 text-sm sm:text-base hover:text-accent transition-colors"
          href="/https://github.com/RailgunBreaker/RailgunBreaker.github.io"
        >
          <i aria-hidden="true" className="fas fa-heart" />
          <span>{t.footer.hostedBy}</span>
          <span className="link font-semibold">railgunbreaker.github.io</span>
        </a>

        
      </div>
  );
}

export default Footer;
