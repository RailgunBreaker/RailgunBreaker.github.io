function Footer() {
  return (
    <>
      <div className="section footer">
        <a className="hosting" href="https://github.com/amphineko/amphineko">
          <i aria-hidden="true" className="fas fa-code-branch" /> Fork this
          template on GitHub
        </a>
      </div>
      <div className="section footer shadow">
        <a
          className="hosting"
          href="/https://github.com/RailgunBreaker/RailgunBreaker.github.io"
        >
          <i aria-hidden="true" className="fas fa-heart" /> Hosted by GtiHub
          <span className="link">railgunbreaker.github.io</span>
        </a>
        <div className="copyright">
          <i aria-hidden="true" className="fas fa-exclamation-triangle" />
          Forked by Railgun Breaker from amphineko
        </div>
      </div>
    </>
  );
}

export default Footer;
