import type { IconType } from "react-icons";
import {
  FaChartLine,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaIdCard,
  FaJava,
  FaJs,
  FaLanguage,
  FaLinux,
  FaMarkdown,
  FaPhp,
  FaPython,
  FaRProject,
  FaRobot,
  FaServer,
  FaWordpress,
} from "react-icons/fa";
import { MdModelTraining, MdQueryStats } from "react-icons/md";
import {
  SiApache,
  SiArcgis,
  SiGit,
  SiLatex,
  SiNodedotjs,
  SiPycharm,
} from "react-icons/si";
import { TbChartDots, TbNetwork } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export type SkillDetail = {
  labelKey: string;
  Icon: IconType;
};

export type SkillCategory = {
  titleKey: string;
  skills: SkillDetail[];
};

export const skillCategories: SkillCategory[] = [
  {
    titleKey: "skills.category.languages",
    skills: [
      { labelKey: "overview.language.chinese", Icon: FaLanguage },
      { labelKey: "overview.language.english", Icon: FaLanguage },
      { labelKey: "overview.language.japanese", Icon: FaLanguage },
    ],
  },
  {
    titleKey: "skills.category.programming",
    skills: [
      { labelKey: "skills.programming.python", Icon: FaPython },
      { labelKey: "skills.programming.r", Icon: FaRProject },
      { labelKey: "skills.programming.javascript", Icon: FaJs },
      { labelKey: "skills.programming.java", Icon: FaJava },
      { labelKey: "skills.programming.php", Icon: FaPhp },
      { labelKey: "skills.programming.html", Icon: FaHtml5 },
      { labelKey: "skills.programming.css", Icon: FaCss3Alt },
      { labelKey: "skills.programming.markdown", Icon: FaMarkdown },
      { labelKey: "skills.programming.latex", Icon: SiLatex },
    ],
  },
  {
    titleKey: "skills.category.statisticalData",
    skills: [
      { labelKey: "skills.statistical.regression", Icon: MdQueryStats },
      { labelKey: "skills.statistical.bayesian", Icon: TbChartDots },
      { labelKey: "skills.statistical.network", Icon: TbNetwork },
      { labelKey: "skills.statistical.machineLearning", Icon: MdModelTraining },
      { labelKey: "skills.statistical.quantitativeMethods", Icon: FaChartLine },
    ],
  },
  {
    titleKey: "skills.category.technologiesTools",
    skills: [
      { labelKey: "skills.tools.linux", Icon: FaLinux },
      { labelKey: "skills.tools.github", Icon: FaGithub },
      { labelKey: "skills.tools.git", Icon: SiGit },
      { labelKey: "skills.tools.apache", Icon: SiApache },
      { labelKey: "skills.tools.vscode", Icon: VscVscode },
      { labelKey: "skills.tools.pycharm", Icon: SiPycharm },
      { labelKey: "skills.tools.spss", Icon: FaDatabase },
      { labelKey: "skills.tools.arcgis", Icon: SiArcgis },
      { labelKey: "skills.tools.nodejs", Icon: SiNodedotjs },
      { labelKey: "skills.tools.playwright", Icon: FaRobot },
      { labelKey: "skills.tools.wordpress", Icon: FaWordpress },
      { labelKey: "skills.tools.lamp", Icon: FaServer },
    ],
  },
  {
    titleKey: "skills.category.researchAnalysis",
    skills: [
      { labelKey: "skills.research.contentAnalysis", Icon: MdQueryStats },
      { labelKey: "skills.research.mediaBias", Icon: MdModelTraining },
      { labelKey: "skills.research.geopoliticalRisk", Icon: TbNetwork },
      { labelKey: "skills.research.macroeconomicRisk", Icon: FaChartLine },
    ],
  },
  {
    titleKey: "skills.category.certifications",
    skills: [
      { labelKey: "skills.certifications.drivingLicense", Icon: FaIdCard },
      { labelKey: "skills.certifications.acma", Icon: FaIdCard },
    ],
  },
];
