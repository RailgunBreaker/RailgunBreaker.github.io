import lifeTreeImage from "@/assets/images/tree.jpg";
import { useLanguage } from "../../hooks/useLanguage";

function ProfilePicture() {
  const { t } = useLanguage();

  return (
    <div className="split picture-container grid-40 w-full lg:w-auto flex justify-center lg:justify-start mb-4 lg:mb-0">
      <a href={lifeTreeImage} className="block">
        <picture className="picture w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
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
