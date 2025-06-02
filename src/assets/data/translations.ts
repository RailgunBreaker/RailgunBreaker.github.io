import { Language } from "../../types/language";

// Extensible translation interface
export interface Translations {
  // Navigation and sections
  sections: {
    introduction: string;
    educationBackground: string;
    awards: string;
    skills: string;
    hobbies: string;
  };

  // Header content
  header: {
    language: string;
    languageItems: {
      chineseNative: string;
      englishFluent: string;
      japaneseAdvanced: string;
    };
    schools: string;
    education: string;
    major: string;
    emailWeb: string;
    emailAcademic: string;
    callsign: string;
    pgpKeyId: string;
    profilePictureAlt: string;
  };

  // Introduction content
  introduction: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };

  // Education content
  education: {
    title: string;
    downloadCV: string;
    entries: {
      anu: {
        degree: string;
        details: string[];
      };
      ritsumeikan: {
        degree: string;
        details: string[];
      };
      michigan: {
        degree: string;
        details: string[];
      };
    };
  };

  // Awards content
  awards: {
    title: string;
    items: string[];
  };

  // Skills content
  skills: {
    title: string;
    programming: string;
    technologiesTools: string;
    statisticalData: string;
    certifications: string;
    items: {
      technologies: string[];
      statistical: string[];
      certifications: string[];
    };
  };

  // Hobbies content
  hobbies: {
    title: string;
    socialNetwork: string;
    gameProfiles: string;
    musicGame: string;
    categories: {
      modelUN: string;
      personalWebsite: string;
      videoClipping: string;
      badminton: string;
      collectingPostcards: string;
      photography: string;
      amateurRadio: string;
    };
    items: {
      modelUN: string[];
      personalWebsite: string[];
      videoClipping: string[];
      badminton: string[];
      collectingPostcards: string[];
      photography: string[];
      amateurRadio: string[];
      socialNetworks: {
        github: string;
        personalWebsite: string;
        bilibili: string;
      };
      gameProfiles: {
        steam: string;
        genshinImpact: string;
      };
      musicGames: string[];
    };
  };

  // Footer content
  footer: {
    hostedBy: string;
  };

  // Common elements
  common: {
    switchToLanguage: string;
  };
}

