import { IdentityList, IdentityItem } from "../custom-ui";
import { useLanguage } from "../../hooks/useLanguage";

function GameProfiles() {
  const { t } = useLanguage();

  return (
    <IdentityList title={t.hobbies.gameProfiles}>
      <IdentityItem
        href="https://steamcommunity.com/id/railgunbreaker/"
        icon="fab fa-steam"
        label={t.hobbies.items.gameProfiles.steam}
        value="Railgun Breaker"
      />
      <IdentityItem
        href="https://alansong.club/intro/index.html#"
        icon="fas fa-gamepad"
        label={t.hobbies.items.gameProfiles.genshinImpact}
        value="UID:174463696 (RailgunBreaker)"
      />
    </IdentityList>
  );
}

export default GameProfiles;
