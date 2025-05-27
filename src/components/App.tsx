import lifeTreeImage from "@/assets/images/tree.jpg";
function App() {
  return (
    <>
      <div id="container">
        <div className="section header grid-container grid-parent">
          <div className="split picture-container grid-40">
            <a href={lifeTreeImage}>
              <picture className="picture">
                <source type="image/webp" srcSet={lifeTreeImage} />
                <img src={lifeTreeImage} alt="picture of Railgun Breaker" />
              </picture>
            </a>
          </div>
          <div className="split grid-60">
            <div className="names">
              <h1 className="name">
                <span className="no-wrap">
                  Railgun{" "}
                  <a
                    className="chem-element"
                    data-element="titanium"
                    href="https://en.wikipedia.org/wiki/Bromine"
                  >
                    Br{" "}
                  </a>
                  eaker <br />
                  (Guohua Song)
                </span>
              </h1>
            </div>
            <div className="label-group">
              <span className="header">Language</span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-language" />
                Chinese (Native)
              </span>
              <span className="label">
                <i className="fa fa-language" />{" "}
                <a href="index.html" style={{ color: "#555" }}>
                  English (Fluent)
                </a>
              </span>
              <span className="label">
                <i className="fa fa-language" />{" "}
                <a href="index_ja.html" style={{ color: "#555" }}>
                  Japanese (Advanced)
                </a>
              </span>
            </div>
            <div className="label-group">
              <span className="header">Schools</span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-university" />
                立命館大学(Ritsumeikan University)
              </span>
              <span className="label">Australian National University</span>
            </div>
            <div className="label-group">
              <span className="header">Education</span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-graduation-cap" />
                Undergraduate, Class of 2026
              </span>
            </div>
            <div className="label-group">
              <span className="header">Major</span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-university" />
                Global Liberal Arts(RU) (グローバル教養学、意味不明)
              </span>
              <span className="label">Asia Pacific Affairs(ANU)</span>
            </div>
            <div className="label-group">
              <span className="header">E-mail(Web)</span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-envelope-square" />
                <a href="mailto:admin@alansong.club" style={{ color: "#555" }}>
                  admin@alansong.club
                </a>
              </span>
            </div>
            <div className="label-group">
              <span className="header">E-mail(Academic)</span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-envelope-square" />
                <a
                  href="mailto:gl0042hs@ed.ritsumei.ac.jp"
                  style={{ color: "#555" }}
                >
                  {" "}
                  gl0042hs@ed.ritsumei.ac.jp
                </a>
              </span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-envelope-square" />
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
                <i aria-hidden="true" className="fa fa-rss-square" />
                <span className="content">BG2FGI</span>
              </span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-rss-square" />
                <span className="content">VK1ABA</span>
              </span>
            </div>
            <div className="label-group">
              <span className="header">PGP Key ID</span>
              <span className="label">
                <i aria-hidden="true" className="fa fa-key" />
                <a
                  href="https://pgp.mit.edu/pks/lookup?search=0x5F1CD73F4A7C0832&op=indexb"
                  style={{ color: "#555" }}
                >
                  0x5f1cd73f4a7c0832
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="section intro">
          <h2>
            <i className="fa fa-chevron-right" aria-hidden="true" />{" "}
            Introduction
          </h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; I am an undergraduate student pursuing a
            dual degree in <strong>Asia Pacific Affairs</strong> at the
            Australian National University and{" "}
            <strong>Global Liberal Arts</strong> at Ritsumeikan University. My
            academic journey spans two leading institutions in the Asia-Pacific
            region, allowing me to approach global issues from both theoretical
            and cross-cultural perspectives.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;My current research focuses on the{" "}
            <strong>
              privatization of the Japanese National Railway (JNR)
            </strong>
            , <strong>university grade inflation</strong>, and{" "}
            <strong>higher education admission policies</strong>. These topics
            reflect my broader interest in the intersection between public
            policy, institutional reform, and social inequality.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; Outside of my academic work, I am
            passionate about{" "}
            <em>
              music games, photography, amateur radio, and Japanese culture
            </em>
            . I enjoy exploring both the serious and playful sides of life —
            whether it’s investigating education policy or perfecting a song in
            太鼓の達人.
          </p>
        </div>
        <div className="section intro">
          <h2>
            <i className="fa fa-chevron-right" aria-hidden="true" /> Education
            Background
          </h2>
          <div className="block grid-container grid-parent">
            <div className="split grid-50 mobile-grid-100">
              <p>
                <strong>2023 – 2026</strong>
                <br />
                <em>Australian National University</em>, Canberra, Australia
                <br />
                <strong>
                  Bachelor of Asia Pacific Affairs, College of Asia and the
                  Pacific
                </strong>{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Weighted Average Mark: 69.9
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• International Security Studies,
                Japanese Foreign Policy, Asian Economics
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Class representative in ASIA2308
                (Linguistic Histories in Asia and the Pacific)
              </p>
              <p>
                <strong>2022 – 2026</strong>
                <br />
                <em>Ritsumeikan University</em>, Osaka, Japan
                <br />
                Bachelor of Global Liberal Arts, College of Global Liberal Arts
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• CGPA: 3.86/5, Semester GPA: 4.20/5
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Courses: Statistics, Law of Conflicts,
                Sociology, Political Theory, GIS
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Instruction Language: English (with
                Japanese language coursework)
              </p>
              <p>
                <strong>2024.6 – 2024.7</strong>
                <br />
                <em>University of Michigan</em>, Ann Arbor, MI, USA
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Summer Program – Inter-university
                Consortium for Political and Social Research
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Courses: Regression, Machine Learning,
                Bayesian Modeling, Network Analysis
              </p>
              <p>
                📄{" "}
                <a href="./Guohua.S CV.pdf" download="CV">
                  Download my full CV here
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="section intro">
          <h2>
            <i className="fa fa-chevron-right" aria-hidden="true" /> Awards
          </h2>
          <p>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp;• 2024 Ritsumeikan University Tuition Fee
            Reduction (20%) <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• 2024 College of Global Liberal Arts
            Scholarship for Study Abroad
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• Ritsumeikan University Study Abroad
            Challenge Scholars
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• 2023 Ritsumeikan University Tuition Fee
            Reduction (20%)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• 2022-2023 Monbukagakusho Honors
            Scholarship for Privately Financed International Students
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• 2022 Ritsumeikan University Tuition Fee
            Reduction (20%)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;• 2022 Non-Resident Achievement Scholarship,
            University of California, Riverside(Rejected acceptance)
          </p>
        </div>
        <div className="section intro">
          <h2>
            <i className="fa fa-chevron-right" aria-hidden="true" /> Skills
          </h2>
          <div className="block grid-container grid-parent">
            <div className="split grid-50 mobile-grid-100">
              <div className="label-group2">
                <span className="header">Programming</span>
                <span className="label">
                  <i className="fa fa-code" /> Python
                </span>
                <span className="label">
                  <i className="fa fa-code" /> R
                </span>
                <span className="label">
                  <i className="fa fa-code" /> Java
                </span>
                <span className="label">
                  <i className="fa fa-code" /> PHP
                </span>
                <span className="label">
                  <i className="fa fa-code" /> HTML
                </span>
                <span className="label">
                  <i className="fa fa-code" /> CSS
                </span>
                <span className="label">
                  <i className="fa fa-code" /> Markdown
                </span>
                <span className="label">
                  <i className="fa fa-code" /> LaTeX
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Technologies &amp; Tools</span>
                <span className="label">
                  <i className="fa fa-terminal" /> Linux
                </span>
                <span className="label">
                  <i className="fa fa-github" /> GitHub
                </span>
                <span className="label">
                  <i className="fa fa-code-fork" /> Git
                </span>
                <span className="label">
                  <i className="fa fa-server" /> Apache
                </span>
                <span className="label">
                  <i className="fa fa-edit" /> Visual Studio Code
                </span>
                <span className="label">
                  <i className="fa fa-edit" /> PyCharm
                </span>
                <span className="label">
                  <i className="fa fa-bar-chart" /> IBM SPSS Statistics
                </span>
                <span className="label">
                  <i className="fa fa-map" /> ArcGIS (Grade: A, RU)
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Statistical &amp; Data Skills</span>
                <span className="label">
                  <i className="fa fa-line-chart" /> Regression Analysis
                </span>
                <span className="label">
                  <i className="fa fa-cubes" /> Bayesian Modeling
                </span>
                <span className="label">
                  <i className="fa fa-share-alt" /> Network Analysis
                </span>
                <span className="label">
                  <i className="fa fa-cogs" /> Machine Learning
                </span>
                <span className="label">
                  <i className="fa fa-calculator" /> Quantitative Methods in
                  Sociology
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Certifications</span>
                <span className="label">
                  <i className="fa fa-id-card" /> Japanese Driving License –
                  Class 1 (普通車一種運転免許)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section intro">
          <h2>
            <i className="fa fa-chevron-right" aria-hidden="true" /> Hobbies
          </h2>
          <div className="block grid-container grid-parent">
            <div className="split grid-50 mobile-grid-100">
              <div className="label-group2">
                <span className="header">Model United Nations</span>
                <span className="label">
                  <i className="fa fa-group" /> 12 times as delegate
                </span>
                <span className="label">
                  <i className="fa fa-group" /> Volunteer
                </span>
                <span className="label">
                  <i className="fa fa-group" /> Chair
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Personal Website</span>
                <span className="label">
                  <i className="fa fa-globe" /> 2,000,000+ visits
                </span>
                <span className="label">
                  <i className="fa fa-wordpress" /> Built with WordPress (LAMP
                  stack)
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Video Clipping</span>
                <span className="label">
                  <i className="fa fa-film" /> Adobe Premiere
                </span>
                <span className="label">
                  <i className="fa fa-film" /> DaVinci Resolve
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Badminton</span>
                <span className="label">
                  <i className="fa fa-bolt" /> Recreational player
                </span>
                <span className="label">
                  <i className="fa fa-shield" /> VICTOR ARS-PB
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Collecting Postcards</span>
                <span className="label">
                  <i className="fa fa-gift" /> Souvenir postcards from travel
                  destinations
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Photography</span>
                <span className="label">
                  <i className="fa fa-camera" /> Nikon D7000
                </span>
                <span className="label">
                  <i className="fa fa-camera" /> Nikon F3
                </span>
                <span className="label">
                  <i className="fa fa-camera" /> Nikon Z7II
                </span>
                <span className="label">
                  <i className="fa fa-camera" /> Bronica ECTL (6x6, 6x4.5)
                </span>
                <span className="label">
                  <i className="fa fa-camera" /> Luminar 4
                </span>
              </div>
              <div className="label-group2">
                <span className="header">Amateur Radio</span>
                <span className="label">
                  <i className="fa fa-rss-square" /> Type "A" Licence, CRAC
                </span>
                <span className="label">
                  <i className="fa fa-rss-square" /> ACMA-recognized
                </span>
                <span className="label">
                  <i className="fa fa-rss-square" /> Radio Station licence, PRC
                </span>
                <span className="label">
                  <i className="fa fa-rss-square" /> SenHaiX 8600
                </span>
              </div>
            </div>
            <div className="split grid-50 mobile-grid-100">
              <figure className="identities">
                <figcaption>
                  <i className="fas fa-external-link-alt" />
                  Social Network
                </figcaption>
                <ul>
                  <li>
                    <a href="https://github.com/RailgunBreaker">
                      <span className="label">
                        <i className="fa fa-github" /> GitHub
                      </span>{" "}
                      <span className="fake-link">@RailgunBreaker</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://alansong.club/">
                      <span className="label">
                        <i className="fa fa-globe" /> Personal Website
                      </span>{" "}
                      <span className="fake-link">
                        Quomodo eradicari potest malum?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://space.bilibili.com/272949721">
                      <span className="label">
                        <i className="fa fa-play" /> Bilibili
                      </span>{" "}
                      <span className="fake-link">
                        Railgun_Breaker_的个人空间
                      </span>
                    </a>
                  </li>
                </ul>
              </figure>
              <figure className="identities">
                <figcaption>
                  <i className="fas fa-external-link-alt" />
                  Game Profiles
                </figcaption>
                <ul>
                  <li>
                    <a href="https://steamcommunity.com/id/railgunbreaker/">
                      <span className="label">
                        <i className="fa fa-steam" /> Steam
                      </span>{" "}
                      <span className="fake-link">Railgun Breaker</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://alansong.club/intro/index.html#">
                      <span className="label">
                        <i className="fa fa-gamepad" /> Genshin Impact
                      </span>{" "}
                      <span className="fake-link">
                        UID:174463696 <small>(RailgunBreaker)</small>
                      </span>
                    </a>
                  </li>
                </ul>
              </figure>
              <div className="label-group">
                <span className="header alt">
                  <i className="fa fa-tag" />
                  Music Game
                </span>
                <span className="label">
                  <i className="fa fa-music" /> 太鼓の達人(おに9★)
                </span>
                <span className="label">
                  <i className="fa fa-music" /> Phigros (Elementary)
                </span>
                <span className="label">
                  <i className="fa fa-music" /> Malody (Taiko Lv.22)
                </span>
                <span className="label">
                  <i className="fa fa-music" /> Muse Dash (Intermediate)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section footer">
          <a className="hosting" href="https://github.com/amphineko/amphineko">
            <i aria-hidden="true" className="fa fa-code-branch" /> Fork this
            template on GitHub
          </a>
        </div>
        <div className="section footer shadow">
          <a
            className="hosting"
            href="/https://github.com/RailgunBreaker/RailgunBreaker.github.io"
          >
            <i aria-hidden="true" className="fa fa-heart" /> Hosted by GtiHub
            <span className="link">railgunbreaker.github.io</span>
          </a>
          <div className="copyright">
            <i aria-hidden="true" className="fa fa-exclamation-triangle" />
            Forked by Railgun Breaker from amphineko
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
