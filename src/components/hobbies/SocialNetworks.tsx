import { IdentityList, IdentityItem } from "../custom-ui";
import { useLanguage } from "../../hooks/useLanguage";

function SocialNetworks() {
  const { t } = useLanguage();

  return (
    <IdentityList title={t.hobbies.socialNetwork}>
      <IdentityItem
        href="https://github.com/RailgunBreaker"
        icon="fab fa-github"
        label={t.hobbies.items.socialNetworks.github}
        value="@RailgunBreaker"
      />
      <IdentityItem
        href="https://alansong.club/"
        icon="fas fa-globe"
        label={t.hobbies.items.socialNetworks.personalWebsite}
        value="Quomodo eradicari potest malum?"
      />
      <IdentityItem
        href="https://space.bilibili.com/272949721"
        icon="fas fa-play"
        label={t.hobbies.items.socialNetworks.bilibili}
        value="Railgun_Breaker_的个人空间"
      />
    </IdentityList>
  );
}

export default SocialNetworks;
