import { useLanguage } from "../hooks/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <div className="section footer">
        <a className="hosting" href="https://github.com/amphineko/amphineko">
          <i aria-hidden="true" className="fas fa-code-branch" />{" "}
          {t.footer.forkTemplate}
        </a>
      </div>
      <div className="section footer shadow">
        <a
          className="hosting"
          href="/https://github.com/RailgunBreaker/RailgunBreaker.github.io"
        >
          <i aria-hidden="true" className="fas fa-heart" /> {t.footer.hostedBy}
          <span className="link">railgunbreaker.github.io</span>
        </a>
        <div className="copyright">
          <i aria-hidden="true" className="fas fa-exclamation-triangle" />
          {t.footer.forkedBy}
        </div>
      </div>
    </>
  );
}

export default Footer;