// English translations
export const englishTranslations: Translations = {
  sections: {
    introduction: "Introduction",
    educationBackground: "Education Background",
    awards: "Awards",
    skills: "Skills",
    hobbies: "Hobbies",
  },

  header: {
    language: "Language",
    languageItems: {
      chineseNative: "Chinese (Native)",
      englishFluent: "English (Fluent)",
      japaneseAdvanced: "Japanese (Advanced)",
    },
    schools: "Schools",
    education: "Education",
    major: "Major",
    emailWeb: "E-mail(Web)",
    emailAcademic: "E-mail(Academic)",
    callsign: "Callsign",
    pgpKeyId: "PGP Key ID",
    profilePictureAlt: "picture of Railgun Breaker",
  },

  introduction: {
    paragraph1:
      "I am an undergraduate student pursuing a dual degree in Asia Pacific Affairs at the Australian National University and Global Liberal Arts at Ritsumeikan University. My academic journey spans two leading institutions in the Asia-Pacific region, allowing me to approach global issues from both theoretical and cross-cultural perspectives.",
    paragraph2:
      " My current research interests focus on the gap between admission standards and educational quality in English-medium undergraduate programs in Japan, the political and social implications of social credit and credibility systems, the evolving characteristics of Japan's new mode of capitalism, and the labor movements during the Japanese National Railways (JNR) era, particularly their relationship with the Japan Socialist Party.",
    paragraph3:
      "Outside of my academic work, I am passionate about music games, photography, amateur radio, and Japanese culture. I enjoy exploring both the serious and playful sides of life — whether it's investigating education policy or perfecting a song in 太鼓の達人.",
  },

  education: {
    title: "Education Background",
    downloadCV: "Download my full CV here",
    entries: {
      anu: {
        degree:
          "Bachelor of Asia Pacific Affairs, College of Asia and the Pacific",
        details: [
          "Weighted Average Mark: 69.9",
          "International Security Studies, Japanese Foreign Policy, Asian Economics",
          "Class representative in ASIA2308 (Linguistic Histories in Asia and the Pacific)",
        ],
      },
      ritsumeikan: {
        degree:
          "Bachelor of Global Liberal Arts, College of Global Liberal Arts",
        details: [
          "CGPA: 3.86/5, Semester GPA: 4.20/5",
          "Courses: Statistics, Law of Conflicts, Sociology, Political Theory, GIS",
          "Instruction Language: English (with Japanese language coursework)",
        ],
      },
      michigan: {
        degree: "",
        details: [
          "Summer Program – Inter-university Consortium for Political and Social Research",
          "Courses: Regression, Machine Learning, Bayesian Modeling, Network Analysis",
        ],
      },
    },
  },

  awards: {
    title: "Awards",
    items: [
      "2024 Ritsumeikan University Tuition Fee Reduction (20%)",
      "2024 College of Global Liberal Arts Scholarship for Study Abroad",
      "Ritsumeikan University Study Abroad Challenge Scholars",
      "2023 Ritsumeikan University Tuition Fee Reduction (20%)",
      "2022-2023 Monbukagakusho Honors Scholarship for Privately Financed International Students",
      "2022 Ritsumeikan University Tuition Fee Reduction (20%)",
      "2022 Non-Resident Achievement Scholarship, University of California, Riverside(Rejected acceptance)",
    ],
  },

  skills: {
    title: "Skills",
    programming: "Programming",
    technologiesTools: "Technologies & Tools",
    statisticalData: "Statistical & Data Skills",
    certifications: "Certifications",
    items: {
      technologies: [
        "Linux",
        "GitHub",
        "Git",
        "Apache",
        "Visual Studio Code",
        "PyCharm",
        "IBM SPSS Statistics",
        "ArcGIS (Grade: A, RU)",
      ],
      statistical: [
        "Regression Analysis",
        "Bayesian Modeling",
        "Network Analysis",
        "Machine Learning",
        "Quantitative Methods in Sociology",
      ],
      certifications: [
        "Japanese Driving License – Class 1 (普通車一種運転免許)",
      ],
    },
  },

  hobbies: {
    title: "Hobbies",
    socialNetwork: "Social Network",
    gameProfiles: "Game Profiles",
    musicGame: "Music Game",
    categories: {
      modelUN: "Model United Nations",
      personalWebsite: "Personal Website",
      videoClipping: "Video Clipping",
      badminton: "Badminton",
      collectingPostcards: "Collecting Postcards",
      photography: "Photography",
      amateurRadio: "Amateur Radio",
    },
    items: {
      modelUN: ["12 times as delegate", "Volunteer", "Chair"],
      personalWebsite: [
        "2,000,000+ visits",
        "Built with WordPress (LAMP stack)",
      ],
      videoClipping: ["Adobe Premiere", "DaVinci Resolve"],
      badminton: ["Recreational player", "VICTOR ARS-PB"],
      collectingPostcards: ["Souvenir postcards from travel destinations"],
      photography: [
        "Nikon D7000",
        "Nikon F3",
        "Nikon Z7II",
        "Bronica ECTL (6x6, 6x4.5)",
        "Luminar 4",
      ],
      amateurRadio: [
        'Type "A" Licence, CRAC',
        "ACMA-recognized",
        "Radio Station licence, PRC",
        "SenHaiX 8600",
      ],
      socialNetworks: {
        github: "GitHub",
        personalWebsite: "Personal Website",
        bilibili: "Bilibili",
      },
      gameProfiles: {
        steam: "Steam",
        genshinImpact: "Genshin Impact",
      },
      musicGames: [
        "太鼓の達人(おに9★)",
        "Phigros (Elementary)",
        "Malody (Taiko Lv.22)",
        "Muse Dash (Intermediate)",
      ],
    },
  },

  footer: {
    hostedBy: "Hosted by GitHub",
  },

  common: {
    switchToLanguage: "Switch to English",
  },
};

