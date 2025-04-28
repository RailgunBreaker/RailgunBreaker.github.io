import { useEffect } from 'react'
import './App.css'
import { useLanguage } from './LanguageContext'

function App() {
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    console.log('App component mounted successfully');
  }, []);

  return (
    <div id="container">
      <div className="section header grid-container grid-parent">
        <div className="split picture-container grid-40">
          <a href="./assets/images/tree.jpg">
            <picture className="picture">
              <source type="image/webp" srcSet="./assets/images/tree.jpg" />
              <img src="./assets/images/tree.jpg" alt="picture of Railgun Breaker" />
            </picture>
          </a>
        </div>
      
        <div className="split grid-60">
          <div className="names">
            <h1 className="name">
              <span className="no-wrap">
                Railgun <a className="chem-element" element="titanium" href="https://en.wikipedia.org/wiki/Bromine">Br </a>eaker <br />
                <span dangerouslySetInnerHTML={{ __html: t.name }} />
              </span>
            </h1>
          </div>

          {/* Language Switcher */}
          <div className="language-switcher" style={{ marginBottom: '15px' }}>
            <button
              onClick={toggleLanguage}
              style={{
                padding: '8px 15px',
                backgroundColor: '#555',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px'
              }}
            >
              <i className="fa fa-language" style={{ marginRight: '8px' }}></i>
              {language === 'en' ? '日本語に切り替える' : 'Switch to English'}
            </button>
          </div>

          <div className="label-group">
            <span className="header">{t.languageHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-language"></i>
              {' '}{t.chineseLabel}
            </span>
            <span className="label">
              <i className="fa fa-language"></i> {t.englishLabel}
            </span>
            <span className="label">
              <i className="fa fa-language"></i> {t.japaneseLabel}
            </span>
          </div>

          <div className="label-group">
            <span className="header">{t.schoolsHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-university"></i>
              {' '}立命館大学(Ritsumeikan University)
            </span>
            <span className="label">Australian National University</span>
          </div>

          <div className="label-group">
            <span className="header">{t.educationHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-graduation-cap"></i>
              {' '}{t.educationLabel}
            </span>
          </div>

          <div className="label-group">
            <span className="header">{t.majorHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-university"></i>
              {' '}{t.majorLabel1}
            </span>
            <span className="label">{t.majorLabel2}</span>
          </div>

          <div className="label-group">
            <span className="header">{t.emailWebHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-envelope-square"></i>
              {' '}<a href="mailto:admin@alansong.club" style={{color: '#555'}}>admin@alansong.club</a>
            </span>
          </div>

          <div className="label-group">
            <span className="header">{t.emailAcademicHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-envelope-square"></i>
              {' '}<a href="mailto:gl0042hs@ed.ritsumei.ac.jp" style={{color: '#555'}}>gl0042hs@ed.ritsumei.ac.jp</a>
            </span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-envelope-square"></i>
              {' '}<a href="mailto:u7712843@anu.edu.au" style={{color: '#555'}}>u7712843@anu.edu.au</a>
            </span>
          </div>
          <br />
          <div className="label-group">
            <span className="header">{t.callsignHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-rss-square"></i>
              {' '}<span className="content">BG2FGI</span>
            </span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-rss-square"></i>
              {' '}<span className="content">VK1ABA</span>
            </span>
          </div>

          <div className="label-group">
            <span className="header">{t.pgpKeyHeader}</span>
            <span className="label">
              <i aria-hidden="true" className="fa fa-key"></i>
              {' '}<a href="https://pgp.mit.edu/pks/lookup?search=0x5F1CD73F4A7C0832&op=indexb" style={{color: '#555'}}>0x5f1cd73f4a7c0832</a>
            </span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="section intro">
        <h2><i className="fa fa-chevron-right" aria-hidden="true"></i> {t.introTitle}</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; {t.introPara1}
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; {t.introPara2}
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp; {t.introPara3}
        </p>
      </div>

      {/* Education Background Section */}
      <div className="section intro">
        <h2><i className="fa fa-chevron-right" aria-hidden="true"></i> {t.educationTitle}</h2>
        <div className="block grid-container grid-parent">
          <div className="split grid-50 mobile-grid-100">
            <p>
              <strong>2023 – 2026</strong><br />
              <em>Australian National University</em>, Canberra, Australia<br />
              <strong>Bachelor of Asia Pacific Affairs, College of Asia and the Pacific</strong><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Weighted Average Mark: 69.9<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; International Security Studies, Japanese Foreign Policy, Asian Economics<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Class representative in ASIA2308 (Linguistic Histories in Asia and the Pacific)
            </p>
            
            <p>
              <strong>2022 – 2026</strong><br />
              <em>Ritsumeikan University</em>, Osaka, Japan<br />
              Bachelor of Global Liberal Arts, College of Global Liberal Arts<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; CGPA: 3.86/5, Semester GPA: 4.20/5<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Courses: Statistics, Law of Conflicts, Sociology, Political Theory, GIS<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Instruction Language: English (with Japanese language coursework)
            </p>
            
            <p>
              <strong>2024.6 – 2024.7</strong><br />
              <em>University of Michigan</em>, Ann Arbor, MI, USA<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Summer Program – Inter-university Consortium for Political and Social Research<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&bull; Courses: Regression, Machine Learning, Bayesian Modeling, Network Analysis
            </p>
            
            <p>
              📄 <a href="./Guohua.S CV.pdf" download="CV">{t.downloadCV}</a>
            </p>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="section intro">
        <h2><i className="fa fa-chevron-right" aria-hidden="true"></i> {t.awardsTitle}</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&bull; 2024 Ritsumeikan University Tuition Fee Reduction (20%)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&bull; 2024 College of Global Liberal Arts Scholarship for Study Abroad<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&bull; Ritsumeikan University Study Abroad Challenge Scholars<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&bull; 2023 Ritsumeikan University Tuition Fee Reduction (20%)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&bull; 2022-2023 Monbukagakusho Honors Scholarship for Privately Financed International Students<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&bull; 2022 Ritsumeikan University Tuition Fee Reduction (20%)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&bull; 2022 Non-Resident Achievement Scholarship, University of California, Riverside(Rejected acceptance)
        </p>
      </div>

      {/* Skills Section */}
      <div className="section intro">
        <h2><i className="fa fa-chevron-right" aria-hidden="true"></i> {t.skillsTitle}</h2>
        <div className="block grid-container grid-parent">
          <div className="split grid-50 mobile-grid-100">
            <div className="label-group2">
              <span className="header">Programming</span>
              <span className="label"><i className="fa fa-code"></i> Python</span>
              <span className="label"><i className="fa fa-code"></i> R</span>
              <span className="label"><i className="fa fa-code"></i> Java</span>
              <span className="label"><i className="fa fa-code"></i> PHP</span>
              <span className="label"><i className="fa fa-code"></i> HTML</span>
              <span className="label"><i className="fa fa-code"></i> CSS</span>
              <span className="label"><i className="fa fa-code"></i> Markdown</span>
              <span className="label"><i className="fa fa-code"></i> LaTeX</span>
            </div>
            <div className="label-group2">
              <span className="header">Technologies & Tools</span>
              <span className="label"><i className="fa fa-terminal"></i> Linux</span>
              <span className="label"><i className="fa fa-github"></i> GitHub</span>
              <span className="label"><i className="fa fa-code-fork"></i> Git</span>
              <span className="label"><i className="fa fa-server"></i> Apache</span>
              <span className="label"><i className="fa fa-edit"></i> Visual Studio Code</span>
              <span className="label"><i className="fa fa-edit"></i> PyCharm</span>
              <span className="label"><i className="fa fa-bar-chart"></i> IBM SPSS Statistics</span>
              <span className="label"><i className="fa fa-map"></i> ArcGIS (Grade: A, RU)</span>
            </div>
            <div className="label-group2">
              <span className="header">Statistical & Data Skills</span>
              <span className="label"><i className="fa fa-line-chart"></i> Regression Analysis</span>
              <span className="label"><i className="fa fa-cubes"></i> Bayesian Modeling</span>
              <span className="label"><i className="fa fa-share-alt"></i> Network Analysis</span>
              <span className="label"><i className="fa fa-cogs"></i> Machine Learning</span>
              <span className="label"><i className="fa fa-calculator"></i> Quantitative Methods in Sociology</span>
            </div>
            <div className="label-group2">
              <span className="header">Certifications</span>
              <span className="label"><i className="fa fa-id-card"></i> Japanese Driving License – Class 1 (普通車一種運転免許)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="section intro">
        <h2><i className="fa fa-chevron-right" aria-hidden="true"></i> {t.hobbiesTitle}</h2>
        <div className="block grid-container grid-parent">
          <div className="split grid-50 mobile-grid-100">
            <div className="label-group2">
              <span className="header">Model United Nations</span>
              <span className="label"><i className="fa fa-group"></i> 12 times as delegate</span>
              <span className="label"><i className="fa fa-group"></i> Volunteer</span>
              <span className="label"><i className="fa fa-group"></i> Chair</span>
            </div>
            <div className="label-group2">
              <span className="header">Personal Website</span>
              <span className="label"><i className="fa fa-globe"></i> 2,000,000+ visits</span>
              <span className="label"><i className="fa fa-wordpress"></i> Built with WordPress (LAMP stack)</span>
            </div>
            <div className="label-group2">
              <span className="header">Video Clipping</span>
              <span className="label"><i className="fa fa-film"></i> Adobe Premiere</span>
              <span className="label"><i className="fa fa-film"></i> DaVinci Resolve</span>
            </div>
            <div className="label-group2">
              <span className="header">Badminton</span>
              <span className="label"><i className="fa fa-bolt"></i> Recreational player</span>
              <span className="label"><i className="fa fa-shield"></i> VICTOR ARS-PB</span>
            </div>
            <div className="label-group2">
              <span className="header">Collecting Postcards</span>
              <span className="label"><i className="fa fa-gift"></i> Souvenir postcards from travel destinations</span>
            </div>
            <div className="label-group2">
              <span className="header">Photography</span>
              <span className="label"><i className="fa fa-camera"></i> Nikon D7000</span>
              <span className="label"><i className="fa fa-camera"></i> Nikon F3</span>
              <span className="label"><i className="fa fa-camera"></i> Nikon Z7II</span>
              <span className="label"><i className="fa fa-camera"></i> Bronica ECTL (6x6, 6x4.5)</span>
              <span className="label"><i className="fa fa-camera"></i> Luminar 4</span>
            </div>
            <div className="label-group2">
              <span className="header">Amateur Radio</span>
              <span className="label"><i className="fa fa-rss-square"></i> Type "A" Licence, CRAC</span>
              <span className="label"><i className="fa fa-rss-square"></i> ACMA-recognized</span>
              <span className="label"><i className="fa fa-rss-square"></i> Radio Station licence, PRC</span>
              <span className="label"><i className="fa fa-rss-square"></i> SenHaiX 8600</span>
            </div>
          </div>
          <div className="split grid-50 mobile-grid-100">
            <figure className="identities">
              <figcaption><i className="fa fa-external-link"></i> Social Network</figcaption>
              <ul>
                <li><a href="https://github.com/RailgunBreaker"><span className="label"><i className="fa fa-github"></i> GitHub</span> <span className="fake-link">@RailgunBreaker</span></a></li>
                <li><a href="https://alansong.club/"><span className="label"><i className="fa fa-globe"></i> Personal Website</span> <span className="fake-link">Quomodo eradicari potest malum?</span></a></li>
                <li><a href="https://space.bilibili.com/272949721"><span className="label"><i className="fa fa-play"></i> Bilibili</span> <span className="fake-link">Railgun_Breaker_的个人空间</span></a></li>
              </ul>
            </figure>
            <figure className="identities">
              <figcaption><i className="fa fa-external-link"></i> Game Profiles</figcaption>
              <ul>
                <li><a href="https://steamcommunity.com/id/railgunbreaker/"><span className="label"><i className="fa fa-steam"></i> Steam</span> <span className="fake-link">Railgun Breaker</span></a></li>
                <li><a href="https://alansong.club/intro/index.html#"><span className="label"><i className="fa fa-gamepad"></i> Genshin Impact</span> <span className="fake-link">UID:174463696 <small>(RailgunBreaker)</small></span></a></li>
              </ul>
            </figure>
            <div className="label-group">
              <span className="header alt"><i className="fa fa-tag"></i> Music Game</span>
              <span className="label"><i className="fa fa-music"></i> 太鼓の達人(おに9★)</span>
              <span className="label"><i className="fa fa-music"></i> Phigros (Elementary)</span>
              <span className="label"><i className="fa fa-music"></i> Malody (Taiko Lv.22)</span>
              <span className="label"><i className="fa fa-music"></i> Muse Dash (Intermediate)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="section footer">
        <a className="hosting" href="https://github.com/amphineko/amphineko">
          <i aria-hidden="true" className="fa fa-code-fork"></i> Fork this template on GitHub</a>
      </div>

      <div className="section footer shadow">
        <a className="hosting" href="https://github.com/RailgunBreaker/RailgunBreaker.github.io">
          <i aria-hidden="true" className="fa fa-heart"></i> Hosted by GitHub
          <span className="link">railgunbreaker.github.io</span>
        </a>
        <div className="copyright">
          <i aria-hidden="true" className="fa fa-exclamation-triangle"></i>
          Forked by Railgun Breaker from amphineko
        </div>
      </div>
    </div>
  )
}

export default App
