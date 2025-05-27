import {
  HobbyActivities,
  SocialNetworks,
  GameProfiles,
  MusicGames,
} from "./hobbies/index";
import { Section, GridContainer, GridColumn } from "./custom-ui";

function Hobbies() {
  return (
    <Section title="Hobbies">
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
