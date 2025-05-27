import { EducationEntry, CVDownload } from "./education/index";

function EducationBackground() {
  return (
    <div className="section intro">
      <h2>
        <i className="fas fa-chevron-right" aria-hidden="true" /> Education
        Background
      </h2>
      <div className="block grid-container grid-parent">
        <div className="split grid-50 mobile-grid-100">
          <EducationEntry
            period="2023 – 2026"
            institution="Australian National University"
            location="Canberra, Australia"
            degree="Bachelor of Asia Pacific Affairs, College of Asia and the Pacific"
            details={[
              "Weighted Average Mark: 69.9",
              "International Security Studies, Japanese Foreign Policy, Asian Economics",
              "Class representative in ASIA2308 (Linguistic Histories in Asia and the Pacific)",
            ]}
          />
          <EducationEntry
            period="2022 – 2026"
            institution="Ritsumeikan University"
            location="Osaka, Japan"
            degree="Bachelor of Global Liberal Arts, College of Global Liberal Arts"
            details={[
              "CGPA: 3.86/5, Semester GPA: 4.20/5",
              "Courses: Statistics, Law of Conflicts, Sociology, Political Theory, GIS",
              "Instruction Language: English (with Japanese language coursework)",
            ]}
          />
          <EducationEntry
            period="2024.6 – 2024.7"
            institution="University of Michigan"
            location="Ann Arbor, MI, USA"
            degree=""
            details={[
              "Summer Program – Inter-university Consortium for Political and Social Research",
              "Courses: Regression, Machine Learning, Bayesian Modeling, Network Analysis",
            ]}
          />
          <CVDownload />
        </div>
      </div>
    </div>
  );
}

export default EducationBackground;
