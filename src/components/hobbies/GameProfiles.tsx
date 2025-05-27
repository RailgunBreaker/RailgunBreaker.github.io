import { IdentityList, IdentityItem } from "../custom-ui";

function GameProfiles() {
  return (
    <IdentityList title="Game Profiles">
      <IdentityItem
        href="https://steamcommunity.com/id/railgunbreaker/"
        icon="fab fa-steam"
        label="Steam"
        value="Railgun Breaker"
      />
      <IdentityItem
        href="https://alansong.club/intro/index.html#"
        icon="fas fa-gamepad"
        label="Genshin Impact"
        value="UID:174463696 (RailgunBreaker)"
      />
    </IdentityList>
  );
}

export default GameProfiles;
