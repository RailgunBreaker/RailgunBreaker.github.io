import { Language } from "../../types/language";

// Extensible translation interface
export interface Translations {
  // Navigation and sections
  sections: {
    introduction: string;
    experience: string;
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
    name: {
      hiragana?: string;
      main: string;
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

  // Experience content
  experience: {
    title: string;
    entries: {
      researchAssistant: {
        position: string;
        details: string[];
      };
      anaInternship: {
        position: string;
        details: string[];
      };
      photographer: {
        position: string;
        details: string[];
      };
      stockInvestor: {
        position: string;
        details: string[];
      };
      taikoChampionship: {
        position: string;
        details: string[];
      };
    };
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
    experience: "Experience",
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
    name: {
      main: "Guohua Song",
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
      "My research interests lie at the intersection of Japanese society, politics, and culture: 1. Institutional discrimination against foreign residents in Japan—including Japanese nationals raised abroad—and the development and implementation of multicultural coexistence policies. 2. The interaction between Japan's animation industry (broadcasting and production) and the dynamics of Sino–Japanese relations. 3. Broader issues in contemporary Japanese politics and their implications for society.",
    paragraph3:
      "Outside of my academic work, I am passionate about music games, photography, amateur radio, and Japanese culture. I enjoy exploring both the serious and playful sides of life — whether it's investigating education policy or perfecting a song in 太鼓の達人.",
  },

  experience: {
    title: "Experience",
    entries: {
      researchAssistant: {
        position: "Student Research Assistant – Associate Professor Huseyin Rasit",
        details: [
          "Detect, classify, and analyze 120-130 entries exhibiting political bias from newspapers covering worldwide protests and demonstrations per month in the project Journalists of the Empire: Capitalism, Imperialism, and Misinformation (https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-24K16305/)",
        ],
      },
      anaInternship: {
        position: "Internship",
        details: [
          "Built a predictive maintenance proposal using ACARS-based aircraft health data and Boeing AHM, enabling earlier risk detection and reducing AOG-driven disruption risk.",
          "Designed a maintenance–operations coordination workflow to share aircraft condition insights between Operations Management and Maintenance, and proposed pre-arrival aircraft swap (\"ship change\") decisions to protect on-time performance and safety.",
        ],
      },
      photographer: {
        position: "Amateur Photographer",
        details: [
          "Captured and curated a diverse portfolio of over 500 images across subjects such as civil aviation, railways, wildlife, traditional festivals, cultural landscapes, and art museum interiors.",
          "Participated in astrophotography projects, running alignment and stacking algorithms to combine long-exposure shots and reduce noise for night sky images.",
          "Built and maintained a public photography portfolio with over 1.9 million total views on Pexels (pexels.com/@railgunbreaker/), gaining recognition from aviation and travel photography enthusiasts.",
        ],
      },
      stockInvestor: {
        position: "Individual Stock Investor",
        details: [
          "Conducted long-term independent research on global market trends by monitoring macroeconomic data, sectoral developments, and geopolitical risk factors.",
          "Investments in S&P, NASDAQ, DAX, natural resources, and Japanese ETF stock market, achieving a 25% return rate with peak portfolio growth of 54%.",
        ],
      },
      taikoChampionship: {
        position: "Taiko no Tatsujin Donder WORLD CHAMPIONSHIP 2024",
        details: [
          "First place in Australian Capital Territory, Australia",
        ],
      },
    },
  },

  education: {
    title: "Education Background",
    downloadCV: "Download my full CV here",
    entries: {
      anu: {
        degree:
          "Bachelor of Asia Pacific Affairs, College of Asia and the Pacific",
        details: [
          "Semester GPA: 6/7; Cumulative GPA: 5.5/7",
          "Relevant coursework: International Security Studies, Japanese Politics and Foreign Policy, Asian Economics, Peace and Conflict Studies.",
          "Class representative in ASIA2308 (Linguistic Histories in Asia and the Pacific)",
        ],
      },
      ritsumeikan: {
        degree:
          "Bachelor of Global Liberal Arts, College of Global Liberal Arts",
        details: [
          "CGPA: 3.86/5, Semester GPA: 4.20/5",
          "Relevant coursework, Law of Conflicts, Sociology, Political Theory, GIS",
          "First thesis supervisor: Prof. Mayumi Shimura.",
          "Seminar: Prof. Mayumi Shimura, Prof. U. Aytun Ozturk",
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
    experience: "経験",
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
    name: {
      hiragana: "そう　こくか",
      main: "宋　国華",
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
      "私の研究関心は、日本社会・政治・文化の交差点に位置しています：1. 外国人住民（海外で育った日本国民を含む）に対する制度的差別と、多文化共生政策の展開・実施。2. 日本のアニメ産業（放送と制作）と日中関係のダイナミクスとの相互作用。3. 現代日本政治の幅広い課題と、それが社会に及ぼす影響。",
    paragraph3:
      "学術的な活動以外では、音楽ゲーム、写真撮影、アマチュア無線、日本文化に情熱を注いでいます。教育政策の調査から太鼓の達人での楽曲の完璧な演奏まで、人生の真面目な面と楽しい面の両方を探求することを楽しんでいます。",
  },

  experience: {
    title: "経験",
    entries: {
      researchAssistant: {
        position: "学生研究補助員 – フセイン・ラシット准教授",
        details: [
          "プロジェクト「帝国のジャーナリスト：資本主義、帝国主義、誤報」（https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-24K16305/）において、世界中の抗議活動やデモに関する大量の新聞記事から、毎月120-130件の既存の政治的偏向を検出、分類、分析",
        ],
      },
      anaInternship: {
        position: "インターンシップ",
        details: [
          "ACARSベースの航空機健全性データとボーイングAHMを使用した予知保全提案を構築し、早期リスク検知とAOG起因の運航混乱リスクの低減を実現",
          "運航管理部門と整備部門間で航空機状態の情報を共有する整備・運航連携ワークフローを設計し、定時性と安全性を保護するための到着前機材交換（「シップチェンジ」）の意思決定を提案",
        ],
      },
      photographer: {
        position: "アマチュア写真家",
        details: [
          "民間航空、鉄道、野生動物、伝統的な祭り、文化的景観、美術館内部など、多様な被写体にわたる500枚以上の画像を撮影・厳選したポートフォリオを作成",
          "天体写真プロジェクトに参加し、位置合わせとスタッキングアルゴリズムを実行して長時間露光ショットを合成し、夜空の画像のノイズを低減",
          "Pexels（pexels.com/@railgunbreaker/）で190万回以上の総閲覧数を持つ公開写真ポートフォリオを構築・維持し、航空・旅行写真愛好家から認知を獲得",
        ],
      },
      stockInvestor: {
        position: "個人株式投資家",
        details: [
          "マクロ経済データ、セクター別動向、地政学的リスク要因を監視することで、グローバル市場トレンドに関する長期的な独立調査を実施",
          "S&P、NASDAQ、DAX、天然資源、日本のETF株式市場への投資で、25%のリターン率とピーク時のポートフォリオ成長率54%を達成",
        ],
      },
      taikoChampionship: {
        position: "太鼓の達人ドンダーワールドチャンピオンシップ2024",
        details: [
          "オーストラリア首都特別地域（オーストラリア）で第1位",
        ],
      },
    },
  },

  education: {
    title: "学歴",
    downloadCV: "完全な履歴書をここからダウンロード",
    entries: {
      anu: {
        degree: "アジア太平洋学学士号、アジア太平洋学部",
        details: [
          "学期GPA：6/7、累積GPA：5.5/7",
          "関連履修科目：国際安全保障学、日本政治・外交政策、アジア経済学、平和・紛争研究",
          "ASIA2308（アジア太平洋地域の言語史）のクラス代表",
        ],
      },
      ritsumeikan: {
        degree: "グローバル教養学学士号、グローバル教養学部",
        details: [
          "CGPA：3.86/5、学期GPA：4.20/5",
          "関連履修科目：紛争法、社会学、政治理論、GIS",
          "卒業論文指導教員：志村真弓教授",
          "ゼミナール：志村ゼミ、Ozturkゼミ",
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
    experience: "工作经验",
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
    name: {
      main: "宋国华",
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
      "我的研究兴趣位于日本社会、政治与文化的交叉领域：1. 日本对外国居民（包括在海外成长的日本国民）的制度性歧视，以及多文化共生政策的发展与实施。2. 日本动画产业（包括播出与制作）与中日关系动态之间的互动。3. 当代日本政治的广泛议题及其对社会的影响。",
    paragraph3:
      "在学术工作之外，我热衷于音乐游戏、摄影、业余无线电和日本文化。我喜欢探索生活中严肃和有趣的两面——无论是调查教育政策还是在太鼓达人中完美演奏一首歌曲。",
  },

  experience: {
    title: "工作经验",
    entries: {
      researchAssistant: {
        position: "学生研究助理 – Huseyin Rasit副教授",
        details: [
          "在项目\"帝国的记者：资本主义、帝国主义和错误信息\"（https://kaken.nii.ac.jp/grant/KAKENHI-PROJECT-24K16305/）中，每月从大量报纸中检测、分类和分析120-130条关于全球抗议和示威的现有政治偏见条目",
        ],
      },
      anaInternship: {
        position: "实习",
        details: [
          "使用基于ACARS的飞机健康数据和波音AHM建立预测性维护提案，实现更早的风险检测并降低AOG导致的运营中断风险",
          "设计维护-运营协调工作流程，在运营管理和维护部门之间共享飞机状况洞察，并提出到达前飞机交换（\"换机\"）决策，以保护准点性能和安全性",
        ],
      },
      photographer: {
        position: "业余摄影师",
        details: [
          "拍摄并精选了涵盖民用航空、铁路、野生动物、传统节日、文化景观和艺术博物馆内部等主题的500多张图片的多样化作品集",
          "参与天体摄影项目，运行对齐和堆叠算法来组合长曝光拍摄并降低夜空图像的噪声",
          "在Pexels（pexels.com/@railgunbreaker/）上建立和维护公共摄影作品集，总浏览量超过190万次，获得航空和旅行摄影爱好者的认可",
        ],
      },
      stockInvestor: {
        position: "个人股票投资者",
        details: [
          "通过监测宏观经济数据、行业发展和地缘政治风险因素，对全球市场趋势进行长期独立研究",
          "投资标普、纳斯达克、DAX、自然资源和日本ETF股票市场，获得25%的回报率和54%的峰值投资组合增长率",
        ],
      },
      taikoChampionship: {
        position: "太鼓达人Donder世界锦标赛2024",
        details: [
          "澳大利亚首都领地第一名",
        ],
      },
    },
  },

  education: {
    title: "教育背景",
    downloadCV: "在这里下载我的完整简历",
    entries: {
      anu: {
        degree: "亚太事务学士学位，亚太学院",
        details: [
          "学期GPA：6/7；累积GPA：5.5/7",
          "相关课程：国际安全研究、日本政治与外交政策、亚洲经济学、和平与冲突研究",
          "ASIA2308（亚太地区语言史）课程代表",
        ],
      },
      ritsumeikan: {
        degree: "全球教养学学士学位，全球教养学院",
        details: [
          "CGPA：3.86/5，学期GPA：4.20/5",
          "相关课程：冲突法、社会学、政治理论、GIS",
          "毕业论文指导教师：志村真弓教授",
          "研讨班：志村真弓教授、U. Aytun Ozturk教授",
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
