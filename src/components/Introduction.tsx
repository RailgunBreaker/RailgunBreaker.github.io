import { Section, ContentBlock } from "./custom-ui";

function Introduction() {
  return (
    <Section title="Introduction">
      <ContentBlock>
        &nbsp;&nbsp;&nbsp;&nbsp; I am an undergraduate student pursuing a dual
        degree in <strong>Asia Pacific Affairs</strong> at the Australian
        National University and <strong>Global Liberal Arts</strong> at
        Ritsumeikan University. My academic journey spans two leading
        institutions in the Asia-Pacific region, allowing me to approach global
        issues from both theoretical and cross-cultural perspectives.
      </ContentBlock>
      <ContentBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;My current research focuses on the{" "}
        <strong>privatization of the Japanese National Railway (JNR)</strong>,{" "}
        <strong>university grade inflation</strong>, and{" "}
        <strong>higher education admission policies</strong>. These topics
        reflect my broader interest in the intersection between public policy,
        institutional reform, and social inequality.
      </ContentBlock>
      <ContentBlock>
        &nbsp;&nbsp;&nbsp;&nbsp; Outside of my academic work, I am passionate
        about{" "}
        <em>music games, photography, amateur radio, and Japanese culture</em>.
        I enjoy exploring both the serious and playful sides of life — whether
        it's investigating education policy or perfecting a song in 太鼓の達人.
      </ContentBlock>
    </Section>
  );
}

export default Introduction;
