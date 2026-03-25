import lifeTreeImage from "@/assets/images/tree.jpg";
import { useLanguage } from "../../hooks/useLanguage";

function ProfilePicture() {
  const { t } = useLanguage();

  return (
    <div className="picture-container w-auto flex justify-center lg:justify-start mb-0">
      <a href={lifeTreeImage} className="block">
        <picture className="picture w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44">
          <source type="image/webp" srcSet={lifeTreeImage} />
          <img
            src={lifeTreeImage}
            alt={t.header.profilePictureAlt}
            className="w-full h-full object-cover"
          />
        </picture>
      </a>
    </div>
  );
}

export default ProfilePicture;
