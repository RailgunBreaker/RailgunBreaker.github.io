import { AwardItem } from "./awards/index";
import { Section, ContentBlock } from "./custom-ui";

function Awards() {
  const awards = [
    "2024 Ritsumeikan University Tuition Fee Reduction (20%)",
    "2024 College of Global Liberal Arts Scholarship for Study Abroad",
    "Ritsumeikan University Study Abroad Challenge Scholars",
    "2023 Ritsumeikan University Tuition Fee Reduction (20%)",
    "2022-2023 Monbukagakusho Honors Scholarship for Privately Financed International Students",
    "2022 Ritsumeikan University Tuition Fee Reduction (20%)",
    "2022 Non-Resident Achievement Scholarship, University of California, Riverside(Rejected acceptance)",
  ];

  return (
    <Section title="Awards">
      <ContentBlock>
        {awards.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
      </ContentBlock>
    </Section>
  );
}

export default Awards;
