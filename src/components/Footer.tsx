import { useLanguage } from "../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
      <footer className="section footer portfolio-footer">
        <a
          className="hosting portfolio-hosting"
          href="/https://github.com/RailgunBreaker/RailgunBreaker.github.io"
        >
          <i aria-hidden="true" className="fas fa-heart" />
          <span>{t.footer.hostedBy}</span>
          <span className="link font-semibold">railgunbreaker.github.io</span>
        </a>

      </footer>
  );
}

export default Footer;