// Japanese translations
export const japaneseTranslations: Translations = {
  sections: {
    introduction: "自己紹介",
    educationBackground: "学歴",
    awards: "受賞歴",
    skills: "スキル",
    hobbies: "趣味",
  },

  header: {
    language: "言語",
    languageItems: {
      chineseNative: "中国語（母語）",
      englishFluent: "英語（流暢）",
      japaneseAdvanced: "日本語（上級）",
    },
    schools: "所属大学",
    education: "学歴",
    major: "専攻",
    emailWeb: "メール（ウェブ）",
    emailAcademic: "メール（学術）",
    callsign: "コールサイン",
    pgpKeyId: "PGP キー ID",
    profilePictureAlt: "Railgun Breakerの写真",
  },

  introduction: {
    paragraph1:
      "私はオーストラリア国立大学でアジア太平洋学学士号、立命館大学でグローバル教養学学士号の二重学位を取得中の学部生です。アジア太平洋地域の二つの主要な教育機関での学術的な経験により、理論的かつ異文化的な視点からグローバルな問題にアプローチすることができます。",
    paragraph2:
      "現在の研究関心は、日本における英語による学部課程における入学基準と教育の質のギャップ、社会信用および信用スコア制度の政治的・社会的影響、日本の「新しい資本主義」の特徴の変容、そして日本国有鉄道（国鉄）時代の労働運動と日本社会党との関係に焦点を当てています。",
    paragraph3:
      "学術的な活動以外では、音楽ゲーム、写真撮影、アマチュア無線、日本文化に情熱を注いでいます。教育政策の調査から太鼓の達人での楽曲の完璧な演奏まで、人生の真面目な面と楽しい面の両方を探求することを楽しんでいます。",
  },

  education: {
    title: "学歴",
    downloadCV: "完全な履歴書をここからダウンロード",
    entries: {
      anu: {
        degree: "アジア太平洋学学士号、アジア太平洋学部",
        details: [
          "加重平均点：69.9",
          "国際安全保障学、日本外交政策、アジア経済学",
          "ASIA2308（アジア太平洋地域の言語史）のクラス代表",
        ],
      },
      ritsumeikan: {
        degree: "グローバル教養学学士号、グローバル教養学部",
        details: [
          "CGPA：3.86/5、学期GPA：4.20/5",
          "履修科目：統計学、紛争法、社会学、政治理論、GIS",
          "授業言語：英語（日本語科目も含む）",
        ],
      },
      michigan: {
        degree: "",
        details: [
          "夏期プログラム – 政治・社会研究大学間コンソーシアム",
          "履修科目：回帰分析、機械学習、ベイズモデリング、ネットワーク分析",
        ],
      },
    },
  },

  awards: {
    title: "受賞歴",
    items: [
      "2024年度 立命館大学授業料減免（20%）",
      "2024年度 グローバル教養学部海外留学奨学金",
      "立命館大学海外留学チャレンジ奨学生",
      "2023年度 立命館大学授業料減免（20%）",
      "2022-2023年度 文部科学省外国人留学生学習奨励費",
      "2022年度 立命館大学授業料減免（20%）",
      "2022年 カリフォルニア大学リバーサイド校非居住者成績優秀奨学金（入学辞退）",
    ],
  },

  skills: {
    title: "スキル",
    programming: "プログラミング",
    technologiesTools: "技術・ツール",
    statisticalData: "統計・データスキル",
    certifications: "資格",
    items: {
      technologies: [
        "Linux",
        "GitHub",
        "Git",
        "Apache",
        "Visual Studio Code",
        "PyCharm",
        "IBM SPSS Statistics",
        "ArcGIS（成績：A、立命館大学）",
      ],
      statistical: [
        "回帰分析",
        "ベイズモデリング",
        "ネットワーク分析",
        "機械学習",
        "社会学における量的手法",
      ],
      certifications: ["普通自動車第一種運転免許"],
    },
  },

  hobbies: {
    title: "趣味",
    socialNetwork: "ソーシャルネットワーク",
    gameProfiles: "ゲームプロフィール",
    musicGame: "音楽ゲーム",
    categories: {
      modelUN: "模擬国連",
      personalWebsite: "個人ウェブサイト",
      videoClipping: "動画編集",
      badminton: "バドミントン",
      collectingPostcards: "ポストカード収集",
      photography: "写真撮影",
      amateurRadio: "アマチュア無線",
    },
    items: {
      modelUN: ["代表として12回参加", "ボランティア", "議長"],
      personalWebsite: ["200万回以上の訪問", "WordPress（LAMPスタック）で構築"],
      videoClipping: ["Adobe Premiere", "DaVinci Resolve"],
      badminton: ["レクリエーションプレイヤー", "VICTOR ARS-PB"],
      collectingPostcards: ["旅行先からのお土産ポストカード"],
      photography: [
        "Nikon D7000",
        "Nikon F3",
        "Nikon Z7II",
        "Bronica ECTL（6x6、6x4.5）",
        "Luminar 4",
      ],
      amateurRadio: [
        "第一級アマチュア無線技士（CRAC）",
        "ACMA認定",
        "無線局免許（中国）",
        "SenHaiX 8600",
      ],
      socialNetworks: {
        github: "GitHub",
        personalWebsite: "個人ウェブサイト",
        bilibili: "Bilibili",
      },
      gameProfiles: {
        steam: "Steam",
        genshinImpact: "原神",
      },
      musicGames: [
        "太鼓の達人（おに9★）",
        "Phigros（Elementary）",
        "Malody（太鼓 Lv.22）",
        "Muse Dash（Intermediate）",
      ],
    },
  },

  footer: {
    hostedBy: "GitHubでホスト",
  },

  common: {
    switchToLanguage: "日本語に切り替え",
  },
};

