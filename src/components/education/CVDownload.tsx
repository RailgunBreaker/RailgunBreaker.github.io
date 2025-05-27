import { useLanguage } from "../../hooks/useLanguage";

function CVDownload() {
  const { t } = useLanguage();

  return (
    <p>
      📄{" "}
      <a href="./Guohua.S CV.pdf" download="CV">
        {t.education.downloadCV}
      </a>
    </p>
  );
}

export default CVDownload;
