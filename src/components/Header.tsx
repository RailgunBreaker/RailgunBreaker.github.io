import { PersonalInfo, ContactInfo, RollingImages } from "./header/index";

function Header() {
  return (
    <header className="section header">
      <div className="hero-layout">
        <div className="hero-main">
          <PersonalInfo />
          <ContactInfo />
        </div>
        <div className="hero-gallery" aria-label="Selected photo highlights">
          <RollingImages />
        </div>
      </div>
    </header>
  );
}

export default Header;
