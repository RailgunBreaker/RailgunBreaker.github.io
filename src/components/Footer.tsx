import { useLanguage } from "../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <div className="mt-6 sm:mt-8 lg:mt-12">
      <div className="section footer text-center p-4 sm:p-6">
        <a
          className="hosting inline-flex items-center gap-2 text-sm sm:text-base hover:text-accent transition-colors"
          href="https://github.com/amphineko/amphineko"
        >
          <i aria-hidden="true" className="fas fa-code-branch" />
          <span>{t.footer.forkTemplate}</span>
        </a>
      </div>

      <div className="section footer shadow text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
        <a
          className="hosting inline-flex items-center gap-2 text-sm sm:text-base hover:text-accent transition-colors"
          href="/https://github.com/RailgunBreaker/RailgunBreaker.github.io"
        >
          <i aria-hidden="true" className="fas fa-heart" />
          <span>{t.footer.hostedBy}</span>
          <span className="link font-semibold">railgunbreaker.github.io</span>
        </a>

        <div className="copyright text-xs sm:text-sm text-muted-foreground">
          <i aria-hidden="true" className="fas fa-exclamation-triangle mr-2" />
          {t.footer.forkedBy}
        </div>
      </div>
    </div>
  );
}

export default Footer;
