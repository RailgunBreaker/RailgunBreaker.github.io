import { ProfilePicture, PersonalInfo, ContactInfo } from "./header/index";

function Header() {
  return (
    <div className="section header grid-container grid-parent">
      <ProfilePicture />
      <div className="split grid-60">
        <PersonalInfo />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Header;
