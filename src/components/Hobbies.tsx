import {
  HobbyActivities,
  SocialNetworks,
  GameProfiles,
  MusicGames,
} from "./hobbies/index";
import { Section } from "./custom-ui";
import { useLanguage } from "../hooks/useLanguage";

function Hobbies() {
  const { t } = useLanguage();

  return (
    <Section title={t.hobbies.title}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="space-y-3 sm:space-y-4 md:space-y-6 order-1 lg:order-1">
          <HobbyActivities />
        </div>
        <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-2">
          <SocialNetworks />
          <GameProfiles />
          <MusicGames />
        </div>
      </div>
    </Section>
  );
}

export default Hobbies;
