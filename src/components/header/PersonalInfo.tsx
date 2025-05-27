import LanguageSwitch from "./LanguageSwitch";

function PersonalInfo() {
  return (
    <div className="names text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <h1 className="name">
          <span className="no-wrap">
            Railgun{" "}
            <a
              className="chem-element"
              data-element="titanium"
              href="https://en.wikipedia.org/wiki/Bromine"
            >
              Br{" "}
            </a>
            eaker <br />
            (Guohua Song)
          </span>
        </h1>
        <div className="flex-shrink-0">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