// Chinese translations
export const chineseTranslations: Translations = {
  sections: {
    introduction: "自我介绍",
    educationBackground: "教育背景",
    awards: "获奖经历",
    skills: "技能",
    hobbies: "兴趣爱好",
  },

  header: {
    language: "语言",
    languageItems: {
      chineseNative: "中文（母语）",
      englishFluent: "英语（流利）",
      japaneseAdvanced: "日语（高级）",
    },
    schools: "所属院校",
    education: "学历",
    major: "专业",
    emailWeb: "邮箱（网络）",
    emailAcademic: "邮箱（学术）",
    callsign: "呼号",
    pgpKeyId: "PGP 密钥 ID",
    profilePictureAlt: "Railgun Breaker的照片",
  },

  introduction: {
    paragraph1:
      "我是一名本科生，正在澳大利亚国立大学攻读亚太事务学士学位，在立命馆大学攻读全球教养学学士学位。我的学术旅程跨越亚太地区的两所顶尖教育机构，让我能够从理论和跨文化的角度来处理全球问题。",
    paragraph2:
      "我目前的研究重点是日本国有铁道（JNR）的私有化、大学成绩通胀以及高等教育录取政策。这些主题反映了我对公共政策、制度改革和社会不平等交汇点的广泛兴趣。",
    paragraph3:
      "在学术工作之外，我热衷于音乐游戏、摄影、业余无线电和日本文化。我喜欢探索生活中严肃和有趣的两面——无论是调查教育政策还是在太鼓达人中完美演奏一首歌曲。",
  },

  education: {
    title: "教育背景",
    downloadCV: "在这里下载我的完整简历",
    entries: {
      anu: {
        degree: "亚太事务学士学位，亚太学院",
        details: [
          "加权平均分：69.9",
          "国际安全研究、日本外交政策、亚洲经济学",
          "ASIA2308（亚太地区语言史）课程代表",
        ],
      },
      ritsumeikan: {
        degree: "全球教养学学士学位，全球教养学院",
        details: [
          "CGPA：3.86/5，学期GPA：4.20/5",
          "课程：统计学、冲突法、社会学、政治理论、GIS",
          "授课语言：英语（包含日语课程）",
        ],
      },
      michigan: {
        degree: "",
        details: [
          "暑期项目 - 政治与社会研究大学间联盟",
          "课程：回归分析、机器学习、贝叶斯建模、网络分析",
        ],
      },
    },
  },

  awards: {
    title: "获奖经历",
    items: [
      "2024年 立命馆大学学费减免（20%）",
      "2024年 全球教养学院海外留学奖学金",
      "立命馆大学海外留学挑战学者",
      "2023年 立命馆大学学费减免（20%）",
      "2022-2023年 文部科学省外国人留学生学习奖励费",
      "2022年 立命馆大学学费减免（20%）",
      "2022年 加州大学河滨分校非居民成就奖学金（已拒绝入学）",
    ],
  },

  skills: {
    title: "技能",
    programming: "编程",
    technologiesTools: "技术与工具",
    statisticalData: "统计与数据技能",
    certifications: "资格证书",
    items: {
      technologies: [
        "Linux",
        "GitHub",
        "Git",
        "Apache",
        "Visual Studio Code",
        "PyCharm",
        "IBM SPSS Statistics",
        "ArcGIS（成绩：A，立命馆大学）",
      ],
      statistical: [
        "回归分析",
        "贝叶斯建模",
        "网络分析",
        "机器学习",
        "社会学定量研究方法",
      ],
      certifications: ["日本普通汽车第一种驾驶执照"],
    },
  },

  hobbies: {
    title: "兴趣爱好",
    socialNetwork: "社交网络",
    gameProfiles: "游戏档案",
    musicGame: "音乐游戏",
    categories: {
      modelUN: "模拟联合国",
      personalWebsite: "个人网站",
      videoClipping: "视频剪辑",
      badminton: "羽毛球",
      collectingPostcards: "明信片收集",
      photography: "摄影",
      amateurRadio: "业余无线电",
    },
    items: {
      modelUN: ["作为代表参加12次", "志愿者", "主席"],
      personalWebsite: ["200万+访问量", "使用WordPress（LAMP架构）构建"],
      videoClipping: ["Adobe Premiere", "DaVinci Resolve"],
      badminton: ["娱乐玩家", "VICTOR ARS-PB"],
      collectingPostcards: ["旅行目的地纪念明信片"],
      photography: [
        "Nikon D7000",
        "Nikon F3",
        "Nikon Z7II",
        "Bronica ECTL（6x6、6x4.5）",
        "Luminar 4",
      ],
      amateurRadio: [
        "A类执照，CRAC",
        "ACMA认证",
        "无线电台执照，中华人民共和国",
        "SenHaiX 8600",
      ],
      socialNetworks: {
        github: "GitHub",
        personalWebsite: "个人网站",
        bilibili: "哔哩哔哩",
      },
      gameProfiles: {
        steam: "Steam",
        genshinImpact: "原神",
      },
      musicGames: [
        "太鼓达人（鬼9★）",
        "Phigros（Elementary）",
        "Malody（太鼓 Lv.22）",
        "Muse Dash（Intermediate）",
      ],
    },
  },

  footer: {
    hostedBy: "由GitHub托管",
  },

  common: {
    switchToLanguage: "切换到中文",
  },
};

// Translation map
export const translations: Record<Language, Translations> = {
  [Language.EN]: englishTranslations,
  [Language.JA]: japaneseTranslations,
  [Language.ZH]: chineseTranslations,
};

// Helper function to get translations for a specific language
export function getTranslations(language: Language): Translations {
  return translations[language];
}
