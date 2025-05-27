function ContactInfo() {
  return (
    <>
      <div className="label-group">
        <span className="header">Language</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-language" />
          Chinese (Native)
        </span>
        <span className="label">
          <i className="fas fa-language" />{" "}
          <a href="index.html" style={{ color: "#555" }}>
            English (Fluent)
          </a>
        </span>
        <span className="label">
          <i className="fas fa-language" />{" "}
          <a href="index_ja.html" style={{ color: "#555" }}>
            Japanese (Advanced)
          </a>
        </span>
      </div>
      <div className="label-group">
        <span className="header">Schools</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-university" />
          立命館大学(Ritsumeikan University)
        </span>
        <span className="label">Australian National University</span>
      </div>
      <div className="label-group">
        <span className="header">Education</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-graduation-cap" />
          Undergraduate, Class of 2026
        </span>
      </div>
      <div className="label-group">
        <span className="header">Major</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-university" />
          Global Liberal Arts(RU) (グローバル教養学、意味不明)
        </span>
        <span className="label">Asia Pacific Affairs(ANU)</span>
      </div>
      <div className="label-group">
        <span className="header">E-mail(Web)</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-envelope" />
          <a href="mailto:admin@alansong.club" style={{ color: "#555" }}>
            admin@alansong.club
          </a>
        </span>
      </div>
      <div className="label-group">
        <span className="header">E-mail(Academic)</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-envelope" />
          <a href="mailto:gl0042hs@ed.ritsumei.ac.jp" style={{ color: "#555" }}>
            {" "}
            gl0042hs@ed.ritsumei.ac.jp
          </a>
        </span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-envelope" />
          <a href="mailto:u7712843@anu.edu.au" style={{ color: "#555" }}>
            {" "}
            u7712843@anu.edu.au
          </a>
        </span>
      </div>
      <br />
      <div className="label-group">
        <span className="header">Callsign</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-broadcast-tower" />
          <span className="content">BG2FGI</span>
        </span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-broadcast-tower" />
          <span className="content">VK1ABA</span>
        </span>
      </div>
      <div className="label-group">
        <span className="header">PGP Key ID</span>
        <span className="label">
          <i aria-hidden="true" className="fas fa-key" />
          <a
            href="https://pgp.mit.edu/pks/lookup?search=0x5F1CD73F4A7C0832&op=indexb"
            style={{ color: "#555" }}
          >
            0x5f1cd73f4a7c0832
          </a>
        </span>
      </div>
    </>
  );
}

export default ContactInfo;
