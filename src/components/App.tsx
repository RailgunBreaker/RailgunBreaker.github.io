import Header from "./Header";
import Introduction from "./Introduction";
import EducationBackground from "./EducationBackground";
import Awards from "./Awards";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Footer from "./Footer";
import { LanguageProvider } from "../contexts/LanguageContext.tsx";
import { ThemeProvider } from "../contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div
          id="container"
          className="w-full max-w-none sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto my-4 sm:my-8"
        >
          <Header />
          <Introduction />
          <EducationBackground />
          <Awards />
          <Skills />
          <Hobbies />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
