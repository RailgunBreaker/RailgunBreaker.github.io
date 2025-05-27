import {
  HobbyActivities,
  SocialNetworks,
  GameProfiles,
  MusicGames,
} from "./hobbies/index";
import { Section, GridContainer, GridColumn } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Hobbies() {
  const { t } = useLanguage();

  return (
    <Section title={t.hobbies.title}>
      <GridContainer>
        <GridColumn mobileSize="mobile-grid-100">
          <HobbyActivities />
        </GridColumn>
        <GridColumn mobileSize="mobile-grid-100">
          <SocialNetworks />
          <GameProfiles />
          <MusicGames />
        </GridColumn>
      </GridContainer>
    </Section>
  );
}

export default Hobbies;
