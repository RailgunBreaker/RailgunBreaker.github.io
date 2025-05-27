import lifeTreeImage from "@/assets/images/tree.jpg";
import { useLanguage } from "../../hooks/useLanguage";

function ProfilePicture() {
  const { t } = useLanguage();

  return (
    <div className="split picture-container grid-40">
      <a href={lifeTreeImage}>
        <picture className="picture">
          <source type="image/webp" srcSet={lifeTreeImage} />
          <img src={lifeTreeImage} alt={t.header.profilePictureAlt} />
        </picture>
      </a>
    </div>
  );
}

export default ProfilePicture;
