import Header from "./Header";
import Introduction from "./Introduction";
import EducationBackground from "./EducationBackground";
import Awards from "./Awards";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Footer from "./Footer";
import { LanguageProvider } from "../contexts/LanguageContext.tsx";

function App() {
  return (
    <LanguageProvider>
      <div id="container">
        <Header />
        <Introduction />
        <EducationBackground />
        <Awards />
        <Skills />
        <Hobbies />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
