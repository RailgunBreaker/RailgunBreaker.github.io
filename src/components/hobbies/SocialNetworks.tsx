import { IdentityList, IdentityItem } from "../custom-ui";

function SocialNetworks() {
  return (
    <IdentityList title="Social Network">
      <IdentityItem
        href="https://github.com/RailgunBreaker"
        icon="fab fa-github"
        label="GitHub"
        value="@RailgunBreaker"
      />
      <IdentityItem
        href="https://alansong.club/"
        icon="fas fa-globe"
        label="Personal Website"
        value="Quomodo eradicari potest malum?"
      />
      <IdentityItem
        href="https://space.bilibili.com/272949721"
        icon="fas fa-play"
        label="Bilibili"
        value="Railgun_Breaker_的个人空间"
      />
    </IdentityList>
  );
}

export default SocialNetworks;
