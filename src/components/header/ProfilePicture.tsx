import lifeTreeImage from "@/assets/images/tree.jpg";

function ProfilePicture() {
  return (
    <div className="split picture-container grid-40">
      <a href={lifeTreeImage}>
        <picture className="picture">
          <source type="image/webp" srcSet={lifeTreeImage} />
          <img src={lifeTreeImage} alt="picture of Railgun Breaker" />
        </picture>
      </a>
    </div>
  );
}

export default ProfilePicture;
