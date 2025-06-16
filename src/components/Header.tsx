import { PersonalInfo, ContactInfo, RollingImages } from "./header/index";

function Header() {
  return (
    <div className="section header grid-container grid-parent flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
      <div className="split flex flex-col gap-6 lg:gap-8 text-center lg:text-left w-full lg:w-full">
        <PersonalInfo />
        <ContactInfo />
        <RollingImages />
      </div>
    </div>
  );
}

export default Header;
