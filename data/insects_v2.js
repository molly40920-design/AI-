// 昆蟲資料庫 - 獨立資料檔案
// 已擴充俗稱(nickname)與真實實體圖片(image)

window.insectDatabase = [
  {
    "id": 1,
    "name": "獨角仙 (雙叉犀金龜)",
    "scientificName": "Trypoxylus dichotomus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/避免直射",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "台灣最受歡迎的入門甲蟲。幼蟲期以腐植土為食，成蟲喜歡昆蟲果凍或甜度高的水果。生命週期約一年，成蟲壽命約1-3個月。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍、水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "使用 L 號飼養箱，鋪設 10-15 公分深的腐植土供其躲藏。箱內需放置果凍台與樹皮防止翻倒無法翻身。",
      "care": "成蟲食量大，果凍需 2-3 天更換一次以免發酸。保持土表微濕，避免陽光直射。",
      "breeding": "繁殖容易，母蟲會鑽入土底產卵，產卵期需使用高發酵木屑或腐植土壓實底部約 5 公分。"
    },
    "nickname": "兜蟲 / 仙哥",
    "image": "data/images/unique_1.jpg"
  },
  {
    "id": 2,
    "name": "台灣扁鍬形蟲",
    "scientificName": "Dorcus titanus sika",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/避免直射",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "生命力強、壽命長（成蟲可活1-3年），是非常好照顧的鍬形蟲。具有領域性，公蟲建議單獨飼養以免打鬥受傷。",
    "diet": "幼蟲：發酵木屑、產卵木 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "準備中型飼養箱，放入產卵木（需泡水陰乾）並用木屑埋住。公蟲有攻擊性，建議單獨飼養。",
      "care": "壽命長，需注意夏天溫度不可過高（超過 30度 易死亡）。果凍每週更換 1-2 次即可。",
      "breeding": "主要產卵於偏硬的產卵木中，幼蟲孵化後需取出鑽入菌瓶或發酵木屑飼養。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_2.jpg"
  },
  {
    "id": 3,
    "name": "幽靈竹節蟲",
    "scientificName": "Extatosoma tiaratum",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "外型奇特似枯葉，遇到危險會像蠍子般捲起尾巴威嚇。食量大，需要通風良好且高度足夠的空間讓牠們順利脫皮。",
    "diet": "芭樂葉、橡樹葉、玫瑰葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "必須使用高通風的網箱，高度至少要是蟲體的 3 倍以便順利脫皮。底部鋪設廚房紙巾方便清理糞便。",
      "care": "每日噴水保持濕度，但需注意通風以免發霉。食物必須是無農藥的新鮮葉片，枯萎需立即更換。",
      "breeding": "孤雌生殖與兩性生殖皆可。卵直接產於地面，收集後置於保濕盒中孵化，孵化期長達半年。"
    },
    "nickname": "幽靈竹 / 枯葉蟲",
    "image": "data/images/unique_3.jpg"
  },
  {
    "id": 4,
    "name": "蘭花螳螂",
    "scientificName": "Hymenopus coronatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-90%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "極具觀賞價值的螳螂，擬態成蘭花以誘捕獵物。對溫濕度要求較高，且需要活體餌料，適合有一定經驗的飼養者。",
    "diet": "果蠅、蒼蠅、小型蟋蟀 (活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "建議使用通風良好的壓克力箱或網箱，內部放置蘭花或淺色假花供其擬態與攀爬。",
      "care": "每日噴水維持高濕度，但嚴禁積水。只吃活餌，需定期購買果蠅或蒼蠅投餵。",
      "breeding": "公母體型差異巨大，交配前需將母蟲餵飽以免公蟲被吃掉。公蟲成蟲壽命極短。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_4.jpg"
  },
  {
    "id": 5,
    "name": "大麥町鼠婦 (奶牛等足蟲)",
    "scientificName": "Porcellio laevis 'Dairy Cow'",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "雖然不是嚴格意義上的昆蟲（屬甲殼類），但在蟲友間非常流行。繁衍速度快，負責分解腐敗物，是非常好的「清潔工」。",
    "diet": "枯葉、墨魚骨、蔬菜片、魚飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "塑膠盒打幾個小孔即可。底材使用椰土混合腐葉土，鋪設枯葉與樹皮供躲藏。",
      "care": "保持土表一角濕潤（乾濕分離）。需定期補充墨魚骨（鈣質）以免互食。",
      "breeding": "繁殖速度極快，無需特別照顧，只要環境合適就會自動爆產。"
    },
    "nickname": "奶牛鼠婦",
    "image": "data/images/unique_5.jpg"
  },
  {
    "id": 6,
    "name": "長戟大兜蟲",
    "scientificName": "Dynastes hercules",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/避免直射",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "世界上最大的甲蟲之一。幼蟲期可長達1.5至2年，需要溫控設備（冷氣或冰櫃）來維持較低的溫度才能養出大型個體。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：香蕉、昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲需使用大型飼養箱（XL以上），避免長角頂到蓋子。幼蟲需使用 10L 以上的大容器。",
      "care": "嚴格控制溫度在 25度以下，高溫易導致幼蟲拒食或成蟲早亡。食量巨大，需常備大量果凍。",
      "breeding": "使用高品質發酵木屑（大兜土）壓實，深度至少 20 公分。母蟲產卵量大，需大空間。"
    },
    "nickname": "長戟大兜 / 赫克力士",
    "image": "data/images/unique_6.jpg"
  },
  {
    "id": 7,
    "name": "寬腹螳螂",
    "scientificName": "Hierodula patellifera",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "台灣常見的本土物種，適應力強，好動且捕食猛烈。是體驗螳螂飼養與觀察掠食行為的絕佳入門品種。",
    "diet": "果蠅、櫻桃紅蟑、蟋蟀 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "一般飼養罐或網箱皆可，需置入樹枝供其倒掛脫皮。",
      "care": "耐飢餓能力強，但建議 2-3 天餵食一次。適應台灣氣候，無需特別溫控。",
      "breeding": "交配後母蟲會產下卵鞘（螵蛸），約 4-6 週後孵化，需注意小螳螂會互食，需及早分開。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_7.jpg"
  },
  {
    "id": 8,
    "name": "馬達加斯加發聲蟑螂",
    "scientificName": "Gromphadorhina portentosa",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "不會飛、沒有臭味、行動緩慢的溫馴寵物。受到驚嚇時會從氣孔排出空氣發出「嘶嘶」聲。極度耐操，適合完全沒有經驗的新手。",
    "diet": "狗糧、紅蘿蔔、蘋果、燕麥片",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "滑壁容器（雖然牠們爬不太上光滑面，但加蓋保險）。底部鋪木屑或紙蛋盒增加躲藏面積。",
      "care": "極好養，一週餵食一次蔬果或飼料即可。注意保持環境乾燥以免滋生蟎蟲。",
      "breeding": "胎生（卵胎生），母蟲直接產下小蟑螂。溫度較高時繁殖速度快。"
    },
    "nickname": "發聲蟑螂 / 嘶嘶小強",
    "image": "data/images/unique_8.jpg"
  },
  {
    "id": 9,
    "name": "彩虹鍬形蟲",
    "scientificName": "Phalacrognathus muelleri",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒/中型",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "號稱世界上最美麗的鍬形蟲，擁有如烤漆般的金屬光澤。個性溫和、壽命長且適應力極強，是非常推薦給新手的漂亮品種。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲使用中小型飼養箱，鋪設木屑。幼蟲可使用菌瓶飼養，成長速度快。",
      "care": "成蟲壽命可達一年以上，是非常長壽的鍬形蟲。對溫度適應範圍廣。",
      "breeding": "產卵木需挑選偏軟的材質，或直接使用發酵木屑壓實產卵（產房佈置容易）。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_9.jpg"
  },
  {
    "id": 10,
    "name": "南洋大兜蟲 (高加索)",
    "scientificName": "Chalcosoma chiron",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "亞洲體型最大的甲蟲，擁有三根修長威武的犄角。脾氣暴躁、具有很強的攻擊性。幼蟲期需要較低溫才能養出長角大型個體。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：香蕉、昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "必須單獨飼養！公蟲攻擊性極強，會夾死母蟲或其他公蟲。箱內需放足夠遮蔽物。",
      "care": "成蟲與幼蟲皆怕熱，超過 28度 容易死亡。需注意通風但要保持高濕度。",
      "breeding": "母蟲產卵前需補充足夠蛋白質。產房需使用黏性較高的腐植土壓實。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_10.jpg"
  },
  {
    "id": 11,
    "name": "白條綠花金龜",
    "scientificName": "Dicronorhina derbyana",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "來自非洲的美麗金龜子，閃耀著天鵝絨般的綠色與白色條紋。屬於日行性昆蟲，白天非常活躍好動，繁殖也相對容易。",
    "diet": "幼蟲：腐植土 / 成蟲：高甜度水果、果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "可混養，喜歡攀爬，箱內可多放樹枝。使用一般腐植土即可。",
      "care": "日行性，喜歡明亮的環境（但避免太陽直射）。食量不大，果凍消耗較慢。",
      "breeding": "土繭期較長，羽化後需靜置一段時間（蟄伏）才會開始進食與交配。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_11.jpg"
  },
  {
    "id": 12,
    "name": "棉桿竹節蟲",
    "scientificName": "Sipyloidea sipylus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "台灣非常常見的入門竹節蟲。受到驚嚇時會從前胸背板分泌出帶有人參味的防禦性氣體。孤雌生殖，只要一隻母蟲就能繁衍後代。",
    "diet": "芭樂葉、樟樹葉、木槿葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor",
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "簡易網箱或打孔的飲料杯（幼體）即可。必須保持良好通風。",
      "care": "食草容易取得（芭樂葉），插在水瓶中保鮮。需定期清理糞便與更換葉片。",
      "breeding": "孤雌生殖，會將卵黏在牆壁或葉片上，孵化率極高，需注意爆籠問題。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_12.jpg"
  },
  {
    "id": 13,
    "name": "枯葉螳螂",
    "scientificName": "Deroplatys desiccata",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "擁有極致的擬態能力，外表看起來就像一片枯萎的落葉，甚至邊緣還有蟲咬的痕跡。受到威脅時會展開具有鮮豔斑紋的內翅威嚇。",
    "diet": "果蠅、櫻桃紅蟑、蟋蟀、飛蛾 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "環境需模擬枯葉堆或樹叢，放置枯枝與枯葉供其躲藏與擬態。",
      "care": "對溫度較敏感，怕冷。獵食積極度不如寬腹螳螂，需確認有吃到食物。",
      "breeding": "母蟲極兇，交配風險高。卵鞘需保持適度濕潤才能順利孵化。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_13.jpg"
  },
  {
    "id": 14,
    "name": "魔花螳螂",
    "scientificName": "Idolomantis diabolica",
    "difficulty": "專家",
    "tempLabel": "高溫 (28-35°C)",
    "humidityLabel": "偏乾/適中 (40-60%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "極高通風",
    "lightLabel": "充足光照/保溫燈",
    "dietLabel": "飛行系活體昆蟲",
    "type": "螳螂",
    "description": "被譽為「螳螂之王」，體型巨大且擁有如異形般華麗誇張的威嚇姿態。對通風與高溫要求極其嚴苛，且只捕食會飛的昆蟲，是公認的難度天花板。",
    "diet": "蒼蠅、飛蛾、蝴蝶 (飛行系活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需要巨大的網箱與保溫燈（加熱燈），模擬非洲高溫環境。",
      "care": "不吃爬行餌料（如蟑螂），必須專門培養綠頭蒼蠅或捕捉飛蛾餵食。脫皮失敗率高。",
      "breeding": "極高難度，公蟲膽小，交配不易。幼蟲期死亡率亦高。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_14.jpg"
  },
  {
    "id": 15,
    "name": "巨山蟻 (寵物螞蟻)",
    "scientificName": "Camponotus sp.",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (巢內需保濕)",
    "spaceLabel": "桌面小盒(蟻巢)",
    "ventilationLabel": "低通風/微孔",
    "lightLabel": "陰暗處",
    "dietLabel": "糖水/活體昆蟲",
    "type": "膜翅目",
    "description": "飼養螞蟻能觀察到迷人的社會性分工與巢穴建設。巨山蟻體型較大、行動較緩慢，是適合觀察的入門屬別。需要準備專用的壓克力或石膏蟻巢。",
    "diet": "糖水、蜂蜜、麵包蟲、小蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live",
        "easy"
      ]
    },
    "guide": {
      "setup": "起步使用試管培養，群落壯大後移入石膏巢或壓克力巢。需具備遮黑環境。",
      "care": "糖水提供能量，昆蟲提供蛋白質。切勿驚擾蟻后，震動易導致吃卵。",
      "breeding": "購買時通常已包含蟻后。群落發展需要數月至數年，需極大耐心。"
    },
    "nickname": "螞蟻",
    "image": "data/images/unique_15.jpg"
  },
  {
    "id": 16,
    "name": "斑馬鼠婦",
    "scientificName": "Armadillidium maculatum",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "身上有著黑白相間的斑馬紋路，非常可愛。與大麥町鼠婦不同的是，牠們偏好稍微乾燥一點的環境，且遇到危險會捲成一顆完美的球體。",
    "diet": "枯葉、墨魚骨、地衣、蔬菜",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "飼養盒保持乾燥通風，只需在一角噴水保持濕潤。底材需混合鈣粉。",
      "care": "喜歡攀爬，可放入樹皮或造景石。對悶熱環境耐受度較低。",
      "breeding": "繁殖週期略長於大麥町鼠婦，但依然容易爆產。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_16.jpg"
  },
  {
    "id": 17,
    "name": "台灣大蝗",
    "scientificName": "Chondracris rosea",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮禾本科葉片",
    "type": "直翅目",
    "description": "台灣體積最大的草食性昆蟲。體色翠綠，後腿極其粗壯發達，彈跳力驚人，抓取時需小心被其後腿上的棘刺踢傷。食量非常驚人。",
    "diet": "芒草、玉米葉、各種無毒禾本科植物",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "需要夠高的網箱供其跳躍。底部鋪設廚房紙巾方便每天清理大量糞便。",
      "care": "食量極大，每天都需提供新鮮禾本科植物（如路邊的芒草）。需注意農藥殘留。",
      "breeding": "母蟲產卵於土中，需準備深度 10 公分以上的產卵土盒。"
    },
    "nickname": "鳴蟲 / 大肚馬仔",
    "image": "data/images/unique_17.jpg"
  },
  {
    "id": 18,
    "name": "非洲大馬陸",
    "scientificName": "Archispirostreptus gigas",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/蔬果",
    "type": "倍足綱",
    "description": "世界上最大的馬陸，能長到將近 30 公分。雖然看起來嚇人但個性極度溫馴。需要深度足夠的腐植土讓牠們挖掘潛匿與啃食。",
    "diet": "腐植土、落葉、小黃瓜、蘋果、墨魚骨",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil",
        "easy"
      ]
    },
    "guide": {
      "setup": "底材（腐植土）需鋪設 15-20 公分深，保持濕潤。可混入鈣粉。",
      "care": "主食為腐植土與落葉，蔬果為零食。受到驚嚇會分泌黃色液體，稍微染色但無害。",
      "breeding": "難度高，生長速度極慢，從幼體長到成體需要數年。"
    },
    "nickname": "千足蟲",
    "image": "data/images/unique_18.jpg"
  },
  {
    "id": 19,
    "name": "墨西哥紅膝頭捕鳥蛛",
    "scientificName": "Brachypelma hamorii",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (24-28°C)",
    "humidityLabel": "偏乾/適中 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "捕鳥蛛界的超級明星。性格溫馴、行動緩慢，膝蓋上的紅色斑紋非常美麗。對環境容忍度極高，壽命極長（母蛛可活20年以上），是完美的入門蜘蛛。",
    "diet": "蟋蟀、蟑螂、麵包蟲 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥椰土作為底材，放置一個躲避洞穴與小水盆。不需太高空間。",
      "care": "新陳代謝慢，一週餵食一次即可。拒食通常代表即將脫皮。",
      "breeding": "公蜘蛛成熟後壽命短。交配時需注意母蛛可能會攻擊公蛛。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_19.jpg"
  },
  {
    "id": 20,
    "name": "帝王蠍",
    "scientificName": "Pandinus imperator",
    "difficulty": "進階",
    "tempLabel": "溫暖 (26-30°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "巨大的黑色蠍子，雖然有巨大的螯和毒針，但毒性極弱（類似蜜蜂），且個性其實很害羞。需要維持高濕度底材供其挖掘巢穴。",
    "diet": "蟋蟀、蟑螂 (活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "底材需使用椰土保持高濕度，並提供躲避穴。可群養但需餵飽。",
      "care": "怕光，夜行性。濕度不足容易導致脫皮失敗。動作緩慢。",
      "breeding": "卵胎生，母蠍會將幼蠍揹在背上照顧，直到第一次脫皮，畫面溫馨。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_20.jpg"
  },
  {
    "id": 21,
    "name": "長頸鹿鋸鍬形蟲",
    "scientificName": "Prosopocoilus giraffa",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "世界上最大的鍬形蟲，擁有極長且帶有鋸齒的修長大顎。成蟲體型巨大，需要較大的活動空間。幼蟲期需要溫控才能養出破紀錄的大型個體。",
    "diet": "幼蟲：發酵木屑、產卵木 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "公蟲大顎極長，需使用 L 號以上飼養箱。使用一般發酵木屑即可。",
      "care": "成蟲脾氣較暴躁，配對時需用膠帶綑綁大顎以免夾死母蟲。",
      "breeding": "產量大，產卵木與木屑皆會產。幼蟲食量大，適合使用菌瓶飼養。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_21.jpg"
  },
  {
    "id": 22,
    "name": "葉脩 (葉子蟲)",
    "scientificName": "Phyllium sp.",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "擬態界的極致，身體寬扁像極了一片樹葉，甚至還有葉脈紋路。行動非常緩慢，對通風與濕度的平衡要求較高，若通風不良容易生病。",
    "diet": "芭樂葉、橡樹葉、芒果葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風良好的網箱，內部空間需寬敞。需保持一定濕度。",
      "care": "對溫度震盪敏感。若發現身體邊緣變黑通常是濕度過高或通風不良。",
      "breeding": "分辨公母容易（公蟲細長有翅會飛）。卵的外型像植物種子。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_22.jpg"
  },
  {
    "id": 23,
    "name": "佛羅里達跳蛛",
    "scientificName": "Phidippus regius",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光/亮處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "近年來爆紅的微型寵物，擁有水汪汪的大眼睛與毛茸茸的身體，像極了玩偶。互動性極高，會追著雷射筆跑。需要光線來刺激捕食慾望。",
    "diet": "果蠅、綠頭蒼蠅、小蟋蟀 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "專用跳蛛盒，需有側開門（因跳蛛會在頂部結網）。放置樹枝與躲避物。",
      "care": "視力極佳，喜歡光亮環境。餵食活餌時可觀察其精彩的狩獵過程。",
      "breeding": "母蛛會編織厚實的卵囊並守護其中，期間停止進食。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_23.jpg"
  },
  {
    "id": 24,
    "name": "刺花螳螂",
    "scientificName": "Pseudocreobotra wahlbergii",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "桌面小盒/中型",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "來自非洲的小型美麗螳螂，翅膀上有著名的同心圓眼斑圖案，像極了「9」這個數字。體型雖小但個性兇猛，對濕度敏感，太濕容易感染黑斑病。",
    "diet": "果蠅、綠頭蒼蠅 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風網箱，放置細樹枝。環境需比雨林型螳螂乾燥。",
      "care": "容易因過濕而生病，建議兩三天噴一次水即可。適合餵食飛行系昆蟲。",
      "breeding": "威嚇時會展示美麗的翅膀眼斑。交配難度中等。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_24.jpg"
  },
  {
    "id": 25,
    "name": "毛象大兜蟲",
    "scientificName": "Megasoma elephas",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "體重與份量感十足的重量級甲蟲，全身覆蓋金黃色短毛，像奇異果一樣可愛。性格非常溫和。幼蟲期極長（約2-3年），飼養需要極大的耐心。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：香蕉、昆蟲果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "超大型飼養箱。成蟲身上的金毛容易因摩擦脫落，需減少障礙物。",
      "care": "成蟲食量與排泄量皆大，需勤勞清理。溫馴好上手，幾乎不夾人。",
      "breeding": "幼蟲期非常漫長，是最考驗耐心的物種之一。土質需保持良好。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_25.jpg"
  },
  {
    "id": 26,
    "name": "灰白陸寄居蟹",
    "scientificName": "Coenobita rugosus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗/室內",
    "dietLabel": "雜食/需海水盆",
    "type": "寄居蟹",
    "description": "雖然不是昆蟲，但是非常熱門的生態缸寵物。需要厚鋪珊瑚砂供其脫皮，且**必須**同時提供「淡水盆」與「海水盆」才能長期存活。",
    "diet": "麵包、水果、魚飼料、爆米花 (雜食)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底材使用珊瑚砂（深度需為蟹殼2-3倍以利脫皮）。放置海水盆與淡水盆。",
      "care": "雜食性好餵食，但對化學物質（殺蟲劑、芳香劑）極度敏感。需提供空殼更換。",
      "breeding": "陸寄居蟹幼體需在海洋中浮游成長，人工繁殖極度困難（專家級）。"
    },
    "nickname": "寄居蟹",
    "image": "data/images/unique_26.jpg"
  },
  {
    "id": 27,
    "name": "烏干達花金龜",
    "scientificName": "Mecynorrhina torquata",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-25°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "非洲大型花金龜，體色變化多端（綠色、藍色、紅棕色），非常有收藏價值。幼蟲需要吃高發酵程度的腐植土，且需要適度添加蛋白質飼料。",
    "diet": "幼蟲：腐植土、狗糧(少量) / 成蟲：水果、果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲喜歡飛行，空間不可太小。底材保持微濕。",
      "care": "幼蟲期需在土中埋入少量狗飼料或乾燥蝦補充蛋白質，才能養出大個體。",
      "breeding": "會在土中製作土繭化蛹，羽化過程需避免震動干擾。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_27.jpg"
  },
  {
    "id": 28,
    "name": "蘇利南潛蠊 (杜比亞蟑螂)",
    "scientificName": "Blaptica dubia",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料",
    "type": "蜚蠊",
    "description": "雖然常被當作飼料，但其實是非常乾淨、不會飛、不會爬光滑面且沒有臭味的優良寵物。繁殖容易，長相較像甲蟲而非居家蟑螂。",
    "diet": "麥片、紅蘿蔔、貓狗飼料、橘子",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "塑膠整理箱，放入大量紙蛋盒增加躲避面積。保持乾燥通風。",
      "care": "極度耐旱，但給予水分（水果或水盆）會長得更好。完全無臭。",
      "breeding": "公母混養即可，溫度越高（30度左右）繁殖越快。胎生。"
    },
    "nickname": "杜比亞 / 飼料蟲",
    "image": "data/images/unique_28.jpg"
  },
  {
    "id": 29,
    "name": "亞馬遜巨人食鳥蛛",
    "scientificName": "Theraphosa stirmi",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "極高濕 (80%以上)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風/需平衡",
    "lightLabel": "陰暗處",
    "dietLabel": "活體/小鼠",
    "type": "蜘蛛",
    "description": "地球上體型最大的蜘蛛之一，展足可達30公分。踢毛防禦性強，且對環境濕度極度敏感，通風不良或濕度不足都容易導致脫皮失敗死亡。",
    "diet": "大蟑螂、乳鼠 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型通風箱，底材需厚且保濕能力強。需巨大躲避洞穴。",
      "care": "踢毛均有刺激性，整理時建議戴手套與口罩。對脫水極度敏感，水盆不可乾。",
      "breeding": "極高難度。公蛛體型相對小，交配後需迅速分離。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_29.jpg"
  },
  {
    "id": 30,
    "name": "惡魔吸血蟹",
    "scientificName": "Geosesarma sp.",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "極高濕 (水陸兩棲)",
    "spaceLabel": "中型生態缸",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "室內/植物燈",
    "dietLabel": "雜食/紅蟲",
    "type": "甲殼類",
    "description": "體色鮮豔如惡魔般的紫色或紅色。屬於陸棲型螃蟹，但需要在飼養箱內設置水域環境（水陸域比例約 4:6）。適合種植苔蘚與熱帶植物的生態缸。",
    "diet": "冷凍紅蟲、魚飼料、小昆蟲",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "live"
      ]
    },
    "guide": {
      "setup": "生態缸設置，需有陸地與水池（水深不用深，但需乾淨）。種植苔蘚保持濕度。",
      "care": "雜食性，會吃水苔上的有機物或投入的飼料。水質需過濾或定期更換。",
      "breeding": "陸封型螃蟹，大卵型。母蟹會抱卵，直接孵化出小螃蟹（不經浮游期）。"
    },
    "nickname": "甲殼類",
    "image": "data/images/unique_30.jpg"
  },
  {
    "id": 31,
    "name": "藍死路鐵甲蟲",
    "scientificName": "Asbolus verrucosus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "乾燥 (30-50%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "一般/亮處",
    "dietLabel": "雜食/飼料",
    "type": "甲蟲",
    "description": "來自美國沙漠的「裝死高手」。外殼覆蓋著藍色的蠟粉以防止水分散失，非常耐旱。受到驚嚇會四腳朝天裝死。壽命極長（可達8年以上），是極致懶人寵物。",
    "diet": "狗糧、魚飼料、紅蘿蔔、死昆蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor",
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "鋪設乾燥的沙漠沙，放幾塊石頭或樹皮躲藏。**嚴禁潮濕**，底材必須保持全乾。",
      "care": "幾乎不需要照顧，一週餵食一次乾飼料或蔬果切片即可。藍色蠟粉若退去代表環境太濕。",
      "breeding": "人工繁殖難度極高，幼蟲需要特殊的溫度與濕度梯度，目前市面個體多為野採。"
    },
    "nickname": "甲蟲",
    "image": "data/images/unique_31.jpg"
  },
  {
    "id": 32,
    "name": "幽靈螳螂",
    "scientificName": "Phyllocrania paradoxa",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "外型像極了枯萎捲曲的葉子，頭部有獨特的冠狀突起。雖然外表奇特，但其實個性溫和、對環境容錯率高，且同種之間互食機率低，是可以嘗試群養的螳螂。",
    "diet": "果蠅、綠頭蒼蠅 (主要吃飛行系)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風容器內放置大量細枯枝。可多隻混養於大網箱中（但仍需餵飽）。",
      "care": "偏好飛行獵物（蒼蠅），對在地上爬的蟑螂興趣較低。水分補充很重要，需定期噴水。",
      "breeding": "繁殖容易，公母交配意願高且和平。卵鞘孵化期短，小螳螂育成率不錯。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_32.jpg"
  },
  {
    "id": 33,
    "name": "海南巨人蜈蚣",
    "scientificName": "Scolopendra sp.",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/防逃",
    "lightLabel": "陰暗處",
    "dietLabel": "活體/肉類",
    "type": "蜈蚣",
    "description": "體型巨大、霸氣十足的捕食者。**具有毒性**且性格兇猛，移動速度極快。且是脫逃高手，飼養箱必須具備極佳的防逃功能。僅適合有經驗的資深玩家。",
    "diet": "蟑螂、蟋蟀、乳鼠、雞胸肉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live",
        "easy"
      ]
    },
    "guide": {
      "setup": "使用高度足夠且蓋子能夠**鎖緊**的容器（牠們力氣很大會頂開蓋子）。底材使用椰土。",
      "care": "餵食時請使用長鑷子，切勿徒手捕捉。被咬到會造成劇烈疼痛與紅腫。",
      "breeding": "母蜈蚣護卵性極強，期間若受到驚擾會將卵全部吃掉，繁殖難度高。"
    },
    "nickname": "蜈蚣",
    "image": "data/images/unique_33.jpg"
  },
  {
    "id": 34,
    "name": "台灣鞭蠍 (醋酸蟲)",
    "scientificName": "Typopeltis crucifer",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蛛形綱",
    "description": "外型像蠍子但沒有毒刺，擁有一根細長的尾鞭。受到干擾時尾部會噴出帶有濃烈醋酸味的液體防禦。性格其實相當溫和，適合觀察。",
    "diet": "蟋蟀、蟑螂、麵包蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "喜歡挖掘，底材（土）需鋪設 10 公分以上並壓實。放置樹皮供躲藏。",
      "care": "夜行性，動作不快。噴酸液對人體無害但需小心眼睛。保持底材濕潤。",
      "breeding": "母蟲會在地底土室產卵並抱卵守護，直到幼體孵化脫皮，期間不吃不喝。"
    },
    "nickname": "蛛形綱",
    "image": "data/images/unique_34.jpg"
  },
  {
    "id": 35,
    "name": "黑魔鬼竹節蟲",
    "scientificName": "Peruphasma schultei",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-25°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "來自秘魯的高山物種。絲絨般的黑色身體配上鮮紅色的退化翅膀與金黃色眼睛，外型極具特色。受到驚嚇會噴出有些微刺激性的液體。",
    "diet": "女貞葉、桂花葉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風網箱。由於牠們喜歡群聚，可以多隻一起飼養，畫面非常壯觀。",
      "care": "食草（女貞/桂花）在台灣公園常見。怕熱，夏天需注意溫度不可超過 28度。",
      "breeding": "有性生殖，公母常會長時間交配（揹在一起）。產卵量大，孵化期約 4-5 個月。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_35.jpg"
  },
  {
    "id": 36,
    "name": "太陽花金龜",
    "scientificName": "Pachnoda marginata",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內/亮處",
    "dietLabel": "果凍/水果",
    "type": "甲蟲",
    "description": "非洲常見的小型金龜，背上有黃褐色的花紋。非常活潑、飛行能力強，且幾乎不挑食。幼蟲期短、成蟲壽命長，是非常適合小朋友觀察的入門甲蟲。",
    "diet": "幼蟲：腐植土 / 成蟲：香蕉、蘋果、果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "適合群養，箱底鋪腐植土。可多放樹枝供攀爬。需加蓋防飛。",
      "care": "食慾極佳，水果放太久易生果蠅，建議以昆蟲果凍為主食。喜歡曬太陽（非直射）。",
      "breeding": "極易爆產。幼蟲像雞母蟲但會在土中亂爬（背後行走），土繭期勿打擾。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_36.jpg"
  },
  {
    "id": 37,
    "name": "亞克提恩大兜蟲",
    "scientificName": "Megasoma actaeon",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-25°C)",
    "humidityLabel": "適中 (60-75%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土",
    "type": "甲蟲",
    "description": "南美洲的重量級坦克，體型寬大厚重，黑色霧面的外殼非常有質感。幼蟲期是著名的漫長，可能長達 3 年以上，是培養耐心（與遺忘）的極致考驗。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：大量果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲力氣極大，需用結實的飼養箱。幼蟲需用 10L 以上大箱單獨飼養。",
      "care": "成蟲食量驚人。雖然幼蟲期長，但成蟲壽命僅約 3-6 個月，需把握觀賞期。",
      "breeding": "繁殖本身不難，難的是把幼蟲養大。需定期更換高品質大兜土（耗材費高）。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_37.jpg"
  },
  {
    "id": 38,
    "name": "烈陽巴布蜘蛛 (OBT)",
    "scientificName": "Pterinochilus murinus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "乾燥 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "外號「橙色瘋子」(Orange Bitey Thing)。全身亮橘色非常美麗，但性格極度神經質、兇猛、移動速度快如閃電。結網量大。**絕不建議新手嘗試**。",
    "diet": "蟑螂、蟋蟀",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥環境，需提供大量樹枝供其築網。底材乾燥即可。",
      "care": "開蓋餵食需極度小心，牠們可能會順著夾子衝出來或直接做出攻擊威嚇。",
      "breeding": "公蛛就是去送死的。交配前需將母蛛餵得非常飽，成功率看運氣。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_38.jpg"
  },
  {
    "id": 39,
    "name": "斑尾鞭蠍 (無鞭蠍)",
    "scientificName": "Damon diadema",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "直立式高箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蛛形綱",
    "description": "因電影《哈利波特》而聲名大噪。外型恐怖但完全無毒、無害。擁有一對極長的觸肢用來感測環境。需要垂直空間進行脫皮。",
    "diet": "蟋蟀、蟑螂 (需去除後腳)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "必須使用**直立式**容器，並放置一塊垂直的軟木樹皮供其攀爬與脫皮。",
      "care": "非常膽小，動作迅速。脫皮時若空間不足或濕度不夠極易失敗死亡。",
      "breeding": "母蟲會將卵囊攜帶在腹部下，孵化後的幼體會爬在母體背上，類似蠍子。"
    },
    "nickname": "蛛形綱",
    "image": "data/images/unique_39.jpg"
  },
  {
    "id": 40,
    "name": "中/日大鍬形蟲",
    "scientificName": "Dorcus hopei",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/菌瓶",
    "type": "甲蟲",
    "description": "黑色的鑽石。外型厚實簡約，以長壽（成蟲可活 2-3 年）與耐養著稱。是亞洲甲蟲飼養文化的代表物種，有極多血統與極致形狀的追求者。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "基本飼養箱鋪木屑即可。因公蟲大顎有力，需注意蓋子是否牢固。",
      "care": "非常耐命，適合長期陪伴。主要需注意夏天高溫盡量不要超過 28度。",
      "breeding": "產卵木需挑選偏硬的材質。幼蟲使用菌瓶飼養可養出大型個體，成就在於血統選育。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_40.jpg"
  },
  {
    "id": 41,
    "name": "小鴨等足蟲",
    "scientificName": "Cubaris sp. 'Rubber Ducky'",
    "difficulty": "進階",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/鈣",
    "type": "等足目",
    "description": "鼠婦界的超級網紅！因臉部黃色區域像極了黃色小鴨而得名。原產於泰國石灰岩洞穴，價格較高，對環境濕度與通風的平衡要求比一般鼠婦高。",
    "diet": "枯葉、魚飼料、紅土、石灰岩塊(補鈣)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "這類品種**極度需要鈣質**，環境內必須放置老舊水泥塊、石灰岩或珊瑚骨。底材需厚鋪保濕。",
      "care": "喜歡潮濕但怕悶，建議在飼養盒側面打洞通風，並保持「濕區」與「乾區」的配置。",
      "breeding": "繁殖速度慢，產量少，這也是牠們價格居高不下的原因。勿頻繁翻動底材驚擾。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_41.jpg"
  },
  {
    "id": 42,
    "name": "油彩粉紅趾蜘蛛",
    "scientificName": "Caribena versicolor",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "直立式透氣盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "被譽為「世界上最美麗的蜘蛛」之一。幼體呈現閃亮的金屬藍色，成體則轉變為紅綠交織的金屬光澤。屬於樹棲型，善於跳躍。",
    "diet": "蟋蟀、紅蟑 (活餌)",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "必須使用**側邊有大量孔洞**的直立容器（因為牠們在頂部結網，上開蓋會破壞巢穴）。",
      "care": "「通風」比「濕度」更重要！空氣不流通極易導致猝死。建議每兩天在網上噴少許水珠供其飲用。",
      "breeding": "公蛛壽命短。母蛛個性相對溫和，但交配時仍有攻擊性。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_42.jpg"
  },
  {
    "id": 43,
    "name": "馬來西亞扁竹節蟲",
    "scientificName": "Heteropteryx dilatata",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "竹節蟲界的重型坦克。母蟲體型巨大、鮮綠色且全身帶刺，不會飛；公蟲褐色細長有翅膀。受到威脅時會摩擦翅膀發出巨大沙沙聲並舉起滿是棘刺的後腳攻擊。",
    "diet": "芭樂葉、芒果葉、橡樹葉",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "需要非常堅固且寬敞的網箱。底部需放置深度至少 5 公分的產卵土（椰土）。",
      "care": "食量巨大，需確保葉片供應充足。夜行性，晚上會聽到牠們啃食葉子的聲音。刺很銳利，抓取需小心。",
      "breeding": "卵產於土中，體積大，孵化期極長（可達 12-18 個月），是考驗耐心的物種。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_43.jpg"
  },
  {
    "id": 44,
    "name": "美西白兜蟲",
    "scientificName": "Dynastes granti",
    "difficulty": "進階",
    "tempLabel": "常溫/乾燥 (20-26°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "一般/亮處",
    "dietLabel": "腐植土/果凍",
    "type": "甲蟲",
    "description": "來自美國西部的可愛兜蟲，外殼呈現灰白色帶有黑色斑點（像大麥町狗）。體型適中，不若長戟巨大，但精緻可愛。喜歡比較乾燥的環境。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "佈置乾燥的木屑或樹皮，濕度過高會導致外殼變黑（雖然乾燥後會變回白色）。",
      "care": "成蟲壽命約 2-3 個月。幼蟲期雖然不長，但化蛹前的滯育期（等待期）可能很長。",
      "breeding": "幼蟲與卵對濕度敏感，太濕容易爛掉。適合有一定甲蟲飼養基礎的玩家。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_44.jpg"
  },
  {
    "id": 45,
    "name": "多米諾蟑螂",
    "scientificName": "Therea petiveriana",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "蜚蠊",
    "description": "完全顛覆你對蟑螂的印象！圓圓黑色的身體配上白色圓點，長得像極了瓢蟲或骨牌（Domino）。日行性，會在地面到處探索，非常可愛。",
    "diet": "枯葉、麥片、紅蘿蔔、昆蟲果凍",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底材使用腐植土混合枯葉，深度約 3-5 公分供其鑽土休息。",
      "care": "成蟲壽命不算長，但非常好養。幼蟲期較長，約需一年才能羽化。",
      "breeding": "卵鞘產於土中。幼蟲長得很像普通的土棲蟑螂，羽化後才會出現美麗斑紋。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_45.jpg"
  },
  {
    "id": 46,
    "name": "巨盾螳螂 (菱背)",
    "scientificName": "Rhombodera basalis",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "體型巨大且強壯的螳螂，特徵是胸部背板像一個巨大的菱形盾牌。食慾極佳，攻擊性強，幾乎來者不拒，是非常有成就感的飼養對象。",
    "diet": "蟑螂、蟋蟀、麵包蟲 (活餌)",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "空間需足夠大（長寬高 20x20x30cm 以上），必須放置粗樹枝供其抓握。",
      "care": "因為食量大，排泄也多，需勤勞清理。甚至可以餵食小塊的生肉（需晃動誘食）。",
      "breeding": "產卵量驚人，一個卵鞘可以孵出 200-300 隻小螳螂，孵化前請先想好去處。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_46.jpg"
  },
  {
    "id": 47,
    "name": "犀牛蟑螂",
    "scientificName": "Macropanesthia rhinoceros",
    "difficulty": "專家",
    "tempLabel": "溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "尤加利葉/枯葉",
    "type": "蜚蠊",
    "description": "來自澳洲，是世界上最重的蟑螂。壽命可達 10 年！沒有翅膀，擅長挖掘，長相與習性更像甲蟲。智商頗高，甚至能與飼主互動。價格昂貴。",
    "diet": "枯葉（尤加利葉尤佳）、紅蘿蔔、蘋果",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "需要深度 15-20 公分的沙質土供其挖掘居住。環境佈置簡單即可。",
      "care": "生長極度緩慢，約需 3-4 年才性成熟。只要環境穩定，其實很強壯，難在耐心。",
      "breeding": "胎生，一次產下約 20-30 隻幼體。母蟲會照顧幼體一段時間。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_47.jpg"
  },
  {
    "id": 48,
    "name": "台灣深山鍬形蟲",
    "scientificName": "Lucanus swinhoei",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-24°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑/腐植土",
    "type": "甲蟲",
    "description": "台灣特有種，分佈於中高海拔山區。公蟲頭部後方有特殊的耳突，體色紅褐非常有質感。因為是高山種，極度怕熱。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "**溫控是關鍵**，夏天必須開冷氣或使用溫控箱，超過 26度 容易死亡。",
      "care": "成蟲脾氣暴躁，交配時需注意。壽命較短，約 2-4 個月。",
      "breeding": "產卵介質需使用發酵程度較高的木屑或土，壓實於箱底。幼蟲也需在低溫環境成長。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_48.jpg"
  },
  {
    "id": 49,
    "name": "巴西白膝頭蜘蛛",
    "scientificName": "Acanthoscurria geniculata",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "地棲型蜘蛛中的人氣王。體型巨大（展足可達 20cm），黑底配上膝蓋處明顯的白色條紋，對比強烈。食慾極佳，生長速度快，非常適合新手。",
    "diet": "蟑螂、蟋蟀、大麥蟲",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "底材鋪設椰土，放置一個半圓形花盆或樹皮做躲避。需放置水盆。",
      "care": "雖然不常踢毛，但踢毛能力強，接觸後皮膚會癢。餵食觀賞性極高。",
      "breeding": "產卵量大（可達 500-1000 顆），繁殖前請三思是否有能力照顧大量幼體。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_49.jpg"
  },
  {
    "id": 50,
    "name": "大王花金龜",
    "scientificName": "Goliathus goliathus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內/亮處",
    "dietLabel": "高蛋白飼料/水果",
    "type": "甲蟲",
    "description": "非洲的王者，世界上體重最重的昆蟲之一。背部黑白花紋如同部落圖騰。成蟲體型震撼，幼蟲更是巨大。",
    "diet": "幼蟲：狗飼料、專用土 / 成蟲：香蕉、果凍",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲飛行力強，空間不可太小。幼蟲需單獨飼養以免互食。",
      "care": "成蟲好養，難度在於幼蟲。幼蟲**不吃木屑**，需餵食高蛋白飼料（如泡軟的狗飼料），且容易暴斃。",
      "breeding": "極高難度。幼蟲化蛹前需要製作巨大的土繭，此時對環境干擾極度敏感。"
    },
    "nickname": "大王花 / 綠寶石",
    "image": "data/images/unique_50.jpg"
  },
  {
    "id": 51,
    "name": "蘇門答臘巨扁鍬形蟲",
    "scientificName": "Dorcus titanus yasuokai",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "被譽為「地表最強」的鍬形蟲。擁有寬大且充滿肌肉感的巨型大顎，性格極度兇猛好戰，幾乎沒有天敵。生命力強，非常適合新手飼養的霸氣物種。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "絕對必須**單獨飼養**！交配時甚至建議將公蟲大顎綁住，否則母蟲極易被夾死。",
      "care": "非常強壯耐命，對溫度適應力佳。因為力氣大，飼養箱蓋子務必扣緊以防脫逃。",
      "breeding": "使用一般發酵木屑或產卵木皆可產卵。幼蟲食量大，使用菌瓶飼養可養出超過 10cm 的巨物。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_51.jpg"
  },
  {
    "id": 52,
    "name": "翡翠蟑螂 (帶紋)",
    "scientificName": "Pseudoglomeris magnifica",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/通風 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "花粉/水果",
    "type": "蜚蠊",
    "description": "來自越南的寶石。全身閃耀著金屬綠色的光澤，是世界上最美麗的蟑螂之一。與一般蟑螂不同，牠們動作優雅，且喜歡光亮與通風的環境。",
    "diet": "花粉(必備)、蜂蜜、蘋果",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "佈置需模仿樹棲環境，放置大量樹皮與樹枝。不可使用完全密閉的盒子。",
      "care": "**花粉**是主食，不可只餵狗飼料。喜歡噴水後在樹皮上喝水。幼蟲成長緩慢。",
      "breeding": "胎生。母蟲懷孕期長，對環境干擾敏感。需有耐心才能建立族群。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_52.jpg"
  },
  {
    "id": 53,
    "name": "小提琴螳螂",
    "scientificName": "Gongylus gongylodes",
    "difficulty": "進階",
    "tempLabel": "高溫 (28-35°C)",
    "humidityLabel": "乾燥 (30-50%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "極高通風",
    "lightLabel": "室內/保溫燈",
    "dietLabel": "飛行系活體昆蟲",
    "type": "螳螂",
    "description": "外型極度奇特，細長的頸部與寬大的腹部像極了一把小提琴。專門捕捉飛行昆蟲。特別的是牠們生性溫和，是少數可以**群養**的螳螂品種。",
    "diet": "蒼蠅、飛蛾 (只吃飛的)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "必須使用全網箱，並架設枯枝。環境需保持乾燥高溫，怕冷。",
      "care": "完全不吃爬行獵物（如蟑螂），必須穩定供應蒼蠅或飛蛾。群養時需確保食物充足。",
      "breeding": "交配容易且和平。卵鞘長而細，孵化需保持乾燥與高溫。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_53.jpg"
  },
  {
    "id": 54,
    "name": "魔法藥水鼠婦",
    "scientificName": "Armadillidium vulgare 'Magic Potion'",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料",
    "type": "等足目",
    "description": "普通捲殼蟲的選育種。半透明的白色身體上分佈著黑色與黃色的斑點，就像魔法藥水潑灑在身上。價格親民且外型可愛，是非常熱門的入門種。",
    "diet": "魚飼料、紅蘿蔔、枯葉、鈣粉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "標準乾濕分離佈置（一邊濕水苔、一邊乾葉子）。需放置墨魚骨補鈣。",
      "care": "非常好養，幾天噴一次水即可。遇到危險會捲成完美的圓球。",
      "breeding": "繁殖容易，一對成體幾個月後就能生出一大家族。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_54.jpg"
  },
  {
    "id": 55,
    "name": "姬兜蟲",
    "scientificName": "Xylotrupes gideon",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (20-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "外型像是縮小版的獨角仙，胸角與頭角形成一個夾子。受到干擾時會摩擦翅膀發出「嘰—嘰—」的叫聲，非常可愛。台灣離島（蘭嶼/綠島）有原生亞種。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍、水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "一般中型飼養箱即可。公蟲脾氣較暴躁，建議單獨飼養。",
      "care": "非常耐熱且不挑食。幼蟲期短，很快就能化蛹羽化，很適合觀察生活史。",
      "breeding": "產量極大，使用一般腐植土壓實即可爆產，是練習繁殖甲蟲的最佳對象。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_55.jpg"
  },
  {
    "id": 56,
    "name": "大田鱉 (水棲昆蟲)",
    "scientificName": "Lethocerus indicus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "極高濕 (水族箱)",
    "spaceLabel": "水族箱/整理箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內/植物燈",
    "dietLabel": "活體魚蝦",
    "type": "半翅目",
    "description": "台灣最大的水棲昆蟲，被稱為「水中霸王」。擁有鐮刀狀的前腳與刺吸式口器。成蟲具有趨光性且飛行能力強。對於水質環境與農藥非常敏感。",
    "diet": "小魚、朱文錦、溪蝦、蝌蚪",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需設置水陸兩棲環境或單純水缸放入突出水面的枯枝（供其呼吸與產卵）。**務必加蓋防飛**。",
      "care": "水質需乾淨，吃剩的魚蝦殘骸需馬上撈除以免發臭。被刺吸到會極度疼痛（消化液分解）。",
      "breeding": "著名的「好爸爸」昆蟲。母蟲將卵產在樹枝上後，公蟲會負責護卵並不斷潑水保濕。"
    },
    "nickname": "半翅目",
    "image": "data/images/unique_56.jpg"
  },
  {
    "id": 57,
    "name": "亞利桑那巨人金蠍",
    "scientificName": "Hadrurus arizonensis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "乾燥 (30-40%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "北美最大的蠍子，全身呈現美麗的淡黃色，身上覆蓋細毛。屬於沙漠蠍種，與雨林蠍不同，牠們需要極度乾燥的環境。性格相對兇猛活躍。",
    "diet": "蟋蟀、麵包蟲、杜比亞蟑螂",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "底材使用爬蟲沙或造景土，需夠深供其挖掘。放置岩石躲避。**不需要水盆**（從食物攝取水分）。",
      "care": "非常耐旱，環境太濕會導致黴菌感染死亡。偶爾在角落滴幾滴水即可。",
      "breeding": "難度較高，且成長速度慢。成體壽命長，適合當作長期展示寵物。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_57.jpg"
  },
  {
    "id": 58,
    "name": "日本源氏龍蝨",
    "scientificName": "Cybister chinensis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "極高濕 (水族箱)",
    "spaceLabel": "水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內",
    "dietLabel": "死魚/昆蟲",
    "type": "甲蟲",
    "description": "大型的水棲甲蟲，外型流線像潛水艇。在水中泳技高超，且也會飛行。是清除水中死屍的清道夫。目前在野外數量稀少，市面多為人工繁殖。",
    "diet": "冷凍紅蟲、死魚、乾燥蝦、沉底飼料",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "live"
      ]
    },
    "guide": {
      "setup": "水族缸佈置水草與沉木。需突出水面的攀爬物供其換氣與晾翅。需加蓋。",
      "care": "非常好養，幾乎什麼肉都吃。水質髒了就換。雖有獠牙但較少主動攻擊活體大魚。",
      "breeding": "幼蟲是兇猛的水中殺手（水老虎），只能吃活餌且會互食，需單獨飼養。"
    },
    "nickname": "甲蟲",
    "image": "data/images/unique_58.jpg"
  },
  {
    "id": 59,
    "name": "無尾鳳蝶 (幼蟲)",
    "scientificName": "Papilio demoleus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "通風容器",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮柑橘葉",
    "type": "鱗翅目",
    "description": "都市中最常見的蝴蝶。幼蟲像鳥糞（擬態），終齡會變成可愛的綠色毛毛蟲。非常適合親子教育觀察完全變態的過程。羽化後需野放。",
    "diet": "金桔葉、檸檬葉、柚子葉 (柑橘類)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "只需一個通風的盒子，甚至插花瓶養在桌上即可（需防幼蟲亂爬）。",
      "care": "食量驚人，葉片需保持新鮮（插水）。每日需清理大量便便。化蛹時需提供粗糙表面或樹枝。",
      "breeding": "主要以觀察幼蟲化蛹成蝶為主。成蝶需寬廣空間飛行，建議羽化觀察後放生。"
    },
    "nickname": "鱗翅目",
    "image": "data/images/unique_59.jpg"
  },
  {
    "id": 60,
    "name": "黃金鬼鍬形蟲",
    "scientificName": "Allotopus rosenbergi",
    "difficulty": "專家",
    "tempLabel": "涼爽 (18-24°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/雲芝菌",
    "type": "甲蟲",
    "description": "全身閃耀著黃金般的光澤，是鍬形蟲中最高貴的品種之一。性格神經質且敏感。濕度高時金色會變暗，乾燥後恢復。需要較高的飼養技巧。",
    "diet": "幼蟲：雲芝菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "成蟲需住單間。環境需精準溫控，絕對不能熱到。適合有經驗的玩家挑戰。",
      "care": "成蟲壽命約 4-8 個月。金色外殼非常迷人，但受驚嚇時會緊縮腳爪裝死。",
      "breeding": "極高難度。母蟲只產卵於特定的「雲芝產卵木」或「靈芝產卵木」，一般木頭不產。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_60.jpg"
  },
  {
    "id": 61,
    "name": "美他利佛細身赤鍬形蟲",
    "scientificName": "Cyclommatus metallifer",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "體色如銅器般閃耀著金屬光澤，最大的特徵是公蟲擁有比例極長的大顎（身體的兩倍長）。雖然看起來張牙舞爪，但咬合力其實不強，主要用來推擠。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "雖然身體細長，但大顎很佔空間，建議使用中型以上的容器。底材使用一般木屑即可。",
      "care": "活動力強，非常神經質，受驚嚇會亂衝。需注意蓋子緊閉。濕度不宜過高。",
      "breeding": "產卵容易，母蟲會產卵於產卵木與木屑接觸的底部。幼蟲成長快速。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_61.jpg"
  },
  {
    "id": 62,
    "name": "巨顎叉角鍬形蟲",
    "scientificName": "Hexarthrius mandibularis",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/菌瓶",
    "type": "甲蟲",
    "description": "性格極度兇暴的戰鬥機器。大顎粗壯且前端分叉，一旦夾住物體絕不鬆口（手指殺手）。背部平坦寬闊，展現出一種粗曠的霸氣。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "絕對單獨飼養。交配時務必將公蟲大顎牢牢綁住，否則母蟲會瞬間被腰斬。",
      "care": "成蟲食量大且破壞力強，果凍台容易被破壞。抓取時需從背後下手，小心被夾。",
      "breeding": "產卵木需挑選偏軟的材質。幼蟲適合使用菌瓶飼養，可養出超過 11cm 的個體。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_62.jpg"
  },
  {
    "id": 63,
    "name": "印尼金鍬形蟲",
    "scientificName": "Lamprima adolphinae",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "一般/亮處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "像寶石一樣美麗的小型鍬形蟲。體色變化豐富，有金色、綠色、藍色、紅色等，且帶有強烈金屬光澤。前腳脛節呈扇狀，擅長切割樹皮（或果凍膜）。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor",
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "空間需求小，適合不想佔空間的玩家。可多隻母蟲混養（公蟲建議分開）。",
      "care": "非常適合初學者，耐命且漂亮。可以用不同顏色的個體進行累代選育。",
      "breeding": "產卵於偏硬的產卵木中。幼蟲食量極小，一罐 250cc 的布丁杯就能養到羽化。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_63.jpg"
  },
  {
    "id": 64,
    "name": "巨人葉脩",
    "scientificName": "Pulchriphyllium giganteum",
    "difficulty": "專家",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "世界上最大的葉脩之一，體型寬大如同一片巨大的綠色樹葉，邊緣還有蟲咬的擬態痕跡。成蟲幾乎都是母蟲（孤雌生殖），無需交配即可產卵。",
    "diet": "芭樂葉、橡樹葉",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "極需通風，不可使用密閉容器。需保持高濕度但不能積水，難度在於溫濕度平衡。",
      "care": "若通風不良容易生病（身體出現黑斑）。幼體死亡率較高，建議從亞成體養起。",
      "breeding": "產卵量大，但孵化期極長（約 6-9 個月），需要極大的耐心等待。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_64.jpg"
  },
  {
    "id": 65,
    "name": "巨型枯葉螽斯",
    "scientificName": "Siliquofera grandis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片/蔬果",
    "type": "直翅目",
    "description": "世界上最大型的螽斯之一。翅膀擬態成巨大的枯葉，展開時非常壯觀。雖然長得像兇猛的肉食性昆蟲，但其實是溫和的素食者。公蟲鳴叫聲極大。",
    "diet": "地瓜葉、桑葉、紅蘿蔔、蘋果",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant",
        "easy"
      ]
    },
    "guide": {
      "setup": "需要大型網箱供其攀爬與跳躍。若飼養公蟲，需考慮隔音問題（叫聲如電鈴般響亮）。",
      "care": "食量大，需每日提供新鮮蔬果。腿部有力且有刺，抓取時需小心被踢傷。",
      "breeding": "產卵於植物莖部或土中。若要繁殖，需準備植物莖幹供母蟲產卵。"
    },
    "nickname": "鳴蟲 / 大肚馬仔",
    "image": "data/images/unique_65.jpg"
  },
  {
    "id": 66,
    "name": "宏都拉斯捲毛捕鳥蛛",
    "scientificName": "Tliltocatl albopilosus",
    "difficulty": "新手",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "全身覆蓋著捲曲的金色絨毛，樣子非常呆萌。個性極度溫馴、行動緩慢，幾乎不具攻擊性，是目前公認最適合新手的入門毛蜘蛛之一。",
    "diet": "蟋蟀、麵包蟲、紅蟑",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "地棲型，底材鋪厚一點（椰土）供其挖掘，放一個躲避穴與水盆即可。",
      "care": "非常耐餓耐渴，一週餵食一次即可。踢毛頻率低，但仍需注意。",
      "breeding": "容易繁殖，且母蛛通常較能容忍公蛛。產量大，幼體存活率高。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_66.jpg"
  },
  {
    "id": 67,
    "name": "亞洲雨林蠍",
    "scientificName": "Heterometrus sp.",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "經典的黑色大蠍子，外型與帝王蠍相似但體型稍小，價格便宜很多。毒性微弱（像蜜蜂叮），個性較為神經質，防禦時會舉起雙螯，霸氣十足。",
    "diet": "蟋蟀、紅蟑、大麥蟲",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "高濕度環境，底材使用椰土。需提供大面積的躲避物（樹皮或瓦片）。",
      "care": "雖然可以群養，但需確保食物充足，否則互食機率比帝王蠍高。保持底材濕潤。",
      "breeding": "卵胎生。母蠍產子後會變得非常兇猛，需避免干擾，否則會吃掉幼蠍。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_67.jpg"
  },
  {
    "id": 68,
    "name": "橙色小丑鼠婦",
    "scientificName": "Armadillidium werneri",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "身體寬扁，黑底上有三排鮮豔的橙色圓點，像極了小丑的鈕扣。體型偏大，觀賞性極高。相較於其他鼠婦，牠們更喜歡偏乾一點的環境。",
    "diet": "枯葉、魚飼料、櫛瓜、紅蘿蔔",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium",
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "飼養環境需保持通風，底材不能全濕，建議「乾濕分明」。放置樹皮供躲藏。",
      "care": "不喜歡過度潮濕，太濕容易大量死亡。生長速度較慢。",
      "breeding": "繁殖難度中等，產量不如大麥町鼠婦多，族群建立需要時間。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_68.jpg"
  },
  {
    "id": 69,
    "name": "問號蟑螂",
    "scientificName": "Therea olegrandjeani",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "蜚蠊",
    "description": "多米諾蟑螂的親戚。黑色的翅膀上有著白色的斑紋，形狀像極了問號「?」。習性溫和，日行性，不會爬光滑牆面，非常適合當作寵物。",
    "diet": "枯葉、麥片、紅蘿蔔、昆蟲果凍",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底材使用腐植土混合枯葉，深度約 5 公分。環境保持微濕即可。",
      "care": "成蟲壽命約 3-5 個月。主要在白天活動，喜歡在落葉堆上探索。",
      "breeding": "產卵於土中。幼蟲期長達 10-12 個月，需耐心等待羽化帶來的驚喜。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_69.jpg"
  },
  {
    "id": 70,
    "name": "海神大兜蟲",
    "scientificName": "Dynastes neptunus",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-23°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "世界上第二長的甲蟲（僅次於長戟）。特徵是擁有四支角（兩長兩短），胸角下方佈滿金黃色細毛，優雅而霸氣，被稱為「黑色長戟」。原產於高海拔，極度怕熱。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：香蕉、昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲與幼蟲都需要大型空間。務必準備溫控設備（冰箱或冷氣房）。",
      "care": "成蟲性格相對溫和。對溫度非常敏感，超過 25度 就會開始拒食或活動力下降。",
      "breeding": "繁殖難度在於溫控與幼蟲期的漫長（約 1.5 - 2.5 年）。需要高品質發酵木屑。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_70.jpg"
  },
  {
    "id": 71,
    "name": "撒旦大兜蟲",
    "scientificName": "Dynastes satanas",
    "difficulty": "專家",
    "tempLabel": "涼爽 (15-20°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "產於玻利維亞高山的夢幻物種。體型圓潤厚實，胸角與頭角雖不長但非常粗壯，胸部前方有濃密的金黃色絨毛。對溫度要求極其嚴苛，是高難度的挑戰。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：香蕉、昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "必須備有冷氣或冰箱控溫。環境佈置簡單即可，重點是溫度的穩定性。",
      "care": "極度怕熱，超過 23 度即有生命危險。幼蟲期約 2 年，雖然體型不大但成長緩慢。",
      "breeding": "受到華盛頓公約 (CITES) 保護，進出口受嚴格管制，市面流通皆為人工繁殖個體，價格高昂。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_71.jpg"
  },
  {
    "id": 72,
    "name": "鬼艷鍬形蟲",
    "scientificName": "Odontolabis siva",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "台灣最大型的鍬形蟲。依據大顎形狀分為長牙、中牙、短牙型。長牙個體霸氣十足，黑色光亮的鞘翅配上橘紅色的邊緣。幼蟲飼養難度意外的高。",
    "diet": "幼蟲：高度發酵腐植土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲飼養容易，一般佈置即可。需單獨飼養以免打鬥。",
      "care": "成蟲壽命約 3-6 個月。幼蟲**不吃菌瓶**，只吃發酵程度極高（接近土）的木屑，且容易受干擾而死。",
      "breeding": "產卵量大，但幼蟲死亡率高，要養出長牙型個體需要豐富經驗與特殊土質。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_72.jpg"
  },
  {
    "id": 73,
    "name": "非洲大黑豔鍬形蟲",
    "scientificName": "Mesotopus tarandus",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/雲芝菌",
    "type": "甲蟲",
    "description": "全身如同鋼琴烤漆般黝黑發亮，是世界上光澤度最高的鍬形蟲。受到干擾時身體會劇烈震動（像手機震動）。大顎彎曲獨特，咬合力強。",
    "diet": "幼蟲：雲芝菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "喜歡乾淨環境，建議勤換底材維持光澤。單獨飼養。",
      "care": "震動是牠們的防禦機制。對溫度較敏感，夏天建議溫控。",
      "breeding": "母蟲只會產卵在**雲芝菌**的產卵木或菌瓶中，一般木頭無法誘產。幼蟲生長極快，甚至半年可羽化。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_73.jpg"
  },
  {
    "id": 74,
    "name": "波麗菲夢斯花金龜",
    "scientificName": "Mecynorrhina polyphemus",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "非洲大型花金龜，公蟲頭部有角，體色變化多端（綠色、紅色、藍色、混合色），像是一顆巨大的寶石。有著濃厚的絨毛質感。",
    "diet": "幼蟲：腐植土+狗飼料 / 成蟲：香蕉、果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲活動力強，建議給予攀爬枝。可混養（空間需足夠）。",
      "care": "幼蟲期需添加蛋白質（狗飼料）才能養出大個體，但需注意防蟎與土質酸化。",
      "breeding": "會用土做繭化蛹，土繭期不可澆水過多以免淹死蛹。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_74.jpg"
  },
  {
    "id": 75,
    "name": "龍蝦竹節蟲",
    "scientificName": "Eurycantha calcarata",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗/室內",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "地棲型竹節蟲。外殼堅硬厚實像龍蝦，成蟲體色為黑褐色。公蟲後腳有巨大的刺，被夾到會非常痛。性格比起一般竹節蟲兇猛，會主動防禦。",
    "diet": "芭樂葉、橡樹葉、黃金葛",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "因為較重且地棲，底部需放置樹皮供躲藏，也需粗樹枝供攀爬。不可群養過密。",
      "care": "食量很大，且會吃掉其他竹節蟲的卵（補充蛋白質？）。夜行性，晚上非常活躍。",
      "breeding": "產卵管長，會將卵產入土中。需準備裝土的產卵盒。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_75.jpg"
  },
  {
    "id": 76,
    "name": "秘魯蕨葉竹節蟲",
    "scientificName": "Oreophoetes peruana",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "極高濕 (80%以上)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "蕨類植物",
    "type": "竹節蟲",
    "description": "色彩鮮豔的竹節蟲，公蟲為鮮紅色配黑色條紋，母蟲為黑底黃條紋。受到驚嚇會分泌白色臭液。專門吃蕨類。",
    "diet": "腎蕨、波士頓腎蕨",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "需要高濕度但通風的環境。底部鋪設吸水力強的紙巾或水苔。",
      "care": "食草較特殊（只吃蕨類），需確認家中附近有穩定來源或自己種植。怕高溫。",
      "breeding": "卵直接產於地面，孵化率不錯，但幼體對濕度非常敏感。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_76.jpg"
  },
  {
    "id": 77,
    "name": "委內瑞拉紅綠燈 (GBB)",
    "scientificName": "Chromatopelma cyaneopubescens",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "乾燥 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "一般/亮處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "毛蜘蛛界的超級明星。擁有金屬藍色的腿、綠色的甲殼與橘紅色的腹部，配色極其鮮豔。產絲量極大，會將飼養盒編成白色的絲巢。",
    "diet": "蟋蟀、紅蟑、麵包蟲",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥環境，放置大量樹枝供其結網。不需要太厚的底材。",
      "care": "食慾極佳，生長速度中等。踢毛稍微頻繁。觀賞性極高，總是待在絲網上。",
      "breeding": "公蛛交配意願高，但母蛛容易攻擊公蛛。產量適中。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_77.jpg"
  },
  {
    "id": 78,
    "name": "藍寶石華麗雨林",
    "scientificName": "Poecilotheria metallica",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "直立式透氣盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "夢幻級物種。全身覆蓋著驚人的寶藍色與幾何花紋。屬於舊大陸樹棲蜘蛛，**毒性強**、移動速度極快、性情較兇。不建議新手飼養。",
    "diet": "蟋蟀、紅蟑 (活餌)",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "直立式飼養箱，放置中空的軟木樹洞供其躲藏。光線太強會躲起來。",
      "care": "開蓋需極度小心，可能會瞬間衝出。咬傷會造成劇烈疼痛與肌肉痙攣。",
      "breeding": "極高難度，公母配對時容易互食。價格高昂。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_78.jpg"
  },
  {
    "id": 79,
    "name": "扁石蠍",
    "scientificName": "Hadogenes troglodytes",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "乾燥 (30-40%)",
    "spaceLabel": "寬扁型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "外型像被壓扁一樣，專門適應在岩石縫隙中生存。尾巴細長，螫針微小，毒性極弱。公蠍擁有極長的尾巴。是世界上最大的蠍子之一（以長度計）。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "底材使用乾燥沙土，堆疊板岩或石片製造縫隙。不需要深土挖掘。",
      "care": "生長極度緩慢，可能需數年才脫一次皮。非常耐旱，不需常餵食。",
      "breeding": "懷孕期極長（可達 18 個月），產量少，是非常珍貴的物種。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_79.jpg"
  },
  {
    "id": 80,
    "name": "螢光蟑螂",
    "scientificName": "Lucihormetica verrucosa",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/紅蘿蔔",
    "type": "蜚蠊",
    "description": "公蟲前胸背板上有兩個凸起的橘黃色斑點（擬態成螢火蟲的大眼斑，本身不會發光）。外型奇特可愛，外殼有凹凸質感。行動緩慢，不會爬牆。",
    "diet": "紅蘿蔔(必備，增色用)、狗糧、麥片",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底材使用腐植土，放置樹皮。喜歡鑽土。",
      "care": "需提供紅蘿蔔以維持其鮮豔體色。若環境太乾，外殼會變得黯淡。",
      "breeding": "成長緩慢，從幼體到成體約需一年。胎生，產量不多。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_80.jpg"
  },
  {
    "id": 81,
    "name": "萬聖節蟑螂",
    "scientificName": "Elliptorhina javanica",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料",
    "type": "蜚蠊",
    "description": "馬達加斯加蟑螂的親戚，但體型較小且顏色更鮮豔，紅黑黃相間像萬聖節南瓜配色。同樣會發出嘶嘶聲。溫馴好上手。",
    "diet": "狗糧、水果、麥片",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "攀爬能力強，需抹凡士林防逃。放置蛋盒增加活動面積。",
      "care": "非常好養，不挑食。適合當作寵物蟑螂的入門種。",
      "breeding": "繁殖容易，胎生。群養下很容易爆缸。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_81.jpg"
  },
  {
    "id": 82,
    "name": "西班牙巨人鼠婦",
    "scientificName": "Porcellio hoffmannseggii",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "寬底飼養盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/鈣",
    "type": "等足目",
    "description": "鼠婦界的泰坦。體型巨大（可達 4cm），寬扁且邊緣外擴，非常有氣勢。原產於乾燥岩石區，與一般潮濕鼠婦不同，非常怕悶熱潮濕。",
    "diet": "枯葉、墨魚骨、魚飼料、櫛瓜",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "飼養盒必須有大面積通風網。底材保持乾燥，僅在角落設一個小水區（水苔）。需大量躲避物。",
      "care": "「通風」是存活關鍵。若發現集體死亡通常是太濕或不通風。",
      "breeding": "繁殖難度高，母蟲護幼期間非常敏感，產量少，成長慢。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_82.jpg"
  },
  {
    "id": 83,
    "name": "蒙特內哥羅小丑鼠婦",
    "scientificName": "Armadillidium klugii",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料",
    "type": "等足目",
    "description": "背上有三排顯眼的白色或黃色圓點，邊緣是紅色裙邊，非常漂亮。體型中等，喜歡稍微通風的環境。日行性較強，常在表面活動。",
    "diet": "魚飼料、枯葉、鈣粉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor",
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "乾濕分離。不需太厚底材，喜歡攀爬樹皮。",
      "care": "相當強健的品種，只要不讓底材發霉即可。鈣質補充很重要。",
      "breeding": "繁殖速度中等，比普通捲殼蟲慢一點，但穩定。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_83.jpg"
  },
  {
    "id": 84,
    "name": "戰神大兜蟲",
    "scientificName": "Megasoma mars",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土",
    "type": "甲蟲",
    "description": "產於亞馬遜流域。全身漆黑光亮，擁有像鎧甲般厚重的外殼，是所有大兜蟲中最具重量感的。幼蟲期長，成蟲性格也相當兇猛。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：香蕉、昆蟲果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "大型容器必備。成蟲六隻腳抓力極強，取出時需小心受傷。",
      "care": "食量巨大。成蟲壽命約 6-10 個月。相比毛象大兜蟲，戰神較不怕磨損（因為沒毛）。",
      "breeding": "幼蟲期約 2-3 年。化蛹時會製作巨大的土繭，需避免搖晃。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_84.jpg"
  },
  {
    "id": 85,
    "name": "美東白兜蟲",
    "scientificName": "Dynastes tityus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "一般/亮處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "來自美國東部，體型小巧可愛（約 4-6cm）。外殼為黃綠色帶有黑色斑點。性格非常溫和，適合放在手心觀察。適應力強。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "不需要大空間，一般昆蟲箱即可。環境需保持乾燥以維持外殼顏色。",
      "care": "成蟲壽命約 2-4 個月。非常好養，適合小朋友。",
      "breeding": "產卵容易。幼蟲期約 1 年，有時會有滯育期（需經歷冬天低溫才會化蛹）。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_85.jpg"
  },
  {
    "id": 86,
    "name": "紅娘華 (水蠍)",
    "scientificName": "Laccotrephes japonensis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "極高濕 (水族箱)",
    "spaceLabel": "淺水缸",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內",
    "dietLabel": "活體魚蝦",
    "type": "半翅目",
    "description": "像是枯葉與蠍子的結合體，擁有一根長長的呼吸管伸出水面呼吸。前腳呈鐮刀狀用來捕捉獵物。主要生活在靜水域或流速緩慢的溝渠。",
    "diet": "小魚、蝌蚪、紅蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "水深不需太深（約 5-10cm），需放置樹枝或水草供其攀爬換氣。底部鋪細沙。",
      "care": "肉食性，需注意水質敗壞。獵食動作迅速。",
      "breeding": "母蟲會將卵產在潮濕的土岸邊或苔蘚上。若蟲（幼體）長得跟成蟲很像。"
    },
    "nickname": "半翅目",
    "image": "data/images/unique_86.jpg"
  },
  {
    "id": 87,
    "name": "台灣騷蟴",
    "scientificName": "Mecopoda elongata",
    "difficulty": "新手",
    "tempLabel": "常溫 (22-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內",
    "dietLabel": "雜食/植物",
    "type": "直翅目",
    "description": "台灣常見的大型螽斯，有綠色型與褐色型。公蟲鳴聲響亮「強、強、強...」，是許多人的鄉村回憶。後腿修長，跳躍力強。",
    "diet": "地瓜葉、胡蘿蔔、狗飼料(補充蛋白質)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant",
        "easy"
      ]
    },
    "guide": {
      "setup": "通風網箱，放置高莖植物或芒草供其躲藏。由於會鳴叫，需考慮飼養位置。",
      "care": "雖是植食性，但偶爾會捕食小昆蟲。若缺乏蛋白質可能會同類相殘。",
      "breeding": "母蟲產卵管長，會產卵於植物莖部或土中。若蟲孵化後需立刻分開飼養。"
    },
    "nickname": "鳴蟲 / 大肚馬仔",
    "image": "data/images/unique_87.jpg"
  },
  {
    "id": 88,
    "name": "拳擊手螳螂",
    "scientificName": "Ephestiasula pictipes",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "小型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "體型嬌小（約 2-3cm），前腳內側有鮮豔的黑紅斑紋。習慣將前腳舉起並交替揮舞，動作就像在打拳擊一樣，非常逗趣。",
    "diet": "果蠅 (只能吃小型獵物)",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小容器即可，需保持通風。適合放在辦公桌上的療癒系寵物。",
      "care": "因為體型小，只能餵食果蠅或剛孵化的針頭蟋蟀。需注意水分補充。",
      "breeding": "卵鞘非常小，孵化出的小螳螂如螞蟻般大，照顧不易。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_88.jpg"
  },
  {
    "id": 89,
    "name": "肯亞斑馬馬陸",
    "scientificName": "Telodeinopus aoutii",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/蔬果",
    "type": "倍足綱",
    "description": "外型黑白相間成環狀條紋，像斑馬一樣，腳是橘紅色的。體型適中（約 15cm），個性活躍，喜歡在地面爬行，是入門馬陸的首選。",
    "diet": "腐植土、小黃瓜、蘑菇、落葉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil",
        "easy"
      ]
    },
    "guide": {
      "setup": "底材需使用腐植土，厚度約 10cm。需保持濕潤但不要積水。",
      "care": "主要吃土，蔬果當零食（2-3天一次）。需補充鈣粉以利脫皮。",
      "breeding": "繁殖相對容易，在適當環境下會自行產卵並孵化出白色小馬陸。"
    },
    "nickname": "千足蟲",
    "image": "data/images/unique_89.jpg"
  },
  {
    "id": 90,
    "name": "綠巨螳螂",
    "scientificName": "Hierodula membranacea",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "體型巨大且強壯的經典綠色螳螂。適應力極強，食慾旺盛，幾乎不生病，是許多螳螂飼養者的入門第一隻螳螂。",
    "diet": "蟑螂、蟋蟀、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "一般通風容器，需放置樹枝。空間高度需足夠。",
      "care": "非常耐操，就算兩三天沒噴水也撐得住。食量大，成蟲可吃杜比亞成體。",
      "breeding": "交配容易，產卵量大。小螳螂非常強壯，育成率高。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_90.jpg"
  },
  {
    "id": 91,
    "name": "黃緣龍蝨",
    "scientificName": "Cybister limbatus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "極高濕 (水族箱)",
    "spaceLabel": "水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內",
    "dietLabel": "死魚/昆蟲",
    "type": "甲蟲",
    "description": "體型僅次於日本源氏龍蝨的大型水棲甲蟲。鞘翅邊緣有黃色條紋。泳技高超，也會飛行。在野外已越來越少見。",
    "diet": "死魚、乾燥蝦、紅蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "live"
      ]
    },
    "guide": {
      "setup": "有蓋的水族箱（防飛），需設置陸地或突出水面的木頭。水質需保持乾淨。",
      "care": "成蟲是清道夫，餵食容易。吃飽後會浮在水面休息。",
      "breeding": "幼蟲需要活餌，且會自相殘殺，繁殖難度主要在於幼蟲期的隔離飼養。"
    },
    "nickname": "甲蟲",
    "image": "data/images/unique_91.jpg"
  },
  {
    "id": 92,
    "name": "蘇拉維西巨扁鍬形蟲",
    "scientificName": "Dorcus titanus typhon",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "產於印尼蘇拉維西島。體型巨大厚實，大顎內齒位置變異多。雖然沒有蘇門答臘巨扁那麼兇殘，但依然充滿霸氣，且價格通常較親民。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "單獨飼養。容器需堅固防逃。底材使用木屑。",
      "care": "非常強健，適合新手嘗試飼養大型外國扁鍬。注意通風以免木屑發霉。",
      "breeding": "產卵量大，幼蟲對菌瓶適應性佳，容易養出大個體。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_92.jpg"
  },
  {
    "id": 93,
    "name": "墨西哥火腳捕鳥蛛",
    "scientificName": "Brachypelma boehmei",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (24-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "腳部呈現鮮豔的火紅色，背甲是米色，非常搶眼。生長緩慢，壽命極長（母蛛可活 20 年以上）。個性比紅膝頭稍微神經質一點，容易踢毛。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "地棲型，提供躲避屋。底材保持乾燥，僅水盆周圍稍微噴濕。",
      "care": "不需常餵食。若屁股禿了一塊是踢毛的跡象，需避免驚擾。",
      "breeding": "繁殖相對容易，但需等待多年至性成熟。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_93.jpg"
  },
  {
    "id": 94,
    "name": "皇帝巴布蜘蛛",
    "scientificName": "Pelinobius muticus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/偏乾 (50-60%)",
    "spaceLabel": "深底飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/小鼠",
    "type": "蜘蛛",
    "description": "非洲地棲蜘蛛的王者。全身呈現絲絨般的紅褐色，後腳粗壯。性格**極度兇猛**，受到威脅會發出摩擦聲並攻擊。擁有很強的挖掘能力。",
    "diet": "大蟑螂、乳鼠",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "必須給予非常厚的底材（15cm以上）供其築巢。通常躲在地底不常出來。",
      "care": "生長非常緩慢（Old World species）。毒性較強，切勿徒手接觸。",
      "breeding": "公蛛交配風險極高。幼體成長至成體可能需要 5-7 年。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_94.jpg"
  },
  {
    "id": 95,
    "name": "哥倫比亞南瓜捕鳥蛛",
    "scientificName": "Hapalopus sp. Colombia",
    "difficulty": "新手",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "小型飼養盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "小型蜘蛛（成體約 6-8cm）。腹部有著像南瓜一樣的橘黑色斑紋，非常可愛。產絲量大，食慾好，生長速度快，是受歡迎的小型種。",
    "diet": "針頭蟋蟀、櫻桃紅蟑",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型容器即可。會佈置大量的絲網，需放樹枝或遮蔽物作為結網支點。",
      "care": "動作稍微快一點，開蓋需注意。保持環境微濕。",
      "breeding": "因為體型小，繁殖週期短。產量適中。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_95.jpg"
  },
  {
    "id": 96,
    "name": "香蕉蟑螂",
    "scientificName": "Panchlora nivea",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "甜食/水果",
    "type": "蜚蠊",
    "description": "全身呈現夢幻的淺綠色（像未熟的香蕉），非常美麗。體型小，**飛行能力極強**。成蟲只吃甜食（花粉、蜂蜜、水果）。幼蟲是褐色的土棲型。",
    "diet": "香蕉、蜂蜜、花粉、果凍",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "底材使用腐植土（供幼蟲居住）。**務必注意防逃**，開蓋建議在網子內操作。",
      "care": "成蟲壽命短。需保持高濕度，太乾會死亡。成蟲幾乎不吃固體飼料。",
      "breeding": "繁殖容易，但幼蟲很小且鑽土，清理底材時需小心。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_96.jpg"
  },
  {
    "id": 97,
    "name": "東方水蠊",
    "scientificName": "Opisthoplatia orientalis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料",
    "type": "蜚蠊",
    "description": "以前是中藥材（土鱉的一種），現在常被當作寵物。黑底帶有金黃色邊緣，體型扁平。主要生活在潮濕的落葉堆或水邊。不會飛，不會爬光滑面。",
    "diet": "魚飼料、落葉、蔬果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "非常喜歡水，環境可以佈置得像兩棲缸（水陸兩棲）。底材需長期保持濕潤。",
      "care": "非常好養，食量大。適合群養。",
      "breeding": "卵胎生。繁殖速度快，幼體需要在非常潮濕的環境下成長。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_97.jpg"
  },
  {
    "id": 98,
    "name": "蓋亞那粉紅趾",
    "scientificName": "Avicularia avicularia",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "直立式透氣盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "最經典的樹棲型毛蜘蛛。全身黑色長毛，腳尖是可愛的粉紅色。個性溫和，會噴尿防禦但不咬人。適合做為樹棲蜘蛛的入門種。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "直立容器，放置樹皮。**極度重視通風**，悶熱會導致暴斃。",
      "care": "不需太高濕度，提供水盆即可。擅長跳躍，開蓋需注意。",
      "breeding": "繁殖相對容易，但幼體較脆弱，對通風要求高。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_98.jpg"
  },
  {
    "id": 99,
    "name": "巨人枯葉螳螂",
    "scientificName": "Deroplatys truncata",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "枯葉螳螂家族中體型最大、胸板最寬闊的品種。擬態能力極強，靜止時完全就是一片枯葉。威嚇時會展開翅膀露出背後的眼睛斑紋。",
    "diet": "蟑螂、蟋蟀、飛蛾",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "模擬雨林底層環境，放置闊葉植物的枯葉與樹枝。需保持高濕度。",
      "care": "比一般枯葉螳螂更怕熱，需注意溫度控制。只吃活餌。",
      "breeding": "母蟲非常兇猛，交配時公蟲極易被捕食。需先將母蟲餵飽。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_99.jpg"
  },
  {
    "id": 100,
    "name": "馬來西亞雨林蠍",
    "scientificName": "Heterometrus spinifer",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "與亞洲雨林蠍相似但體型更大、螯肢更修長且表面較光滑。性格比亞洲雨林蠍更兇猛積極，被激怒時會發出噴氣聲。色澤在光線下呈現墨綠色。",
    "diet": "蟋蟀、大麥蟲、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "高濕度環境，底材使用椰土。放置大型躲避物。水盆必備。",
      "care": "耐餓耐操。雖然有毒性但通常不強，不過螯的夾力很大，被夾到會流血。",
      "breeding": "卵胎生。繁殖方式與其他雨林蠍相同，母蠍會護幼。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_100.jpg"
  },
  {
    "id": 101,
    "name": "巴西黑捕鳥蛛",
    "scientificName": "Grammostola pulchra",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "毛蜘蛛界的「黑色拉布拉多」。全身漆黑帶有絲絨般的光澤，個性極度溫馴、穩定，幾乎不踢毛也不咬人。生長緩慢但壽命極長，是完美的傳家寶寵物。",
    "diet": "蟋蟀、紅蟑、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "地棲型，底材（椰土）鋪設約 5-10 公分。放置一個躲避穴。環境保持乾燥，僅水盆周圍噴濕。",
      "care": "食慾通常不錯，但偶爾會長時間拒食（甚至長達數月），這是正常現象。非常耐命。",
      "breeding": "公蛛成熟期長，母蛛更長（約 5-8 年）。繁殖容易，但等待長大需要極大耐心。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_101.jpg"
  },
  {
    "id": 102,
    "name": "索科特拉藍巴布",
    "scientificName": "Monocentropus balfouri",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "乾燥 (30-40%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "少數可以「群養」的毛蜘蛛！來自索科特拉島，擁有夢幻的奶油色背甲與金屬藍色的腿。雖然屬於巴布類（較兇），但在群體中展現出驚人的社會性。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥厚底材，放置大量樹枝與躲避物。群養時需確保食物充足，並觀察是否有个體落單。",
      "care": "織網量大，會將環境佈置成絲綢迷宮。非常耐旱，怕濕。",
      "breeding": "母蛛護幼行為極強，甚至會捕捉獵物回來餵食幼蛛，觀察其親子互動是一大樂趣。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_102.jpg"
  },
  {
    "id": 103,
    "name": "五角大兜蟲",
    "scientificName": "Eupatorus gracilicornis",
    "difficulty": "新手",
    "tempLabel": "涼爽/常溫 (20-25°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "外型像小時候畫的昆蟲，擁有五支角（頭角一支、胸角四支）。外殼呈現漂亮的蜜糖色與黑色光澤。性格非常溫和可愛，像個玩具。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "一般中型飼養箱即可。不需要太大的活動空間。底材使用微濕木屑。",
      "care": "成蟲壽命較短（約 2-4 個月），需把握觀賞期。主要分佈於泰國與越南。",
      "breeding": "產卵容易，幼蟲期約 1 年。對土質要求不高，一般兜土即可養得很好。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_103.jpg"
  },
  {
    "id": 104,
    "name": "熊貓王鼠婦",
    "scientificName": "Cubaris sp. 'Panda King'",
    "difficulty": "新手",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "等足目",
    "description": "Cubaris 屬的入門首選。黑白相間的配色像極了熊貓，模樣討喜。相較於小鴨鼠婦，熊貓王非常強健、繁殖速度快，價格也親民許多。",
    "diet": "枯葉、魚飼料、紅蘿蔔、鈣粉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "喜歡潮濕且通風差一點的環境（厚鋪底材）。需放置鈣源（墨魚骨）。",
      "care": "喜歡鑽土，常常躲在土層中間。只要保持濕度，幾乎不會失敗。",
      "breeding": "繁殖力強，很快就能從 10 隻變成 100 隻。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_104.jpg"
  },
  {
    "id": 105,
    "name": "白斑刺椿象",
    "scientificName": "Platymeris biguttatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "乾燥 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "半翅目",
    "description": "來自非洲的肉食性椿象。黑色身體背上有兩個明顯的白點。獵食時會用口器刺入獵物注入消化液。**具有微毒性**，受到驚嚇可能會噴射毒液，需小心。",
    "diet": "蟋蟀、麵包蟲、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥底材（沙或椰土），放置樹皮與紙蛋盒。需群養才能觀察其社會行為。",
      "care": "**切勿徒手抓取**，被刺到會非常痛。開蓋時臉部不要靠太近以防噴毒（建議戴護目鏡）。",
      "breeding": "孤雌生殖（部分說法）或有性生殖。卵產於土表，孵化後的小椿象需分開餵食小獵物。"
    },
    "nickname": "半翅目",
    "image": "data/images/unique_105.jpg"
  },
  {
    "id": 106,
    "name": "彩虹千足蟲 (馬陸)",
    "scientificName": "Tonkinbolus dollfusii",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/蔬果",
    "type": "倍足綱",
    "description": "體色呈現灰藍色與鮮紅色環狀條紋，非常顯眼美麗。體型較小（約 10cm），比非洲大馬陸更活躍，常在地面爬行。",
    "diet": "腐植土、小黃瓜、地瓜、落葉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil",
        "easy"
      ]
    },
    "guide": {
      "setup": "厚鋪腐植土（10cm），保持濕潤。這類馬陸更依賴腐植土作為主食。",
      "care": "非常溫和，適合上手（但仍要注意分泌液）。對乾燥環境抵抗力差。",
      "breeding": "繁殖容易，常常在飼養箱中發現白色的小寶寶。"
    },
    "nickname": "千足蟲",
    "image": "data/images/unique_106.jpg"
  },
  {
    "id": 107,
    "name": "草莓寄居蟹",
    "scientificName": "Coenobita perlatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "中大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "室內",
    "dietLabel": "雜食/需海水盆",
    "type": "寄居蟹",
    "description": "全身通紅佈滿白色斑點，像極了一顆草莓。是陸寄居蟹中最漂亮的品種之一，但也是**對海水依賴度最高**的一種，飼養難度較灰白寄居蟹高。",
    "diet": "死魚、水果、爆米花、海鹽水",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "必須設置**深及可全身浸泡的海水盆**，且需每日更換保持水質。底沙需夠深。",
      "care": "若缺乏海水浸泡，身體顏色會變淡且容易死亡。需要高濕度環境。",
      "breeding": "人工繁殖極難，幼體需海洋浮游期。"
    },
    "nickname": "寄居蟹",
    "image": "data/images/unique_107.jpg"
  },
  {
    "id": 108,
    "name": "巨人胡椒蟑螂",
    "scientificName": "Archimandrita tessellata",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "蜚蠊",
    "description": "體型巨大寬扁，翅膀上有如胡椒撒過的黑褐色斑點。是少數成體壽命很長的蟑螂（可活 1-2 年）。行動緩慢笨重，手感厚實，非常適合作為寵物。",
    "diet": "狗糧、紅蘿蔔、枯葉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底材使用腐植土混合大量枯葉。雖然有翅膀但幾乎飛不起來，爬牆能力也弱。",
      "care": "非常溫馴，幾乎不會亂跑。幼蟲期較長，約需一年成熟。",
      "breeding": "胎生，產量大。群養時需注意空間，太擠會互咬翅膀。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_108.jpg"
  },
  {
    "id": 109,
    "name": "土耳其長臂金龜",
    "scientificName": "Propomacrus bimucronatus",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/果凍",
    "type": "甲蟲",
    "description": "公蟲擁有超長的前腳（長臂），上面有發達的刺。體色為黑褐色帶有絨毛。因為台灣本土長臂金龜為保育類，這是少數可以合法飼養的國外長臂金龜。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲活動力強，建議使用較高的容器並放置樹枝。注意溫控。",
      "care": "幼蟲期需使用高發酵腐植土，且後期會製作土繭，需避免震動。",
      "breeding": "繁殖難度中等，重點在於幼蟲化蛹時的環境穩定度。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_109.jpg"
  },
  {
    "id": 110,
    "name": "菲律賓葉脩",
    "scientificName": "Phyllium philippinicum",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "最常見也最好養的葉脩品種。身體像寬寬的綠色葉片，連走路都會模擬葉子隨風搖曳。生性溫和，適合新手入門擬態昆蟲。",
    "diet": "芭樂葉、橡樹葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風網箱，空間不需太大。保持每日噴水。",
      "care": "食草取得容易（芭樂葉）。分辨公母容易（公蟲細長有翅）。",
      "breeding": "主要為有性生殖，交配後產卵量大，孵化率高，容易爆籠。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_110.jpg"
  },
  {
    "id": 111,
    "name": "千里達老虎尾蜘蛛",
    "scientificName": "Psalmopoeus irminia",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "直立式透氣盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "黑色的身體腳上有著醒目的橘紅色斑紋，腹部有老虎斑紋。屬於樹棲型，移動速度快，性格較兇且神經質。雖無踢毛能力但防禦性強。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "直立飼養箱，放置軟木樹皮供其築巢。會用土與絲構築藏身處。",
      "care": "生長速度快，食慾好。因為速度快且會跳，開蓋餵食需謹慎。",
      "breeding": "繁殖容易，產量適中。幼體活潑好動。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_111.jpg"
  },
  {
    "id": 112,
    "name": "巴西鮭魚粉捕鳥蛛",
    "scientificName": "Lasiodora parahybana",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/小鼠",
    "type": "蜘蛛",
    "description": "世界上第三大的蜘蛛，但價格非常便宜。生長速度如吹氣球般快，體型巨大壯碩。性格算溫和但貪吃，踢毛能力強。",
    "diet": "大蟑螂、大麥蟲、乳鼠",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "因為體型大，需提供足夠的平面空間。底材不需太厚（不太挖掘）。",
      "care": "食量驚人，幾乎來者不拒。需注意踢毛，整理時建議戴手套。",
      "breeding": "產卵量極為恐怖（可達 2000 顆），繁殖前請務必考慮幼體去處。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_112.jpg"
  },
  {
    "id": 113,
    "name": "鹿角鍬形蟲",
    "scientificName": "Rhaetulus crenatus",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-24°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑",
    "type": "甲蟲",
    "description": "大顎彎曲且分叉，形狀優美如鹿角。台灣原生種，主要分佈於中低海拔山區。體色漆黑光亮。性格較神經質。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲需低溫飼養，超過 28度 易死亡。單獨飼養。",
      "care": "成蟲壽命約 3-6 個月。對震動敏感。",
      "breeding": "產卵木需挑選偏硬的櫟木，且需埋入土中。幼蟲適合使用發酵木屑飼養。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_113.jpg"
  },
  {
    "id": 114,
    "name": "橙頭蟑螂",
    "scientificName": "Eublaberus posticus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/肉類",
    "type": "蜚蠊",
    "description": "頭部呈現鮮豔的橘紅色，翅膀寬大。體型中大型。非常貪吃，尤其喜歡蛋白質（肉類），常被當作優質的活餌飼料，但也適合當寵物。",
    "diet": "狗糧(高蛋白)、廚餘、麥片",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底部鋪土或裸缸加蛋盒皆可。不會爬光滑牆面。",
      "care": "食量極大，若蛋白質不足會互咬翅膀。處理速度快，是很好的廚餘分解者。",
      "breeding": "胎生，繁殖速度極快。幼蟲喜歡鑽土。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_114.jpg"
  },
  {
    "id": 115,
    "name": "紅番茄蟹",
    "scientificName": "Geosesarma sp. 'Red Tomato'",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "極高濕 (水陸兩棲)",
    "spaceLabel": "生態缸",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "室內/植物燈",
    "dietLabel": "雜食/紅蟲",
    "type": "甲殼類",
    "description": "與惡魔吸血蟹同屬的陸棲蟹。全身呈現鮮豔的番茄紅。體型嬌小，適合飼養在種滿植物的兩棲生態缸中，非常搶眼。",
    "diet": "冷凍紅蟲、魚飼料、沈底飼料",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "live"
      ]
    },
    "guide": {
      "setup": "水陸比例約 4:6，需有乾淨水區供脫皮與補充水分。陸地需保持濕潤。",
      "care": "群養容易打架，需提供大量躲避物（沈木、火山岩）。對水質敏感。",
      "breeding": "大卵型繁殖，母蟹會將幼蟹揹在腹部直到能夠獨立活動。"
    },
    "nickname": "甲殼類",
    "image": "data/images/unique_115.jpg"
  },
  {
    "id": 116,
    "name": "白玉蝸牛",
    "scientificName": "Lissachatina fulica 'White Jade'",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "潮濕 (70-90%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/室內",
    "dietLabel": "蔬果/鈣粉",
    "type": "腹足綱",
    "description": "非洲大蝸牛的白化品種。擁有潔白的身體與紅褐色的殼，像玉一樣漂亮。食量大、生長快，互動性高，是非常受歡迎的寵物蝸牛。",
    "diet": "地瓜葉、小黃瓜、紅蘿蔔、墨魚骨(補鈣)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "底材使用椰土，保持濕潤。需每日噴水。蓋子需扣緊防逃。",
      "care": "極度好養。需注意鈣質補充，否則殼會變薄易碎。怕鹽分。",
      "breeding": "雌雄同體但異體受精。產卵量大（一次數百顆），繁殖容易到需要控制數量。"
    },
    "nickname": "大蝸牛",
    "image": "data/images/unique_116.jpg"
  },
  {
    "id": 117,
    "name": "刺蝟鼠婦",
    "scientificName": "Cristarmadillidium muricatum",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-25°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/枯葉",
    "type": "等足目",
    "description": "外型極度特殊，背上佈滿了尖刺，像一隻迷你的甲龍或刺蝟。體型很小（不到 1cm），行動緩慢，喜歡裝死。是收藏家等級的鼠婦。",
    "diet": "腐植土、優質枯葉、魚飼料粉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "不需要太大的空間，底材需使用高品質的腐葉土。保持微濕。",
      "care": "生長非常緩慢，對環境變動敏感。不建議頻繁開蓋打擾。",
      "breeding": "繁殖難度高且產量少，加上成長慢，價格通常較高。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_117.jpg"
  },
  {
    "id": 118,
    "name": "紅翼青龍竹節蟲",
    "scientificName": "Achrioptera manga",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/通風 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "竹節蟲界的顏值擔當。公蟲呈現極其鮮豔的金屬藍色，配上橘紅色的翅膀（雖然不會飛），視覺衝擊力極強。母蟲則為較普通的褐色。",
    "diet": "芭樂葉、橡樹葉、懸鉤子",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "必須使用大型網箱，且通風要非常好。環境不可過度潮濕。",
      "care": "比較神經質，受干擾時會摩擦翅膀發聲。對通風要求高，悶熱易死。",
      "breeding": "有性生殖。公蟲壽命較短，需把握配對時機。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_118.jpg"
  },
  {
    "id": 119,
    "name": "毛倫坎普大兜蟲",
    "scientificName": "Chalcosoma moellenkampi",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-24°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/果凍",
    "type": "甲蟲",
    "description": "南洋大兜蟲屬的一員，也是該屬體型最大的。特徵是胸角比較狹長且平行高聳，呈現 V 字型。產於婆羅洲高山，極度怕熱。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "大型容器，必須溫控。性格比高加索大兜蟲稍微溫和一點點，但仍具攻擊性。",
      "care": "對溫度非常敏感，超過 25 度容易死亡或拒食。",
      "breeding": "繁殖難度高，幼蟲期長，且對土質要求挑惕，是挑戰級的大兜蟲。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_119.jpg"
  },
  {
    "id": 120,
    "name": "麗眼斑螳螂",
    "scientificName": "Creobroter gemmatus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "亞洲常見的花螳螂。綠色為底，翅膀上有非常顯眼、像笑臉一樣的眼斑圖案。體型嬌小（約 3-4cm），容易飼養。",
    "diet": "蒼蠅、果蠅、小型蟋蟀",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型通風容器即可。適合不想佔空間的玩家。",
      "care": "食慾好，生長快。因體型小，需餵食較小的獵物。",
      "breeding": "繁殖非常容易，公母配對意願高。卵鞘孵化期短。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_120.jpg"
  },
  {
    "id": 121,
    "name": "派瑞叉角鍬形蟲",
    "scientificName": "Hexarthrius parryi",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/菌瓶",
    "type": "甲蟲",
    "description": "特徵是鞘翅前端有明顯的橘黃色區塊（依亞種不同而有變化）。大顎粗壯且下彎，極具力量感。性格兇猛。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "單獨飼養。交配時需特別注意母蟲安全，公蟲可能會夾死母蟲。",
      "care": "成蟲壽命約 6-8 個月。對溫度適應力尚可，但建議不要太熱。",
      "breeding": "產卵木需挑選偏軟的材質。幼蟲使用菌瓶飼養效果極佳。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_121.jpg"
  },
  {
    "id": 122,
    "name": "墨西哥金背紅尾捕鳥蛛",
    "scientificName": "Brachypelma albiceps",
    "difficulty": "新手",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "配色非常高雅：漆黑的身體、金黃色的背甲、加上鮮紅色的腹部毛。性格溫馴，生長速度慢，也是非常適合新手的地棲型蜘蛛。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥底材，提供躲避。不太需要高濕度，水盆必備。",
      "care": "非常耐命，久久餵一次即可。踢毛情況比紅膝頭少一點。",
      "breeding": "成長非常緩慢，從幼體到成體可能需要 3-5 年。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_122.jpg"
  },
  {
    "id": 123,
    "name": "加拉巴哥巨人蜈蚣",
    "scientificName": "Scolopendra galapagoensis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/防逃",
    "lightLabel": "陰暗處",
    "dietLabel": "活體/肉類",
    "type": "蜈蚣",
    "description": "傳說級的蜈蚣，體型巨大且粗壯（可達 30cm+），體色呈現黑亮色或深棕色。極其稀有且昂貴，是蜈蚣玩家的終極目標。毒性不明但肯定很痛。",
    "diet": "大蟑螂、乳鼠、雞肉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live",
        "easy"
      ]
    },
    "guide": {
      "setup": "極度重視防逃。大型容器，底材需深厚保濕。提供大塊樹皮躲藏。",
      "care": "性格兇猛，動作迅速。餵食需極度小心。價格昂貴，飼養壓力大。",
      "breeding": "人工繁殖紀錄極少，資料稀缺。"
    },
    "nickname": "蜈蚣",
    "image": "data/images/unique_123.jpg"
  },
  {
    "id": 124,
    "name": "哥倫比亞雷射大蘭多",
    "scientificName": "Xenesthis immanis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "體型巨大的華麗蜘蛛。背甲上有著像雷射般的紫色星芒圖案，非常夢幻。食慾極佳，生長速度快，觀賞性一流。",
    "diet": "大蟑螂、大麥蟲、乳鼠",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需要較大的地面空間。底材需保持一定濕度，不可太乾。",
      "care": "雖然有踢毛能力，但通常比較喜歡逃跑而非攻擊。食量很大。",
      "breeding": "公蛛養成速度快，常發生公蛛成熟但母蛛還太小的情況。價格中高。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_124.jpg"
  },
  {
    "id": 125,
    "name": "黃紋鋸鍬形蟲",
    "scientificName": "Prosopocoilus inclinatus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "日本著名的鍬形蟲（水牛）。大顎彎曲優美。雖名為「黃紋」，但其實多數個體為紅褐色或黑色。適應力強，活動力旺盛。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "一般中型飼養箱。攀爬能力強，需注意加蓋。",
      "care": "成蟲壽命較短（約數個月），主要活躍於夏季。容易飼養。",
      "breeding": "產卵木需挑選偏軟的材質。幼蟲飼養容易，適合練習養蟲。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_125.jpg"
  },
  {
    "id": 126,
    "name": "北非肥尾蠍",
    "scientificName": "Androctonus australis",
    "difficulty": "專家",
    "tempLabel": "高溫 (28-35°C)",
    "humidityLabel": "極乾燥 (20-30%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "世界上**毒性最強**的蠍子之一。尾巴非常粗壯（肥尾），性格極度兇猛神經質，受干擾會發出摩擦聲並攻擊。**絕對禁止新手飼養**，僅供專業玩家收藏。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "沙漠環境，底材使用爬蟲沙。放置岩石躲避。幾乎不需要水盆（偶爾滴水即可）。",
      "care": "操作時必須使用長鑷子，保持絕對專注。被螫傷有生命危險。",
      "breeding": "繁殖風險極高，母蠍極易攻擊公蠍。幼蠍成長慢。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_126.jpg"
  },
  {
    "id": 127,
    "name": "澳洲寬腹螳螂",
    "scientificName": "Hierodula majuscula",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "澳洲最大的螳螂之一。體色翠綠，前腳內側有鮮豔的橘紅色與黑色斑點。食慾與攻擊性都非常強，是不挑食的好寶寶。",
    "diet": "蟑螂、蟋蟀、大麥蟲",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "一般通風網箱即可，需放置樹枝。適應力強。",
      "care": "食量很大，需穩定餵食。成蟲體型壯碩，可捕食較大的獵物。",
      "breeding": "交配容易，產卵量大。非常適合想嘗試外國螳螂的新手。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_127.jpg"
  },
  {
    "id": 128,
    "name": "木瓜鼠婦",
    "scientificName": "Cubaris sp. 'Papaya'",
    "difficulty": "進階",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "等足目",
    "description": "全身呈現粉嫩的粉紅色，像熟透的木瓜。屬於 Cubaris 屬（跟小鴨、熊貓王同屬），因此也需要較高的濕度與厚土。",
    "diet": "枯葉、魚飼料、紅蘿蔔、鈣粉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "厚鋪腐葉土與椰土，保持濕潤。需補充鈣質（墨魚骨）。",
      "care": "顏色非常夢幻，深受女性玩家喜愛。怕乾燥。",
      "breeding": "繁殖速度中等，比熊貓王慢一點，但比小鴨快。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_128.jpg"
  },
  {
    "id": 129,
    "name": "黑粗尾蠍",
    "scientificName": "Parabuthus transvaalicus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "乾燥 (20-30%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "全身漆黑，尾巴粗壯有力。特徵是會**噴射毒液**（可達 1 公尺遠），若噴入眼睛會造成劇痛甚至失明。毒性強，性格兇猛。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥沙漠環境。因會噴毒，操作時需戴護目鏡，且建議使用較高的飼養箱。",
      "care": "極度耐旱。主要透過食物攝取水分。開蓋需極度謹慎。",
      "breeding": "成長速度快，繁殖容易，但因危險性高，需謹慎評估。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_129.jpg"
  },
  {
    "id": 130,
    "name": "綠香蕉蟑螂",
    "scientificName": "Panchlora sp. 'Giant'",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "甜食/水果",
    "type": "蜚蠊",
    "description": "比一般香蕉蟑螂體型更大的品種。成蟲全身翠綠，非常美麗。飛行能力強，且喜歡鑽土。成蟲偏好甜食。",
    "diet": "香蕉、花粉、果凍、蜂蜜",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "厚鋪腐植土供幼蟲鑽。務必注意防逃（會飛也會爬壁）。",
      "care": "需保持高濕度，環境太乾會迅速死亡。成蟲壽命短。",
      "breeding": "繁殖容易，幼蟲是褐色土棲型，長大後才會變綠。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_130.jpg"
  },
  {
    "id": 131,
    "name": "印度華麗雨林",
    "scientificName": "Poecilotheria regalis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "直立式透氣盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "華麗雨林屬的代表種。黑白灰交織的幾何圖案，腹部下方有一條黃色橫帶。體型大、速度快、毒性強。是進階玩家必收的經典物種。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "直立式容器，提供軟木樹皮躲藏。對光線敏感。",
      "care": "移動速度極快（瞬間移動），開蓋餵食需全神貫注。咬傷極痛。",
      "breeding": "公母配對風險高。幼體生長速度快。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_131.jpg"
  },
  {
    "id": 132,
    "name": "少棘蜈蚣",
    "scientificName": "Scolopendra subspinipes",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/防逃",
    "lightLabel": "陰暗處",
    "dietLabel": "活體/肉類",
    "type": "蜈蚣",
    "description": "廣泛分佈於亞洲的大型蜈蚣（包含台灣常見的紅頭蜈蚣）。體色變異多，有紅頭、黑頭、黃腳、紅腳等。性情兇猛，毒性強。",
    "diet": "蟑螂、蟋蟀、肉塊",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live",
        "easy"
      ]
    },
    "guide": {
      "setup": "高度防逃容器。底材使用潮濕椰土。需提供躲避。",
      "care": "非常貪吃，生長快。需注意環境清潔以免滋生蟎蟲。",
      "breeding": "母蜈蚣會抱卵護幼，期間非常神經質，不可打擾。"
    },
    "nickname": "蜈蚣",
    "image": "data/images/unique_132.jpg"
  },
  {
    "id": 133,
    "name": "虎紋發聲蟑螂",
    "scientificName": "Gromphadorhina grandidieri",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料",
    "type": "蜚蠊",
    "description": "馬達加斯加蟑螂的一種，體型巨大且黑得發亮，背上有明顯的橘紅色條紋（虎紋）。同樣會發出噴氣聲。比普通馬達加斯加蟑螂更稀有一點。",
    "diet": "狗糧、水果、麥片",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "滑壁容器，抹凡士林防逃。放置蛋盒。",
      "care": "強壯好養，壽命長。適合上手把玩（需習慣牠們的腳刺）。",
      "breeding": "胎生，繁殖容易。幼體成長需要時間。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_133.jpg"
  },
  {
    "id": 134,
    "name": "芽翅螳螂",
    "scientificName": "Parasphendale agrionina",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "乾燥 (40-60%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "來自非洲，特徵是翅膀短小（母蟲）。身體呈現灰褐色，前腳內側黑色。非常強壯耐旱，食慾極佳，被稱為「螳螂界的蟑螂」（指其生命力）。",
    "diet": "蟑螂、蟋蟀",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風乾燥環境。不需要太高的濕度。",
      "care": "非常耐餓，食量大且不挑食。適合完全沒有經驗的新手。",
      "breeding": "產卵量大，孵化率極高。母蟲產卵後需大量補充營養。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_134.jpg"
  },
  {
    "id": 135,
    "name": "紅圓翅鍬形蟲",
    "scientificName": "Neolucanus swinhoei",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑",
    "type": "甲蟲",
    "description": "台灣特有種。鞘翅呈現亮麗的紅褐色，像上過漆一樣，頭部與胸部為黑色。是少數在「秋天」發生的鍬形蟲。大顎短小，主要靠強壯的腳力。",
    "diet": "幼蟲：發酵木屑(偏土) / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲壽命短（約 1-2 個月）。主要享受其美麗的色澤。",
      "care": "幼蟲期需吃發酵程度極高的木屑或腐植土，且不吃菌瓶。生長週期特別，有時需兩年。",
      "breeding": "產卵容易，但幼蟲飼養難度較高，容易因土質不合而拒食。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_135.jpg"
  },
  {
    "id": 136,
    "name": "孔夫子鋸鍬形蟲",
    "scientificName": "Prosopocoilus confucius",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (20-25°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑",
    "type": "甲蟲",
    "description": "世界上體長最長的鋸鍬形蟲之一。大顎修長且彎曲幅度優美，內齒分佈獨特。主要分佈於越南與中國。黑亮的身體非常有質感。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲大顎長，需較大的空間活動。建議溫控。",
      "care": "成蟲脾氣較大。幼蟲期較長，需有耐心。",
      "breeding": "產卵木需挑選軟硬適中的材質。幼蟲適合使用發酵木屑飼養。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_136.jpg"
  },
  {
    "id": 137,
    "name": "綠巨竹節蟲",
    "scientificName": "Diapherodes gigantea",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "母蟲體型巨大且呈現鮮豔的萊姆綠色，背上有兩片退化的小翅膀，非常美麗壯觀。公蟲體型較小呈褐色，有翅膀會飛。",
    "diet": "芭樂葉、橡樹葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型網箱必備。因為體重重，攀爬枝需夠穩固。",
      "care": "食量巨大，葉片消耗快。需注意通風以免生病。",
      "breeding": "卵產於土中，孵化期長。若蟲通常為褐色，長大才會變綠。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_137.jpg"
  },
  {
    "id": 138,
    "name": "大衛長臂金龜",
    "scientificName": "Cheirotonus davidi",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-23°C)",
    "humidityLabel": "潮濕 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/果凍",
    "type": "甲蟲",
    "description": "產於中國與越南的珍貴金龜。公蟲前腳極長，鞘翅上有著迷人的金綠色斑紋。是金龜子收藏家的夢幻物種。需低溫飼養。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲前腳非常長，容器需夠寬。務必溫控，非常怕熱。",
      "care": "成蟲活動力強。幼蟲期需使用高品質腐植土，且化蛹前會做土繭，不可驚擾。",
      "breeding": "繁殖難度高，主要是溫控與幼蟲期的管理不易。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_138.jpg"
  },
  {
    "id": 139,
    "name": "千里達橄欖金捕鳥蛛",
    "scientificName": "Neoholothele incei",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "小型飼養盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "小型種，擁有美麗的橄欖金色與黑色條紋。產絲量大。特點是**可以群養**（只要食物充足），是觀察蜘蛛社會行為的好選擇。",
    "diet": "針頭蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "佈置大量樹枝與躲避物，牠們會織出厚厚的網。群養需從小開始。",
      "care": "生長速度快，食慾好。雖然體型小但動作敏捷。",
      "breeding": "繁殖容易，母蛛護幼性強。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_139.jpg"
  },
  {
    "id": 140,
    "name": "安達祐實大鍬形蟲",
    "scientificName": "Dorcus antaeus",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (20-25°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "菌瓶/果凍",
    "type": "甲蟲",
    "description": "大鍬形蟲中的人氣王。身體寬闊厚實，黑色光亮，大顎彎曲有力。產地眾多（印度、不丹、寮國等），不同產地的大顎型態略有不同。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "喜歡安靜陰暗的環境。公蟲非常長壽（可活 2-3 年）。",
      "care": "越冬能力強。需注意夏天溫度不可過高。",
      "breeding": "產卵木需偏硬。幼蟲使用菌瓶飼養效果顯著，是挑戰極限尺寸的熱門蟲種。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_140.jpg"
  },
  {
    "id": 141,
    "name": "菲律賓小刺竹節蟲",
    "scientificName": "Sungaya inexpectata",
    "difficulty": "新手",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "潮濕 (60-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "體型矮胖，背上有刺，像小恐龍一樣。受到驚嚇會翹起腹部示威。非常強健好養，且對食草接受度高。",
    "diet": "芭樂葉、黃金葛、朱槿",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "一般通風容器，底部鋪土供產卵（或不鋪土收集卵）。",
      "care": "非常耐命，適合小朋友飼養。偶爾噴水即可。",
      "breeding": "孤雌生殖或兩性生殖皆可。產卵量適中，孵化容易。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_141.jpg"
  },
  {
    "id": 142,
    "name": "台灣大蟋蟀",
    "scientificName": "Brachytrupes portentosus",
    "difficulty": "新手",
    "tempLabel": "常溫 (22-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "深底飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/植物",
    "type": "直翅目",
    "description": "台灣體型最大的蟋蟀，體長可達 4cm。頭部圓大，擅長挖掘深洞。公蟲鳴聲低沉響亮。是鄉間常見的昆蟲，現已較少見。",
    "diet": "地瓜、胡蘿蔔、狗飼料、花生",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant",
        "easy"
      ]
    },
    "guide": {
      "setup": "必須提供深度 20cm 以上的土供其挖掘巢穴。**單獨飼養**，領域性極強會互咬。",
      "care": "雜食性好餵養。晚上會鳴叫，需考慮隔音。",
      "breeding": "母蟲產卵於地底巢穴深處。幼蟲孵化後需分散飼養以免互食。"
    },
    "nickname": "鳴蟲 / 大肚馬仔",
    "image": "data/images/unique_142.jpg"
  },
  {
    "id": 143,
    "name": "藥用土鱉",
    "scientificName": "Eupolyphaga sinensis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "乾燥 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/麥麩",
    "type": "蜚蠊",
    "description": "傳統中藥材，也是很好的寵物。母蟲無翅膀，圓圓扁扁像硬幣，會鑽土。公蟲有翅膀。完全不爬牆，不飛（母蟲），非常溫馴。",
    "diet": "麥麩、魚飼料、紅蘿蔔",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底材使用乾燥的土或麥麩。不需要任何攀爬物。",
      "care": "極度耐旱耐餓。喜歡乾燥環境，太濕會生病。",
      "breeding": "卵鞘產於土中。繁殖容易，但生長速度較慢。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_143.jpg"
  },
  {
    "id": 144,
    "name": "希拉大兜蟲",
    "scientificName": "Dynastes hyllus",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "一般/亮處",
    "dietLabel": "腐植土/果凍",
    "type": "甲蟲",
    "description": "白兜蟲家族中體型最大的品種。公蟲胸角發達，外殼呈現奶油黃色帶有不規則黑斑。雖然體型大，但性格溫和優雅。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "需較大的飼養空間。環境需保持乾燥以維持體色。",
      "care": "成蟲壽命約 3-5 個月。幼蟲期約 1.5 - 2 年，常有滯育期，需耐心等待。",
      "breeding": "產卵量大，但幼蟲化蛹時間不一，且需經歷低溫刺激才能化蛹。"
    },
    "nickname": "大兜蟲",
    "image": "data/images/unique_144.jpg"
  },
  {
    "id": 145,
    "name": "高砂深山鍬形蟲",
    "scientificName": "Lucanus maculifemoratus",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-23°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑/土",
    "type": "甲蟲",
    "description": "台灣特有亞種，分佈於高海拔山區。大顎基部有巨大的耳突，是大顎形狀最特殊的深山鍬形蟲。公蟲體表佈滿金色細毛。極度怕熱。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "**嚴格溫控**是必須的，平地室溫必死。建議使用冰箱或溫控箱。",
      "care": "成蟲壽命短，脾氣暴躁。欣賞價值高。",
      "breeding": "產卵介質需使用腐植土壓實。幼蟲需在 20 度以下的環境成長，難度高。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_145.jpg"
  },
  {
    "id": 146,
    "name": "紅爪雨林蠍",
    "scientificName": "Pandinus cavimanus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "帝王蠍的近親，但體型稍小。特徵是螯肢呈現暗紅色。性格比帝王蠍兇猛許多，不建議群養。毒性微弱。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "高濕度環境，底材使用椰土。放置躲避物。",
      "care": "雖然兇猛但主要是夾人痛，毒性不強。耐餓。",
      "breeding": "卵胎生。母蠍護幼期間請勿打擾。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_146.jpg"
  },
  {
    "id": 147,
    "name": "佛羅倫斯姬兜",
    "scientificName": "Xylotrupes florensis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/果凍",
    "type": "甲蟲",
    "description": "姬兜蟲中體型較大且粗壯的亞種。胸角發達。個性非常暴躁，兩隻公蟲見面必打架，會發出響亮的叫聲。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "單獨飼養。容器需堅固，防止被暴力頂開。",
      "care": "食量大，非常耐熱耐操。適合新手體驗大型兜蟲的飼養樂趣。",
      "breeding": "產卵量大，幼蟲好養，成長速度快。"
    },
    "nickname": "甲蟲",
    "image": "data/images/unique_147.jpg"
  },
  {
    "id": 148,
    "name": "麋鹿鍬形蟲",
    "scientificName": "Lucanus elaphus",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (20-25°C)",
    "humidityLabel": "潮濕 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑",
    "type": "甲蟲",
    "description": "產於北美洲的大型深山鍬形蟲。大顎修長分叉，形狀像麋鹿的角，非常獨特。體色為紅褐色。個性較為神經質。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "需溫控，不可過熱。單獨飼養。",
      "care": "成蟲壽命不長。大顎雖然漂亮但易斷，抓取需小心。",
      "breeding": "產卵需使用偏硬的產卵木。幼蟲期約 1 年，需經歷低溫才能化蛹。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_148.jpg"
  },
  {
    "id": 149,
    "name": "澳洲彩虹千足蟲",
    "scientificName": "Atopogonus sp.",
    "difficulty": "新手",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "腐植土/蔬果",
    "type": "倍足綱",
    "description": "體型迷你的馬陸（約 4-5cm），但顏色極度鮮豔，有紅、黑、白等斑紋。適合養在生態缸中當清潔工，觀賞價值高。",
    "diet": "腐植土、青苔、地瓜",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil",
        "easy"
      ]
    },
    "guide": {
      "setup": "生態缸底層，底材需厚且濕潤。可與其他溫和物種混養。",
      "care": "非常依賴腐植土。需注意環境不可乾燥。",
      "breeding": "容易繁殖，經常可在土中發現迷你幼體。"
    },
    "nickname": "千足蟲",
    "image": "data/images/unique_149.jpg"
  },
  {
    "id": 150,
    "name": "納米比亞擬步甲 (沙漠甲蟲)",
    "scientificName": "Onymacris unguicularis",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-35°C)",
    "humidityLabel": "極乾燥 (10-30%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "亮處/聚熱燈",
    "dietLabel": "雜食/乾燥",
    "type": "甲蟲",
    "description": "生活在納米比沙漠的奇特甲蟲。擁有霧黑色的外殼與長腿，奔跑速度快。著名的「霧氣收集者」，會倒立收集露水。極度耐旱。",
    "diet": "魚飼料、紅蘿蔔、乾燥昆蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "鋪設乾燥細沙。**完全不需要水盆**（會淹死）。偶爾在角落噴一點點水霧即可。",
      "care": "非常活躍有趣。壽命長。需保持高溫乾燥。",
      "breeding": "人工繁殖極難，幼蟲需要在特定的沙土深處成長。"
    },
    "nickname": "甲蟲",
    "image": "data/images/unique_150.jpg"
  },
  {
    "id": 151,
    "name": "巴拉望巨扁鍬形蟲",
    "scientificName": "Dorcus titanus palawanicus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "菲律賓巴拉望島的特有亞種，也是世界上體長最長的扁鍬形蟲（可超過11cm）。性格極度兇猛，領域性極強，被譽為鍬形蟲界的格鬥王者。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲力氣極大且大顎極長，需準備堅固且有深度的中大型飼養箱，絕對必須單獨飼養。",
      "care": "非常強健好養。交配時極易發生夾死母蟲的意外，必須將公蟲大顎綁住或在旁嚴密監看。",
      "breeding": "產卵木需偏軟，產卵量大。幼蟲食慾旺盛，使用菌瓶可輕易養出破百公釐的巨物。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_151.jpg"
  },
  {
    "id": 152,
    "name": "智利紅玫瑰蜘蛛",
    "scientificName": "Grammostola rosea",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "毛蜘蛛飼養史上的「經典元老」。全身覆蓋粉紅色的絨毛，個性極度溫馴且神經大條，幾乎不具攻擊性。生長非常緩慢，十分耐旱耐餓。",
    "diet": "蟋蟀、大麥蟲、紅蟑",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "地棲型，提供乾燥的底材與水盆即可，放一個躲避穴。不需太複雜的造景。",
      "care": "非常容易出現「長時間拒食」（甚至長達半年），新手常因此慌張，但通常是準備脫皮或單純不想吃。",
      "breeding": "生長週期極長，母蛛壽命可達 15-20 年以上。繁殖難度在於公母蛛的成熟時間難以配合。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_152.jpg"
  },
  {
    "id": 153,
    "name": "琴鳥花金龜",
    "scientificName": "Dicronocephalus wallichii",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "一般/亮處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "台灣特有亞種，擁有如琴鳥尾羽般美麗的鹿角狀犄角，體表覆蓋著灰白色的粉狀絨毛。多生活在中高海拔山區，非常具有仙氣的一種金龜子。",
    "diet": "幼蟲：腐植土+落葉 / 成蟲：高甜度水果、果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "環境必須溫控（怕熱）。成蟲喜歡在白天活動，可給予適當的室內散光。",
      "care": "成蟲壽命不長。身上美麗的粉末容易因為過度摩擦或環境太濕而脫落變黑。",
      "breeding": "母蟲喜歡在底層壓實的土與落葉交界處產卵，需要較特殊的腐葉土才能順利繁殖。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_153.jpg"
  },
  {
    "id": 154,
    "name": "秘魯巨人蟑螂",
    "scientificName": "Blaberus giganteus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "蜚蠊",
    "description": "世界上體型最大的蟑螂之一（可達 10cm）。擁有巨大的半透明翅膀，背板上有一個巨大的黑色斑塊。體型震撼但性格溫馴，是非常壯觀的展示寵物。",
    "diet": "狗糧、麥片、蔬果、枯葉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "成蟲體型龐大，必須給予足夠的空間與垂直的樹皮供其攀爬與羽化。不會爬光滑牆面。",
      "care": "食量大，需注意環境清潔。成蟲受到驚嚇時可能會展翅滑翔。",
      "breeding": "卵胎生。幼蟲喜歡鑽土，成長速度適中。群養時需確保空間，否則羽化易失敗。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_154.jpg"
  },
  {
    "id": 155,
    "name": "偽死人頭蟑螂",
    "scientificName": "Blaberus craniifer",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "蜚蠊",
    "description": "前胸背板上有一個酷似「骷髏頭」或「人臉」的黑色圖案，因此得名。外型搶眼，翅膀呈黑色。體型比秘魯巨人稍小，是非常受歡迎的寵物蟑螂。",
    "diet": "高蛋白飼料、水果、枯葉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "飼養方式與一般 Blaberus 屬相同。底部鋪設腐植土與紙蛋盒。",
      "care": "非常耐命好養。不會爬牆，不會飛（僅滑翔）。",
      "breeding": "繁殖速度快，若環境溫暖很快就會爆缸。幼蟲為土棲型。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_155.jpg"
  },
  {
    "id": 156,
    "name": "以色列金蠍",
    "scientificName": "Leiurus quinquestriatus",
    "difficulty": "專家",
    "tempLabel": "高溫 (28-35°C)",
    "humidityLabel": "極乾燥 (20-30%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "俗稱 Deathstalker（死亡獵手）。體色呈黃色，尾巴細長。是**世界上毒性最強的蠍子**。性格極度兇猛且移動速度極快。**極度危險，嚴禁新手飼養。**",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "絕對必須使用防逃且附有安全鎖的容器。底材使用乾燥爬蟲沙，放置石塊躲避。",
      "care": "任何操作都必須使用 30cm 以上的長鑷子，並且集中注意力。被螫傷有致命風險。",
      "breeding": "人工繁殖風險極高，母蠍具強烈攻擊性。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_156.jpg"
  },
  {
    "id": 157,
    "name": "東非刺客獵蝽",
    "scientificName": "Psytalla horrida",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "乾燥 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "半翅目",
    "description": "世界上最大的獵蝽。全身佈滿尖刺，體色黑紅相間。獵食時會用鋒利的口器刺入獵物注射毒液。群聚性強，常會集體攻擊大型獵物（如大麥蟲）。",
    "diet": "蟋蟀、大麥蟲、杜比亞",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥環境，放置大量枯枝與紙蛋盒供其躲藏。可群養。",
      "care": "**具有毒性**，被刺到會有劇烈灼熱痛感。餵食時請使用鑷子。防逃要做好。",
      "breeding": "卵產於土中或隱蔽處。幼蟲同樣具有肉食性，需提供適當大小的活餌。"
    },
    "nickname": "半翅目",
    "image": "data/images/unique_157.jpg"
  },
  {
    "id": 158,
    "name": "墨西哥紅腳捕鳥蛛",
    "scientificName": "Brachypelma emilia",
    "difficulty": "新手",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "背甲有一個非常明顯的黑色三角形圖案，腳的第三節呈現美麗的橘紅色。性格比起紅膝頭更為溫馴害羞，生長速度也非常緩慢。是極具收藏價值的品種。",
    "diet": "蟋蟀、櫻桃紅蟑",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥的地棲環境，提供椰土與躲避屋。不喜歡太濕。",
      "care": "食慾穩定但不貪吃。偶爾會踢毛。非常適合當作安靜的觀賞寵物。",
      "breeding": "繁殖容易但成長期極長。母蛛壽命極長。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_158.jpg"
  },
  {
    "id": 159,
    "name": "泰國斑馬腳蜘蛛",
    "scientificName": "Cyriopagopus albostriatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "深底飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "東南亞著名的大型穴棲蜘蛛。黑色的身體，腳上帶有明顯的白色條紋（斑馬紋）。性格兇猛且具有防禦性，移動速度快。在原產地常被當地人烤來吃。",
    "diet": "大蟑螂、蟋蟀",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "必須提供深度 10-15 公分的椰土供其挖掘深穴。平時多躲在洞裡。",
      "care": "Old world (舊大陸) 品種，毒性較強且速度快。開蓋時需防其衝出。",
      "breeding": "母蛛具強烈領域性。產量大，幼體即具有強烈穴棲傾向。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_159.jpg"
  },
  {
    "id": 160,
    "name": "新加坡藍捕鳥蛛",
    "scientificName": "Omothymus schioedtei",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "直立式透氣盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "東南亞樹棲蜘蛛的王者。成體母蛛擁有驚人的金屬藍色長腿與橄欖綠的背甲，體型可達 25cm 以上。速度極快、兇猛且具毒性。",
    "diet": "大蟋蟀、紅蟑、大麥蟲",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需要較大的直立空間，放置中空的軟木樹幹供其躲藏。需保持高濕度與高通風。",
      "care": "極其敏感且容易暴衝，防禦動作明顯。清理與餵食時需保持高度警戒。",
      "breeding": "繁殖難度高，公蛛交配風險極大。母蛛價格高昂。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_160.jpg"
  },
  {
    "id": 161,
    "name": "琥珀鼠婦",
    "scientificName": "Cubaris sp. 'Amber'",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/鈣",
    "type": "等足目",
    "description": "背部呈現如果凍般半透明的橘黃色（琥珀色），是高階鼠婦玩家必收的夢幻逸品。比起一般的 Cubaris 屬更為嬌貴，喜歡偏涼且穩定的環境。",
    "diet": "高品質枯葉、微量紅蘿蔔、墨魚骨",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "厚鋪腐葉土與椰土混合物。放置白化木或石灰岩供其躲藏與補鈣。",
      "care": "對溫度震盪敏感，夏天若超過 28 度容易傷亡。不喜歡過多的蛋白質飼料。",
      "breeding": "繁殖極度緩慢，產量少，因此市場價格居高不下。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_161.jpg"
  },
  {
    "id": 162,
    "name": "檸檬藍鼠婦",
    "scientificName": "Cubaris sp. 'Lemon Blue'",
    "difficulty": "進階",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/鈣",
    "type": "等足目",
    "description": "背部為深藍色，邊緣有鮮豔的黃色（檸檬色）裙邊，對比極其強烈。是近年來非常火紅的泰國特有種鼠婦，價格較為昂貴。",
    "diet": "枯葉、魚飼料、紅蘿蔔、石灰岩",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "典型的石灰岩洞穴物種。環境需同時具備高濕度與鈣質來源（石灰石、珊瑚骨）。",
      "care": "適應後算強健，但初期容易因為環境不適應而耗損。生性害羞喜歡鑽土。",
      "breeding": "成長速度慢，繁殖週期長，需有耐心等待族群壯大。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_162.jpg"
  },
  {
    "id": 163,
    "name": "白雪公主鼠婦",
    "scientificName": "Porcellio laevis 'White'",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "大麥町鼠婦的純白變異種。全身呈現潔白無瑕的顏色，眼睛通常為黑色或紅色。習性與大麥町一樣像豬一樣貪吃且活躍，非常好養。",
    "diet": "魚飼料、剩菜、枯葉、墨魚骨",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "塑膠盒鋪設椰土與枯葉。乾濕分離即可。",
      "care": "食慾極佳的清道夫。繁衍速度快，幾乎不會失敗的入門種。",
      "breeding": "極易爆產，幾個月內就能體會到生命爆炸的成就感。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_163.jpg"
  },
  {
    "id": 164,
    "name": "希臘巨型鼠婦",
    "scientificName": "Porcellio expansus",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-25°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "寬底飼養盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "等足目",
    "description": "歐洲的巨型鼠婦之一。體型極度寬扁，邊緣外展，公蟲觸角非常長。外表霸氣。與西班牙巨人鼠婦一樣，非常怕悶熱與潮濕。",
    "diet": "優質枯葉、地衣、少量高蛋白飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "環境必須大面積通風！底材保持乾燥，僅在水苔區給予水分。需提供大樹皮供其攀附。",
      "care": "對溫度敏感，台灣夏天最好能提供冷氣環境。水滴不可直接噴在蟲體上。",
      "breeding": "繁殖難度高，母蟲護幼期間易受干擾而失敗。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_164.jpg"
  },
  {
    "id": 165,
    "name": "幽靈鼠婦",
    "scientificName": "Porcellio scaber 'Ghost'",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉",
    "type": "等足目",
    "description": "普通粗糙鼠婦的變異色。身體呈現半透明的白色帶有淡淡的橘粉色斑塊，像幽靈一樣迷幻。外殼有粗糙的顆粒感。適應力強。",
    "diet": "枯葉、魚飼料、地瓜",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "一般鼠婦的乾濕分離佈置即可。可放些樹皮或落葉堆。",
      "care": "強健好養，容錯率高。非常適合剛接觸鼠婦變異色系的玩家。",
      "breeding": "生長與繁殖速度皆快，容易建立穩定的群落。"
    },
    "nickname": "西瓜蟲 / 潮蟲",
    "image": "data/images/unique_165.jpg"
  },
  {
    "id": 166,
    "name": "鞭蛛 (無尾鞭蠍)",
    "scientificName": "Phrynus marginemaculatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (75-85%)",
    "spaceLabel": "直立式高箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蛛形綱",
    "description": "電影《哈利波特：火盃的考驗》中出現的奇特生物。擁有極長如天線般的第一對腳（觸鞭），用來探測環境。外表恐怖但完全無毒、無刺，生性膽小。",
    "diet": "小蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "必須提供**垂直的軟木樹皮或保麗龍背板**。牠們一輩子幾乎都掛在垂直面上，且脫皮必須倒吊。",
      "care": "若空間高度不足或過於乾燥，脫皮極易失敗卡死。行動像螃蟹般橫行。",
      "breeding": "母蟲會將卵囊帶在腹部下，幼蟲孵化後會爬到母蟲背上直到第一次脫皮。"
    },
    "nickname": "蛛形綱",
    "image": "data/images/unique_166.jpg"
  },
  {
    "id": 167,
    "name": "避日蛛 (風蠍)",
    "scientificName": "Galeodes sp.",
    "difficulty": "專家",
    "tempLabel": "高溫 (28-35°C)",
    "humidityLabel": "極乾燥 (10-30%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "一般/亮處",
    "dietLabel": "活體昆蟲",
    "type": "蛛形綱",
    "description": "沙漠中的狂戰士。擁有不成比例的巨大顎部，無毒，完全靠強大的咬合力撕碎獵物。移動速度極其狂暴，新陳代謝極快。非常難在人工環境長期存活。",
    "diet": "蟋蟀、蝗蟲、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "底材必須是極度乾燥的沙漠沙。不需水盆，只需偶爾滴一滴水。防逃必備。",
      "care": "食慾極其瘋狂，會吃到肚皮撐破，因此必須限制餵食量。壽命通常極短（約一年）。",
      "breeding": "人工繁殖幾乎不可能，市面皆為野生個體，屬於消耗型的極限寵物。"
    },
    "nickname": "蛛形綱",
    "image": "data/images/unique_167.jpg"
  },
  {
    "id": 168,
    "name": "魔王螳螂",
    "scientificName": "Blepharopsis mendica",
    "difficulty": "進階",
    "tempLabel": "高溫 (28-35°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "極高通風",
    "lightLabel": "室內/保溫燈",
    "dietLabel": "飛行系活體昆蟲",
    "type": "螳螂",
    "description": "又稱薊花螳螂。身上帶有淡綠色與白色的美麗紋路，背板有尖刺。威嚇姿勢非常誇張，會將雙臂高舉如魔王降臨。專挑會飛的獵物。",
    "diet": "蒼蠅、飛蛾 (活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需要乾燥且高溫、高通風的網箱環境。需架設保溫燈，怕冷怕濕。",
      "care": "幾乎不吃爬行類昆蟲（如蟑螂），必須自行培育蒼蠅餵食。對環境要求較高。",
      "breeding": "卵鞘孵化需要較高溫度與特定的乾燥度，小螳螂照顧不易。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_168.jpg"
  },
  {
    "id": 169,
    "name": "枯枝螳螂",
    "scientificName": "Popa spurca",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "來自非洲，擁有極致的枯枝擬態。身體細長，腿部關節有節點突起，平時會伸直前腳假裝成一根枯樹枝，甚至會隨風搖擺。捕食速度極快。",
    "diet": "蒼蠅、蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風網箱中插滿枯枝。因體型較長，高度必須足夠其脫皮。",
      "care": "比起其他擬態螳螂，枯枝螳螂相對強壯，對獵物的接受度也高（會吃爬行昆蟲）。",
      "breeding": "交配風險低。卵鞘長條狀，孵化出的小螳螂像螞蟻，成長快速。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_169.jpg"
  },
  {
    "id": 170,
    "name": "樹皮螳螂",
    "scientificName": "Theopompa servillei",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "扁平透氣盒",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "身體極度扁平，體色為灰褐色或樹皮色。平時會將身體完全貼合在樹幹上，幾乎隱形。奔跑速度極快，與一般螳螂慢吞吞的印象完全不同。",
    "diet": "果蠅、櫻桃紅蟑、蒼蠅",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "不需要很深的空間，但必須提供一塊粗糙的**大樹皮**讓牠貼附。",
      "care": "不喜歡倒掛，多數時間貼在垂直的樹皮上。受驚時會像蟑螂一樣快速逃竄。",
      "breeding": "卵鞘扁平貼在樹皮上。幼蟲非常小且跑得快，餵食果蠅時需注意防逃。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_170.jpg"
  },
  {
    "id": 171,
    "name": "台灣花螳螂",
    "scientificName": "Odontomantis planiceps",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "台灣本土的小型螳螂（成體僅約 2-3cm）。綠色的小巧身軀，前腳像小鐮刀。幼蟲期是黑色的，會擬態成螞蟻。非常可愛且適應台灣氣候。",
    "diet": "果蠅、小蟋蟀",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小巧的通風飼養盒即可，放些綠色植物。適合桌面觀察。",
      "care": "因為體型小，主食幾乎只能是果蠅。本土物種，環境不需特別加溫。",
      "breeding": "卵鞘迷你。孵化後的一齡幼蟲黑黑的，跑得非常快，需用防逃網嚴密防護。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_171.jpg"
  },
  {
    "id": 172,
    "name": "綠菱背螳螂",
    "scientificName": "Rhombodera megaera",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "菱背螳螂家族中體型最為巨大的品種。胸部有寬闊的綠色菱形盾板。食慾狂暴，力大無窮，甚至能捕食小老鼠或守宮（雖然不建議）。",
    "diet": "杜比亞蟑螂、大麥蟲、飛蝗",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "成蟲體型龐大沉重，必須提供穩固的粗樹枝，並確保脫皮空間充足（至少 30cm 高）。",
      "care": "非常強壯好養。餵食觀賞性極高。排泄物多，需常清底材。",
      "breeding": "交配時母蟲極易吃掉公蟲，務必餵飽母蟲並從旁協助。產卵量驚人。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_172.jpg"
  },
  {
    "id": 173,
    "name": "台灣肥角鍬形蟲",
    "scientificName": "Aegus laevicollis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑",
    "type": "甲蟲",
    "description": "台灣本土的小型鍬形蟲（成蟲僅 1-2cm）。身體扁平，大顎短小粗壯。喜歡群居在朽木中。雖然不起眼，但生態習性很有趣，是非常好的觀察對象。",
    "diet": "幼蟲：發酵木屑 / 成蟲：幾乎不進食或吸食木屑汁液",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "用小盒裝滿微濕的發酵木屑與小朽木塊。可將多隻成蟲混養在一起。",
      "care": "成蟲主要躲在土裡，很少出現在表面。不太需要餵食果凍。",
      "breeding": "只要木屑濕度夠，牠們會在裡面瘋狂生生不息，甚至幼蟲跟成蟲會和平共處。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_173.jpg"
  },
  {
    "id": 174,
    "name": "台灣角葫蘆鍬形蟲",
    "scientificName": "Nigidionus parryi",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "朽木",
    "type": "甲蟲",
    "description": "外表長得完全不像鍬形蟲，身體呈圓筒狀，像一個小葫蘆或黑色的膠囊。一生幾乎都在朽木內部度過。具有特化的肉食性傾向。",
    "diet": "肉食性傾向，會捕食朽木中的其他幼蟲",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "必須提供偏軟的朽木（產卵木）。環境需保持高濕度。",
      "care": "行為隱密。成蟲具有育幼行為，母蟲會咬碎木屑哺育幼蟲，這在甲蟲中非常罕見。",
      "breeding": "繁殖時絕對不能將幼蟲與母蟲分開，否則幼蟲會餓死。需整塊木頭飼養。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_174.jpg"
  },
  {
    "id": 175,
    "name": "綠豔白點花金龜",
    "scientificName": "Protaetia orientalis",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內/亮處",
    "dietLabel": "果凍/水果",
    "type": "甲蟲",
    "description": "台灣夏季最常見的綠色金龜子，背上有白色斑點。常在樹汁或過熟的水果旁成群出現。飛行能力強，生命力旺盛，是許多人的童年回憶。",
    "diet": "幼蟲：腐植土 / 成蟲：香蕉、芒果、果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "箱底鋪土，放幾根樹枝。務必加蓋，否則會飛走。可群養。",
      "care": "食量大且排泄多，環境容易引來果蠅，建議餵食果凍。喜歡明亮環境。",
      "breeding": "用一般腐植土就能輕易產卵。幼蟲長得快，且會在土裡背部朝下爬行。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_175.jpg"
  },
  {
    "id": 176,
    "name": "螃蟹鍬形蟲",
    "scientificName": "Homoderus mellyi",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-25°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "產自非洲，外表非常奇特。體色是鮮豔的黃色至橘色，大顎形狀像螃蟹的螯。背上有黑色的斑點。是極具觀賞性的中小型鍬形蟲。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "成蟲壽命不長（約 2-3 個月），怕熱，夏天建議溫控。",
      "care": "活動力尚可。體色在潮濕時會變暗，乾燥時恢復黃色。",
      "breeding": "產卵難度較高，需使用偏軟的白枯木，且環境不可過度潮濕。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_176.jpg"
  },
  {
    "id": 177,
    "name": "台灣青銅金龜",
    "scientificName": "Anomala expansa",
    "difficulty": "新手",
    "tempLabel": "常溫 (22-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "一般/亮處",
    "dietLabel": "新鮮葉片/果凍",
    "type": "甲蟲",
    "description": "台灣極度常見的金龜子，全身呈現閃亮的青銅綠色。夏季夜晚常會趨光飛入民宅。屬於植食性金龜，主要啃食樹葉而非水果。",
    "diet": "幼蟲：植物根部/土 / 成蟲：多種植物葉片、果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant",
        "easy"
      ]
    },
    "guide": {
      "setup": "提供攀爬枝與葉片。成蟲飛行力強，需加蓋。",
      "care": "成蟲壽命短暫，主要為季節性觀察。餵食新鮮葉片（如榕樹葉）或果凍皆可。",
      "breeding": "幼蟲以植物根部與腐植土為食，不建議大量繁殖以免危害盆栽植物。"
    },
    "nickname": "金龜子",
    "image": "data/images/unique_177.jpg"
  },
  {
    "id": 178,
    "name": "台灣黑褐硬蠊",
    "scientificName": "Panesthia angustipennis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "朽木/枯葉",
    "type": "蜚蠊",
    "description": "生活在台灣山區森林底層的特化型蟑螂。主要以吃「朽木」維生。成蟲有翅膀但通常會自己咬斷（為了方便鑽洞）。性格溫馴，動作緩慢。",
    "diet": "軟朽木（主食）、枯葉、微量狗飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "底材需使用發酵木屑，並埋入幾塊產卵木等級的軟朽木。需保持高濕度。",
      "care": "幾乎不需要清理，牠們會將木頭消化成細沙般的糞便。屬於分解者。",
      "breeding": "胎生，繁殖速度慢，但極易建立穩定的群落，母蟲有護幼行為。"
    },
    "nickname": "寵物蟑螂 / 飼料蟲",
    "image": "data/images/unique_178.jpg"
  },
  {
    "id": 179,
    "name": "針刺猛蟻",
    "scientificName": "Diacamma rugosum",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/偏濕 (60-80%)",
    "spaceLabel": "石膏/壓克力蟻巢",
    "ventilationLabel": "低通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "膜翅目",
    "description": "體型較大的肉食性螞蟻，外殼有明顯的刻紋。沒有真正的蟻后（由交配過的工蟻代替）。特徵是擁有發達的螫針，被叮咬會非常痛。",
    "diet": "小蟋蟀、紅蟑、蜂蜜水",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live",
        "easy"
      ]
    },
    "guide": {
      "setup": "需使用專門的蟻巢（帶有保濕功能）。餵食區需有防逃塗層。",
      "care": "純肉食偏好，需頻繁提供活體或剛死的昆蟲。防逃非常重要，被螫到紅腫熱痛。",
      "breeding": "沒有明顯的蟻后，群落由首領工蟻（Gamergate）繁衍，觀察其權力鬥爭非常有趣。"
    },
    "nickname": "螞蟻",
    "image": "data/images/unique_179.jpg"
  },
  {
    "id": 180,
    "name": "妖面蛛 (撒網蜘蛛)",
    "scientificName": "Deinopis subrufa",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "直立式網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "長相奇特，擁有兩顆巨大的前眼，像外星人一樣。捕食方式極度獨特：會用前腳編織一張伸縮網，掛在半空中，等獵物經過時「蓋布袋」捕捉。",
    "diet": "蟋蟀、蒼蠅",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需要有高度且有樹枝的空間供其倒掛準備撒網。夜行性。",
      "care": "不主動追擊獵物，必須讓獵物從牠正下方走過。餵食難度極高，需有耐心誘導。",
      "breeding": "市面極度罕見，飼養資料少，僅適合進階蜘蛛玩家挑戰。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_180.jpg"
  },
  {
    "id": 181,
    "name": "哥斯大黎加老虎尾",
    "scientificName": "Davus pentaloris",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "小型飼養盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "體型嬌小（成體約 5-6cm）的美麗蜘蛛。腹部有著鮮豔如老虎般的橘黑色條紋，背甲呈銅色。活潑好動，會結一些網。",
    "diet": "針頭蟋蟀、小紅蟑",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "地棲/半穴棲。給予微濕的椰土即可，會自己挖洞或結網躲藏。",
      "care": "食慾極佳，生長速度快。因為體型小，動作看起來比較敏捷，需注意不要讓牠跑出來。",
      "breeding": "公蛛壽命短，母蛛容易生產。卵囊內卵數不多，適合嘗試繁殖。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_181.jpg"
  },
  {
    "id": 182,
    "name": "玻利維亞鋼鐵藍",
    "scientificName": "Pamphobeteus antinous",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大/中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "Pamphobeteus (潘屬) 的代表物種。公蛛成熟時會展現出令人窒息的金屬紫藍色，母蛛則是純黑色。體型巨大壯碩，食量驚人。",
    "diet": "大蟑螂、大麥蟲",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需要較大的平面空間。底材需保持濕潤但不可積水，可放水盆。",
      "care": "非常貪吃。會踢毛，且體型大踢出來的毛容易引起過敏。怕高溫。",
      "breeding": "母蛛體積龐大，繁殖風險低。幼體即非常巨大，成長快速。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_182.jpg"
  },
  {
    "id": 183,
    "name": "非洲紅巴布",
    "scientificName": "Hysterocrates gigas",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "深底飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "非洲巨型地棲蜘蛛。全身紅褐色，後腿非常粗壯。特點是**會游泳與潛水**捕食小魚。性格兇猛，防禦性極強。",
    "diet": "蟑螂、蟋蟀、小魚",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "需要極深的底材（15cm以上）供其挖掘，並提供一個大水盆（牠們真的會下水）。",
      "care": "Old world 蜘蛛，無踢毛能力但咬人劇痛。移動速度快，盡量避免驚擾。",
      "breeding": "少數可以**母子同巢群養**的巴布蜘蛛，母蛛護幼行為非常迷人。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_183.jpg"
  },
  {
    "id": 184,
    "name": "墨西哥紅尾捕鳥蛛",
    "scientificName": "Tliltocatl vagans",
    "difficulty": "新手",
    "tempLabel": "常溫 (24-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "全身漆黑，但腹部覆蓋著濃密的鮮紅色長毛。非常強健，食量大，生長速度比同屬的其他蜘蛛快。是美洲蜘蛛的經典入門種。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "乾燥底材搭配水盆。提供一個半圓木做躲藏。",
      "care": "很容易飼養。性格雖然算溫和，但比紅膝頭容易緊張，愛踢毛。",
      "breeding": "繁殖力強，卵囊可孵出近千隻幼蛛，是市場上普及且平價的品種。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_184.jpg"
  },
  {
    "id": 185,
    "name": "加州地老虎 (沙漠金毛)",
    "scientificName": "Aphonopelma chalcodes",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "極乾燥 (20-40%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "來自美國沙漠的物種。擁有美麗的金黃色背甲與淺褐色的腿部。個性非常溫馴，耐旱力極強，是少數不需要顧濕度的毛蜘蛛。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "全乾的椰土或爬蟲沙，一個躲避穴，一個小水盆即可。",
      "care": "生長速度超級無敵慢，可能好幾個月都不吃東西也不脫皮。適合極致懶人。",
      "breeding": "母蛛壽命可達 20-30 年。繁殖難度在於養成耗時極長。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_185.jpg"
  },
  {
    "id": 186,
    "name": "中東金蠍",
    "scientificName": "Scorpio maurus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "乾燥 (30-40%)",
    "spaceLabel": "深底飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "體色呈金黃色，特徵是擁有一對不成比例的巨大圓潤雙螯。毒性不強，主要靠雙螯捕食。挖掘能力極強，在原產地會挖出極深的螺旋地道。",
    "diet": "蟋蟀、紅蟑",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "必須提供 15cm 以上的沙土混合物並稍微壓實，牠們需要挖洞才能有安全感。",
      "care": "耐乾燥。如果底材不夠深，蠍子會一直處於緊迫狀態而拒食死亡。",
      "breeding": "人工繁殖紀錄少，市面上多為野生個體，需做好驅蟲準備。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_186.jpg"
  },
  {
    "id": 187,
    "name": "佛羅里達樹皮蠍",
    "scientificName": "Centruroides gracilis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "直立式飼養箱",
    "ventilationLabel": "高通風",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "細長型的蠍子，體色為深褐帶有兩條淺色縱紋。屬於**樹棲型蠍子**，攀爬能力極強。**毒性強**，被螫會引起劇烈疼痛。",
    "diet": "蟋蟀、櫻桃蟑螂",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "直立箱，放置大量垂直的軟木樹皮。環境需保持潮濕且通風。可群養。",
      "care": "動作非常快，且毒性不可小覷，開蓋操作需萬分小心。群養時需確保食物充足。",
      "breeding": "容易在箱內自行繁殖。母蠍會背著一群白色小蠍子，非常壯觀。"
    },
    "nickname": "毒蠍",
    "image": "data/images/unique_187.jpg"
  },
  {
    "id": 188,
    "name": "祕魯巨人蜈蚣",
    "scientificName": "Scolopendra gigantea",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/防逃",
    "lightLabel": "陰暗處",
    "dietLabel": "肉類/小鼠",
    "type": "蜈蚣",
    "description": "世界上最大型的蜈蚣，體長可超過 30 公分。體色呈現深紅褐色。甚至能捕食蝙蝠、老鼠、蛇類。**劇毒且性格極度兇暴**。",
    "diet": "大蟑螂、小白鼠、雞肉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live",
        "easy"
      ]
    },
    "guide": {
      "setup": "必須使用大型、加鎖、絕對防逃的特製容器。底材保濕，給予大塊躲避物。",
      "care": "操作此物種需具備極高的專業度。被咬傷會導致極度劇痛、發燒、心悸，需就醫。",
      "breeding": "極少人工繁殖成功案例。價格天價，是終極收藏品。"
    },
    "nickname": "蜈蚣",
    "image": "data/images/unique_188.jpg"
  },
  {
    "id": 189,
    "name": "台灣深山扁鍬形蟲",
    "scientificName": "Dorcus miwai",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-24°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑",
    "type": "甲蟲",
    "description": "台灣特有種。雖然叫扁鍬，但其實生活在中高海拔山區。體型不大，大顎內齒發達。因為產地關係，不像平地扁鍬那麼耐熱。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "必須溫控，超過 26 度容易暴斃。不需太大空間。",
      "care": "性格稍微害羞。成蟲壽命約 1-2 年。",
      "breeding": "產卵木需選擇偏軟的材質。幼蟲在低溫下使用優質木屑飼養。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_189.jpg"
  },
  {
    "id": 190,
    "name": "台灣鏽鍬形蟲",
    "scientificName": "Dorcus carinulatus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "小型飼養盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑/果凍",
    "type": "甲蟲",
    "description": "台灣本土極小型鍬形蟲（1-2cm）。身體表面常附著泥土，看起來像生鏽一樣，因此得名。裝死技術一流。",
    "diet": "幼蟲：發酵木屑 / 成蟲：微量果凍",
    "match": {
      "temp": [
        "room",
        "cool"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "小布丁杯或小型昆蟲盒即可飼養。底材微濕。",
      "care": "非常耐命且不佔空間。成蟲幾乎都在土裡或木頭下睡覺，食量極小。",
      "breeding": "產卵與幼蟲飼養極度容易，適合沒有空間但想體驗繁殖樂趣的玩家。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_190.jpg"
  },
  {
    "id": 191,
    "name": "台灣圓翅鋸鍬形蟲",
    "scientificName": "Prosopocoilus forficula",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "發酵木屑",
    "type": "甲蟲",
    "description": "台灣原生種，鞘翅帶有酒紅色的光澤。公蟲大顎變化大（長牙與短牙型）。性格活潑，喜歡攀爬。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil",
        "easy"
      ]
    },
    "guide": {
      "setup": "箱內需放置樹枝。溫度不宜過高。",
      "care": "成蟲壽命約 3-6 個月，十分好動，容易消耗體力。",
      "breeding": "需使用偏軟產卵木。幼蟲使用木屑飼養，溫控可養出較大的長牙個體。"
    },
    "nickname": "鍬形蟲",
    "image": "data/images/unique_191.jpg"
  },
  {
    "id": 192,
    "name": "非洲大蝸牛 (原生色)",
    "scientificName": "Lissachatina fulica",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-30°C)",
    "humidityLabel": "潮濕 (70-90%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "蔬果/鈣粉",
    "type": "腹足綱",
    "description": "台灣野外極度常見的外來種。體色為深褐色帶條紋。雖然在野外被視為害蟲，但在人工環境下是極度好養、互動性高的大型寵物。",
    "diet": "各種蔬菜、瓜果、墨魚骨",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "底土保持濕潤，每日噴水。不需太複雜的造景，因為牠們會把植物吃光。",
      "care": "食量極大。**野採個體可能帶有廣東住血線蟲**，接觸後務必洗手。建議購買人工繁殖的白玉蝸牛代替。",
      "breeding": "雌雄同體，產卵量大，隨便養都會生。"
    },
    "nickname": "大蝸牛",
    "image": "data/images/unique_192.jpg"
  },
  {
    "id": 193,
    "name": "泰國黑地老虎",
    "scientificName": "Cyriopagopus minax",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "深底飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "東南亞的大型穴棲蜘蛛。全身呈現充滿煞氣的純黑色。性格**極端兇猛**，防禦姿態非常誇張，甚至會發出嘶嘶聲警告。毒性強。",
    "diet": "大蟑螂、蟋蟀",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "給予深厚底材供其挖掘。牠們通常會把土挖空並在洞口結網。",
      "care": "速度快如閃電，且極具攻擊性。餵食時切勿將手伸入箱內。",
      "breeding": "繁殖危險性高。屬於進階玩家體驗速度與激情的品種。"
    },
    "nickname": "毛蜘蛛 / 捕鳥蛛",
    "image": "data/images/unique_193.jpg"
  },
  {
    "id": 194,
    "name": "大透翅天蛾 (幼蟲)",
    "scientificName": "Cephonodes hylas",
    "difficulty": "新手",
    "tempLabel": "常溫 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "通風網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "梔子花葉",
    "type": "鱗翅目",
    "description": "綠色的大毛毛蟲，尾部有一根天線般的尾突。成蟲是被稱為「台灣蜂鳥」的透翅天蛾。幼蟲肥美可愛，非常適合觀察化蛹過程。",
    "diet": "梔子花葉、咖啡樹葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風容器，底部鋪衛生紙接大便。需準備水瓶插植物枝條。",
      "care": "食量極大，一天可以吃光一根枝條。化蛹前身體會變色並在土表結薄繭，此時需鋪一層落葉或土。",
      "breeding": "觀察羽化後建議放飛，成蟲需要極大的空間吸食花蜜。"
    },
    "nickname": "鱗翅目",
    "image": "data/images/unique_194.jpg"
  },
  {
    "id": 195,
    "name": "美洲大螽斯",
    "scientificName": "Neoconocephalus triops",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮禾本科",
    "type": "直翅目",
    "description": "頭部呈現獨特的圓錐狀（像戴了尖帽子）。有綠色與褐色型。叫聲非常尖銳響亮。腿部發達，跳躍力極強。",
    "diet": "玉米、禾本科植物、微量狗飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant",
        "easy"
      ]
    },
    "guide": {
      "setup": "網箱飼養，放置高莖植物。公蟲會鳴叫，需注意飼養位置以免吵到人。",
      "care": "口器有力，被咬到會流血。雖是植食性但仍需補充少許蛋白質。",
      "breeding": "母蟲會將卵產在植物莖部。生命週期不長。"
    },
    "nickname": "鳴蟲 / 大肚馬仔",
    "image": "data/images/unique_195.jpg"
  },
  {
    "id": 196,
    "name": "水黽 (水蜘蛛)",
    "scientificName": "Aquarius paludum",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-28°C)",
    "humidityLabel": "極高濕 (水面)",
    "spaceLabel": "寬口水缸",
    "ventilationLabel": "高通風",
    "lightLabel": "室內/亮處",
    "dietLabel": "落水昆蟲",
    "type": "半翅目",
    "description": "利用表面張力在水面上滑行的昆蟲。主要以掉落水面的小昆蟲體液為食。動作極快，是生態缸水面層的清道夫。",
    "diet": "死果蠅、小蟋蟀、魚飼料粉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live",
        "easy"
      ]
    },
    "guide": {
      "setup": "需要「大表面積」的水缸，水深不用深。水面必須保持平靜無大波浪。",
      "care": "水質若有油膜會破壞表面張力導致其溺死。餵食需將死蟲輕輕漂在水面上。",
      "breeding": "會產卵於水草上。環境要求高，不適合一般水族箱混養。"
    },
    "nickname": "半翅目",
    "image": "data/images/unique_196.jpg"
  },
  {
    "id": 197,
    "name": "台灣擬食蝸步行蟲",
    "scientificName": "Coptolabrus nankotaizanus",
    "difficulty": "專家",
    "tempLabel": "涼爽 (15-20°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "蝸牛/軟體動物",
    "type": "甲蟲",
    "description": "台灣特有且極度美麗的肉食性甲蟲。狹長的頭胸部，鞘翅閃耀著強烈的金屬紫紅色光澤。專門捕食蝸牛與蛞蝓。為保育類或極難取得。",
    "diet": "活體蝸牛、蛞蝓、碎肉",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "高山物種，絕對必須冷氣溫控。底材需保持濕潤的泥土。",
      "care": "食性單一，必須定期抓蝸牛餵食。受驚嚇會分泌強烈酸臭液體。",
      "breeding": "人工繁殖極難。此類步行蟲多受法規保護，請遵守當地保育法規。"
    },
    "nickname": "甲蟲",
    "image": "data/images/unique_197.jpg"
  },
  {
    "id": 198,
    "name": "黃紋巨竹節蟲",
    "scientificName": "Phasma gigas",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "體型粗壯，身上有黃色的網狀斑紋。遇到危險時會展開帶有紅黑斑紋的翅膀威嚇。是少數非常有魄力且粗壯的竹節蟲。",
    "diet": "芭樂葉、尤加利葉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱，需有粗樹枝供其抓握。注意通風。",
      "care": "食量大。會主動防禦，後腳有刺，清理時需小心被夾。",
      "breeding": "卵很大，產於土中。孵化時間較長。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_198.jpg"
  },
  {
    "id": 199,
    "name": "粗腿巨竹節蟲",
    "scientificName": "Extatosoma popa",
    "difficulty": "進階",
    "tempLabel": "常溫 (22-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "幽靈竹節蟲的近親，但體型更加粗壯，腿部有巨大的葉狀突起。一樣具有像蠍子般捲尾威嚇的習性。體色有褐色與綠色型。",
    "diet": "芭樂葉、橡樹葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風網箱，空間高度需為蟲體的三倍以上以便脫皮。",
      "care": "相較於幽靈竹節蟲，更怕悶熱與高濕度。需保持環境空氣流通。",
      "breeding": "可孤雌生殖。卵孵化期長，幼體活潑好動。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_199.jpg"
  },
  {
    "id": 200,
    "name": "大黑魔鬼竹節蟲",
    "scientificName": "Peruphasma marmoratum",
    "difficulty": "進階",
    "tempLabel": "涼爽 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "黑魔鬼竹節蟲的親戚，體型更大。身上有白色大理石紋路，退化翅膀一樣是鮮紅色，眼睛呈黃色。受驚嚇會噴灑強烈化學氣味液體。",
    "diet": "女貞、連翹、桂花",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "高山物種，強烈建議溫控。不可使用密閉壓克力箱，需用全網箱。",
      "care": "食草取得可能較困難。噴射的液體具刺激性，換葉子時勿靠太近。",
      "breeding": "產卵量大，卵隨意掉落。孵化需保持微濕與低溫。"
    },
    "nickname": "樹枝蟲",
    "image": "data/images/unique_200.jpg"
  },
  {
    "id": 201,
    "name": "黃邊鬼艷鍬形蟲",
    "scientificName": "Odontolabis femoralis",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/避免直射",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "東南亞大型鍬形蟲，鞘翅邊緣有明顯黃色邊帶。大顎粗壯有力，具有多態型現象。",
    "diet": "幼蟲：發酵木屑 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "幼蟲需使用大容量容器（10L以上），成蟲需XL飼養箱。",
      "care": "嚴格控溫25度以下。食量極大，每週需更換大量腐植土。",
      "breeding": "使用壓實的大兜土產房，深度至少20公分。母蟲產卵量大。"
    },
    "nickname": "鬼艷",
    "image": "data/images/unique_201.jpg"
  },
  {
    "id": 202,
    "name": "蘇拉維西太陽吉丁蟲",
    "scientificName": "Chrysochroa buqueti",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/木材",
    "type": "甲蟲",
    "description": "全身閃耀金屬光澤的吉丁蟲，色彩繽紛似彩虹。體型修長優雅，在陽光下如同活的寶石。是收藏家最愛的觀賞甲蟲之一。",
    "diet": "幼蟲：朽木 / 成蟲：昆蟲果凍、甜度高水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，放入朽木供幼蟲啃食。成蟲需平滑表面避免磨損翅鞘。",
      "care": "日行性昆蟲，喜歡明亮環境。成蟲壽命較短，約2-4個月。",
      "breeding": "母蟲會將卵產於朽木縫隙中，幼蟲在木材內部發育。"
    },
    "nickname": "彩虹吉丁",
    "image": "data/images/unique_202.jpg"
  },
  {
    "id": 203,
    "name": "格蘭迪鍬形蟲",
    "scientificName": "Dorcus grandis",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "世界上體型最大的大鍬形蟲之一，擁有粗壯的大顎與厚實的體型。產於印度至東南亞山區，需要較低溫度飼養。",
    "diet": "幼蟲：發酵木屑、菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱即可。幼蟲推薦使用菌瓶飼養以獲得較大體型。",
      "care": "需控溫在24度以下。成蟲壽命可達1-2年。",
      "breeding": "使用偏硬的產卵木，需泡水處理。"
    },
    "nickname": "大鍬",
    "image": "data/images/unique_203.jpg"
  },
  {
    "id": 204,
    "name": "巨人葉竹節蟲 (馬來)",
    "scientificName": "Phyllium malayanum",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "竹節蟲",
    "description": "馬來半島特有的大型葉竹節蟲，完美模仿綠色樹葉，體表有逼真的葉脈紋路。",
    "diet": "芒果葉、番石榴葉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型網箱即可，放入細枝條供攀爬。",
      "care": "體型小，餌料也需配合體型。需保持通風。",
      "breeding": "公母體型差異不大，但仍建議先餵飽母蟲再交配。"
    },
    "nickname": "葉蟲",
    "image": "data/images/unique_204.jpg"
  },
  {
    "id": 205,
    "name": "非洲獨角仙",
    "scientificName": "Augosoma centaurus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "甲蟲",
    "description": "非洲最大的兜蟲之一，外型酷似獨角仙但體色偏深。原產於西非熱帶雨林。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、香蕉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中大型網箱，放入綠色植物或假花供躲藏。",
      "care": "喜歡高濕度環境，每日噴水。食量大。",
      "breeding": "母蟲體型較大，交配需注意安全。卵鞘約6週孵化。"
    },
    "nickname": "非洲兜",
    "image": "data/images/unique_205.jpg"
  },
  {
    "id": 206,
    "name": "越南巨人竹節蟲",
    "scientificName": "Phobaeticus chani",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "世界上最長的昆蟲之一，體長可超過30公分。身體細長如同真正的樹枝，擬態能力極強。性格溫馴適合新手飼養。",
    "diet": "芭樂葉、橡樹葉、黑莓葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "必須使用高度足夠的大型網箱（高度至少蟲體3倍）。",
      "care": "定期提供新鮮無農藥葉片。噴水保持濕度。",
      "breeding": "孤雌生殖，卵掉落地面收集即可孵化。"
    },
    "nickname": "巨竹節蟲",
    "image": "data/images/unique_206.jpg"
  },
  {
    "id": 207,
    "name": "紅腳巨型馬陸",
    "scientificName": "Epibolus pulchripes",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足綱",
    "description": "非洲產的美麗馬陸，身體黑色搭配鮮紅色的腳，視覺對比強烈。性格溫和，遇到危險會捲成球狀。是馬陸愛好者的熱門品種。",
    "diet": "枯葉、朽木、蔬菜、水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "底材用椰土混合腐葉土，鋪設枯葉。保持高濕度。",
      "care": "需提供�ite質來源（墨魚骨）。定期補充枯葉與朽木。",
      "breeding": "群養即可自然繁殖。卵產於土中，數週後孵化。"
    },
    "nickname": "紅腳馬陸",
    "image": "data/images/unique_207.jpg"
  },
  {
    "id": 208,
    "name": "橘色鼠婦",
    "scientificName": "Porcellio haasi 'Orange'",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "全身呈現鮮豔的橘色，是等足目中的人氣品種。大小適中，繁殖速度穩定，體色明亮容易觀察。適合搭配生態缸飼養。",
    "diet": "枯葉、墨魚骨、蔬菜片、魚飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "塑膠盒打孔，底材椰土混腐葉土。乾濕分離。",
      "care": "定期補充墨魚骨（鈣質）。保持一角濕潤。",
      "breeding": "群養自動繁殖，無需特別照顧。"
    },
    "nickname": "橘鼠婦",
    "image": "data/images/unique_208.jpg"
  },
  {
    "id": 209,
    "name": "斑點跳蛛",
    "scientificName": "Phidippus audax",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾/適中 (40-60%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "北美常見的大膽跳蛛，體表黑色帶有白色斑點。視力極佳，獵食行為有趣。",
    "diet": "小型果蠅、蚊子",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型壓克力箱即可，放入假花或枝條。需有通風。",
      "care": "偏乾環境，一週噴水1-2次。喜歡光照。",
      "breeding": "公蟲會跳舞求偶。母蟲產卵後會護卵。"
    },
    "nickname": "跳蛛",
    "image": "data/images/unique_209.jpg"
  },
  {
    "id": 210,
    "name": "馬達加斯加巨蟑",
    "scientificName": "Gromphadorhina oblongonota",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "體型比普通發聲蟑螂更大，同為胎生且不飛。性格溫馴，適合作為寵物飼養。",
    "diet": "蔬果、狗糧、燕麥",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，蛋盒或樹皮提供躲藏空間。",
      "care": "好養，一週餵食1-2次即可。注意防逃。",
      "breeding": "卵鞘會被母蟲孵化後排出，小蟑螂群養即可。"
    },
    "nickname": "嘶嘶蟑",
    "image": "data/images/unique_210.jpg"
  },
  {
    "id": 211,
    "name": "台灣鑽紋鍬形蟲",
    "scientificName": "Dorcus schenklingi",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/避免直射",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "台灣特有種鍬形蟲，體型中等，大顎上有獨特的鑽紋狀突起。體色黑亮，具有收藏價值。適應力強，適合入門飼養。",
    "diet": "幼蟲：發酵木屑、菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，提供木屑與產卵木。",
      "care": "適應力強，台灣氣候可免溫控。果凍每週更換。",
      "breeding": "產卵於產卵木中，幼蟲取出用菌瓶飼養。"
    },
    "nickname": "鑽紋鍬",
    "image": "data/images/unique_211.jpg"
  },
  {
    "id": 212,
    "name": "安達曼巨人蜈蚣",
    "scientificName": "Scolopendra dehaani",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/肉類",
    "type": "蜈蚣",
    "description": "亞洲最大型蜈蚣之一，體型粗壯，色彩多變，從暗紅到橄欖綠都有。性情兇猛，動作極快，具有強烈毒性。僅適合資深飼養者。",
    "diet": "蟋蟀、大麥蟲、小白鼠",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "密封良好的飼養箱，底材用椰土保濕。必須防逃。",
      "care": "具強烈毒性，操作時務必使用長鑷子。切勿徒手接觸。",
      "breeding": "母蟲會護卵護幼，孵化期間不可打擾。"
    },
    "nickname": "巨蜈蚣",
    "image": "data/images/unique_212.jpg"
  },
  {
    "id": 213,
    "name": "皇蛾 (幼蟲)",
    "scientificName": "Attacus atlas",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "世界上翅面最大的蛾類，幼蟲為肥大的綠色毛蟲，身上覆蓋白色蠟質粉末。蛹期後羽化為巨大的蛾，翅膀花紋如蛇頭，極具震撼力。",
    "diet": "樟樹葉、柑橘葉、芭樂葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "幼蟲期用大型網箱，放入新鮮寄主植物枝條。",
      "care": "食量極大，需每日補充新鮮葉片。保持通風。",
      "breeding": "幼蟲化蛹後靜置等待羽化。成蟲不進食，壽命僅1-2週。"
    },
    "nickname": "蛇頭蛾",
    "image": "data/images/unique_213.jpg"
  },
  {
    "id": 214,
    "name": "巨型劍角蝗",
    "scientificName": "Tropidacris collaris",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾/適中 (40-60%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "新鮮葉片/草",
    "type": "直翅目",
    "description": "世界上最大的蝗蟲之一，體長可達12公分以上。後翅展開時呈現美麗的紅色或藍色。性格溫馴，可以手持互動。",
    "diet": "禾本科草類、小麥草、蔬菜",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型網箱，需要充足的光照與溫度。放入草類植物。",
      "care": "日行性，喜歡曬日光燈。食量大，每日補充新鮮草類。",
      "breeding": "母蟲將卵產於潮濕的土壤中，孵化約需4-6週。"
    },
    "nickname": "巨蝗蟲",
    "image": "data/images/unique_214.jpg"
  },
  {
    "id": 215,
    "name": "智利銅蜘蛛",
    "scientificName": "Paraphysa scrofa",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "智利產的地棲型捕鳥蛛，體色呈古銅色帶有金屬光澤。性格偏防禦性，會踢毛但很少咬人。生長速度緩慢但壽命長。",
    "diet": "蟋蟀、大麥蟲、紅蟑",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，提供躲避洞穴。底材偏乾。",
      "care": "不喜潮濕環境。餵食頻率不高，一週一次即可。",
      "breeding": "溫差刺激配對。母蟲產卵量中等。"
    },
    "nickname": "銅蜘蛛",
    "image": "data/images/unique_215.jpg"
  },
  {
    "id": 216,
    "name": "厄瓜多紫捕鳥蛛",
    "scientificName": "Pamphobeteus vespertinus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "南美產的大型捕鳥蛛，成體公蟲會呈現驚豔的紫色金屬光澤。體型巨大，足展可達20公分以上。性格偏兇猛，不建議上手。",
    "diet": "蟋蟀、大麥蟲、杜比亞蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中大型飼養箱，提供深層底材供挖掘。高濕度環境。",
      "care": "食量大且生長速度快。需定期添水保持濕度。",
      "breeding": "公蟲成體後壽命短，需把握配對時機。"
    },
    "nickname": "紫蜘蛛",
    "image": "data/images/unique_216.jpg"
  },
  {
    "id": 217,
    "name": "墨西哥血腳捕鳥蛛",
    "scientificName": "Brachypelma klaasi",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾/適中 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "墨西哥特有的珍稀捕鳥蛛，體色棕紅帶有粉橘色膝部斑紋。性格溫馴但極為稀有。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，底材用椰土。提供躲避物。",
      "care": "偏乾環境，水盆常備即可。生長極慢。",
      "breeding": "需要溫差與乾濕季節變化刺激配對。"
    },
    "nickname": "粉膝蛛",
    "image": "data/images/unique_217.jpg"
  },
  {
    "id": 218,
    "name": "菲律賓橙星捕鳥蛛",
    "scientificName": "Orphnaecus philippinus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "菲律賓特有的地穴型捕鳥蛛，腹部有美麗的橙色星狀斑紋。大部分時間都隱藏在地穴中，只有餵食時才會探出頭來。性格偏神經質。",
    "diet": "蟋蟀、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "提供深厚底材（至少15公分）供挖掘。保持高濕度。",
      "care": "穴居種，不常出現。可通過土面的洞口投餵。",
      "breeding": "母蟲護卵性強，孵化後需及時分離幼蛛。"
    },
    "nickname": "橙星蜘蛛",
    "image": "data/images/unique_218.jpg"
  },
  {
    "id": 219,
    "name": "印度虎斑蜈蚣",
    "scientificName": "Scolopendra hardwickei",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/肉類",
    "type": "蜈蚣",
    "description": "印度特有的華麗蜈蚣，身體呈現黃黑相間的虎斑紋路。體色鮮豔為警告色,具有強烈毒性。是蜈蚣收藏家心目中的夢幻物種。",
    "diet": "蟋蟀、大麥蟲、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "密封防逃飼養箱，底材保濕。提供樹皮躲避物。",
      "care": "毒性強，絕對不可徒手接觸。使用長鑷子操作。",
      "breeding": "母蟲會將卵團抱在身下護卵，約4-6週孵化。"
    },
    "nickname": "虎紋蜈蚣",
    "image": "data/images/unique_219.jpg"
  },
  {
    "id": 220,
    "name": "非洲巨型蟋蟀",
    "scientificName": "Brachytrupes membranaceus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "偏乾/適中 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/蔬果/飼料",
    "type": "直翅目",
    "description": "非洲產的巨型蟋蟀，體長可達5公分以上，是蟋蟀中的巨人。鳴叫聲宏亮，夜間活躍。可作為觀賞蟲或活體飼料使用。",
    "diet": "蔬果、穀物、狗糧、魚飼料",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱，紙蛋盒提供躲藏空間。底材可有可無。",
      "care": "雜食性，食物多樣化。提供水源（濕棉花或水晶凝膠）。",
      "breeding": "母蟲將卵產在土中，環境適宜即可自然繁殖。"
    },
    "nickname": "巨蟋蟀",
    "image": "data/images/unique_220.jpg"
  },
  {
    "id": 221,
    "name": "日本大鍬形蟲",
    "scientificName": "Dorcus hopei binodulosus",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "日本最受歡迎的鍬形蟲，也是日本甲蟲文化的代表物種。大型個體大顎粗壯優美，價值極高。壽命長達2-3年，是鍬形蟲愛好者的終極目標。",
    "diet": "幼蟲：菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "溫控飼養。幼蟲推薦菌瓶飼養以追求大型個體。",
      "care": "嚴格控溫24度以下。果凍定期更換。",
      "breeding": "使用硬度適中的產卵木。大型血統價格不菲。"
    },
    "nickname": "國產大鍬",
    "image": "data/images/unique_221.jpg"
  },
  {
    "id": 222,
    "name": "荔枝椿象",
    "scientificName": "Tessaratoma papillosa",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片/果實",
    "type": "半翅目",
    "description": "常見的大型椿象，體色從綠色到褐色變化。受到驚嚇會噴出具有臭味的分泌液。雖為農業害蟲，但其獨特的外型與行為仍具觀察價值。",
    "diet": "荔枝葉、龍眼葉與果實",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風良好的網箱。放入寄主植物枝條。",
      "care": "提供新鮮荔枝或龍眼枝條。注意防禦液有刺激性。",
      "breeding": "卵產於葉背，排列整齊。孵化約2週。"
    },
    "nickname": "臭屁蟲",
    "image": "data/images/unique_222.jpg"
  },
  {
    "id": 223,
    "name": "橙翅竹節蟲",
    "scientificName": "Sipyloidea meneptolemus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "翅膀為鮮豔的橙色，受到驚嚇時會突然展翅閃避。身體細長呈褐色，完美擬態為樹枝。飛行能力不錯，需注意防逃。",
    "diet": "芭樂葉、玫瑰葉、黑莓葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "網箱飼養，需密封以防飛行逃逸。提供攀爬枝條。",
      "care": "每日噴水，定期更換新鮮葉片。保持通風。",
      "breeding": "卵產於地面，收集後保濕孵化。"
    },
    "nickname": "橙翅竹節蟲",
    "image": "data/images/unique_223.jpg"
  },
  {
    "id": 224,
    "name": "帝王蛾",
    "scientificName": "Saturnia pavonia",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/避免直射",
    "dietLabel": "大量腐植土/果凍",
    "type": "鱗翅目",
    "description": "歐洲最大的蛾類之一，翅膀上有四個明顯的眼斑。幼蟲色彩鮮豔。",
    "diet": "幼蟲：黑刺李、石楠葉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "超大型飼養箱。幼蟲容器需15L以上。",
      "care": "控溫24度以下。幼蟲食量極大，需頻繁換土。",
      "breeding": "使用壓實腐植土產房，深度25公分以上。"
    },
    "nickname": "眼蛾",
    "image": "data/images/unique_224.jpg"
  },
  {
    "id": 225,
    "name": "尖刺杜比亞蟑螂",
    "scientificName": "Blaptica dubia var. spiny",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "杜比亞蟑螂的變異型態，身體邊緣有細小的刺狀突起。同樣適合作為飼料蟲。",
    "diet": "蔬果、穀物飼料",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "飼養箱加蓋，紙蛋盒提供躲藏空間。",
      "care": "極好養，每週餵食1-2次。保持乾燥環境。",
      "breeding": "卵鞘在母蟲體內孵化，直接產出小蟑螂。繁殖快。"
    },
    "nickname": "刺蟑",
    "image": "data/images/unique_225.jpg"
  },
  {
    "id": 226,
    "name": "辛巴威巴布蜘蛛",
    "scientificName": "Pterinochilus chordatus",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾/適中 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "非洲舊世界的攻擊性蜘蛛，速度極快且具有強烈的防禦性。適合有經驗的飼養者。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，提供多個躲避處。可小群飼養（同窩個體）。",
      "care": "偏乾環境，水盆常備。群養需確保食物充足。",
      "breeding": "群養環境中可自然配對繁殖。母蟲護卵。"
    },
    "nickname": "巴布蛛",
    "image": "data/images/unique_226.jpg"
  },
  {
    "id": 227,
    "name": "台灣獨角仙 (小型)",
    "scientificName": "Allomyrina dichotoma tunobosonis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗/避免直射",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "台灣亞種獨角仙，體型比日本本土亞種略小但更為結實。夏季在低海拔山區光源處極常見。是台灣孩子們的童年回憶昆蟲。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍、水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "L號飼養箱，鋪腐植土。放置果凍台與樹皮。",
      "care": "台灣原生種，免溫控。果凍2-3天換一次。",
      "breeding": "容易繁殖，母蟲會鑽入土底產卵。"
    },
    "nickname": "獨角仙",
    "image": "data/images/unique_227.jpg"
  },
  {
    "id": 228,
    "name": "黑武士千足蟲",
    "scientificName": "Narceus gordanus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足目",
    "description": "北美巨型馬陸，體色深黑帶有紅棕色環帶。受驚時會捲成防禦姿態。",
    "diet": "枯葉、腐木、蔬菜",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型箱，底材椰土混腐葉土厚鋪。大量枯葉。",
      "care": "保持高濕度。定期補充鈣質（墨魚骨）。",
      "breeding": "群養自然繁殖。卵產於土中。"
    },
    "nickname": "黑馬陸",
    "image": "data/images/unique_228.jpg"
  },
  {
    "id": 229,
    "name": "紅鋸尾蠍",
    "scientificName": "Uroplectes vittatus",
    "difficulty": "進階",
    "tempLabel": "溫暖/高溫 (28-35°C)",
    "humidityLabel": "偏乾 (30-40%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍目",
    "description": "南非小型蠍子，尾部扁平呈鋸齒狀。體色紅棕，帶有黑色條紋。",
    "diet": "小型蟋蟀、果蠅",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "底材用沙土混合。提供石板或樹皮躲避。需加熱墊。",
      "care": "極度乾燥環境。水盆淺碟即可。",
      "breeding": "胎生，幼蠍在母蠍背上生活至第一次蛻皮。"
    },
    "nickname": "鋸蠍",
    "image": "data/images/unique_229.jpg"
  },
  {
    "id": 230,
    "name": "巴拿馬金捕鳥蛛",
    "scientificName": "Psalmopoeus pulcher",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "中美洲樹棲蜘蛛，金橙色體毛在光線下閃爍。具有一定防禦性但觀賞價值高。",
    "diet": "蟋蟀、飛蛾",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "樹棲種，需要高度空間與樹皮管供躲藏。",
      "care": "速度非常快，開箱時需格外小心。不建議上手。",
      "breeding": "公蟲壽命短，需把握配對時機。"
    },
    "nickname": "金蛛",
    "image": "data/images/unique_230.jpg"
  },
  {
    "id": 231,
    "name": "翡翠蟬",
    "scientificName": "Dundubia manifera",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "樹液/糖水",
    "type": "半翅目",
    "description": "大型蟬類，翅膀透明帶有翠綠色的翅脈。鳴叫聲響亮悠揚。成蟲壽命較短但觀賞價值極高。需提供活體樹枝供其吸取汁液。",
    "diet": "新鮮樹枝汁液、稀釋蜂蜜水",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型網箱，插入新鮮帶汁液的樹枝。",
      "care": "成蟲壽命約2-4週。需每日更換樹枝。",
      "breeding": "母蟲在樹枝中產卵，幼蟲掉落土中生活數年。"
    },
    "nickname": "知了",
    "image": "data/images/unique_231.jpg"
  },
  {
    "id": 232,
    "name": "巴西巨白膝蜘蛛",
    "scientificName": "Nhandu chromatus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "巴西產地棲性蜘蛛，黑色體毛間有白色膝部斑紋。體型壯碩，性格稍微神經質。",
    "diet": "蟋蟀、蟑螂、麵包蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。提供躲避物。",
      "care": "食慾好，生長快。踢毛性較強，敏感者注意。",
      "breeding": "母蟲產卵量大，幼蛛容易飼養。"
    },
    "nickname": "白膝蛛",
    "image": "data/images/unique_232.jpg"
  },
  {
    "id": 233,
    "name": "金屬螳螂",
    "scientificName": "Metallyticus splendidus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "全身閃耀金屬光澤的原始螳螂，被認為是螳螂目最古老的物種之一。體型扁平如甲蟲，行動迅速。極難飼養且受法規保護。",
    "diet": "果蠅、小型蟋蟀 (活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "扁平型飼養箱，模擬樹皮環境。高濕度高通風。",
      "care": "對環境極敏感，溫濕度稍有偏差即會死亡。",
      "breeding": "繁殖極難，資料稀少。公蟲壽命很短。"
    },
    "nickname": "金屬螳螂",
    "image": "data/images/unique_233.jpg"
  },
  {
    "id": 234,
    "name": "彩虹吉丁蟲",
    "scientificName": "Chrysochroa fulgidissima",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/木材",
    "type": "甲蟲",
    "description": "又稱玉蟲，日本傳統文化中的代表昆蟲。身體散發七彩金屬光澤，被用來裝飾古代皇室用品。是亞洲最美麗的甲蟲之一。",
    "diet": "幼蟲：朽木 / 成蟲：昆蟲果凍、花蜜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型箱，放入朽木。成蟲需平滑環境。",
      "care": "日行性，喜歡光照。成蟲壽命約2-3個月。",
      "breeding": "母蟲將卵產於朽木中，幼蟲期長達1-2年。"
    },
    "nickname": "玉蟲",
    "image": "data/images/unique_234.jpg"
  },
  {
    "id": 235,
    "name": "亞馬遜巨人蜈蚣",
    "scientificName": "Scolopendra viridicornis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/肉類",
    "type": "蜈蚣",
    "description": "南美洲大型蜈蚣，體色為黑紅相間。與祕魯巨人蜈蚣齊名的巨型蜈蚣。動作敏捷，攻擊性強，具有強烈毒性。僅適合專家。",
    "diet": "蟋蟀、大麥蟲、蟑螂、小白鼠",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型防逃飼養箱。底材厚鋪保濕。",
      "care": "強毒物種，操作必須使用長鑷子。",
      "breeding": "母蟲護卵護幼，期間不可干擾。"
    },
    "nickname": "巨蜈蚣",
    "image": "data/images/unique_235.jpg"
  },
  {
    "id": 236,
    "name": "紅尾沙蟑螂",
    "scientificName": "Polyphaga saussurei",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "來自中東的沙漠蟑螂，體型圓胖似甲蟲。不會爬牆也不會飛。體色褐色帶有紅色尾端。性格極為溫馴，動作緩慢，適合新手。",
    "diet": "狗糧、燕麥、蔬菜乾、水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "底材用沙土。提供瓦片或石頭躲藏。",
      "care": "沙漠物種，環境偏乾。提供少量水源。",
      "breeding": "卵鞘產出後需數月孵化。繁殖速度慢。"
    },
    "nickname": "沙蟑螂",
    "image": "data/images/unique_236.jpg"
  },
  {
    "id": 237,
    "name": "銀河鼠婦",
    "scientificName": "Merulanella sp. 'Galaxy'",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "身上有如銀河星空般的彩色斑點，是近年等足目市場的當紅品種。來自東南亞，顏色個體差異大，集色彩繽紛於一身。",
    "diet": "枯葉、墨魚骨、蔬菜片、魚飼料",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "塑膠盒打孔，底材椰土混腐葉土。",
      "care": "保持適中濕度。定期補充鈣質。",
      "breeding": "繁殖速度適中。群養自然繁殖。"
    },
    "nickname": "星空鼠婦",
    "image": "data/images/unique_237.jpg"
  },
  {
    "id": 238,
    "name": "深紫陸寄居蟹",
    "scientificName": "Coenobita brevimanus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "室內散光",
    "dietLabel": "雜食/飼料/蔬果",
    "type": "十足目",
    "description": "大型陸寄居蟹，體色深紫帶棕。喜歡攀爬，需要提供足夠的貝殼供更換。",
    "diet": "椰子、魚乾、水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型箱，底材用沙土。需備淡水與海水池。提供備用貝殼。",
      "care": "保持高濕度極為重要。需提供多樣化食物。",
      "breeding": "人工環境極難繁殖。幼體需海水環境。"
    },
    "nickname": "紫蟹",
    "image": "data/images/unique_238.jpg"
  },
  {
    "id": 239,
    "name": "黃化帝王蠍",
    "scientificName": "Pandinus imperator (Xanthic)",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "帝王蠍的黃化個體，全身呈金黃色而非常見的黑色。極為稀有珍貴。飼養方式與一般帝王蠍相同但價格高出數倍。",
    "diet": "蟋蟀、大麥蟲、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "高濕度環境，底材用椰土。放置木頭或石板躲避。",
      "care": "與一般帝王蠍相同。毒性低但螯力強。",
      "breeding": "與一般帝王蠍相同，胎生，母蠍護幼。"
    },
    "nickname": "金蠍",
    "image": "data/images/unique_239.jpg"
  },
  {
    "id": 240,
    "name": "蘇門答臘叉角鍬形蟲",
    "scientificName": "Hexarthrius rhinoceros",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "東南亞大型鍬形蟲，大顎分叉如鹿角。體色深黑帶有光澤，好鬥性強。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。幼蟲推薦菌瓶。",
      "care": "需控溫24度以下。成蟲壽命約6-12個月。",
      "breeding": "使用中硬度產卵木。母蟲產卵量中等。"
    },
    "nickname": "叉角鍬",
    "image": "data/images/unique_240.jpg"
  },
  {
    "id": 241,
    "name": "秘魯紫斑捕鳥蛛",
    "scientificName": "Xenesthis intermedia",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "南美大型捕鳥蛛，腹部有紫色花紋。溫馴度中等，體型可達20公分以上。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型箱，厚層椰土底材。高濕度環境。",
      "care": "食量極大。保持高濕但避免積水。",
      "breeding": "母蟲產卵量極大，可達數百隻幼蛛。"
    },
    "nickname": "紫斑蛛",
    "image": "data/images/unique_241.jpg"
  },
  {
    "id": 242,
    "name": "地中海蝸牛",
    "scientificName": "Cornu aspersum",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "蔬菜/水果/鈣質",
    "type": "腹足綱",
    "description": "歐洲最常見的蝸牛品種，殼上有美麗的螺旋紋路。個性溫和，動作優雅。是觀察軟體動物行為的最佳入門物種。可群養。",
    "diet": "蔬菜（生菜、胡蘿蔔）、水果、墨魚骨",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "塑膠箱打孔，底材用椰土保濕。",
      "care": "每日噴水保持高濕度。補充墨魚骨或蛋殼粉。",
      "breeding": "雌雄同體，兩隻即可交配產卵。卵產於土中。"
    },
    "nickname": "花園蝸牛",
    "image": "data/images/unique_242.jpg"
  },
  {
    "id": 243,
    "name": "綠寶石蟑螂",
    "scientificName": "Panchlora sp. 'Giant Green'",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/飼料",
    "type": "蜚蠊",
    "description": "中美洲產翠綠色蟑螂，會飛。體色如翡翠般鮮綠，是觀賞蟑螂的熱門品種。",
    "diet": "蔬菜、水果、飼料",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "小型密封盒，底材椰土混枯葉。保持潮濕。",
      "care": "需要潮濕環境。食量小，每週餵食即可。",
      "breeding": "繁殖速度緩慢，不會爆缸。"
    },
    "nickname": "綠蟑",
    "image": "data/images/unique_243.jpg"
  },
  {
    "id": 244,
    "name": "黃帶馬陸",
    "scientificName": "Anadenobolus monilicornis",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足綱",
    "description": "加勒比海產的美麗馬陸，身體黑色帶有鮮黃色環帶。體型適中，約10-15公分。性格溫馴，很適合入門飼養的觀賞馬陸。",
    "diet": "枯葉、蔬果、朽木、墨魚骨",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱，底材椰土加枯葉。保持潮濕。",
      "care": "補充鈣質。定期添加枯葉與朽木。",
      "breeding": "群養自然繁殖。卵產於土中。"
    },
    "nickname": "蜜蜂馬陸",
    "image": "data/images/unique_244.jpg"
  },
  {
    "id": 245,
    "name": "枯葉蝶竹節蟲",
    "scientificName": "Pulchriphyllium bioculatum",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "又稱葉蟲，身體扁平如一片綠葉，連葉脈紋路都模擬得維妙維肖。是自然界最驚人的擬態大師之一。雌蟲通體翠綠，雄蟲較小會飛。",
    "diet": "芭樂葉、橡樹葉、黑莓葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "網箱飼養，高度需足夠脫皮。提供新鮮葉片。",
      "care": "每日噴水。葉片枯萎需立即更換。通風很重要。",
      "breeding": "孤雌生殖為主。卵散落地面，孵化期長。"
    },
    "nickname": "葉蟲",
    "image": "data/images/unique_245.jpg"
  },
  {
    "id": 246,
    "name": "彩紋長臂花金龜",
    "scientificName": "Mecynorrhina ugandensis",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "烏干達產花金龜，體表有綠色金屬光澤及白色條紋。日行性，喜歡啃食水果。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型箱，需有足夠空間讓其展翅。放果凍台。",
      "care": "日行性，活動力旺盛。果凍消耗快。",
      "breeding": "土繭式化蛹。使用腐植土壓實底部。"
    },
    "nickname": "彩金龜",
    "image": "data/images/unique_246.jpg"
  },
  {
    "id": 247,
    "name": "以色列金色蠍",
    "scientificName": "Scorpio palmatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍目",
    "description": "中東大型蠍子，體色金黃。毒性較低，以甲殼類和昆蟲為食。",
    "diet": "蟋蟀、麵包蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "提供厚層底材供挖掘。半濕半乾環境。",
      "care": "會自己挖洞居住，較少出現在表面。",
      "breeding": "胎生，母蠍護幼至幼蠍第一次蛻皮。"
    },
    "nickname": "金蠍",
    "image": "data/images/unique_247.jpg"
  },
  {
    "id": 248,
    "name": "非洲綠巨螳螂",
    "scientificName": "Sphodromantis viridis",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "非洲產的大型螳螂，體色鮮綠，體型粗壯有力。個性大膽好奇，會主動注視觀察人類。食慾旺盛，幾乎來者不拒。非常適合螳螂入門。",
    "diet": "蟋蟀、蟑螂、飛蛾、蒼蠅 (活餌)",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中大型網箱。放入枝條供攀爬。",
      "care": "食量驚人，2-3天餵食一次。耐養好照顧。",
      "breeding": "母蟲產下大型卵鞘，約4-6週孵化。"
    },
    "nickname": "大螳螂",
    "image": "data/images/unique_248.jpg"
  },
  {
    "id": 249,
    "name": "馬來西亞巨型竹節蟲",
    "scientificName": "Phobaeticus serratipes",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "世界上最長的昆蟲紀錄保持者之一，含腳全長可超過50公分。身體極度纖細，完美模擬細長樹枝。飼養空間需求極大。",
    "diet": "芭樂葉、橡木葉、醉魚草葉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "超大型網箱，高度需至少1公尺。",
      "care": "食量大，需充足新鮮葉片。高濕度。",
      "breeding": "卵散落地面，收集保濕孵化，期間數月。"
    },
    "nickname": "超巨竹節蟲",
    "image": "data/images/unique_249.jpg"
  },
  {
    "id": 250,
    "name": "古巴蟑螂",
    "scientificName": "Byrsotria fumigata",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "加勒比海產的中型蟑螂，體色紅褐帶有光澤。不會爬光滑面。個性溫馴且群居性強，常常聚集在一起。受到驚嚇會發出獨特的臭味作為防禦。",
    "diet": "狗糧、蔬果、穀物、枯葉",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱加蓋。紙蛋盒提供躲藏空間。",
      "care": "好養，每週餵食即可。注意其防禦臭味。",
      "breeding": "卵鞘孵化快，繁殖容易。"
    },
    "nickname": "古巴蟑",
    "image": "data/images/unique_250.jpg"
  },
  {
    "id": 251,
    "name": "歌利亞大角花金龜",
    "scientificName": "Goliathus goliatus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/高蛋白飼料",
    "type": "甲蟲",
    "description": "世界上最大最重的甲蟲之一，來自非洲熱帶雨林。成蟲體型可達11公分，幼蟲需要高蛋白飼料才能健康成長。飼養難度極高。",
    "diet": "幼蟲：狗糧混合腐植土 / 成蟲：昆蟲果凍、香蕉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，底材用腐植土混合木屑。",
      "care": "幼蟲需高蛋白飲食，可混合狗糧。成蟲壽命僅3-6個月。",
      "breeding": "母蟲產卵於腐植土中，幼蟲期約12個月。"
    },
    "nickname": "歌利亞",
    "image": "data/images/unique_251.jpg"
  },
  {
    "id": 252,
    "name": "歐洲深山鍬形蟲",
    "scientificName": "Lucanus cervus",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (16-22°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "歐洲最大的甲蟲，公蟲擁有如鹿角般壯觀的大顎。是歐洲的保育類昆蟲，野外數量逐年減少。幼蟲期可長達3-5年。",
    "diet": "幼蟲：朽木、發酵木屑 / 成蟲：昆蟲果凍、樹液",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，放入大量朽木。",
      "care": "需要涼爽環境，夏天需控溫。幼蟲期極長。",
      "breeding": "母蟲產卵於朽木中，幼蟲成長緩慢。"
    },
    "nickname": "鹿角蟲",
    "image": "data/images/unique_252.jpg"
  },
  {
    "id": 253,
    "name": "歐洲螳螂",
    "scientificName": "Mantis religiosa",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "分布最廣的螳螂品種，從歐洲到北美都有蹤跡。體色多變，有綠色與褐色型。祈禱般的前肢姿態使其得名。適應力極強。",
    "diet": "果蠅、蟋蟀、蒼蠅 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "網箱或通風飼養罐，放入枝條。",
      "care": "適應力強，2-3天餵食一次即可。",
      "breeding": "卵鞘可在室外越冬，春天孵化。"
    },
    "nickname": "祈禱螳螂",
    "image": "data/images/unique_253.jpg"
  },
  {
    "id": 254,
    "name": "東方歌利亞花金龜",
    "scientificName": "Goliathus orientalis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/高蛋白飼料",
    "type": "甲蟲",
    "description": "歌利亞花金龜屬中花紋最為華麗的物種，黑白花紋對比鮮明。來自非洲中部，體型巨大，飼養方式與歌利亞大角花金龜類似。",
    "diet": "幼蟲：高蛋白飼料 / 成蟲：果凍、水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，腐植土混高蛋白飼料。",
      "care": "幼蟲需大量蛋白質。溫度不可低於20度。",
      "breeding": "與歌利亞大角花金龜類似，產卵於土中。"
    },
    "nickname": "東方歌利亞",
    "image": "data/images/unique_254.jpg"
  },
  {
    "id": 255,
    "name": "球鼠婦",
    "scientificName": "Armadillidium vulgare",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "全世界最常見的等足目之一，遇到危險會捲成完美的球形。體色灰褐，偶有花色個體。是最入門的等足目寵物，幾乎不需要特別照顧。",
    "diet": "枯葉、蔬菜、墨魚骨、魚飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "小型盒子，底材椰土混枯葉。",
      "care": "偏好微乾環境，乾濕分離。補充鈣質。",
      "breeding": "繁殖容易，群養即可自然繁殖。"
    },
    "nickname": "西瓜蟲",
    "image": "data/images/unique_255.jpg"
  },
  {
    "id": 256,
    "name": "印尼細身赤鍬形蟲",
    "scientificName": "Cyclommatus elaphus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "印尼特有的大型細身鍬形蟲，大顎修長如鹿角。體色紅棕帶有金屬光澤。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，鋪設木屑。",
      "care": "成蟲壽命約3-6個月，需常備果凍。",
      "breeding": "使用軟產卵木或發酵木屑壓實產卵。"
    },
    "nickname": "鹿角鍬",
    "image": "data/images/unique_256.jpg"
  },
  {
    "id": 257,
    "name": "非洲幽靈螳螂",
    "scientificName": "Phyllocrania illudens",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "非洲產的枯葉擬態螳螂，與幽靈螳螂近緣但體色更偏褐色。",
    "diet": "果蠅、小型飛蟲（活餌）",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型網箱即可。放入枯枝供攀爬。",
      "care": "可群養不太會互食，每3天餵食果蠅。",
      "breeding": "交配容易，卵鞘約6週孵化。"
    },
    "nickname": "枯葉螳",
    "image": "data/images/unique_257.jpg"
  },
  {
    "id": 258,
    "name": "橘頭潛蠊",
    "scientificName": "Eublaberus sp. 'Ivory'",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "中型蟑螂，頭部及前胸呈橘紅色，體尾深棕。不會飛，適合作飼料蟲使用。",
    "diet": "蔬菜、穀物、飼料",
    "match": {
      "temp": [
        "warm",
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱加蓋，紙蛋盒提供躲藏。",
      "care": "極好養，一週餵食一次即可。",
      "breeding": "卵胎生，繁殖快速。"
    },
    "nickname": "象牙蟑",
    "image": "data/images/unique_258.jpg"
  },
  {
    "id": 259,
    "name": "哥斯大黎加犀角兜蟲",
    "scientificName": "Golofa porteri",
    "difficulty": "進階",
    "tempLabel": "涼爽 (16-22°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "中美洲特有兜蟲，頭角向上彎曲如犀角。體色黑褐帶有絨毛。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、香蕉",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，幼蟲需10L以上容器。",
      "care": "嚴格控溫22度以下。食量巨大。",
      "breeding": "產房需高品質發酵土壓實20公分以上。"
    },
    "nickname": "犀角兜",
    "image": "data/images/unique_259.jpg"
  },
  {
    "id": 260,
    "name": "馬來西亞刺竹節蟲",
    "scientificName": "Heteropteryx dilatata var.",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "東南亞大型竹節蟲變異型，體表刺突更為明顯。母蟲翠綠，公蟲褐色。",
    "diet": "芭樂葉、黑莓葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型網箱，需有足夠空間。",
      "care": "需高濕度，每日噴水。食量大。",
      "breeding": "母蟲會將卵彈射出去，收集後保濕孵化。"
    },
    "nickname": "刺竹節",
    "image": "data/images/unique_260.jpg"
  },
  {
    "id": 261,
    "name": "巴西火紅捕鳥蛛",
    "scientificName": "Grammostola iheringi",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "巴西大型地棲蜘蛛，體毛火紅色。性格溫和，是紅色系蜘蛛中最受歡迎的品種。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，底材椰土。提供躲避處。",
      "care": "偏乾環境，一角保濕即可。會長期絕食。",
      "breeding": "母蛛需冬季降溫刺激才會接受交配。"
    },
    "nickname": "火紅蛛",
    "image": "data/images/unique_261.jpg"
  },
  {
    "id": 262,
    "name": "白化蝸牛",
    "scientificName": "Achatina achatina",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "潮濕 (70-90%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "蔬菜/水果/鈣質",
    "type": "軟體動物",
    "description": "西非巨型蝸牛，殼有虎紋花紋。比一般非洲大蝸牛體型更大，飼養容易。",
    "diet": "蔬菜、水果、鈣粉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "密封保濕箱，底材椰土保持潮濕。",
      "care": "每日噴水，補充鈣質。食量大需常備蔬菜。",
      "breeding": "雌雄同體，兩隻即可交配。產卵量驚人。"
    },
    "nickname": "虎紋蝸",
    "image": "data/images/unique_262.jpg"
  },
  {
    "id": 263,
    "name": "發光蟑螂",
    "scientificName": "Lucihormetica subcincta",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/飼料",
    "type": "蜚蠊",
    "description": "前胸背板上有兩個會發出微弱生物螢光的斑點，模擬有毒的叩頭蟲以嚇退天敵。來自南美洲，是蟑螂界最具科學研究價值的物種之一。",
    "diet": "枯葉、朽木、蔬菜、魚飼料",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "保濕箱，底材椰土加枯葉。",
      "care": "需高濕度和溫暖環境。避免光照。",
      "breeding": "繁殖速度中等，卵鞘孵化需數週。"
    },
    "nickname": "螢光蟑螂",
    "image": "data/images/unique_263.jpg"
  },
  {
    "id": 264,
    "name": "紅腿大馬陸",
    "scientificName": "Ephibolus pulchripes",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足目",
    "description": "東非大型馬陸，體色深黑配上亮橘紅色的足部。溫馴且好養，受驚時會捲曲。",
    "diet": "枯葉、腐木、蔬果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型箱，厚層椰土混枯葉。",
      "care": "保持高濕度。定期補充鈣質與枯葉。",
      "breeding": "卵產於土中，孵化需數月。"
    },
    "nickname": "紅腳馬陸",
    "image": "data/images/unique_264.jpg"
  },
  {
    "id": 265,
    "name": "佛羅里達木蠍",
    "scientificName": "Centruroides hentzi",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍目",
    "description": "北美小型樹皮蠍，體色黃棕帶深色條紋。攀爬力強，需要密封的飼養箱。",
    "diet": "小蟋蟀、果蠅",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "沙土底材，厚度15公分以上供挖洞。",
      "care": "環境偏乾，每週提供少量水。",
      "breeding": "胎生，母蠍護幼至第一次蛻皮。"
    },
    "nickname": "木蠍",
    "image": "data/images/unique_265.jpg"
  },
  {
    "id": 266,
    "name": "日本獨角仙",
    "scientificName": "Allomyrina dichotoma",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "日本文化中極具象徵意義的昆蟲，常出現在動漫與遊戲中。與台灣獨角仙同屬不同亞種，日本產體型略大。是日本夏季最受歡迎的寵物。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍、西瓜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，腐植土鋪設10公分。",
      "care": "與台灣獨角仙相同。果凍2-3天換一次。",
      "breeding": "母蟲產卵於腐植土中，幼蟲期約一年。"
    },
    "nickname": "甲蟲王",
    "image": "data/images/unique_266.jpg"
  },
  {
    "id": 267,
    "name": "中華大刀螳螂",
    "scientificName": "Tenodera sinensis",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "亞洲最大型的螳螂之一，後來被引入北美成為常見物種。體型壯碩，捕食能力極強，連小型蜥蜴和蜂鳥都能捕獲。適應力強。",
    "diet": "蟋蟀、蟑螂、蝗蟲 (活餌)",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型網箱，放入粗壯枝條。",
      "care": "食量驚人，2-3天餵食一次大型活餌。",
      "breeding": "卵鞘大型，可包含200顆以上的卵。"
    },
    "nickname": "大刀螂",
    "image": "data/images/unique_267.jpg"
  },
  {
    "id": 268,
    "name": "粗糙鼠婦",
    "scientificName": "Porcellio scaber",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "全世界分布最廣的等足目之一。體色多變，有橘色、斑駁色等多種品系。是生態缸中最佳的清潔工，也是等足目飼養的經典入門品種。",
    "diet": "枯葉、蔬菜、墨魚骨、魚飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "小型盒子，底材椰土。",
      "care": "乾濕分離，補充鈣質。",
      "breeding": "繁殖極快，群養自然繁殖。"
    },
    "nickname": "大盔鼠婦",
    "image": "data/images/unique_268.jpg"
  },
  {
    "id": 269,
    "name": "南美象兜蟲",
    "scientificName": "Megasoma janus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "南美大型兜蟲，與象兜蟲近緣但體型略小。全身覆蓋密集的褐色絨毛。",
    "diet": "幼蟲：大兜土 / 成蟲：果凍、香蕉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，幼蟲需大型容器。",
      "care": "溫度控制在28度以下。食量巨大。",
      "breeding": "使用大兜土壓實，產房需足夠深度。"
    },
    "nickname": "絨毛兜",
    "image": "data/images/unique_269.jpg"
  },
  {
    "id": 270,
    "name": "提琴螳螂",
    "scientificName": "Gongylus gongyloides",
    "difficulty": "進階",
    "tempLabel": "溫暖 (28-35°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "極高通風",
    "lightLabel": "充足光照/保溫燈",
    "dietLabel": "飛行系活體昆蟲",
    "type": "螳螂",
    "description": "體型修長纖細如提琴，是最具藝術美感的螳螂。棲息於印度乾燥地區，需要高溫低濕與極佳通風。只捕食飛行中的獵物。",
    "diet": "蒼蠅、飛蛾 (飛行系活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型通風網箱，需保溫燈。",
      "care": "高溫低濕，只吃飛行餌料。",
      "breeding": "公蟲極小，交配需小心。"
    },
    "nickname": "印度花螳螂",
    "image": "data/images/unique_270.jpg"
  },
  {
    "id": 271,
    "name": "印度寶石蜘蛛",
    "scientificName": "Poecilotheria striata",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "印度華麗雨林屬，體色灰白帶有複雜花紋。速度極快且毒性較強。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "高型飼養箱（樹棲型），提供樹皮躲避。",
      "care": "速度極快，開蓋需小心。中等毒性。",
      "breeding": "母蛛護卵，幼蛛需及早分開。"
    },
    "nickname": "華麗蛛",
    "image": "data/images/unique_271.jpg"
  },
  {
    "id": 272,
    "name": "哥倫比亞巨型捕鳥蛛",
    "scientificName": "Megaphobema robustum",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "哥倫比亞地棲蜘蛛，體型巨大可達20公分。紅褐色體毛，性格敏感易受驚。",
    "diet": "蟋蟀、蟑螂、小鼠",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材加躲避處。",
      "care": "食慾極佳，幾乎不挑食。",
      "breeding": "母蛛產卵量大，可達數百隻幼蛛。"
    },
    "nickname": "巨蛛",
    "image": "data/images/unique_272.jpg"
  },
  {
    "id": 273,
    "name": "灰瓷蟑螂",
    "scientificName": "Gyna lurida",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "來自非洲的美麗蟑螂，體色如瓷器般光滑帶有灰褐色調。會飛但不善飛行。群居性強，常常堆疊在一起休息。繁殖速度適中。",
    "diet": "狗糧、蔬果、穀物",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱加蓋防飛出，紙蛋盒躲藏。",
      "care": "好養，每週餵食1-2次。",
      "breeding": "卵胎生，繁殖速度適中。"
    },
    "nickname": "瓷蟑",
    "image": "data/images/unique_273.jpg"
  },
  {
    "id": 274,
    "name": "北美巨馬陸",
    "scientificName": "Narceus americanus",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足綱",
    "description": "北美洲最大的馬陸，體長可達10公分。體色深褐帶有紅色環節。性格溫馴，受到刺激時會捲成螺旋狀並分泌防禦性液體。",
    "diet": "枯葉、朽木、蔬果、墨魚骨",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱，底材椰土加厚層枯葉。",
      "care": "保持高濕度。定期補充枯葉。",
      "breeding": "群養自然繁殖，卵產於土中。"
    },
    "nickname": "美洲馬陸",
    "image": "data/images/unique_274.jpg"
  },
  {
    "id": 275,
    "name": "越南鞭蛛",
    "scientificName": "Phrynichus orientalis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "鞭蛛目",
    "description": "東南亞大型鞭蛛，前肢特化為極長的觸肢用於感知環境。外型怪異但完全無毒。",
    "diet": "小蟋蟀、蟑螂若蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "垂直擺放的飼養箱，提供樹皮攀附。",
      "care": "需高濕度，定期噴水。夜行性。",
      "breeding": "母蛛會將卵囊貼在腹部攜帶至孵化。"
    },
    "nickname": "觸肢蛛",
    "image": "data/images/unique_275.jpg"
  },
  {
    "id": 276,
    "name": "佛羅倫斯鋸鍬形蟲",
    "scientificName": "Prosopocoilus lateralis",
    "difficulty": "新手",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "東南亞小型鍬形蟲，體色橙紅帶黑，大顎細長有鋸齒。飼養容易且繁殖快。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，單獨飼養。幼蟲用菌瓶。",
      "care": "控溫24度以下。攻擊性強勿混養。",
      "breeding": "使用硬產卵木。大型個體需大容器。"
    },
    "nickname": "紅鋸鍬",
    "image": "data/images/unique_276.jpg"
  },
  {
    "id": 277,
    "name": "錐頭螳螂",
    "scientificName": "Empusa fasciata",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "極高通風",
    "lightLabel": "室內散光",
    "dietLabel": "飛行系活體昆蟲",
    "type": "螳螂",
    "description": "頭頂有獨特的錐形突起，外型如同外太空來的異形生物。來自地中海地區，偏好乾燥溫暖的環境。幼蟲形態更是奇特，全身佈滿細刺。",
    "diet": "蒼蠅、蛾類 (飛行系活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風良好的大型網箱。",
      "care": "偏乾環境，避免高濕。偏好飛行餌料。",
      "breeding": "卵鞘需乾燥保存，春天孵化。"
    },
    "nickname": "獨角螳螂",
    "image": "data/images/unique_277.jpg"
  },
  {
    "id": 278,
    "name": "印度豹紋蟑螂",
    "scientificName": "Therea regularis",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/飼料",
    "type": "蜚蠊",
    "description": "印度產花紋蟑螂，體表黑底帶有白色斑點，與多米諾蟑螂近緣。日行性。",
    "diet": "枯葉、蔬菜、飼料",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型箱，底材椰土混枯葉。",
      "care": "偏乾環境，每週餵食。壽命約1年。",
      "breeding": "繁殖較慢，若蟲期長達一年。"
    },
    "nickname": "豹紋蟑",
    "image": "data/images/unique_278.jpg"
  },
  {
    "id": 279,
    "name": "黃金龜甲蟲",
    "scientificName": "Chrysina resplendens",
    "difficulty": "專家",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "全身如純金般閃耀的金龜子，是世界上最珍貴的甲蟲之一。來自中美洲雲霧林，在自然界中利用金色外殼反射陽光達到擬態效果。極難飼養。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、水果",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "模擬雲霧林環境，保持涼爽潮濕。",
      "care": "需要穩定的低溫高濕環境。極難維持。",
      "breeding": "人工環境繁殖成功率極低。"
    },
    "nickname": "黃金甲蟲",
    "image": "data/images/unique_279.jpg"
  },
  {
    "id": 280,
    "name": "印度竹節蟲",
    "scientificName": "Carausius morosus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "全世界實驗室和教室中最常見的竹節蟲，也是最容易飼養的品種。全為雌蟲行孤雌生殖。體色翠綠或褐色，模擬細枝完美擬態。",
    "diet": "常春藤、玫瑰葉、黑莓葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "網箱或打孔飼養罐。放入食草枝條。",
      "care": "每日噴水，食草枯萎需更換。",
      "breeding": "孤雌生殖，卵散落地面。孵化率高。"
    },
    "nickname": "實驗室竹節蟲",
    "image": "data/images/unique_280.jpg"
  },
  {
    "id": 281,
    "name": "印度紅蠍",
    "scientificName": "Hottentotta tamulus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (28-35°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "世界上最危險的蠍子之一，毒性極強，可致人死亡。體色紅褐，體型中等約5-9公分。僅供資深玩家觀賞研究，絕對不可上手把玩。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "雙重防逃箱，鎖扣必備。底材用沙土。",
      "care": "強毒物種！操作必須極度謹慎。",
      "breeding": "胎生，母蠍會攜帶幼蠍至獨立。"
    },
    "nickname": "殺手蠍",
    "image": "data/images/unique_281.jpg"
  },
  {
    "id": 282,
    "name": "喀麥隆大花金龜",
    "scientificName": "Mecynorrhina oberthuri",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "西非大型花金龜，公蟲有小型犄角。體色綠色帶白色條紋，是花金龜中體型最大者之一。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型箱，需有飛行空間。放果凍台。",
      "care": "日行性活躍，果凍消耗快。",
      "breeding": "土繭化蛹。使用腐植土壓實底部。"
    },
    "nickname": "大花金龜",
    "image": "data/images/unique_282.jpg"
  },
  {
    "id": 283,
    "name": "非洲菱螳螂",
    "scientificName": "Rhombodera valida",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "非洲大型螳螂，前胸盾板寬闊呈菱形。體色翠綠，獵食能力強。",
    "diet": "蟋蟀、蟑螂（活餌）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中大型網箱。放入枝條供攀爬。",
      "care": "食量大，2-3天餵食一次。需保持溫暖。",
      "breeding": "卵鞘約4-6週孵化。母蟲體型遠大於公蟲。"
    },
    "nickname": "菱螳",
    "image": "data/images/unique_283.jpg"
  },
  {
    "id": 284,
    "name": "橘色球鼠婦",
    "scientificName": "Cubaris sp. 'Orange Ducky'",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "小鴨鼠婦的橘色變異型，同樣會捲成完美球狀。繁殖速度較慢但非常可愛。",
    "diet": "枯葉、墨魚骨、地衣",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "小型密封盒，底材石灰質混椰土。",
      "care": "高濕高鈣。需要穩定的洞穴環境。",
      "breeding": "繁殖極慢，每胎僅數隻。"
    },
    "nickname": "橘鴨鼠婦",
    "image": "data/images/unique_284.jpg"
  },
  {
    "id": 285,
    "name": "南美神話大兜蟲",
    "scientificName": "Megasoma gyas",
    "difficulty": "進階",
    "tempLabel": "溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "巴西大型兜蟲，全身覆蓋金黃色絨毛。體型僅次於象兜和阿克提恩。",
    "diet": "幼蟲：大兜土 / 成蟲：果凍、香蕉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "超大型飼養箱。幼蟲需20L以上容器。",
      "care": "食量驚人。溫度控制在28度以下。",
      "breeding": "母蟲產卵量大。幼蟲飼養需超大空間。"
    },
    "nickname": "金毛兜",
    "image": "data/images/unique_285.jpg"
  },
  {
    "id": 286,
    "name": "刺竹節蟲",
    "scientificName": "Aretaon asperrimus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "全身佈滿細小的棘刺，體型粗壯如同帶刺的樹枝。來自馬來西亞，雌雄差異明顯。公蟲有翅膀可以短距離飛行。飼養容易。",
    "diet": "芭樂葉、橡樹葉、黑莓葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型網箱，提供新鮮葉片。",
      "care": "每日噴水。食草容易取得。",
      "breeding": "卵產在地面，孵化期約3-4個月。"
    },
    "nickname": "棘蟲",
    "image": "data/images/unique_286.jpg"
  },
  {
    "id": 287,
    "name": "墨西哥金膝捕鳥蛛",
    "scientificName": "Brachypelma auratum",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "墨西哥產地棲蜘蛛，深黑體色搭配金黃色膝部斑紋。性格極為溫馴。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。提供躲避。",
      "care": "個性溫馴好養。偶爾踢毛需注意過敏。",
      "breeding": "母蛛產卵後約2個月孵化。"
    },
    "nickname": "金膝蛛",
    "image": "data/images/unique_287.jpg"
  },
  {
    "id": 288,
    "name": "家蟋蟀",
    "scientificName": "Acheta domesticus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "雜食/飼料/蔬菜",
    "type": "直翅目",
    "description": "全世界最常見的飼養蟋蟀，廣泛用作爬蟲和蜘蛛的飼料。公蟲會在夜間鳴叫求偶，聲音悅耳。也可作為觀賞寵物飼養。",
    "diet": "麥麩、狗糧、蔬菜、水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "通風箱，紙蛋盒提供躲藏。需水碟。",
      "care": "保持乾燥通風。提供蔬菜補充水分。",
      "breeding": "產卵於潮濕基質中，約10天孵化。"
    },
    "nickname": "蟋蟀",
    "image": "data/images/unique_288.jpg"
  },
  {
    "id": 289,
    "name": "巨人盾蟑螂",
    "scientificName": "Megaloblatta blaberoides",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "中美洲產的巨型蟑螂，翅展可達15公分。極為罕見的觀賞蟑螂品種。",
    "diet": "蔬果、枯葉、飼料",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "完全密封的箱子！會爬會飛易逃。",
      "care": "繁殖力極強，容易爆缸。",
      "breeding": "卵胎生，繁殖極快。"
    },
    "nickname": "盾蟑",
    "image": "data/images/unique_289.jpg"
  },
  {
    "id": 290,
    "name": "珊瑚紅馬陸",
    "scientificName": "Trigoniulus corallinus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足綱",
    "description": "全身呈現鮮豔的珊瑚紅色，是馬陸中色彩最為搶眼的品種之一。原產於東南亞，體型中等約8-10公分。群居性強，喜歡聚在一起。",
    "diet": "枯葉、蔬果、朽木、墨魚骨",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱，底材椰土加枯葉保濕。",
      "care": "保持高濕度。補充鈣質。可群養。",
      "breeding": "群養環境下自然繁殖，卵產於土中。"
    },
    "nickname": "紅馬陸",
    "image": "data/images/unique_290.jpg"
  },
  {
    "id": 291,
    "name": "非洲巨鞭蛛",
    "scientificName": "Damon medius",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "鞭蛛目",
    "description": "非洲中型鞭蛛，觸肢特化為長鞭狀感覺器。跟斑尾鞭蠍近緣但體型較小。",
    "diet": "果蠅、小蟋蟀",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "垂直大型箱，大量樹皮供攀附。",
      "care": "高濕度。完全夜行性。",
      "breeding": "母蛛護幼，將卵囊與幼蛛攜帶在身上。"
    },
    "nickname": "鞭蛛",
    "image": "data/images/unique_291.jpg"
  },
  {
    "id": 292,
    "name": "銅背鬼艷鍬形蟲",
    "scientificName": "Odontolabis cuvera",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "東南亞大型鍬形蟲，公蟲有多種齒型變異。體色黑亮帶有金屬光澤，翅鞘光滑如烤漆。大型個體極具收藏價值，是鍬形蟲玩家的熱門品種。",
    "diet": "幼蟲：發酵木屑、菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。幼蟲推薦菌瓶飼養。",
      "care": "控溫24度以下可養出大型個體。",
      "breeding": "使用中硬度產卵木。母蟲產卵量中等。"
    },
    "nickname": "鬼艷",
    "image": "data/images/unique_292.jpg"
  },
  {
    "id": 293,
    "name": "印度花螳螂",
    "scientificName": "Creobroter meleagris",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "小型但色彩繽紛的螳螂，翅膀上有眼狀花紋。體色多為綠色或褐色，展翅時會露出美麗的警戒斑紋。性格活潑好動，會主動捕食。",
    "diet": "果蠅、小型蟋蟀 (活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型網箱即可。放入細枝條。",
      "care": "體型小，餵食果蠅或L1蟋蟀。",
      "breeding": "卵鞘小型，約3-4週孵化。"
    },
    "nickname": "花翅螳螂",
    "image": "data/images/unique_293.jpg"
  },
  {
    "id": 294,
    "name": "白額高腳蛛",
    "scientificName": "Heteropoda venatoria",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "台灣家中常見的大型蜘蛛，俗稱「旯犽」。不結網，善於奔跑捕食蟑螂等害蟲。完全無毒無害，是天然的居家害蟲剋星。速度極快。",
    "diet": "蟑螂、蟋蟀、蛾類",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，提供多個躲避處。",
      "care": "速度極快開蓋需小心。完全無毒。",
      "breeding": "母蛛會攜帶卵囊直到孵化。"
    },
    "nickname": "旯犽",
    "image": "data/images/unique_294.jpg"
  },
  {
    "id": 295,
    "name": "澳洲棘足竹節蟲",
    "scientificName": "Eurycnema goliath",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "澳洲最大的竹節蟲之一，體色翠綠帶有紅色條紋。後足有棘刺可防禦。",
    "diet": "尤加利葉、芭樂葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中大型網箱，放入空心竹筒或紙筒躲藏。",
      "care": "夜行性，白天躲藏屬正常。需保持濕度。",
      "breeding": "母蟲會將卵插入土中，孵化約4-6個月。"
    },
    "nickname": "棘竹節",
    "image": "data/images/unique_295.jpg"
  },
  {
    "id": 296,
    "name": "越南巨人蜈蚣",
    "scientificName": "Scolopendra dawydoffi",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "唇足目",
    "description": "東南亞大型蜈蚣，深紅棕色體色。與海南巨人蜈蚣近緣，體型可達20公分以上。",
    "diet": "蟋蟀、蟑螂、小鼠",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "厚底材可鑽掘。雙重防逃設計。",
      "care": "強毒物種！速度極快。操作用長鑷子。",
      "breeding": "母蜈蚣護卵護幼，期間不可干擾。"
    },
    "nickname": "紅蜈蚣",
    "image": "data/images/unique_296.jpg"
  },
  {
    "id": 297,
    "name": "獨角花金龜",
    "scientificName": "Chelorrhina polyphemus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "非洲花金龜中最受歡迎的品種之一，公蟲有獨特的Y型角。體色翠綠帶有天鵝絨質感，花紋個體差異大。日行性，活動力旺盛。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、水果",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型箱，提供果凍台和攀爬物。",
      "care": "日行性，喜歡飛行需注意空間。",
      "breeding": "土繭式化蛹，需壓實底部土層。"
    },
    "nickname": "獨角金龜",
    "image": "data/images/unique_297.jpg"
  },
  {
    "id": 298,
    "name": "黑翅蜻蜓",
    "scientificName": "Tramea lacerata",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "活體昆蟲",
    "type": "蜻蛉目",
    "description": "北美常見的大型蜻蜓，後翅基部有獨特的黑色斑塊。水蠆（幼蟲）可在水族箱中飼養觀察，是觀察不完全變態的絕佳物種。成蟲難以長期飼養。",
    "diet": "水蠆：水蚤、紅蟲 / 成蟲：果蠅、蚊子",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "水族箱飼養水蠆，需有攀爬物供羽化。",
      "care": "水蠆需清潔水質。餵食活體水生昆蟲。",
      "breeding": "需模擬自然水域環境，極難人工繁殖。"
    },
    "nickname": "黑鞍蜓",
    "image": "data/images/unique_298.jpg"
  },
  {
    "id": 299,
    "name": "田蟋蟀",
    "scientificName": "Gryllus campestris",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "雜食/飼料/蔬菜",
    "type": "直翅目",
    "description": "歐洲最著名的鳴蟲，公蟲的歌聲響亮悅耳。全身烏黑發亮，頭部碩大，是歐洲鄉間夏夜的象徵。野外數量因棲地破壞而減少，部分地區已列入保育。",
    "diet": "草類、蔬菜、穀物、昆蟲飼料",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "中型通風箱，放入土壤供挖掘洞穴。",
      "care": "公蟲領域性強，建議單獨或一公多母。",
      "breeding": "母蟲將產卵管插入土中產卵。"
    },
    "nickname": "歐洲蟋蟀",
    "image": "data/images/unique_299.jpg"
  },
  {
    "id": 300,
    "name": "大田鱉",
    "scientificName": "Lethocerus americanus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲/小魚",
    "type": "半翅目",
    "description": "北美最大的水生昆蟲，體長可達12公分。前肢強壯如鐮刀，能捕食魚類和青蛙。會飛且趨光性強。被咬極度疼痛，操作需格外小心。",
    "diet": "小魚、蝌蚪、水生昆蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型水族箱，水深15-20公分。放入水草和攀爬物。",
      "care": "水質需保持清潔。餵食小魚或蝌蚪。",
      "breeding": "公蟲護卵，將卵塊背在背上或貼於水面植物。"
    },
    "nickname": "水中霸王",
    "image": "data/images/unique_300.jpg"
  },
  {
    "id": 301,
    "name": "安達森大兜蟲",
    "scientificName": "Dynastes hercules lichyi",
    "difficulty": "專家",
    "tempLabel": "涼爽 (16-22°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "大量腐植土/果凍",
    "type": "甲蟲",
    "description": "長戟大兜蟲的知名亞種，來自南美安地斯山區。公蟲上角特別粗壯，整體比例協調。需要涼爽環境，幼蟲期長達2年以上。",
    "diet": "幼蟲：高品質大兜土 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱，幼蟲需10L以上容器。",
      "care": "嚴格控溫22度以下。",
      "breeding": "產房需高品質大兜土壓實。"
    },
    "nickname": "安地斯長戟",
    "image": "data/images/unique_301.jpg"
  },
  {
    "id": 302,
    "name": "亮紅蛛蠍",
    "scientificName": "Uropygi",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蛛形綱",
    "description": "又稱鞭尾蠍，尾部有細長的鞭狀結構。受驚時會從尾部基部噴出醋酸液體，因此英文也叫Vinegaroon。完全無毒但外型嚇人。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "深底材飼養箱，提供樹皮躲避。",
      "care": "需高濕度。夜行性。完全無毒。",
      "breeding": "母蛛背幼至獨立。"
    },
    "nickname": "醋酸蠍",
    "image": "data/images/unique_302.jpg"
  },
  {
    "id": 303,
    "name": "巴布亞彩虹鍬形蟲",
    "scientificName": "Phalacrognathus fuscoaeneus",
    "difficulty": "新手",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "與彩虹鍬形蟲同屬但體色偏暗銅色。飼養方式相同，適合新手入門。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。幼蟲用菌瓶效果最佳。",
      "care": "控溫24度以下。成蟲壽命約6個月。",
      "breeding": "使用軟朽木或壓實木屑產卵。"
    },
    "nickname": "銅鍬",
    "image": "data/images/unique_303.jpg"
  },
  {
    "id": 304,
    "name": "巴西巨人金色膝蜘蛛",
    "scientificName": "Grammostola pulchripes",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "大型地棲捕鳥蛛，膝部有金黃色斑紋。個性極為溫馴，幾乎不會咬人也很少踢毛。成長緩慢但壽命極長，母蛛可活25年以上。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。提供躲避。",
      "care": "偏乾環境。極為溫馴適合新手。",
      "breeding": "母蛛成熟慢，需要冬季降溫刺激。"
    },
    "nickname": "金膝蛛",
    "image": "data/images/unique_304.jpg"
  },
  {
    "id": 305,
    "name": "東南亞透翅螳螂",
    "scientificName": "Hymenopus bicornis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "飛行系活體昆蟲",
    "type": "螳螂",
    "description": "與蘭花螳螂近緣的稀有種，體色白帶粉紅。觸角呈雙角狀。飼養難度極高。",
    "diet": "果蠅、小型飛蟲（活餌）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風良好的白色網箱。放入人造花。",
      "care": "高溫高濕。偏好飛行餌料。",
      "breeding": "公蟲體型極小，交配需謹慎。"
    },
    "nickname": "雙角螳",
    "image": "data/images/unique_305.jpg"
  },
  {
    "id": 306,
    "name": "印度靛藍捕鳥蛛",
    "scientificName": "Chilobrachys sp. 'Electric Blue'",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "印度產洞穴蜘蛛，體色帶有電光藍色澤。速度極快且防禦性強，僅適合專家飼養。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "深底材飼養箱，提供挖掘空間。",
      "care": "需高濕度。速度快開蓋小心。",
      "breeding": "公蛛需小心接近母蛛。"
    },
    "nickname": "電藍蛛",
    "image": "data/images/unique_306.jpg"
  },
  {
    "id": 307,
    "name": "坦尚尼亞藍腳蜈蚣",
    "scientificName": "Scolopendra morsitans",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/小型脊椎動物",
    "type": "唇足目",
    "description": "泛熱帶分布的中型蜈蚣，步足帶有藍色光澤。適應力極強的蜈蚣品種。",
    "diet": "蟋蟀、小蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型防逃箱，厚底材。雙重鎖扣。",
      "care": "強毒物種！速度驚人。使用長鑷子操作。",
      "breeding": "母蜈蚣護卵護幼，期間具高度攻擊性。"
    },
    "nickname": "藍蜈蚣",
    "image": "data/images/unique_307.jpg"
  },
  {
    "id": 308,
    "name": "印尼祖母綠蟑螂",
    "scientificName": "Pseudoglomeris tarsalis",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/飼料",
    "type": "蜚蠊",
    "description": "印尼產寶石蟑螂，體色深翠綠帶有光澤。與翡翠蟑螂同屬但花紋不同。",
    "diet": "枯葉、蔬菜、飼料",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "保濕箱，底材椰土加枯葉。",
      "care": "需高濕度但避免過濕。繁殖慢需耐心。",
      "breeding": "卵胎生，每次僅產少量幼蟲。"
    },
    "nickname": "祖母綠蟑",
    "image": "data/images/unique_308.jpg"
  },
  {
    "id": 309,
    "name": "泰國黑帝王蠍",
    "scientificName": "Heterometrus petersii",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍目",
    "description": "東南亞大型黑蠍，體型壯碩。性格相對溫馴，毒性較弱，適合入門蠍子飼養。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，椰土底材保濕。提供躲避。",
      "care": "保持高濕度。毒性極低，適合新手。",
      "breeding": "胎生，母蠍背幼。"
    },
    "nickname": "黑帝蠍",
    "image": "data/images/unique_309.jpg"
  },
  {
    "id": 310,
    "name": "寶石金龜子",
    "scientificName": "Chrysina gloriosa",
    "difficulty": "專家",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "全身銀綠色帶有金色條紋，如同珠寶般閃耀。來自北美西南部山區，在紫外光下會呈現特殊的偏光效果。野外數量稀少用棲地保護。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、水果",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "模擬山區環境，涼爽偏乾。",
      "care": "需穩定低溫。野外數量受威脅。",
      "breeding": "人工繁殖困難。"
    },
    "nickname": "光榮金龜",
    "image": "data/images/unique_310.jpg"
  },
  {
    "id": 311,
    "name": "澳洲棘蝗",
    "scientificName": "Petasida ephippigera",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "新鮮葉片",
    "type": "直翅目",
    "description": "全身鮮紅帶有黑藍色斑紋，是世界上最鮮豔的蝗蟲。來自澳洲北部，以有毒植物為食而獲得警戒色。體型大，可達8公分。",
    "diet": "紅木棉葉、各種灌木葉片",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱，充足光照。",
      "care": "需要特定食草。偏乾環境。",
      "breeding": "卵產於土中，需乾季休眠。"
    },
    "nickname": "彩虹蝗蟲",
    "image": "data/images/unique_311.jpg"
  },
  {
    "id": 312,
    "name": "哥斯大黎加老虎蜘蛛",
    "scientificName": "Davus fasciatus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "中美洲小型地棲蜘蛛，黑色體色帶有棕色環帶。性格溫馴，適合新手。",
    "diet": "果蠅、小蟋蟀",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。",
      "care": "極為溫馴。成長極慢需耐心。",
      "breeding": "母蛛成熟非常慢，繁殖值得等待。"
    },
    "nickname": "虎紋蛛",
    "image": "data/images/unique_312.jpg"
  },
  {
    "id": 313,
    "name": "台灣大螳螂",
    "scientificName": "Hierodula formosana",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "台灣特有的大型螳螂，體色翠綠。與寬腹螳螂近緣但體型更大。",
    "diet": "蟋蟀、蟑螂（活餌）",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中大型網箱，放入粗枝條。",
      "care": "食量大，2-3天餵食一次。容易飼養。",
      "breeding": "卵鞘泡沫狀，約4-6週孵化。"
    },
    "nickname": "大螳螂",
    "image": "data/images/unique_313.jpg"
  },
  {
    "id": 314,
    "name": "洪都拉斯紅尾蜘蛛",
    "scientificName": "Tliltocatl kahlenbergi",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "中美洲地棲蜘蛛，與墨西哥紅尾近緣。體色深黑，腹部末端有紅色毛。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。",
      "care": "食慾好，成長快。踢毛程度中等。",
      "breeding": "母蛛產卵量大，幼蛛活潑。"
    },
    "nickname": "紅尾蟲",
    "image": "data/images/unique_314.jpg"
  },
  {
    "id": 315,
    "name": "菲律賓扁鍬形蟲",
    "scientificName": "Dorcus titanus imperialis",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "台灣扁鍬的菲律賓亞種，體型稍大。黑色光澤體色，飼養方式相同。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，木屑底材。",
      "care": "好養。果凍2-3天更換。",
      "breeding": "產卵木使用軟朽木。繁殖容易。"
    },
    "nickname": "菲扁鍬",
    "image": "data/images/unique_315.jpg"
  },
  {
    "id": 316,
    "name": "透翅蝶",
    "scientificName": "Greta oto",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜/糖水",
    "type": "鱗翅目",
    "description": "翅膀幾乎完全透明的蝴蝶，只有翅脈和邊緣可見。來自中美洲雲霧林，透明翅膀用於躲避天敵。極難人工飼養，主要供研究觀察。",
    "diet": "花蜜、稀釋蜂蜜水",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風花房式飼養箱。",
      "care": "需要極高濕度和新鮮花朵。壽命短。",
      "breeding": "幼蟲取食茄科植物。"
    },
    "nickname": "玻璃翅蝶",
    "image": "data/images/unique_316.jpg"
  },
  {
    "id": 317,
    "name": "金背蟑螂",
    "scientificName": "Gyna caffrorum",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "前胸背板有金色光澤，翅膀半透明帶有金黃色調。來自非洲，體型中等。會飛但飛行能力不強，需加蓋防逃。群居性強。",
    "diet": "狗糧、蔬果、穀物",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱加密封蓋。紙蛋盒躲藏。",
      "care": "好養。繁殖速度中等。",
      "breeding": "卵胎生。群養自然繁殖。"
    },
    "nickname": "金翅蟑螂",
    "image": "data/images/unique_317.jpg"
  },
  {
    "id": 318,
    "name": "紅螯螳臂蝦",
    "scientificName": "Macrobrachium carcinus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "雜食/飼料/活餌",
    "type": "甲殼綱",
    "description": "淡水大型螯蝦，螯肢呈鮮紅色十分醒目。來自熱帶美洲河川，可長達30公分。領域性強，同種間容易打鬥。需要大空間飼養。",
    "diet": "蝦飼料、小魚、蔬菜、血蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "live"
      ]
    },
    "guide": {
      "setup": "大型水族箱，提供躲避處和石頭。",
      "care": "水質需定期維護。獨居較佳。",
      "breeding": "需半鹹水環境育幼。"
    },
    "nickname": "巨螯蝦",
    "image": "data/images/unique_318.jpg"
  },
  {
    "id": 319,
    "name": "巨型尺蠖蛾",
    "scientificName": "Lycia hirtaria",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (16-22°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "大型尺蠖蛾，翅膀灰褐色帶有精緻的波紋。幼蟲（尺蠖）走路時身體會弓起來像在量尺一樣。是觀察完全變態的好素材。",
    "diet": "幼蟲：榆樹、柳樹等闊葉樹葉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "網箱，放入新鮮食草枝條。",
      "care": "每日更換食草。化蛹前準備土壤。",
      "breeding": "成蟲壽命短，需抓緊配對。"
    },
    "nickname": "尺蠖蛾",
    "image": "data/images/unique_319.jpg"
  },
  {
    "id": 320,
    "name": "哥斯大黎加條紋膝蜘蛛",
    "scientificName": "Aphonopelma seemanni",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "腿部各節有奶白色條紋，整體黑褐色。來自中美洲，穴居型會挖深洞。個性偏防禦但不太會主動攻擊。壽命可達20年。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "深底材中型箱。提供起始洞穴。",
      "care": "會挖深洞，不常見到。",
      "breeding": "公蛛交配後需迅速移走。"
    },
    "nickname": "條紋膝蛛",
    "image": "data/images/unique_320.jpg"
  },
  {
    "id": 321,
    "name": "台灣姬獨角仙",
    "scientificName": "Xylotrupes pubescens",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "台灣本土小型兜蟲，全身覆蓋褐色絨毛。體型嬌小但角型完整，適合入門。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，腐植土鋪10公分以上。",
      "care": "成蟲壽命僅2-3個月。果凍常備。",
      "breeding": "母蟲產卵於腐植土中。"
    },
    "nickname": "姬兜",
    "image": "data/images/unique_321.jpg"
  },
  {
    "id": 322,
    "name": "泰國蘭花螳螂",
    "scientificName": "Creobroter elongata",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "東南亞小型花螳螂，前翅展開有綠色眼斑。體型比麗眼斑螳螂略小。",
    "diet": "果蠅、小蟋蟀（活餌）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型網箱即可。放入細枝。",
      "care": "體型小，餵食果蠅即可。壽命約6個月。",
      "breeding": "卵鞘約3-4週孵化。"
    },
    "nickname": "花螳",
    "image": "data/images/unique_322.jpg"
  },
  {
    "id": 323,
    "name": "巴拿馬金蟑螂",
    "scientificName": "Lucihormetica grossei",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "中美洲產具有生物螢光點的蟑螂，前胸背板有黃色發光斑點。",
    "diet": "枯葉、蔬菜、飼料",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "完全密封箱！會飛會爬。",
      "care": "繁殖極快。密封是關鍵。",
      "breeding": "卵胎生，繁殖恐怖地快。"
    },
    "nickname": "金蟑",
    "image": "data/images/unique_323.jpg"
  },
  {
    "id": 324,
    "name": "馬達加斯加日落蛾",
    "scientificName": "Chrysiridia rhipheus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜/糖水",
    "type": "鱗翅目",
    "description": "被譽為世界上最美的蛾類，翅膀有如彩虹般的金屬光澤。來自馬達加斯加，日行性。色彩來自翅鱗的光學干涉而非色素。極難人工飼養。",
    "diet": "花蜜、稀釋蜂蜜水",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型花房式飼養箱。",
      "care": "需特定食草Omphalea。極難維持。",
      "breeding": "幼蟲僅食特定大戟科植物。"
    },
    "nickname": "日落蛾",
    "image": "data/images/unique_324.jpg"
  },
  {
    "id": 325,
    "name": "塞席爾棕櫚蛛",
    "scientificName": "Nephila inaurata",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "大型結網蜘蛛，能織出直徑超過1公尺的金色蛛網。蛛絲強度極高，是科學研究的重要材料。母蛛體型遠大於公蛛。",
    "diet": "蟋蟀、蒼蠅、飛蛾 (活餌)",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型高箱或溫室。提供架設蛛網空間。",
      "care": "需要足夠空間結網。每週餵食2-3次。",
      "breeding": "公蛛極小，需避免被母蛛捕食。"
    },
    "nickname": "金蛛",
    "image": "data/images/unique_325.jpg"
  },
  {
    "id": 326,
    "name": "翠綠寶石蜂",
    "scientificName": "Ampulex compressa",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "蜜水/蟑螂",
    "type": "膜翅目",
    "description": "全身閃耀翠綠金屬光澤的寄生蜂。著名的「殭屍蜂」，能精準刺入蟑螂腦部使其喪失自主意志。是研究行為控制的重要模式生物。",
    "diet": "蜂蜜水、蟑螂（寄生對象）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風飼養箱，提供蟑螂做為寄主。",
      "care": "短命物種，約數週至數月。",
      "breeding": "雌蜂刺入蟑螂產卵。幼蟲以蟑螂為食。"
    },
    "nickname": "殭屍蜂",
    "image": "data/images/unique_326.jpg"
  },
  {
    "id": 327,
    "name": "馬達加斯加彩虹千足蟲",
    "scientificName": "Aphistogoniulus corallipes",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足目",
    "description": "馬達加斯加特有馬陸，深黑體色配上鮮紅色足部和觸角。色彩對比鮮明。",
    "diet": "枯葉、腐木、蔬果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱，厚層椰土混枯葉。",
      "care": "高濕度。補充鈣質。可群養。",
      "breeding": "群養自然繁殖，卵產於土中。"
    },
    "nickname": "彩虹馬陸",
    "image": "data/images/unique_327.jpg"
  },
  {
    "id": 328,
    "name": "藍色死亡偽蠍",
    "scientificName": "Cordylochernes scorpioides",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲(微型)",
    "type": "蛛形綱",
    "description": "極小型的蛛形綱動物，外型像迷你蠍子但沒有尾巴和毒刺。體長僅2-8毫米。完全無毒無害，是自然界的微型獵手。以更小的蟲為食。",
    "diet": "跳蟲、蟎類、果蠅幼蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "微型密封容器，底材保濕。",
      "care": "需要微型活餌。觀察需放大鏡。",
      "breeding": "母體護幼，幼蟲騎在母體身上。"
    },
    "nickname": "迷你蠍",
    "image": "data/images/unique_328.jpg"
  },
  {
    "id": 329,
    "name": "巴西漫遊蜘蛛",
    "scientificName": "Phoneutria nigriventer",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "世界上毒性最強的蜘蛛之一，又稱「香蕉蜘蛛」。在巴西造成最多蜘蛛咬傷事件。體型大、速度快、攻擊性極強。僅供研究機構飼養。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "多重防逃設計。雙重鎖扣必備。",
      "care": "極度危險！僅限專業人士。毒性致命。",
      "breeding": "母蛛護卵具高度攻擊性。"
    },
    "nickname": "香蕉蛛",
    "image": "data/images/unique_329.jpg"
  },
  {
    "id": 330,
    "name": "綠翡翠天牛",
    "scientificName": "Sternotomis bohemani",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮樹枝/果凍",
    "type": "甲蟲",
    "description": "全身翠綠色帶有不規則的黑斑和黃點，如同一件精美的藝術品。來自非洲中西部，是天牛科中最具觀賞性的物種之一。長觸角為其特徵。",
    "diet": "新鮮無花果樹枝、昆蟲果凍",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant",
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱，放入新鮮樹枝。",
      "care": "需要特定樹枝供食用。保持濕度。",
      "breeding": "幼蟲蛀食木材，需要大型原木。"
    },
    "nickname": "寶石天牛",
    "image": "data/images/unique_330.jpg"
  },
  {
    "id": 331,
    "name": "奇異球背象鼻蟲",
    "scientificName": "Pachyrhynchus orbifer",
    "difficulty": "專家",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "甲蟲",
    "description": "全身覆蓋如馬賽克般的寶石色鱗片，主要為藍綠色。來自菲律賓等熱帶島嶼。外殼極為堅硬，連針都很難刺穿。是收藏界的珍品。",
    "diet": "各種闊葉植物葉片",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "保濕飼養箱，放入食草。",
      "care": "需新鮮葉片。壽命約數月。",
      "breeding": "人工繁殖困難。"
    },
    "nickname": "寶石象鼻蟲",
    "image": "data/images/unique_331.jpg"
  },
  {
    "id": 332,
    "name": "印度紫老虎蜘蛛",
    "scientificName": "Chilobrachys fimbriatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "體色從金棕到深紫都有變化，是亞洲舊世界捕鳥蛛的代表之一。速度極快，會挖深洞並在洞口織大量蛛絲。具有中等毒性。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "深底材飼養箱。提供挖掘空間。",
      "care": "速度極快！舊世界蛛，不建議上手。",
      "breeding": "母蛛護卵強烈。"
    },
    "nickname": "紫老虎蛛",
    "image": "data/images/unique_332.jpg"
  },
  {
    "id": 333,
    "name": "越南長竹節蟲",
    "scientificName": "Baculum extradentatum",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "來自越南的大型竹節蟲，全身褐色細長。行孤雌生殖，單隻即可繁殖。是學校和教室中最常用來教學的竹節蟲品種之一。飼養極為簡單。",
    "diet": "常春藤、黑莓葉、玫瑰葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型網箱，放入食草枝條。",
      "care": "每日噴水。食草需定期更換。",
      "breeding": "孤雌生殖，產卵極多。"
    },
    "nickname": "越南竹節蟲",
    "image": "data/images/unique_333.jpg"
  },
  {
    "id": 334,
    "name": "藍寶石蜈蚣",
    "scientificName": "Scolopendra cingulata",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "唇足綱",
    "description": "地中海地區最常見的大型蜈蚣，體色從暗黃到橄欖綠。體長約10-15公分。毒性不強但被咬仍會疼痛。是蜈蚣入門的選擇之一。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型防逃箱，厚底材。",
      "care": "乾濕區分離。毒性中等需小心。",
      "breeding": "母蜈蚣護卵護幼。"
    },
    "nickname": "地中海蜈蚣",
    "image": "data/images/unique_334.jpg"
  },
  {
    "id": 335,
    "name": "巨型螽斯",
    "scientificName": "Saga pedo",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "直翅目",
    "description": "歐洲最大的昆蟲之一，體長可達12公分。全身翠綠，前肢如螳螂般用於捕食其他昆蟲。行孤雌生殖。在歐洲屬於保育類物種。",
    "diet": "蟋蟀、蝗蟲、其他昆蟲 (活餌)",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。放入粗枝條。",
      "care": "肉食性螽斯！會捕食其他昆蟲。",
      "breeding": "孤雌生殖，卵插入土中。"
    },
    "nickname": "巨螽斯",
    "image": "data/images/unique_335.jpg"
  },
  {
    "id": 336,
    "name": "澳洲黃金鍬形蟲",
    "scientificName": "Lamprima aurata",
    "difficulty": "新手",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "澳洲小型鍬形蟲，體色金綠帶有強烈金屬光澤。與印尼金鍬同屬。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。幼蟲微型容器即可。",
      "care": "控溫24度以下。成蟲壽命約3-6個月。",
      "breeding": "使用軟朽木或壓實木屑。"
    },
    "nickname": "金鍬",
    "image": "data/images/unique_336.jpg"
  },
  {
    "id": 337,
    "name": "南美巨人馬陸",
    "scientificName": "Orthoporus ornatus",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/枯葉/蔬果",
    "type": "倍足綱",
    "description": "北美至中美洲產的大型馬陸，體色為沙褐色帶有深色環節。偏好乾燥居住環境但需要保濕角落。性格溫馴，適合觀察和上手。",
    "diet": "枯葉、蔬果、朽木、墨魚骨",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型箱，乾濕分離。底材混枯葉。",
      "care": "乾燥區為主，一角保濕。補充鈣質。",
      "breeding": "群養自然繁殖。"
    },
    "nickname": "沙漠馬陸",
    "image": "data/images/unique_337.jpg"
  },
  {
    "id": 338,
    "name": "紅腿蜈蚣",
    "scientificName": "Scolopendra polymorpha",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "唇足綱",
    "description": "北美洲常見的中型蜈蚣，體色多變，從黃色到藍紫色都有。腿部常呈紅色或橘色。毒性較溫和，是蜈蚣入門的另一選擇。體長約10-13公分。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型防逃箱。沙土混椰土底材。",
      "care": "偏乾環境。毒性溫和但仍需小心。",
      "breeding": "母蜈蚣護卵護幼。"
    },
    "nickname": "虎紋蜈蚣",
    "image": "data/images/unique_338.jpg"
  },
  {
    "id": 339,
    "name": "孔雀蜘蛛",
    "scientificName": "Maratus volans",
    "difficulty": "專家",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(微型)",
    "type": "蜘蛛",
    "description": "世界上最迷人的蜘蛛！公蛛腹部有如孔雀般的彩色摺扇，求偶時會展開並跳舞。體型僅5毫米但色彩絢爛。來自澳洲，極難飼養。",
    "diet": "果蠅、跳蟲",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "微型通風容器。需要極小的活餌。",
      "care": "體型極小。壽命約一年。極難維持。",
      "breeding": "公蛛的求偶舞蹈是自然界奇觀。"
    },
    "nickname": "舞蛛",
    "image": "data/images/unique_339.jpg"
  },
  {
    "id": 340,
    "name": "巨型水蛭",
    "scientificName": "Haementeria ghilianii",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮血液/活魚",
    "type": "環節動物",
    "description": "世界上最大的水蛭，體長可達45公分。來自南美洲亞馬遜流域。吸血量驚人。是醫學研究的重要動物，其唾液含有強效抗凝血劑。",
    "diet": "新鮮動物血液、活魚",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型水族箱，乾淨淡水。防逃蓋。",
      "care": "水質需定期更換。餵食頻率低。",
      "breeding": "需要特定溫濕度條件。"
    },
    "nickname": "巨蛭",
    "image": "data/images/unique_340.jpg"
  },
  {
    "id": 341,
    "name": "地中海巨型鼠婦",
    "scientificName": "Porcellio dilatatus",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/飼料/枯葉",
    "type": "等足目",
    "description": "歐洲大型等足蟲，體色灰藍帶有斑紋。繁殖力強，適合生態缸清潔員。",
    "diet": "枯葉、墨魚骨、蔬菜",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small",
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "小型盒子，底材椰土。",
      "care": "乾濕分離。繁殖快速。",
      "breeding": "群養自然大量繁殖。"
    },
    "nickname": "灰鼠婦",
    "image": "data/images/unique_341.jpg"
  },
  {
    "id": 342,
    "name": "琉璃鳳蝶幼蟲",
    "scientificName": "Papilio paris",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "台灣常見的大型鳳蝶，翅膀有閃亮的藍綠色琉璃光帶。幼蟲綠色帶有眼斑模擬蛇頭嚇退天敵。是觀察蝴蝶完全變態的最佳入門物種。",
    "diet": "幼蟲：柑橘類葉片",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "網箱，放入柑橘枝條。",
      "care": "每日更換新鮮食草。化蛹期勿干擾。",
      "breeding": "成蝶短命，需抓緊配對產卵。"
    },
    "nickname": "琉璃蝶",
    "image": "data/images/unique_342.jpg"
  },
  {
    "id": 343,
    "name": "巨型水蜘蛛",
    "scientificName": "Argyroneta aquatica",
    "difficulty": "專家",
    "tempLabel": "涼爽/常溫 (16-22°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "中型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(水生)",
    "type": "蜘蛛",
    "description": "全世界唯一完全水棲的蜘蛛！能在水中建造銀色的空氣鐘罩做為巢穴。腹部的細毛可以困住空氣帶入水中，如同天然的潛水鐘。",
    "diet": "水蚤、水生昆蟲、小魚苗",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "水族箱，放入水草供建巢。",
      "care": "水質需清潔。提供小型水生活餌。",
      "breeding": "水中交配，母蛛在氣泡巢中產卵。"
    },
    "nickname": "潛水蛛",
    "image": "data/images/unique_343.jpg"
  },
  {
    "id": 344,
    "name": "非洲刺花螳螂",
    "scientificName": "Pseudocreobotra ocellata",
    "difficulty": "進階",
    "tempLabel": "溫暖 (28-35°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "極高通風",
    "lightLabel": "充足光照/保溫燈",
    "dietLabel": "飛行系活體昆蟲",
    "type": "螳螂",
    "description": "非洲產花螳螂，前翅有螺旋形眼斑。體色白帶粉紅與綠色，極具觀賞價值。",
    "diet": "果蠅、蒼蠅（活餌）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "超大型通風網箱。需保溫燈。",
      "care": "高溫不可缺。僅吃飛行餌料。極難養。",
      "breeding": "成功交配和孵化是巨大挑戰。"
    },
    "nickname": "眼斑螳",
    "image": "data/images/unique_344.jpg"
  },
  {
    "id": 345,
    "name": "新幾內亞尖刺竹節蟲",
    "scientificName": "Extatosoma bufonium",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "新幾內亞特有竹節蟲，體表佈滿尖刺。體型比幽靈竹節蟲略小。",
    "diet": "尤加利葉、芭樂葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型網箱。放入新鮮食草。",
      "care": "每日噴水。食草需定期更換。",
      "breeding": "母蟲彈射卵粒。卵有蟻散布機制。"
    },
    "nickname": "刺蟲",
    "image": "data/images/unique_345.jpg"
  },
  {
    "id": 346,
    "name": "紅色魔蠍",
    "scientificName": "Tityus serrulatus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "巴西最危險的蠍子，黃色半透明體色。毒性極強，在巴西造成最多致命蠍蟄事件。能行孤雌生殖，不需交配即可產仔。僅供研究機構飼養。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "多重防逃設計。絕對需要鎖扣。",
      "care": "極度致命！僅限專業機構。",
      "breeding": "孤雌生殖，單隻即可繁殖。"
    },
    "nickname": "黃蠍",
    "image": "data/images/unique_346.jpg"
  },
  {
    "id": 347,
    "name": "鐵甲蟲",
    "scientificName": "Zopherus nodulosus haldemani",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "真菌/朽木",
    "type": "甲蟲",
    "description": "全身覆蓋如鐵甲般的灰白色斑紋外殼，堅硬到連昆蟲針都難以穿透。來自美國德州，常被當地人在外殼上黏上水鑽當作活體胸針佩戴。",
    "diet": "枯木上的真菌、地衣",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "小型箱，放入長有真菌的朽木。",
      "care": "極耐旱。壽命可達數年。",
      "breeding": "人工繁殖困難。"
    },
    "nickname": "活體胸針",
    "image": "data/images/unique_347.jpg"
  },
  {
    "id": 348,
    "name": "巨型蛞蝓",
    "scientificName": "Limax cinereoniger",
    "difficulty": "新手",
    "tempLabel": "涼爽/常溫 (16-22°C)",
    "humidityLabel": "潮濕 (80-95%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "蔬菜/蘑菇/枯葉",
    "type": "腹足綱",
    "description": "歐洲最大的蛞蝓，體長可達30公分。全身暗黑色帶有灰色紋路。夜行性，喜好陰暗潮濕環境。交配行為特殊，兩隻會懸掛在黏液絲上。",
    "diet": "蘑菇、蔬菜、枯葉、水果",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "保濕箱，底材保持潮濕。",
      "care": "極高濕度。夜行性。怕乾燥。",
      "breeding": "雌雄同體，兩隻即可交配。"
    },
    "nickname": "黑巨蛞蝓",
    "image": "data/images/unique_348.jpg"
  },
  {
    "id": 349,
    "name": "綠色螽斯",
    "scientificName": "Tettigonia viridissima",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "雜食/葉片/昆蟲",
    "type": "直翅目",
    "description": "歐洲最大的螽斯之一，全身翠綠。公蟲鳴叫聲響亮可傳數百公尺。雜食性，會捕食小型昆蟲也會吃植物。是歐洲田園的夏日象徵。",
    "diet": "草類、蔬菜、小型昆蟲",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "live",
        "plant"
      ]
    },
    "guide": {
      "setup": "中大型通風網箱。放入草和枝條。",
      "care": "雜食好養。公蟲會鳴叫。",
      "breeding": "母蟲以產卵管插入土中產卵。"
    },
    "nickname": "大綠螽",
    "image": "data/images/unique_349.jpg"
  },
  {
    "id": 350,
    "name": "台灣扁角兜蟲",
    "scientificName": "Trypoxylus dichotomus takarai",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "台灣獨角仙的琉球亞種，角型更扁平。體色與獨角仙相似但較小型。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，腐植土鋪10公分。",
      "care": "成蟲壽命短約2-3個月。果凍常備。",
      "breeding": "母蟲產卵於腐植土中。幼蟲期約一年。"
    },
    "nickname": "扁兜",
    "image": "data/images/unique_350.jpg"
  },
  {
    "id": 351,
    "name": "黃腰泥蜂",
    "scientificName": "Sceliphron caementarium",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "蜜水/蟑螂",
    "type": "膜翅目",
    "description": "全球分布的大型泥蜂，以泥土築巢。會獵捕蜘蛛餵食幼蟲。",
    "diet": "花蜜、蜘蛛（幼蟲）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風飼養箱，提供蟑螂作為寄主。",
      "care": "短命物種。觀察寄生行為極具教育價值。",
      "breeding": "雌蜂刺入蟑螂產卵。幼蟲以蟑螂為食。"
    },
    "nickname": "泥蜂",
    "image": "data/images/unique_351.jpg"
  },
  {
    "id": 352,
    "name": "日本彩虹吉丁蟲",
    "scientificName": "Chrysochroa fulminans",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "甲蟲",
    "description": "東南亞產的大型吉丁蟲，全身散發紅、綠、藍多色金屬光澤。在陽光下會反射出彩虹般的色彩。翅鞘常被用來製作傳統首飾和裝飾品。",
    "diet": "特定樹種葉片",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱，放入新鮮食草枝條。",
      "care": "需特定食草。壽命約數月。",
      "breeding": "幼蟲蛀食木材。人工繁殖困難。"
    },
    "nickname": "閃電吉丁蟲",
    "image": "data/images/unique_352.jpg"
  },
  {
    "id": 353,
    "name": "巨型水黽",
    "scientificName": "Gigantometra gigas",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(水面)",
    "type": "半翅目",
    "description": "世界上最大的水黽，腿展可達25公分。利用表面張力在水面上滑行。來自東南亞溪流，以落水昆蟲為食。極為稀有，觀察記錄少。",
    "diet": "落水昆蟲、小型無脊椎動物",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型淺水容器，模擬溪流環境。",
      "care": "需清潔水面。極難取得。",
      "breeding": "野外觀察紀錄極少。"
    },
    "nickname": "巨型水蜘蛛",
    "image": "data/images/unique_353.jpg"
  },
  {
    "id": 354,
    "name": "銀背蟑螂",
    "scientificName": "Eublaberus distanti",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "大型蟑螂，前胸背板有銀白色斑紋，翅膀半透明。來自中南美洲，不會爬光滑壁面所以防逃容易。常作為爬蟲飼料，也因體型大適合觀賞。",
    "diet": "狗糧、蔬果、穀物",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱，紙蛋盒躲藏。不爬壁。",
      "care": "好養。體型大觀賞性佳。",
      "breeding": "卵胎生。群養自然繁殖。"
    },
    "nickname": "銀頭蟑螂",
    "image": "data/images/unique_354.jpg"
  },
  {
    "id": 355,
    "name": "紅腳巨人蜈蚣",
    "scientificName": "Scolopendra heros",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "唇足綱",
    "description": "北美最大的蜈蚣，體長可達20公分。頭部和尾部為紅色，身體黑色或墨綠色。來自美國南部和墨西哥。毒性中等，被咬後疼痛數小時。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型防逃箱。沙土底材。",
      "care": "乾濕分離。毒性中等需小心操作。",
      "breeding": "母蜈蚣護卵護幼約2個月。"
    },
    "nickname": "紅頭蜈蚣",
    "image": "data/images/unique_355.jpg"
  },
  {
    "id": 356,
    "name": "美東獨角仙",
    "scientificName": "Dynastes maya",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "中美洲特有兜蟲，體色深褐。以墨西哥到瓜地馬拉的雲霧林為棲地。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、水果",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱。幼蟲需大量腐植土。",
      "care": "控溫24度以下。幼蟲期長達2年。",
      "breeding": "產房需高品質腐植土。"
    },
    "nickname": "馬雅兜",
    "image": "data/images/unique_356.jpg"
  },
  {
    "id": 357,
    "name": "巨型葉蟲",
    "scientificName": "Phyllium giganteum",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "世界上最大的葉蟲，母蟲體長可達10公分。全身扁平翠綠，連腿部都有葉狀擴展。來自馬來西亞，擬態程度是所有昆蟲中最高的之一。",
    "diet": "芭樂葉、橡樹葉、覆盆子葉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。每日噴水。",
      "care": "需高濕度。食草需定期更換。",
      "breeding": "母蟲彈射卵粒。孵化期長達數月。"
    },
    "nickname": "巨葉竹節蟲",
    "image": "data/images/unique_357.jpg"
  },
  {
    "id": 358,
    "name": "紫光蠍",
    "scientificName": "Centruroides vittatus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "在紫外光下會發出螢光藍綠色的蠍子，來自美國南部。體型中等約5-7公分，毒性中等。蠍子螢光的目的至今仍是未解之謎。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型乾燥飼養箱。偏乾環境。",
      "care": "偏乾環境。用紫外光觀察螢光。",
      "breeding": "胎生。母蠍背幼。"
    },
    "nickname": "條紋蠍",
    "image": "data/images/unique_358.jpg"
  },
  {
    "id": 359,
    "name": "新幾內亞彩鍬形蟲",
    "scientificName": "Phalacrognathus sp. nov.",
    "difficulty": "新手",
    "tempLabel": "涼爽/常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/菌瓶",
    "type": "甲蟲",
    "description": "彩虹鍬形蟲的近緣新發現種，體色偏紫紅。飼養方制相似。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。幼蟲用菌瓶效果最佳。",
      "care": "控溫24度以下。成蟲壽命約6個月。",
      "breeding": "使用軟朽木或壓實木屑產卵。"
    },
    "nickname": "紫彩鍬",
    "image": "data/images/unique_359.jpg"
  },
  {
    "id": 360,
    "name": "阿根廷玫瑰蜘蛛",
    "scientificName": "Grammostola grossa",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "南美大型地棲蜘蛛，體色紅棕帶有粉色光澤。性格極為溫馴，壽命可達20年。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，椰土底材偏乾。",
      "care": "最好養的蛛之一。可能長期拒食。",
      "breeding": "母蛛成熟慢。需冬季降溫刺激。"
    },
    "nickname": "粉紅蛛",
    "image": "data/images/unique_360.jpg"
  },
  {
    "id": 361,
    "name": "坦尚尼亞大花金龜",
    "scientificName": "Goliathus albosignatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/蛋白質飼料",
    "type": "甲蟲",
    "description": "東非大型花金龜，白色條紋在深棕底色上形成獨特花紋。幼蟲需蛋白質。",
    "diet": "幼蟲：腐植土+狗糧 / 成蟲：果凍",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱。幼蟲需蛋白質飼料。",
      "care": "幼蟲不可只餵腐植土。控溫重要。",
      "breeding": "母蟲產卵於壓實土中。"
    },
    "nickname": "坦花金龜",
    "image": "data/images/unique_361.jpg"
  },
  {
    "id": 362,
    "name": "馬來西亞巨型螽斯",
    "scientificName": "Arachnacris corporalis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "雜食/葉片/昆蟲",
    "type": "直翅目",
    "description": "世界上最大的螽斯之一，翅展可達25公分。來自馬來西亞雨林，棕色帶有複雜紋路。夜行性，以植物和小型昆蟲為食。",
    "diet": "闊葉植物、水果、小型昆蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "live",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。放入枝條和葉片。",
      "care": "雜食性。夜行性。空間需求大。",
      "breeding": "母蟲以產卵管插入土中產卵。"
    },
    "nickname": "巨螽",
    "image": "data/images/unique_362.jpg"
  },
  {
    "id": 363,
    "name": "紅寶石甲蟲",
    "scientificName": "Torynorrhina flammea",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "全身散發寶石般的紅色金屬光澤，來自東南亞。花金龜科中色彩最鮮豔的物種之一。喜歡在花上活動取食花粉和花蜜。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、花粉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。保持濕度。",
      "care": "需要濕潤環境。壽命約數月。",
      "breeding": "產卵於腐植土中。"
    },
    "nickname": "火焰甲蟲",
    "image": "data/images/unique_363.jpg"
  },
  {
    "id": 364,
    "name": "台灣小花螳螂",
    "scientificName": "Acromantis formosana",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(微型)",
    "type": "螳螂",
    "description": "台灣特有小型螳螂，體色綠褐。是觀察螳螂行為的好入門種。",
    "diet": "果蠅（活餌）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型通風容器即可。",
      "care": "體型極小。餵食果蠅。壽命約6個月。",
      "breeding": "卵鞘小型，約3-4週孵化。"
    },
    "nickname": "小螳螂",
    "image": "data/images/unique_364.jpg"
  },
  {
    "id": 365,
    "name": "寬帶發聲蟑螂",
    "scientificName": "Gromphadorhina picea",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "馬達加斯加另一種發聲蟑螂，體色較深。同樣溫馴不飛。",
    "diet": "蔬果、狗糧、燕麥",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱。紙蛋盒躲藏。不會飛不爬壁。",
      "care": "發出嘶聲是正常行為。好養。",
      "breeding": "卵胎生。群養自然繁殖。"
    },
    "nickname": "黑嘶蟑",
    "image": "data/images/unique_365.jpg"
  },
  {
    "id": 366,
    "name": "虎甲蟲",
    "scientificName": "Cicindela campestris",
    "difficulty": "專家",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "活體昆蟲",
    "type": "甲蟲",
    "description": "全身翠綠帶有奶白色斑點，是最敏捷的地面甲蟲。奔跑速度相對體型極快，被稱為昆蟲界的獵豹。大顎鋒利用於捕食。來自歐洲草地。",
    "diet": "螞蟻、小型昆蟲 (活餌)",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風箱，沙質底材。需充足光照。",
      "care": "需要開闊空間奔跑。極難飼養。",
      "breeding": "雌蟲產卵於沙中。幼蟲挖坑伏擊。"
    },
    "nickname": "綠虎甲",
    "image": "data/images/unique_366.jpg"
  },
  {
    "id": 367,
    "name": "墨西哥焰膝捕鳥蛛",
    "scientificName": "Brachypelma smithi",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "墨西哥產地棲蜘蛛，橙紅色膝部斑紋。曾是最受歡迎的入門蜘蛛之一。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。",
      "care": "經典入門蛛。會踢毛但溫馴。",
      "breeding": "成熟慢。母蛛壽命可達30年。"
    },
    "nickname": "焰膝蛛",
    "image": "data/images/unique_367.jpg"
  },
  {
    "id": 368,
    "name": "翠綠寶石蟬",
    "scientificName": "Cicadetta montana",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "樹液/糖水",
    "type": "半翅目",
    "description": "歐洲山地蟬類，體色綠帶金屬光澤。鳴叫聲獨特，是歐洲最小的蟬種之一。",
    "diet": "植物汁液",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風箱。提供樹枝攀附。",
      "care": "極難人工飼養。壽命極短。",
      "breeding": "幼蟲期數年。人工繁殖幾乎不可能。"
    },
    "nickname": "山蟬",
    "image": "data/images/unique_368.jpg"
  },
  {
    "id": 369,
    "name": "大紫蛺蝶",
    "scientificName": "Sasakia charonda",
    "difficulty": "專家",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "樹液/腐果",
    "type": "鱗翅目",
    "description": "日本的國蝶，翅膀在光線下會呈現紫色光澤。翅展可達10公分，是東亞最美的蛺蝶之一。喜愛吸食樹液和腐果汁液。幼蟲以朴樹為食。",
    "diet": "樹液、腐爛水果汁液",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型溫室或花房。",
      "care": "需要朴樹供幼蟲取食。極難維持。",
      "breeding": "幼蟲僅食朴樹葉。一年一代。"
    },
    "nickname": "國蝶",
    "image": "data/images/unique_369.jpg"
  },
  {
    "id": 370,
    "name": "藍色死亡腐屍甲蟲",
    "scientificName": "Nicrophorus vespilloides",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (16-22°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "動物屍體/肉類",
    "type": "甲蟲",
    "description": "埋葬蟲的一種，黑色底色配上橙紅色橫帶。會將小型動物屍體埋入土中作為育兒室。親代照顧行為在昆蟲中極為罕見，父母雙方都會餵食幼蟲。",
    "diet": "小型動物屍體（小鼠等）",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，厚土底材供埋葬用。",
      "care": "需提供小動物屍體。會有氣味。",
      "breeding": "觀察親代照顧行為極具教育意義。"
    },
    "nickname": "埋葬蟲",
    "image": "data/images/unique_370.jpg"
  },
  {
    "id": 371,
    "name": "金色龜甲蟲",
    "scientificName": "Charidotella sexpunctata",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "甲蟲",
    "description": "金色半透明的外殼如同微型黃金盾牌。受到威脅時會從金色變成暗紅色。來自北美洲，以牽牛花葉片為食。是昆蟲界的活黃金。",
    "diet": "牽牛花葉片、甘薯葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "小型箱，放入新鮮食草。",
      "care": "需要新鮮牽牛花葉。壽命約一年。",
      "breeding": "卵產於葉片上。"
    },
    "nickname": "黃金龜甲蟲",
    "image": "data/images/unique_371.jpg"
  },
  {
    "id": 372,
    "name": "婆羅洲巨型竹節蟲",
    "scientificName": "Phobaeticus kirbyi",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "婆羅洲特有的巨型竹節蟲，體長可達25公分以上。四肢修長如樹枝。",
    "diet": "芭樂葉、杜鵑葉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "超大型網箱。空間必須極大。",
      "care": "極稀有。幾乎無法取得。",
      "breeding": "人工飼養紀錄極少。"
    },
    "nickname": "巨竹蟲",
    "image": "data/images/unique_372.jpg"
  },
  {
    "id": 373,
    "name": "紅背蜘蛛",
    "scientificName": "Latrodectus hasselti",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "澳洲最知名的有毒蜘蛛，母蛛黑色腹部背面有紅色條紋。屬於黑寡婦蜘蛛近親，毒性強。公蛛交配時常被母蛛捕食。僅供研究觀察。",
    "diet": "蟋蟀、小型昆蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型密封箱。多重防逃設計。",
      "care": "強毒物種！僅限專業人士飼養。",
      "breeding": "母蛛會吃掉公蛛。"
    },
    "nickname": "紅背寡婦",
    "image": "data/images/unique_373.jpg"
  },
  {
    "id": 374,
    "name": "彩色盾椿象",
    "scientificName": "Calidea dregii",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片/種子",
    "type": "半翅目",
    "description": "全身色彩鮮豔如同珠寶，藍紫色底配上金色或紅色斑點。來自非洲，是盾椿象中最漂亮的物種之一。以各種植物種子和汁液為食。",
    "diet": "棉花種子、各種植物汁液",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱，放入食草和種子。",
      "care": "需特定食草。群養效果佳。",
      "breeding": "卵產於葉片上。群養可繁殖。"
    },
    "nickname": "寶石椿象",
    "image": "data/images/unique_374.jpg"
  },
  {
    "id": 375,
    "name": "委內瑞拉太陽虎蜘蛛",
    "scientificName": "Psalmopoeus cambridgei",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "千里達產樹棲捕鳥蛛，橄欖綠體色。攀爬力強，速度快。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。",
      "care": "食慾極好、成長快。會踢毛。",
      "breeding": "繁殖容易。母蛛產大量卵。"
    },
    "nickname": "太陽虎",
    "image": "data/images/unique_375.jpg"
  },
  {
    "id": 376,
    "name": "藍色箭毒蛙",
    "scientificName": "Dendrobates tinctorius azureus",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (80-95%)",
    "spaceLabel": "中型雨林缸",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(微型)",
    "type": "兩棲綱",
    "description": "全身鈷藍色帶有黑色斑點的箭毒蛙。來自蘇利南雨林，野外毒性來自食物鏈中的生物鹼。人工飼養個體無毒。需要雨林缸環境。",
    "diet": "果蠅、跳蟲、小蟋蟀",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "雨林缸，植物、苔蘚佈置。",
      "care": "高濕度環境。人工個體無毒。",
      "breeding": "公蛙背運蝌蚪。需水域。"
    },
    "nickname": "藍箭毒蛙",
    "image": "data/images/unique_376.jpg"
  },
  {
    "id": 377,
    "name": "蘇門答臘鋸鍬形蟲",
    "scientificName": "Prosopocoilus zebra",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "東南亞小型鋸鍬，體色橙黃帶有黑色條紋如斑馬。飼養容易。",
    "diet": "幼蟲：發酵木屑 / 成蟲：果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱。公蟲需大空間。",
      "care": "公蟲好鬥，勿混養。果凍常備。",
      "breeding": "使用軟朽木產卵。繁殖不難。"
    },
    "nickname": "斑馬鍬",
    "image": "data/images/unique_377.jpg"
  },
  {
    "id": 378,
    "name": "巨型扁蛛",
    "scientificName": "Selenops radiatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "身體極度扁平的蜘蛛，能鑽入最狹窄的縫隙中。八隻腳橫向張開如同螃蟹。來自熱帶地區，移動速度極快。不結網，以伏擊方式捕獵。",
    "diet": "蟋蟀、蟑螂、蛾類",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，提供樹皮片躲避。",
      "care": "速度極快。扁平身體很難捕捉。",
      "breeding": "母蛛護卵。"
    },
    "nickname": "扁蟹蛛",
    "image": "data/images/unique_378.jpg"
  },
  {
    "id": 379,
    "name": "紅翅蝗",
    "scientificName": "Oedipoda germanica",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "草類/穀物",
    "type": "直翅目",
    "description": "後翅鮮紅色帶有黑色橫帶，飛行時如同閃紅光。休息時後翅收起完全看不到紅色。來自歐洲和西亞的草地和荒地。跳躍力強。",
    "diet": "草類、穀類、蔬菜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium",
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "通風網箱。充足光照和乾燥環境。",
      "care": "好養。需要乾燥溫暖環境。",
      "breeding": "卵產於沙土中。"
    },
    "nickname": "紅翅蝗蟲",
    "image": "data/images/unique_379.jpg"
  },
  {
    "id": 380,
    "name": "韓國大鍬形蟲",
    "scientificName": "Dorcus hopei hopei",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "韓國產大鍬形蟲原名亞種。體色純黑帶光澤，大顎粗壯。飼養方式近似日本大鍬。",
    "diet": "幼蟲：發酵木屑/菌瓶 / 成蟲：果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。木屑底材。",
      "care": "好養長壽。果凍2-3天更換。冬季可冬眠。",
      "breeding": "使用菌絲產卵木效果最佳。"
    },
    "nickname": "韓鍬",
    "image": "data/images/unique_380.jpg"
  },
  {
    "id": 381,
    "name": "螢火蟲",
    "scientificName": "Lampyris noctiluca",
    "difficulty": "專家",
    "tempLabel": "涼爽/常溫 (16-22°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "黑暗環境",
    "dietLabel": "蝸牛/軟體動物",
    "type": "甲蟲",
    "description": "會發出生物螢光的甲蟲，母蟲翅膀退化不會飛。來自歐洲和亞洲的潮濕草地。發光是為了吸引異性交配。幼蟲以蝸牛為食。",
    "diet": "幼蟲：蝸牛、蛞蝓",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型箱，草地環境。完全黑暗觀察發光。",
      "care": "需要蝸牛作為食物。人工飼養極難。",
      "breeding": "需要模擬自然棲地。"
    },
    "nickname": "螢火蟲",
    "image": "data/images/unique_381.jpg"
  },
  {
    "id": 382,
    "name": "彩色蚱蜢",
    "scientificName": "Dactylotum bicolor",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "草類/葉片",
    "type": "直翅目",
    "description": "全身佈滿紅、藍、黑、白斑紋，是北美最鮮豔的蚱蜢。不會飛，靠鮮豔色彩警告天敵。來自美國西南部草原。又稱彩繪蚱蜢。",
    "diet": "各種草類",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風箱，乾燥環境。充足光照。",
      "care": "需要特定食草。在歐洲很少見。",
      "breeding": "卵產於土中。需要冬季休眠。"
    },
    "nickname": "彩繪蚱蜢",
    "image": "data/images/unique_382.jpg"
  },
  {
    "id": 383,
    "name": "巨型蟻后",
    "scientificName": "Atta cephalotes",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片(切葉)",
    "type": "膜翅目",
    "description": "切葉蟻的蟻后，個體可達3公分以上。工蟻會切割葉片帶回巢穴種植真菌做為糧食。這種螞蟻農業行為已有數千萬年歷史。飼養需大型人工蟻巢。",
    "diet": "新鮮葉片（供工蟻切割種菌用）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型多層人工蟻巢+覓食區。",
      "care": "需持續提供新鮮葉片。維護困難。",
      "breeding": "蟻后建巢後自行繁殖。"
    },
    "nickname": "切葉蟻",
    "image": "data/images/unique_383.jpg"
  },
  {
    "id": 384,
    "name": "藍環章魚",
    "scientificName": "Hapalochlaena lunulata",
    "difficulty": "專家",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "潮濕 (海水環境)",
    "spaceLabel": "大型海水缸",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活蝦/螃蟹",
    "type": "頭足綱",
    "description": "體型僅如高爾夫球大小，但含有足以致死的河豚毒素。受到威脅時全身會閃現鮮豔的藍色環紋。來自太平洋西部。絕對不可作為寵物飼養。",
    "diet": "活蝦、小型螃蟹",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "專業海水缸。多重安全措施。",
      "care": "劇毒！無解毒劑。僅供水族館展示。",
      "breeding": "母章魚產卵後停止進食，不久死亡。"
    },
    "nickname": "藍環章",
    "image": "data/images/unique_384.jpg"
  },
  {
    "id": 385,
    "name": "巨型蝗蟲",
    "scientificName": "Tropidacris cristata",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "新鮮葉片",
    "type": "直翅目",
    "description": "南美洲產的巨型蝗蟲，體長可達12公分。後翅展開後為鮮紅色。成蟲體型碩大且會飛，是熱帶雨林中的壯觀昆蟲。以闊葉植物為食。",
    "diet": "闊葉植物、花卉、水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。充足光照。",
      "care": "食量大。需要溫暖環境。",
      "breeding": "卵產於潮濕土中。"
    },
    "nickname": "紅翅巨蝗",
    "image": "data/images/unique_385.jpg"
  },
  {
    "id": 386,
    "name": "綠色長尾蠶蛾",
    "scientificName": "Actias luna",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "北美最美的蛾類之一，翠綠色翅膀帶有長長的尾突和眼斑。翅展可達11公分。成蟲沒有口器，無法進食，壽命僅約一週用於交配。",
    "diet": "幼蟲：胡桃樹、楓樹葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。幼蟲食草枝條。",
      "care": "成蟲不進食。壽命僅一週。",
      "breeding": "卵產於食草上。幼蟲飼養容易。"
    },
    "nickname": "月蛾",
    "image": "data/images/unique_386.jpg"
  },
  {
    "id": 387,
    "name": "非洲巨人蝸牛",
    "scientificName": "Achatina fulica",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (75-90%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "蔬菜/水果/鈣質",
    "type": "腹足綱",
    "description": "全球體型最大的陸生蝸牛之一，殼長可達20公分。來自東非，以驚人速度繁殖在許多國家成為入侵物種。高度雜食性，幾乎什麼都吃。",
    "diet": "蔬菜、水果、穀物、墨魚骨（補鈣）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "保濕中型箱。放入墨魚骨補鈣。",
      "care": "好養。繁殖力驚人——需控管數量。",
      "breeding": "雌雄同體。一次可產數百顆卵。"
    },
    "nickname": "巨蝸牛",
    "image": "data/images/unique_387.jpg"
  },
  {
    "id": 388,
    "name": "橡皮蟲",
    "scientificName": "Zophobas morio",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "穀物/蔬果",
    "type": "甲蟲",
    "description": "大麥蟲的成蟲型態，是飼養爬蟲的常見飼料。成蟲為黑色步行蟲。活動力不強但壽命很長。幼蟲（大麥蟲）比成蟲更受矚目。",
    "diet": "麥麩、蔬菜、水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱。麥麩底材。",
      "care": "好養。幼蟲可做飼料。不爬壁。",
      "breeding": "群養自然繁殖。幼蟲期約3-4月。"
    },
    "nickname": "超級大麥蟲",
    "image": "data/images/unique_388.jpg"
  },
  {
    "id": 389,
    "name": "澳洲寶石金龜",
    "scientificName": "Eupoecila australasiae",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/花粉",
    "type": "甲蟲",
    "description": "全身翠綠帶有金色光澤的澳洲花金龜。體型小約2公分但色彩極為艷麗。常見於花叢間取食花粉和花蜜。是澳洲特有的花園訪客。",
    "diet": "花粉、花蜜、昆蟲果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱。提供花朵或果凍。",
      "care": "需要光照。壽命約數月。",
      "breeding": "幼蟲在腐植土中發育。"
    },
    "nickname": "綠寶石金龜",
    "image": "data/images/unique_389.jpg"
  },
  {
    "id": 390,
    "name": "紅翅黑蠍",
    "scientificName": "Opistophthalmus carinatus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "南非產的大型穴居蠍子，螯肢巨大粗壯。會挖掘深達一公尺以上的洞穴。毒性溫和，主要靠強壯的螯來制伏獵物。全身黑色或深褐色。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，深厚沙土底材供挖掘。",
      "care": "穴居型，需要深底材。毒性低。",
      "breeding": "胎生。母蠍護幼。"
    },
    "nickname": "穴居蠍",
    "image": "data/images/unique_390.jpg"
  },
  {
    "id": 391,
    "name": "綠翅鳳蝶",
    "scientificName": "Ornithoptera priamus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜/糖水",
    "type": "鱗翅目",
    "description": "世界上最大的蝴蝶之一，公蝶翅膀鮮豔的翠綠色配上黑色絲絨般底色。翅展可達25公分。來自巴布亞紐幾內亞，屬CITES保護物種。",
    "diet": "花蜜、稀釋蜂蜜水",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型溫室花房式網箱。",
      "care": "需要馬兜鈴供幼蟲取食。極難維持。",
      "breeding": "幼蟲僅食馬兜鈴科植物。"
    },
    "nickname": "鳥翼蝶",
    "image": "data/images/unique_391.jpg"
  },
  {
    "id": 392,
    "name": "巨型蜣螂",
    "scientificName": "Heliocopris dominus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "動物糞便",
    "type": "甲蟲",
    "description": "非洲最大的糞金龜之一，體長可達6公分。會將動物糞便製成球狀推走，埋入地下做為卵室。公蟲頭部有一隻角。在生態循環中扮演重要角色。",
    "diet": "牛糞、象糞等草食動物糞便",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "大型箱，深厚土壤底材。",
      "care": "需要新鮮動物糞便。氣味明顯。",
      "breeding": "觀察滾糞球行為極具教育價值。"
    },
    "nickname": "巨型糞金龜",
    "image": "data/images/unique_392.jpg"
  },
  {
    "id": 393,
    "name": "亞洲巨型馬陸",
    "scientificName": "Thyropygus pachyurus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "枯葉/蔬果",
    "type": "倍足綱",
    "description": "東南亞產的大型馬陸，體長可達25公分。身體圓柱形，暗褐色或黑色。性格溫馴，走路時身體如波浪般起伏非常療癒。群養效果好。",
    "diet": "枯葉、蔬果、朽木、墨魚骨",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型保濕箱。厚底材混枯葉。",
      "care": "高濕度。補充鈣質。可群養。",
      "breeding": "群養自然繁殖。"
    },
    "nickname": "亞洲大馬陸",
    "image": "data/images/unique_393.jpg"
  },
  {
    "id": 394,
    "name": "紅脈蜻蜓",
    "scientificName": "Sympetrum fonscolombii",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型網箱+水域",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "活體昆蟲(飛行)",
    "type": "蜻蛉目",
    "description": "翅膀基部和翅脈呈鮮紅色的蜻蜓，公蟲全身紅色。遷徙性強，分布從歐洲到亞洲。幼蟲（水蠆）在水中生活捕食。成蟲是高超的空中獵手。",
    "diet": "蒼蠅、蚊子、小型飛蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型飛行箱+水域供幼蟲。",
      "care": "成蟲幾乎不可能長期飼養。幼蟲較可行。",
      "breeding": "需要水域環境產卵。"
    },
    "nickname": "紅蜻蜓",
    "image": "data/images/unique_394.jpg"
  },
  {
    "id": 395,
    "name": "巨型水蠆",
    "scientificName": "Anax imperator",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(水生)",
    "type": "蜻蛉目",
    "description": "皇帝蜻蜓的幼蟲（水蠆），是淡水中的頂級掠食者。會伸出可折疊的下唇以閃電般速度捕食。幼蟲期長達2-3年，成長過程中會蛻皮多次。",
    "diet": "水蚤、搖蚊幼蟲、小魚、蝌蚪",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型水族箱。水草提供遮蔽。",
      "care": "肉食性。需活餌。獨居較佳避免互食。",
      "breeding": "需提供伸出水面的枝條供羽化。"
    },
    "nickname": "蜻蜓幼蟲",
    "image": "data/images/unique_395.jpg"
  },
  {
    "id": 396,
    "name": "角蟬",
    "scientificName": "Umbonia crassicornis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "植物汁液",
    "type": "半翅目",
    "description": "頭頂有如獨角般的巨大突起，形狀千奇百怪。來自中南美洲，以植物汁液為食。母蟲有護幼行為，會用腿踢開接近幼蟲的天敵。",
    "diet": "合歡樹、含羞草等豆科植物汁液",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱。需提供活的食草植物。",
      "care": "需特定食草。觀察母蟲護幼行為。",
      "breeding": "卵產於嫩枝上。母蟲持續護幼。"
    },
    "nickname": "獨角蟬",
    "image": "data/images/unique_396.jpg"
  },
  {
    "id": 397,
    "name": "紅色天鵝絨蟎",
    "scientificName": "Trombidium holosericeum",
    "difficulty": "進階",
    "tempLabel": "常溫 (16-22°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "桌面小盒",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲(微型)",
    "type": "蛛形綱",
    "description": "全身覆蓋鮮紅色天鵝絨般的細毛，是秋天草地上常見的小型蟎類。體長僅4毫米但色彩極為搶眼。以小型昆蟲卵和土壤無脊椎動物為食。",
    "diet": "昆蟲卵、跳蟲、微型無脊椎動物",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "微型保濕容器。底材草地土壤。",
      "care": "極小。觀察需放大鏡。雨後出沒。",
      "breeding": "幼蟲寄生在大型昆蟲上。"
    },
    "nickname": "紅絨蟎",
    "image": "data/images/unique_397.jpg"
  },
  {
    "id": 398,
    "name": "澳洲撒網蜘蛛",
    "scientificName": "Deinopis ravida",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "澳洲產網蛛，與妖面蛛近緣。會編織小型網然後甩向獵物，捕獵方式獨特。",
    "diet": "飛蟲、小蟋蟀",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型箱。提供枝條供拉網狩獵。",
      "care": "夜行性。觀察其獨特狩獵行為。",
      "breeding": "卵囊掛於枝條上。"
    },
    "nickname": "撒網蛛",
    "image": "data/images/unique_398.jpg"
  },
  {
    "id": 399,
    "name": "台灣獨角花金龜",
    "scientificName": "Eupatorus birmanicus",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "東南亞五角兜蟲近緣種，體色金綠。前胸背板有明顯突起。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱。幼蟲需深層腐植土。",
      "care": "保持濕度。成蟲壽命約3-6個月。",
      "breeding": "母蟲產卵於腐植土中。"
    },
    "nickname": "角花金龜",
    "image": "data/images/unique_399.jpg"
  },
  {
    "id": 400,
    "name": "所羅門群島竹節蟲",
    "scientificName": "Eurycnema osiris",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "大洋洲大型竹節蟲，體色翠綠帶有藍色光澤。後足有紅色斑紋。",
    "diet": "尤加利葉、芭樂葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型直立式箱。放入粗枝和食草。",
      "care": "好養。夜行性。公蟲有棘刺需小心。",
      "breeding": "卵產於土中。孵化期約4-6個月。"
    },
    "nickname": "翠竹節",
    "image": "data/images/unique_400.jpg"
  },
  {
    "id": 401,
    "name": "金翅龜甲蟲",
    "scientificName": "Aspidimorpha sanctaecrucis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "甲蟲",
    "description": "全身金色帶有透明邊緣的龜甲蟲，來自東南亞。受驚時會從金色變成暗褐色。體型小巧約1-2公分，以旋花科植物為食。",
    "diet": "牽牛花葉、甘薯葉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "小型箱，放入新鮮食草。",
      "care": "需新鮮葉片。觀察變色行為。",
      "breeding": "卵產於葉片上。"
    },
    "nickname": "金甲蟲",
    "image": "data/images/unique_401.jpg"
  },
  {
    "id": 402,
    "name": "巨型蟻獅",
    "scientificName": "Palpares libelluloides",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "脈翅目",
    "description": "歐洲最大的蟻獅成蟲，翅展可達11公分。幼蟲是著名的沙坑陷阱獵手，會在沙中挖掘漏斗形陷阱等待螞蟻掉落。成蟲外型如同大型蜻蜓。",
    "diet": "幼蟲：螞蟻、小型昆蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，細沙底材供幼蟲挖陷阱。",
      "care": "觀察幼蟲挖陷阱極富教育性。",
      "breeding": "卵產於沙中。"
    },
    "nickname": "蟻地獄",
    "image": "data/images/unique_402.jpg"
  },
  {
    "id": 403,
    "name": "紅尾蜘蛛",
    "scientificName": "Brachypelma vagans",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "墨西哥紅尾蜘蛛，腹部被覆鮮紅色絨毛。性格溫馴，是入門捕鳥蛛的好選擇。來自墨西哥和中美洲。會踢毛防禦但毒性低。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型飼養箱，椰土底材。",
      "care": "溫馴好養。偶爾踢毛。",
      "breeding": "成熟慢。繁殖不難。"
    },
    "nickname": "紅屁股蛛",
    "image": "data/images/unique_403.jpg"
  },
  {
    "id": 404,
    "name": "大力士竹節蟲",
    "scientificName": "Haaniella dehaanii",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "馬來西亞產的粗壯竹節蟲，全身覆蓋棘刺。母蟲體型較大，約15公分。以橡樹和黑莓葉為食。夜行性，白天靜止不動。",
    "diet": "橡樹葉、黑莓葉、常春藤",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型直立箱。噴水保濕。",
      "care": "好養。夜行性。",
      "breeding": "卵產於地面。孵化期3-6個月。"
    },
    "nickname": "棘刺竹節蟲",
    "image": "data/images/unique_404.jpg"
  },
  {
    "id": 405,
    "name": "斯里蘭卡雨林蠍",
    "scientificName": "Heterometrus swammerdami",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍目",
    "description": "世界體型最大的蠍子之一，體長可達23公分。全身漆黑帶有光澤。",
    "diet": "蟋蟀、蟑螂、小鼠",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，深厚可挖掘底材。",
      "care": "穴居型需深底材。毒性低。",
      "breeding": "胎生。母蠍護幼。"
    },
    "nickname": "巨蠍",
    "image": "data/images/unique_405.jpg"
  },
  {
    "id": 406,
    "name": "越南獨角仙",
    "scientificName": "Allomyrina dichotoma tunobosonis var.",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "越南產獨角仙亞種，體型與日本獨角仙相近但角型略有差異。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型飼養箱。幼蟲需腐植土。",
      "care": "最經典的入門甲蟲。好養。",
      "breeding": "產房需壓實腐植土。"
    },
    "nickname": "越南兜",
    "image": "data/images/unique_406.jpg"
  },
  {
    "id": 407,
    "name": "紅銅寶石蜂",
    "scientificName": "Chrysis ignita",
    "difficulty": "專家",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "偏乾 (40-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "蜜水",
    "type": "膜翅目",
    "description": "又稱紅尾青蜂，全身散發綠藍色金屬光澤配紅色腹部。是寄生蜂的一種，會將卵產在其他蜂的巢穴中。體型僅約1公分但色彩極美。",
    "diet": "花蜜、蜂蜜水",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "通風箱。提供有獨居蜂巢的環境。",
      "care": "極難人工維持。觀察用。",
      "breeding": "寄生其他獨居蜂巢穴。"
    },
    "nickname": "紅尾青蜂",
    "image": "data/images/unique_407.jpg"
  },
  {
    "id": 408,
    "name": "印度巨型螳螂",
    "scientificName": "Hierodula grandis",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "南亞大型螳螂，體長可達10公分以上。體色翠綠，適應力強。",
    "diet": "蟋蟀、蟑螂（活餌）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型通風箱。放入枝條。",
      "care": "好養。食慾旺。成長快。",
      "breeding": "卵鞘含數百顆卵。孵化率高。"
    },
    "nickname": "巨螳螂",
    "image": "data/images/unique_408.jpg"
  },
  {
    "id": 409,
    "name": "蘭嶼大葉螽蟴",
    "scientificName": "Pseudophyllus titan",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "直翅目",
    "description": "大型葉狀螽斯，翅膀寬大搏綠色如闊葉。來自東南亞至太平洋島嶼。擬態葉片的效果極為逼真，連葉脈紋路都能模仿。",
    "diet": "闊葉植物、水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。提供植物。",
      "care": "夜行性。需要濕潤環境。",
      "breeding": "卵產於土中或植物上。"
    },
    "nickname": "大葉螽斯",
    "image": "data/images/unique_409.jpg"
  },
  {
    "id": 410,
    "name": "黑寡婦蜘蛛",
    "scientificName": "Latrodectus mactans",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "世界上最知名的有毒蜘蛛，母蛛黑色腹部有紅色沙漏形斑紋。交配後母蛛常會吃掉公蛛。來自北美洲。神經毒素對人體有嚴重威脅。",
    "diet": "蟋蟀、小型昆蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型密封箱。多重防逃！",
      "care": "劇毒！僅限專業研究。絕不推薦飼養。",
      "breeding": "母蛛會吃掉公蛛。"
    },
    "nickname": "黑寡婦",
    "image": "data/images/unique_410.jpg"
  },
  {
    "id": 411,
    "name": "尤加利天牛",
    "scientificName": "Rosenbergia megalocephala",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "枝條樹皮",
    "type": "甲蟲",
    "description": "巴布亞紐幾內亞的巨型天牛，體長可達8公分。全身棕灰色帶有花紋。觸角極長，可達體長的兩倍以上。幼蟲蛀食樹木。",
    "diet": "新鮮樹枝皮層",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型箱。提供新鮮樹枝。",
      "care": "極難取得。壽命數月。",
      "breeding": "幼蟲蛀食活木。人工難繁殖。"
    },
    "nickname": "巨型天牛",
    "image": "data/images/unique_411.jpg"
  },
  {
    "id": 412,
    "name": "紅斑蛺蝶",
    "scientificName": "Vanessa atalanta",
    "difficulty": "進階",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "花蜜/腐果",
    "type": "鱗翅目",
    "description": "黑色翅膀帶有鮮紅色橫帶和白色斑點。分布於歐洲、北美和北非。是著名的遷徙蝴蝶。喜愛吸食腐爛水果和樹液。",
    "diet": "腐爛水果汁液、花蜜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。",
      "care": "遷徙性物種。壽命數週到數月。",
      "breeding": "幼蟲以蕁麻為食草。"
    },
    "nickname": "紅帶蛺蝶",
    "image": "data/images/unique_412.jpg"
  },
  {
    "id": 413,
    "name": "巨型水蟲",
    "scientificName": "Lethocerus grandis",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活魚/蝌蚪",
    "type": "半翅目",
    "description": "南美洲的巨型田鱉，體長可達12公分。前腳特化成鐮刀狀捕捉獵物。能捕食小魚和青蛙。飛行能力強，趨光性明顯。咬人極痛。",
    "diet": "小魚、蝌蚪、水生昆蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型水族箱。水深10-15公分。",
      "care": "肉食性水生昆蟲。咬人極痛！",
      "breeding": "公蟲背負卵塊照顧。"
    },
    "nickname": "巨型田鱉",
    "image": "data/images/unique_413.jpg"
  },
  {
    "id": 414,
    "name": "彩色天蛾",
    "scientificName": "Deilephila elpenor",
    "difficulty": "進階",
    "tempLabel": "常溫 (16-22°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片/花蜜",
    "type": "鱗翅目",
    "description": "又稱象鷹蛾，全身粉紅色和橄欖綠色相間。分布於歐洲和亞洲。夜行性，會懸停在花前吸蜜。幼蟲受驚時眼斑會膨大嚇唬天敵。",
    "diet": "幼蟲：柳蘭、鳳仙花葉 / 成蟲：花蜜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。食草枝條。",
      "care": "夜行性。成蟲不易久養。",
      "breeding": "卵產於食草上。幼蟲飼養較容易。"
    },
    "nickname": "象鷹蛾",
    "image": "data/images/unique_414.jpg"
  },
  {
    "id": 415,
    "name": "巨型竹節蟲（安南）",
    "scientificName": "Annam stick insect",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "越南產的中型竹節蟲，全身均勻綠色或褐色。極為好養且容易繁殖，母蟲可行孤雌生殖。是歐洲最常見的寵物竹節蟲之一。",
    "diet": "常春藤、薔薇葉、黑莓葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型直立箱。食草枝條插水中保鮮。",
      "care": "最好養的竹節蟲之一。",
      "breeding": "孤雌生殖。繁殖力極強。"
    },
    "nickname": "安南竹節蟲",
    "image": "data/images/unique_415.jpg"
  },
  {
    "id": 416,
    "name": "金花蟲",
    "scientificName": "Chrysolina cerealis",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (14-22°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "甲蟲",
    "description": "全身帶有七彩金屬光澤的歐洲金花蟲，紅綠藍紫條紋交錯。體型僅約1公分但是最美的歐洲甲蟲之一。以百里香為食。",
    "diet": "百里香葉片",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "小型箱，提供新鮮百里香。",
      "care": "需涼爽環境和特定食草。",
      "breeding": "卵產於食草上。"
    },
    "nickname": "彩虹金花蟲",
    "image": "data/images/unique_416.jpg"
  },
  {
    "id": 417,
    "name": "巨型馬蠅",
    "scientificName": "Tabanus sudeticus",
    "difficulty": "專家",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "糖水/血液",
    "type": "雙翅目",
    "description": "歐洲最大的馬蠅，體長可達2.5公分。大眼睛有彩虹般的顏色。雌蠅吸血，雄蠅則訪花。飛行時發出低沉的嗡嗡聲。",
    "diet": "雌蟲：哺乳動物血 / 雄蟲：花蜜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風網箱。極難人工維持。",
      "care": "雌蟲需血液。壽命極短。",
      "breeding": "卵產於水邊。幼蟲半水生。"
    },
    "nickname": "大虻",
    "image": "data/images/unique_417.jpg"
  },
  {
    "id": 418,
    "name": "日本長臂金龜",
    "scientificName": "Cheirotonus jambar",
    "difficulty": "專家",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "沖繩特有的瀕危臂金龜，公蟲前腳極長如同長臂猿。全身深褐色帶金斑。日本天然紀念物，極度稀有，嚴禁採集。",
    "diet": "幼蟲：腐植土 / 成蟲：樹液、果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型保濕箱。完全禁止採集。",
      "care": "保育類！觀察紀錄用。",
      "breeding": "受法律嚴格保護。"
    },
    "nickname": "長臂金龜",
    "image": "data/images/unique_418.jpg"
  },
  {
    "id": 419,
    "name": "雙紋螳螂",
    "scientificName": "Sphodromantis lineola",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "螳螂",
    "description": "非洲大型螳螂，體長約8-10公分。翅膀內側有兩個深色眼斑用於恐嚇天敵。性格大膽，食慾旺盛。是最推薦的入門螳螂之一。",
    "diet": "蟋蟀、蒼蠅、蝗蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型通風箱。枝條攀爬。",
      "care": "好養活潑。經典入門螳螂。",
      "breeding": "卵鞘大型。孵化率高。"
    },
    "nickname": "非洲眼斑螳螂",
    "image": "data/images/unique_419.jpg"
  },
  {
    "id": 420,
    "name": "烏拉圭黑蜘蛛",
    "scientificName": "Grammostola quirogai",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "南美地棲蜘蛛，全身漆黑帶有藍色金屬光澤。性格溫馴，適合入門。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱，椰土底材。",
      "care": "最溫馴的蛛之一。成長緩慢。",
      "breeding": "成熟極慢。母蛛壽命極長。"
    },
    "nickname": "藍黑蛛",
    "image": "data/images/unique_420.jpg"
  },
  {
    "id": 421,
    "name": "象鼻蟲",
    "scientificName": "Curculio nucum",
    "difficulty": "進階",
    "tempLabel": "常溫 (16-22°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "堅果",
    "type": "甲蟲",
    "description": "以極長的口吻聞名，用於在堅果上鑽孔產卵。來自歐洲。幼蟲在榛子內部生長取食。是象鼻蟲科中最具代表性的物種。",
    "diet": "榛子、橡實等堅果類",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "小型箱。提供帶果實的食草枝條。",
      "care": "壽命約半年。需新鮮堅果。",
      "breeding": "雌蟲鑽孔於堅果中產卵。"
    },
    "nickname": "長吻象鼻蟲",
    "image": "data/images/unique_421.jpg"
  },
  {
    "id": 422,
    "name": "古巴巨蟑螂",
    "scientificName": "Blaberus atropos",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "加勒比海大型蟑螂，翅膀展開面積大。動作緩慢，常用作爬蟲飼料。",
    "diet": "蔬果、穀物、飼料",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "大型箱。紙蛋盒躲藏。",
      "care": "好養。體型巨大觀賞性佳。",
      "breeding": "卵胎生。群養自然繁殖。"
    },
    "nickname": "古巴蟑",
    "image": "data/images/unique_422.jpg"
  },
  {
    "id": 423,
    "name": "天堂鳥翼蝶",
    "scientificName": "Ornithoptera paradisea",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "世界上最美的蝴蝶之一，公蝶有金黃和翠綠相間的翅膀，帶有長尾突。來自巴布亞紐幾內亞高地。CITES保護物種。",
    "diet": "花蜜",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型溫室花房。",
      "care": "極度稀有。保護物種。",
      "breeding": "幼蟲食馬兜鈴科植物。"
    },
    "nickname": "天堂蝶",
    "image": "data/images/unique_423.jpg"
  },
  {
    "id": 424,
    "name": "巨型步行蟲",
    "scientificName": "Carabus coriaceus",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (14-22°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/蝸牛",
    "type": "甲蟲",
    "description": "歐洲最大的步行蟲，體長可達4公分。全身黑色粗糙表面。夜行性掠食者，以蝸牛和蠕蟲為主食。跑得很快但不會飛。",
    "diet": "蝸牛、蛞蝓、蚯蚓、昆蟲",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型箱。濕潤底材。提供躲藏物。",
      "care": "夜行性掠食者。需涼爽環境。",
      "breeding": "產卵於土中。幼蟲也是掠食者。"
    },
    "nickname": "革步甲",
    "image": "data/images/unique_424.jpg"
  },
  {
    "id": 425,
    "name": "厄瓜多粉趾蜘蛛",
    "scientificName": "Avicularia juruensis",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "南美樹棲蜘蛛，足端有粉紅色毛。與蓋亞那粉紅趾同屬但產地不同。",
    "diet": "蟋蟀、飛蛾",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型直立箱。高通風！樹皮和枝條。",
      "care": "樹棲型需高通風。速度快。",
      "breeding": "母蛛做巢袋。幼蛛群居初期。"
    },
    "nickname": "粉趾蛛",
    "image": "data/images/unique_425.jpg"
  },
  {
    "id": 426,
    "name": "紫斑蝶",
    "scientificName": "Euploea core",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜/糖水",
    "type": "鱗翅目",
    "description": "深棕色至黑色翅膀帶有白色斑點，飛行時閃現紫藍色光澤。廣泛分布於亞洲和澳洲。會進行長距離遷徙，台灣每年有紫斑蝶遷徙奇觀。",
    "diet": "花蜜、稀釋蜂蜜水",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。提供蜜源花卉。",
      "care": "遷徙性。需要開放空間。",
      "breeding": "幼蟲以夾竹桃科植物為食。"
    },
    "nickname": "端紫斑蝶",
    "image": "data/images/unique_426.jpg"
  },
  {
    "id": 427,
    "name": "巨型蝽",
    "scientificName": "Belostoma grande",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活魚/蝌蚪",
    "type": "半翅目",
    "description": "南美洲巨型水蝽，是世界上最大的水生昆蟲之一。前腳特化成強力鉗夾。公蟲會背負卵塊直到孵化，展現罕見的父親照護行為。",
    "diet": "小魚、蝌蚪、水生昆蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型淡水族箱。水深10-15公分。",
      "care": "肉食性。咬人極痛！小心操作。",
      "breeding": "公蟲背卵。可觀察親代照顧。"
    },
    "nickname": "巨型水蝽",
    "image": "data/images/unique_427.jpg"
  },
  {
    "id": 428,
    "name": "玉帶鳳蝶",
    "scientificName": "Papilio polytes",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "廣泛分布於亞洲的中大型鳳蝶。雌蝶有多種型態，有的擬態有毒蝴蝶。黑色翅膀搭配白色或紅色斑紋。幼蟲以柑橘類植物為食。",
    "diet": "花蜜、稀釋蜂蜜水",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。柑橘類食草。",
      "care": "幼蟲好養。成蟲需開放空間。",
      "breeding": "卵產於柑橘葉片上。"
    },
    "nickname": "白帶鳳蝶",
    "image": "data/images/unique_428.jpg"
  },
  {
    "id": 429,
    "name": "黑森林蠍",
    "scientificName": "Heterometrus longimanus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "亞洲雨林蠍，體長可達12公分。全身黑色光亮，螯肢巨大。毒性極低，主要靠粗壯的螯捕食。是最適合入門的大型蠍子之一。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱。椰土底材保濕。提供樹皮躲藏。",
      "care": "毒性極低。好養的大型蠍。",
      "breeding": "胎生。母蠍背幼。"
    },
    "nickname": "亞洲雨林蠍",
    "image": "data/images/unique_429.jpg"
  },
  {
    "id": 430,
    "name": "日本天蠶蛾",
    "scientificName": "Antheraea yamamai",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "日本產大型蛾類，翅色金黃帶有四個明顯眼斑。幼蟲以麻櫟葉為食。",
    "diet": "幼蟲：麻櫟葉、栗樹葉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風箱。大量食草枝條。",
      "care": "成蟲不進食。壽命僅一週。",
      "breeding": "卵產於食草上。幼蟲飼養容易。"
    },
    "nickname": "天蠶",
    "image": "data/images/unique_430.jpg"
  },
  {
    "id": 431,
    "name": "蜈蚣獵蜂",
    "scientificName": "Pepsis grossa",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "蜜水/蜘蛛",
    "type": "膜翅目",
    "description": "蛛蜂科的巨型狩獵蜂，專門捕狼蛛作為幼蟲食物。體長可達5公分，全身閃爍藍黑色金屬光澤。螫痛指數極高，被稱為昆蟲界最痛的螫刺之一。",
    "diet": "花蜜 / 捕捉狼蛛供幼蟲（野外）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風箱。極危險。",
      "care": "螫痛極強！僅供研究觀察。",
      "breeding": "雌蜂麻痺狼蛛後在其體內產卵。"
    },
    "nickname": "蛛蜂",
    "image": "data/images/unique_431.jpg"
  },
  {
    "id": 432,
    "name": "七星瓢蟲",
    "scientificName": "Coccinella septempunctata",
    "difficulty": "新手",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "蚜蟲",
    "type": "甲蟲",
    "description": "紅色翅鞘上有七個黑色圓點，是全球最知名的益蟲之一。成蟲和幼蟲都大量捕食蚜蟲，對農業極為有益。分布於歐亞大陸。",
    "diet": "蚜蟲、介殼蟲",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型箱。需要提供蚜蟲。",
      "care": "需要持續供應蚜蟲。壽命約一年。",
      "breeding": "卵產於蚜蟲集群附近。"
    },
    "nickname": "瓢蟲",
    "image": "data/images/unique_432.jpg"
  },
  {
    "id": 433,
    "name": "枯葉蝶",
    "scientificName": "Kallima inachus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "腐果/樹液",
    "type": "鱗翅目",
    "description": "翅膀合起時完美模仿枯葉，連葉脈和蛀洞都能模擬。打開翅膀時則是鮮豔的藍橙色。來自東亞至東南亞的森林。是自然界擬態的傑作。",
    "diet": "腐爛水果汁液、樹液",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。提供腐果。",
      "care": "極難維持。需熱帶環境。",
      "breeding": "幼蟲以爵床科植物為食。"
    },
    "nickname": "木葉蝶",
    "image": "data/images/unique_433.jpg"
  },
  {
    "id": 434,
    "name": "巨型蚯蚓",
    "scientificName": "Megascolides australis",
    "difficulty": "專家",
    "tempLabel": "涼爽/常溫 (14-20°C)",
    "humidityLabel": "潮濕 (80-95%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "黑暗環境",
    "dietLabel": "有機腐植質",
    "type": "環節動物",
    "description": "澳洲巨型蚯蚓，體長可達3公尺！是世界上最大的蚯蚓。在地下生活，移動時能發出咕嘟聲。極度脆弱，幾乎不可能人工飼養。",
    "diet": "土壤中的有機物質",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "soil"
      ]
    },
    "guide": {
      "setup": "幾乎不可能飼養。純觀察物種。",
      "care": "極脆弱。移動時可能撕裂身體。",
      "breeding": "卵繭在深層土壤中。"
    },
    "nickname": "王蚯蚓",
    "image": "data/images/unique_434.jpg"
  },
  {
    "id": 435,
    "name": "西非花螳螂",
    "scientificName": "Pseudocreobotra amaryllis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(飛行)",
    "type": "螳螂",
    "description": "西非產小型花螳螂，前翅有黃綠色眼斑。與刺花螳螂近緣但花紋不同。",
    "diet": "果蠅、蒼蠅（活餌）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型通風箱。花朵裝飾。",
      "care": "需要飛行活餌。觀賞性極高。",
      "breeding": "卵鞘小型。約4週孵化。"
    },
    "nickname": "花眼螳",
    "image": "data/images/unique_435.jpg"
  },
  {
    "id": 436,
    "name": "哥倫比亞金甲蟲",
    "scientificName": "Chrysina aurigans",
    "difficulty": "進階",
    "tempLabel": "溫暖 (22-26°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "中美洲金屬色甲蟲，全身如鍍金般閃耀。棲息在高海拔山區。",
    "diet": "幼蟲：腐植土 / 成蟲：水果",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型保濕箱。",
      "care": "極度稀有。保育物種。",
      "breeding": "幼蟲在腐木中發育。"
    },
    "nickname": "金甲",
    "image": "data/images/unique_436.jpg"
  },
  {
    "id": 437,
    "name": "印尼巨型竹節蟲",
    "scientificName": "Extatosoma hopei",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "印尼產大型竹節蟲，體表多刺。與幽靈竹節蟲同屬但產地不同。",
    "diet": "芭樂葉、黑莓葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。食草枝條。",
      "care": "好養。母蟲可孤雌生殖。",
      "breeding": "卵彈射落地。孵化期3-6個月。"
    },
    "nickname": "印尼竹節",
    "image": "data/images/unique_437.jpg"
  },
  {
    "id": 438,
    "name": "巴基斯坦黃蠍",
    "scientificName": "Hottentotta gentili",
    "difficulty": "進階",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍目",
    "description": "南亞中型蠍子，體色金黃帶有深色條紋。毒性中等，需謹慎操作。",
    "diet": "蟋蟀、麵包蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型密封箱。多重防逃！",
      "care": "劇毒！致死率高。絕對專業操作。",
      "breeding": "胎生。幼蠍上母蠍背。"
    },
    "nickname": "黃蠍",
    "image": "data/images/unique_438.jpg"
  },
  {
    "id": 439,
    "name": "扁鍬形蟲",
    "scientificName": "Dorcus titanus platymelus",
    "difficulty": "新手",
    "tempLabel": "常溫 (20-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "東南亞廣泛分布的大型扁鍬形蟲，公蟲大顎發達。全身黑色光亮。是入門鍬形蟲的絕佳選擇，價格親民且容易繁殖。壽命可達2年以上。",
    "diet": "幼蟲：發酵木屑/菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型箱。木屑底材。",
      "care": "好養長壽。經典入門鍬。",
      "breeding": "使用軟朽木。繁殖容易。"
    },
    "nickname": "扁鍬",
    "image": "data/images/unique_439.jpg"
  },
  {
    "id": 440,
    "name": "大王具足蟲",
    "scientificName": "Bathynomus giganteus",
    "difficulty": "專家",
    "tempLabel": "冷水 (4-10°C)",
    "humidityLabel": "潮濕 (海水環境)",
    "spaceLabel": "大型海水缸",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "魚肉/蝦",
    "type": "甲殼綱",
    "description": "深海巨型等足類動物，體長可達40公分。外型如同巨大的潮蟲。生活在深海海底，以死魚和鯨屍為食。可長期絕食數年。",
    "diet": "死魚、蝦肉、魷魚",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "冷水海水缸。極專業設備。",
      "care": "需要深海環境條件。水族館等級設備。",
      "breeding": "雌蟲保育卵囊。人工幾乎不可能。"
    },
    "nickname": "深海大蟲",
    "image": "data/images/unique_440.jpg"
  },
  {
    "id": 441,
    "name": "日本大王鼠婦",
    "scientificName": "Armadillidium nasatum",
    "difficulty": "新手",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "枯葉/蔬果",
    "type": "等足目",
    "description": "歐洲產鼩型鼠婦，頭部有明顯突起似鼻子。體色灰褐，容易繁殖。",
    "diet": "枯葉、墨魚骨、蔬菜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "小型保濕箱。枯葉和樹皮。",
      "care": "好養。品種繁多有收集樂趣。",
      "breeding": "母蟲在腹部育兒囊中孵化幼蟲。"
    },
    "nickname": "鼻鼠婦",
    "image": "data/images/unique_441.jpg"
  },
  {
    "id": 442,
    "name": "蘭花蜂",
    "scientificName": "Eulaema meriana",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜/蘭花精油",
    "type": "膜翅目",
    "description": "南美洲的大型蜜蜂，全身黑色帶有金屬綠色光澤。公蜂會收集蘭花香精儲存在後腿的特殊構造中用於求偶。與蘭花共演化的經典案例。",
    "diet": "花蜜、蘭花精油（公蜂）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型溫室。需要蘭花。",
      "care": "極難人工維持。研究用。",
      "breeding": "需要天然雨林環境。"
    },
    "nickname": "金屬蜂",
    "image": "data/images/unique_442.jpg"
  },
  {
    "id": 443,
    "name": "大高腳蛛",
    "scientificName": "Heteropoda maxima",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "世界上足展最大的蜘蛛（可超過30公分），發現於寮國洞穴。極為稀有的蜘蛛。",
    "diet": "蟋蟀、蟑螂、壁虎",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱。提供紙板躲藏。",
      "care": "速度極快。蟑螂剋星。",
      "breeding": "母蛛攜帶卵囊在口器下方。"
    },
    "nickname": "洞穴蛛",
    "image": "data/images/unique_443.jpg"
  },
  {
    "id": 444,
    "name": "綠翡翠金龜",
    "scientificName": "Jumnos ruckeri",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "全身散發翡翠綠金屬光澤的花金龜，來自東南亞。足部帶有金色絨毛。體長約3-4公分但色彩極為鮮豔。在花叢上取食花蜜和花粉。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍、花粉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型保濕箱。",
      "care": "需要高濕度和溫暖環境。",
      "breeding": "幼蟲在腐植土中發育。"
    },
    "nickname": "綠金龜",
    "image": "data/images/unique_444.jpg"
  },
  {
    "id": 445,
    "name": "巨型蜘蛛蟹",
    "scientificName": "Macrocheira kaempferi",
    "difficulty": "專家",
    "tempLabel": "冷水 (10-15°C)",
    "humidityLabel": "潮濕 (海水環境)",
    "spaceLabel": "大型海水缸",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "魚肉/貝類",
    "type": "甲殼綱",
    "description": "世界上最大的節肢動物，腿展可達3.7公尺。來自日本深海。全身橙紅色。壽命可達100年。移動緩慢但螯可施加強大的鉗力。",
    "diet": "死魚、貝類、藻類",
    "match": {
      "temp": [
        "cool"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型冷水海水缸。水族館設備。",
      "care": "需要專業海水環境。僅水族館可飼養。",
      "breeding": "深海產卵。人工幾乎不可能。"
    },
    "nickname": "甘氏巨螯蟹",
    "image": "data/images/unique_445.jpg"
  },
  {
    "id": 446,
    "name": "彩色金花蟲",
    "scientificName": "Chrysolina fastuosa",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (14-22°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "甲蟲",
    "description": "全身散發紅綠藍三色金屬光澤的歐洲金花蟲。體型僅約8毫米但色彩如同寶石。以唇形科植物（如薄荷）為食。",
    "diet": "薄荷、百里香等唇形科植物葉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "小型箱，新鮮薄荷枝條。",
      "care": "需涼爽環境。壽命約數月。",
      "breeding": "卵產於食草上。"
    },
    "nickname": "薄荷金花蟲",
    "image": "data/images/unique_446.jpg"
  },
  {
    "id": 447,
    "name": "琉璃蛺蝶",
    "scientificName": "Kaniska canace",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "腐果/樹液",
    "type": "鱗翅目",
    "description": "深藍色翅膀帶有淡藍色條紋，翅緣有一排小藍點。分布於東亞。幼蟲以薜荔等桑科植物為食。冬季會越冬不遷徙。",
    "diet": "腐爛水果汁液、樹液",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。",
      "care": "需要薜荔作為幼蟲食草。",
      "breeding": "幼蟲食桑科植物。可越冬。"
    },
    "nickname": "藍蛺蝶",
    "image": "data/images/unique_447.jpg"
  },
  {
    "id": 448,
    "name": "撒哈拉肥尾蠍",
    "scientificName": "Androctonus amoreuxi",
    "difficulty": "專家",
    "tempLabel": "溫暖 (28-35°C)",
    "humidityLabel": "偏乾 (20-40%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍目",
    "description": "北非沙漠蠍子，體色淡黃。毒性較同屬略低但仍具危險性。",
    "diet": "蟋蟀、小蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型乾燥箱。沙質底材。",
      "care": "劇毒！致死率高。專業安全措施！",
      "breeding": "胎生。母蠍護幼約2週。"
    },
    "nickname": "沙蠍",
    "image": "data/images/unique_448.jpg"
  },
  {
    "id": 449,
    "name": "紅脈蛺蝶",
    "scientificName": "Cethosia biblis",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "翅膀上面鮮紅色配蕾絲般的黑白邊紋，下面橘紅色帶複雜的白色波浪紋。分布於東南亞。是最美的蛺蝶之一。幼蟲以西番蓮為食。",
    "diet": "花蜜、稀釋蜂蜜水",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。提供花卉。",
      "care": "需要西番蓮食草。熱帶環境。",
      "breeding": "卵產於西番蓮葉片上。"
    },
    "nickname": "紅蕾絲蝶",
    "image": "data/images/unique_449.jpg"
  },
  {
    "id": 450,
    "name": "死亡頭鬥蟑",
    "scientificName": "Blaberus colosseus",
    "difficulty": "新手",
    "tempLabel": "溫暖 (25-30°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/寵物飼料",
    "type": "蜚蠊",
    "description": "中南美洲超大型蟑螂，體長可超過8公分。雖名為死亡頭但非常溫順。",
    "diet": "蔬果、狗糧、穀物",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱。紙蛋盒躲藏。不爬壁。",
      "care": "好養。骷髏花紋有趣。",
      "breeding": "卵胎生。群養自然繁殖。"
    },
    "nickname": "巨型蟑",
    "image": "data/images/unique_450.jpg"
  },
  {
    "id": 451,
    "name": "帝王斑蝶",
    "scientificName": "Danaus plexippus",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "花蜜/馬利筋",
    "type": "鱗翅目",
    "description": "最著名的遷徙蝴蝶，每年飛越數千公里。橘色翅膀帶有黑色脈紋和白色斑點。幼蟲以有毒的馬利筋為食，使成蟲帶有毒性。",
    "diet": "花蜜 / 幼蟲：馬利筋",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。馬利筋食草。",
      "care": "需要馬利筋。觀察生命週期。",
      "breeding": "卵產於馬利筋葉片。"
    },
    "nickname": "帝王蝶",
    "image": "data/images/unique_451.jpg"
  },
  {
    "id": 452,
    "name": "紅火蟻",
    "scientificName": "Solenopsis invicta",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型螞蟻農場",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/昆蟲/糖水",
    "type": "膜翅目",
    "description": "入侵種螞蟻，攻擊性極強。被螫後如火燒般疼痛。會在水面集結成筏漂浮逃生。蟻丘可容納數十萬隻工蟻。對生態系統破壞極大。",
    "diet": "昆蟲、糖水、蛋白質食物",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "live"
      ]
    },
    "guide": {
      "setup": "防逃螞蟻箱。隔離措施！",
      "care": "入侵種！螫痛強烈。需嚴格防逃。",
      "breeding": "蟻后持續產卵。繁殖力驚人。"
    },
    "nickname": "火蟻",
    "image": "data/images/unique_452.jpg"
  },
  {
    "id": 453,
    "name": "花園大蛞蝓",
    "scientificName": "Limax maximus",
    "difficulty": "新手",
    "tempLabel": "涼爽/常溫 (14-20°C)",
    "humidityLabel": "潮濕 (80-95%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "蔬菜/菇類",
    "type": "腹足綱",
    "description": "歐洲豹紋蛞蝓，體長可達20公分。全身灰色帶有深色豹紋斑點。交配行為極為獨特——兩隻蛞蝓會懸掛在黏液絲上互相纏繞。",
    "diet": "蔬菜、菇類、枯葉",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "保濕中型箱。涼爽環境。",
      "care": "需高濕度和涼爽環境。好養。",
      "breeding": "雌雄同體。懸吊交配行為獨特。"
    },
    "nickname": "豹紋蛞蝓",
    "image": "data/images/unique_453.jpg"
  },
  {
    "id": 454,
    "name": "翠綠鍬形蟲",
    "scientificName": "Lamprima latreillii",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (16-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/花粉",
    "type": "甲蟲",
    "description": "澳洲產的小型金屬色鍬形蟲，體色從翠綠到金銅色。體型僅約2-3公分但色彩耀眼。會在花上取食花粉。日行性的鍬形蟲較為特殊。",
    "diet": "果凍、花粉、蜂蜜水",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy"
      ]
    },
    "guide": {
      "setup": "中型箱。提供花朵或果凍。",
      "care": "日行性。需充足光照。",
      "breeding": "在腐木中產卵。"
    },
    "nickname": "澳洲金鍬",
    "image": "data/images/unique_454.jpg"
  },
  {
    "id": 455,
    "name": "大透翅蛾",
    "scientificName": "Sesia apiformis",
    "difficulty": "專家",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "透明翅膀配上黃黑相間的體色，完美模擬胡蜂。是蛾類中最精緻的擬態者之一。來自歐洲，幼蟲蛀食楊樹。日行性蛾類。",
    "diet": "花蜜",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。日光照射。",
      "care": "極難人工維持。壽命短。",
      "breeding": "幼蟲蛀食楊樹木材。"
    },
    "nickname": "蜂擬態蛾",
    "image": "data/images/unique_455.jpg"
  },
  {
    "id": 456,
    "name": "赤背蠍虎蛛",
    "scientificName": "Phidippus johnsoni",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "充足光照",
    "dietLabel": "活體昆蟲(微型)",
    "type": "蜘蛛",
    "description": "北美洲最有魅力的跳蛛，雄蛛腹部鮮紅色。大眼睛圓滾可愛，會歪頭看人。視力極佳，狩獵時會規劃攻擊路線。性格好奇大膽。",
    "diet": "果蠅、小蟋蟀、蚊子",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型箱。充足光照。提供攀爬物。",
      "care": "好奇愛探索。會與人互動。",
      "breeding": "公蛛向母蛛跳舞求偶。"
    },
    "nickname": "紅背跳蛛",
    "image": "data/images/unique_456.jpg"
  },
  {
    "id": 457,
    "name": "黃邊胡蜂",
    "scientificName": "Vespa crabro",
    "difficulty": "專家",
    "tempLabel": "常溫 (16-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲/糖水",
    "type": "膜翅目",
    "description": "歐洲大黃蜂，是歐洲最大的胡蜂。體長可達3.5公分。棕黃色帶有暗色花紋。以昆蟲為食，也會咬破水果吸食汁液。築紙質巢穴。",
    "diet": "昆蟲、糖水、果汁",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型密封觀察箱。",
      "care": "群居有毒。僅限專業觀察。",
      "breeding": "蟻后建巢。秋季產新蟻后和公蜂。"
    },
    "nickname": "歐洲大黃蜂",
    "image": "data/images/unique_457.jpg"
  },
  {
    "id": 458,
    "name": "大琉璃紋鳳蝶",
    "scientificName": "Papilio maackii",
    "difficulty": "專家",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "東亞最大的鳳蝶之一，翅面黑色帶有藍綠色光澤條紋，後翅有紅色和藍色斑紋。翅展可達13公分。分布於日本、韓國和中國東北。",
    "diet": "花蜜 / 幼蟲：花椒、黃檗葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。食草枝條。",
      "care": "需要特定食草植物。",
      "breeding": "卵產於芸香科植物葉片。"
    },
    "nickname": "深山閻魔蝶",
    "image": "data/images/unique_458.jpg"
  },
  {
    "id": 459,
    "name": "巨型蟻蟀",
    "scientificName": "Stenopelmatus fuscus",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "適中 (50-60%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/蔬果",
    "type": "直翅目",
    "description": "北美洲的大型夜行昆蟲，又稱「耶路撒冷蟋蟀」。頭部巨大圓潤，看起來像嬰兒面孔。非蟋蟀亦非蚱蜢。以根莖和有機物為食。會咬人。",
    "diet": "馬鈴薯、蔬果、有機物質",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱。沙土底材供挖掘。",
      "care": "夜行性。會咬人但無毒。",
      "breeding": "卵產於土中。"
    },
    "nickname": "地蟋蟀",
    "image": "data/images/unique_459.jpg"
  },
  {
    "id": 460,
    "name": "馬來西亞翅竹節蟲",
    "scientificName": "Sipyloidea biplagiata",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "東南亞有翅竹節蟲，母蟲可展翅短距滑翔。體色褐綠。",
    "diet": "芭樂葉、木槿葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型直立箱。食草枝條插水。",
      "care": "好養。粉紅翅膀很有特色。",
      "breeding": "孤雌生殖。繁殖容易。"
    },
    "nickname": "翅竹節",
    "image": "data/images/unique_460.jpg"
  },
  {
    "id": 461,
    "name": "巨型水蜈蚣",
    "scientificName": "Scolopendra subaquatica",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型半水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/小魚",
    "type": "唇足綱",
    "description": "世界上唯一已知的水棲蜈蚣，能在水中游泳和潛水捕食。來自東南亞的溪流環境。毒性中等。這個發現顛覆了人們對蜈蚣的認知。",
    "diet": "水生昆蟲、小魚、蝦",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "半水陸缸。溪流環境。",
      "care": "需要水陸兼備的環境。極稀有。",
      "breeding": "野外資料極少。"
    },
    "nickname": "水蜈蚣",
    "image": "data/images/unique_461.jpg"
  },
  {
    "id": 462,
    "name": "刺蝟毛蟲",
    "scientificName": "Automeris io",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "Io蛾的幼蟲全身覆蓋綠色帶毒棘刺。成蟲翅膀有大型眼斑。來自北美洲。觸碰幼蟲的毒刺會造成劇烈疼痛和腫脹。",
    "diet": "幼蟲：楓樹、柳樹、玉米葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱。食草枝條。勿觸碰！",
      "care": "幼蟲有毒棘刺！戴手套操作。",
      "breeding": "卵產於食草上。幼蟲群居初期。"
    },
    "nickname": "Io眼斑蛾",
    "image": "data/images/unique_462.jpg"
  },
  {
    "id": 463,
    "name": "金甲蟲",
    "scientificName": "Plusiotis gloriosa",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (20-26°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "全身碧綠色金屬光澤帶有銀色條紋的美麗金龜。來自美國亞利桑那和墨西哥的杜松林。夜間活動，被燈光吸引。體長約2.5-3公分。",
    "diet": "幼蟲：杜松根系腐植土 / 成蟲：果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型箱。杜松葉腐植土。",
      "care": "需要特定底材。壽命約數月。",
      "breeding": "幼蟲在杜松根系腐植中生長。"
    },
    "nickname": "翡翠金龜",
    "image": "data/images/unique_463.jpg"
  },
  {
    "id": 464,
    "name": "紅蜻蜓",
    "scientificName": "Crocothemis erythraea",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "大型網箱+水域",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "活體昆蟲(飛行)",
    "type": "蜻蛉目",
    "description": "全身鮮紅色的中型蜻蜓，分布從歐洲到非洲和亞洲。公蟲全身火紅色，是最鮮豔的蜻蜓之一。常停棲在水邊的枝頭上。",
    "diet": "蚊子、蒼蠅、小型飛蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型飛行箱+水域。",
      "care": "成蟲極難長期飼養。幼蟲需水環境。",
      "breeding": "卵產於水面。"
    },
    "nickname": "猩紅蜻蜓",
    "image": "data/images/unique_464.jpg"
  },
  {
    "id": 465,
    "name": "黑天鵝絨蟻蜂",
    "scientificName": "Dasymutilla occidentalis",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (22-30°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "蜜水/花蜜",
    "type": "膜翅目",
    "description": "其實不是螞蟻而是無翅的雌蜂，覆蓋鮮艷的橘紅色和黑色絨毛。螫痛指數極高，又稱「牛殺手」。來自北美洲。跑得很快。",
    "diet": "花蜜、蜂蜜水",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱。沙土底材。",
      "care": "螫痛極強烈！只看不摸。",
      "breeding": "寄生其他蜂類巢穴。"
    },
    "nickname": "牛殺手蟻蜂",
    "image": "data/images/unique_465.jpg"
  },
  {
    "id": 466,
    "name": "鏡子蜘蛛",
    "scientificName": "Thwaitesia argentiopunctata",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲(微型)",
    "type": "蜘蛛",
    "description": "腹部有反射銀色斑塊如同碎鏡片，是世界上最奇特的蜘蛛之一。來自澳洲。體型極小僅約3毫米。鏡面斑塊大小會隨心情變化。",
    "diet": "極小型蚊蟲、跳蟲",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "微型保濕箱。",
      "care": "極小。觀察需放大鏡。",
      "breeding": "結小型圓網。卵囊懸掛。"
    },
    "nickname": "碎鏡蛛",
    "image": "data/images/unique_466.jpg"
  },
  {
    "id": 467,
    "name": "大紫蛺蝶幼蟲",
    "scientificName": "Sasakia charonda larva",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "朴樹葉",
    "type": "鱗翅目",
    "description": "日本國蝶大紫蛺蝶的幼蟲，頭部有兩支角狀突起如同龍角。綠色身體完美融入樹葉中。以朴樹葉為唯一食草，冬季以幼蟲形態越冬。",
    "diet": "朴樹葉（唯一食草）",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型箱。朴樹葉必須新鮮。",
      "care": "單食性。需持續供應朴樹葉。",
      "breeding": "秋季幼蟲下樹越冬。春季再上樹。"
    },
    "nickname": "龍角蟲",
    "image": "data/images/unique_467.jpg"
  },
  {
    "id": 468,
    "name": "彩虹蝦蛄",
    "scientificName": "Odontodactylus scyllarus",
    "difficulty": "專家",
    "tempLabel": "常溫/溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (海水環境)",
    "spaceLabel": "大型海水缸",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活蝦/貝類",
    "type": "甲殼綱",
    "description": "全身色彩鮮豔如彩虹的蝦蛄。前附肢可以發出比子彈更快的拳擊，擊碎堅硬的貝殼。能感知圓偏光和16種顏色的超級視覺。",
    "diet": "蝦、螃蟹、貝類、小魚",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "厚玻璃海水缸。可能擊碎缸壁！",
      "care": "攻擊力極強。需厚壁水族箱。",
      "breeding": "母蝦蛄護卵直到孵化。"
    },
    "nickname": "拳擊蝦",
    "image": "data/images/unique_468.jpg"
  },
  {
    "id": 469,
    "name": "巨型蟬",
    "scientificName": "Megapomponia imperatoria",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "樹液",
    "type": "半翅目",
    "description": "世界上最大的蟬，翅展可達20公分以上。來自馬來西亞的熱帶雨林。叫聲可達120分貝，是已知最響亮的昆蟲。幼蟲在土中生活數年。",
    "diet": "樹液（以長口吻刺入樹幹吸取）",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風箱。提供樹幹。",
      "care": "幾乎無法人工飼養。壽命極短。",
      "breeding": "卵產於嫩枝中。幼蟲地下數年。"
    },
    "nickname": "帝王蟬",
    "image": "data/images/unique_469.jpg"
  },
  {
    "id": 470,
    "name": "大木林蜘蛛",
    "scientificName": "Nephila pilipes",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "亞洲最大的結網蜘蛛，金色的絲網直徑可達2公尺。雌蛛體長可達5公分，雄蛛僅約1公分。金色蜘蛛絲強度接近凱夫拉纖維。",
    "diet": "大型飛蟲、蝴蝶、蜻蜓",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型空間供結網。至少1公尺見方。",
      "care": "需要大空間結金色網。",
      "breeding": "巨大體型差異。公蛛極小心交配。"
    },
    "nickname": "人面蜘蛛",
    "image": "data/images/unique_470.jpg"
  },
  {
    "id": 471,
    "name": "沙漠蝗蟲",
    "scientificName": "Schistocerca gregaria",
    "difficulty": "新手",
    "tempLabel": "溫暖 (28-35°C)",
    "humidityLabel": "偏乾 (30-50%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "草類/穀物",
    "type": "直翅目",
    "description": "歷史上造成毀滅性農業災害的蝗蟲。具有孤獨和群聚兩種型態，群聚型會形成數十億隻的蝗災。體色從綠色（散居）到黃色（群居）。",
    "diet": "草類、穀物、蔬菜",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風箱。高溫乾燥。",
      "care": "繁殖快。常做爬蟲飼料。",
      "breeding": "卵產於沙土中。群體密度影響型態。"
    },
    "nickname": "沙漠飛蝗",
    "image": "data/images/unique_471.jpg"
  },
  {
    "id": 472,
    "name": "虎甲蟲（六星）",
    "scientificName": "Cicindela sexguttata",
    "difficulty": "專家",
    "tempLabel": "常溫 (16-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "活體昆蟲",
    "type": "甲蟲",
    "description": "北美洲的翠綠色虎甲蟲，閃爍金屬綠光。有六個白色斑點。移動速度極快，視覺敏銳。跑得太快時會視覺暫盲需要停下重新定位獵物。",
    "diet": "螞蟻、小型昆蟲",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "通風箱。沙質底材。充足光照。",
      "care": "極快速。極難抓住。",
      "breeding": "幼蟲在土中挖洞伏擊獵物。"
    },
    "nickname": "六星虎甲",
    "image": "data/images/unique_472.jpg"
  },
  {
    "id": 473,
    "name": "巨型長戟大兜蟲",
    "scientificName": "Dynastes hercules hercules",
    "difficulty": "進階",
    "tempLabel": "常溫 (20-24°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "世界上最長的甲蟲，含角體長可達17公分以上。公蟲有巨大的上角和下角。翅鞘從灰黃到黑色隨濕度變化。來自中美洲雨林。甲蟲王者。",
    "diet": "幼蟲：腐植土 / 成蟲：昆蟲果凍、香蕉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型箱。幼蟲需大量腐植土。",
      "care": "幼蟲期長達2年。控溫24度以下。",
      "breeding": "母蟲產卵於壓實腐植土。"
    },
    "nickname": "大力士",
    "image": "data/images/unique_473.jpg"
  },
  {
    "id": 474,
    "name": "斯里蘭卡華麗蜘蛛",
    "scientificName": "Poecilotheria fasciata",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "斯里蘭卡特有樹棲蜘蛛，體色帶有複雜黑白花紋。速度極快毒性較強。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型直立高通風箱。",
      "care": "速度極快！毒性強！專家限定。",
      "breeding": "瀕危物種。人工繁殖有助保育。"
    },
    "nickname": "花紋蛛",
    "image": "data/images/unique_474.jpg"
  },
  {
    "id": 475,
    "name": "翠鳳蝶",
    "scientificName": "Papilio bianor",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "黑色翅膀帶有藍綠色金屬光澤鱗片，後翅有紅色斑月紋。分布於東亞。是亞洲最常見的大型鳳蝶之一。幼蟲以柑橘類為食。",
    "diet": "花蜜 / 幼蟲：柑橘類葉片",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。柑橘食草。",
      "care": "幼蟲好養。成蟲需開放空間。",
      "breeding": "卵產於柑橘葉片上。"
    },
    "nickname": "碧鳳蝶",
    "image": "data/images/unique_475.jpg"
  },
  {
    "id": 476,
    "name": "歐洲藥水蛭",
    "scientificName": "Hirudo medicinalis",
    "difficulty": "進階",
    "tempLabel": "常溫 (18-24°C)",
    "humidityLabel": "潮濕 (水域環境)",
    "spaceLabel": "中型水族箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "血液/肝臟",
    "type": "環節動物",
    "description": "醫用水蛭，自古被用於放血療法。體長可達20公分。口部有三片顎板呈Y字型咬痕。唾液含麻醉劑和抗凝血劑。現代醫學仍用於微手術後血循環。",
    "diet": "血液（古時用牛血或肝臟餵養）",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型水族箱。淡水環境。",
      "care": "一次進食後可數月不食。",
      "breeding": "產卵繭於潮濕岸邊土中。"
    },
    "nickname": "醫用水蛭",
    "image": "data/images/unique_476.jpg"
  },
  {
    "id": 477,
    "name": "黃金步行蟲",
    "scientificName": "Carabus auratus",
    "difficulty": "進階",
    "tempLabel": "涼爽/常溫 (14-22°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲/蝸牛",
    "type": "甲蟲",
    "description": "全身散發金綠色金屬光澤的歐洲步行蟲。體長約2-3公分。夜行性掠食者，主要捕食蝸牛和蛞蝓。是農田中重要的益蟲。不會飛行。",
    "diet": "蝸牛、蛞蝓、蚯蚓",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱。濕潤底材。提供躲藏物。",
      "care": "涼爽環境。夜行性。需活餌。",
      "breeding": "卵產於土中。"
    },
    "nickname": "金步甲",
    "image": "data/images/unique_477.jpg"
  },
  {
    "id": 478,
    "name": "蒼蠅獵人蜂",
    "scientificName": "Philanthus triangulum",
    "difficulty": "專家",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "偏乾 (40-60%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "蜜水/蜜蜂",
    "type": "膜翅目",
    "description": "專門捕獵蜜蜂的狩獵蜂，又稱蜂狼。會麻痺蜜蜂後帶回巢穴餵食幼蟲。全身黃黑相間。在沙地上挖掘巢穴，是獨居蜂的一種。",
    "diet": "花蜜（成蟲）/ 麻痺的蜜蜂（幼蟲）",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "low",
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live",
        "plant"
      ]
    },
    "guide": {
      "setup": "大型沙地環境箱。",
      "care": "需要提供蜜蜂。極難維持。",
      "breeding": "在沙地挖洞筑巢。"
    },
    "nickname": "蜂狼",
    "image": "data/images/unique_478.jpg"
  },
  {
    "id": 479,
    "name": "大蚊",
    "scientificName": "Tipula maxima",
    "difficulty": "專家",
    "tempLabel": "涼爽/常溫 (14-20°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "不進食/花蜜",
    "type": "雙翅目",
    "description": "歐洲最大的大蚊，翅展可達6.5公分。翅膀帶有深色斑紋。外型酷似巨大的蚊子但不吸血。幼蟲在潮濕土壤中以腐植物為食。",
    "diet": "成蟲：不進食或少量花蜜 / 幼蟲：腐植物",
    "match": {
      "temp": [
        "cool",
        "room"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風箱。不吸血。",
      "care": "成蟲壽命極短。不咬人。",
      "breeding": "卵產於潮濕土壤中。"
    },
    "nickname": "大蚊子",
    "image": "data/images/unique_479.jpg"
  },
  {
    "id": 480,
    "name": "黃腹胡蜂",
    "scientificName": "Vespa simillima",
    "difficulty": "專家",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲/糖水",
    "type": "膜翅目",
    "description": "東亞常見的中大型胡蜂，腹部黃色帶有黑色橫帶。社會性昆蟲，築紙質蜂巢。工蜂捕食昆蟲餵養幼蟲。會主動攻擊靠近蜂巢的人。",
    "diet": "昆蟲、樹液、糖水",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型防護觀察箱。",
      "care": "群居有毒！保持距離觀察。",
      "breeding": "蟻后春季建巢。秋季產新蟻后。"
    },
    "nickname": "黃蜂",
    "image": "data/images/unique_480.jpg"
  },
  {
    "id": 481,
    "name": "藍翅蟋蟀",
    "scientificName": "Oecanthus fultoni",
    "difficulty": "新手",
    "tempLabel": "常溫/溫暖 (20-28°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "蚜蟲/花粉",
    "type": "直翅目",
    "description": "又稱溫度計蟋蟀，其鳴叫頻率與溫度有精確的數學關係。全身半透明淡綠色。來自北美洲。叫聲清脆悅耳，是秋天夜晚的經典聲音。",
    "diet": "蚜蟲、花粉、花瓣",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live",
        "plant"
      ]
    },
    "guide": {
      "setup": "小型箱。提供植物枝條。",
      "care": "叫聲悅耳。可由叫聲推算溫度。",
      "breeding": "卵產於植物莖幹中。"
    },
    "nickname": "樹蟋蟀",
    "image": "data/images/unique_481.jpg"
  },
  {
    "id": 482,
    "name": "坦尚尼亞綠花金龜",
    "scientificName": "Mecynorrhina harrisii",
    "difficulty": "新手",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/蛋白質飼料",
    "type": "甲蟲",
    "description": "東非中型花金龜，體色深綠帶有金屬光澤。公蟲頭部有小型犄角。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型飼養箱。幼蟲需蛋白質飼料。",
      "care": "控溫重要。幼蟲需蛋白質。",
      "breeding": "母蟲產卵於壓實土中。"
    },
    "nickname": "綠花金龜",
    "image": "data/images/unique_482.jpg"
  },
  {
    "id": 483,
    "name": "墨西哥金蠍",
    "scientificName": "Centruroides sculpturatus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (25-32°C)",
    "humidityLabel": "偏乾 (20-40%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "北美洲毒性最強的蠍子，體色淡黃到棕色。體型不大（僅7公分）但毒性威脅生命。能爬垂直光滑表面。在紫外光下強烈螢光。",
    "diet": "蟋蟀、蟑螂",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "low"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "密封箱！能爬光滑表面！多重防逃！",
      "care": "劇毒+能爬壁！最高安全等級。",
      "breeding": "胎生。幼蠍上母背。"
    },
    "nickname": "樹皮蠍",
    "image": "data/images/unique_483.jpg"
  },
  {
    "id": 484,
    "name": "泰國竹節蟲",
    "scientificName": "Medauroidea extradentata",
    "difficulty": "新手",
    "tempLabel": "常溫 (18-26°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "竹節蟲",
    "description": "東南亞中型竹節蟲，體色褐色。非常容易飼養且繁殖力強。",
    "diet": "芭樂葉、玫瑰葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "beginner",
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型直立箱。食草插水保鮮。",
      "care": "最容易的寵物昆蟲之一。",
      "breeding": "孤雌生殖。卵到處散落。"
    },
    "nickname": "泰竹節",
    "image": "data/images/unique_484.jpg"
  },
  {
    "id": 485,
    "name": "黑金剛鍬形蟲",
    "scientificName": "Dorcus alcides",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "果凍/發酵木屑",
    "type": "甲蟲",
    "description": "東南亞的大型黑色鍬形蟲，大顎粗壯彎曲。全身漆黑光亮如同黑曜石。體型大可達9公分。性格兇猛好鬥。壽命可達1-2年。",
    "diet": "幼蟲：發酵木屑/菌瓶 / 成蟲：昆蟲果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "dark",
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "大型箱。堅固底材。",
      "care": "好鬥勿混養。全黑質感佳。",
      "breeding": "使用朽木產卵。繁殖容易。"
    },
    "nickname": "黑金剛扁鍬",
    "image": "data/images/unique_485.jpg"
  },
  {
    "id": 486,
    "name": "紅色長腳蜂",
    "scientificName": "Polistes canadensis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-32°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型飼養箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "活體昆蟲/糖水",
    "type": "膜翅目",
    "description": "南美洲的大型紅褐色長腳蜂，全身深紅色至暗紅色。是研究社會性昆蟲行為的模式物種。螫刺疼痛劇烈。建築開放式蜂巢。",
    "diet": "昆蟲、糖水、花蜜",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型觀察箱。安全措施！",
      "care": "群社性有毒！專業觀察用。",
      "breeding": "社會性階層分工。"
    },
    "nickname": "紅長腳蜂",
    "image": "data/images/unique_486.jpg"
  },
  {
    "id": 487,
    "name": "青帶鳳蝶",
    "scientificName": "Graphium sarpedon",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "黑色翅膀帶有一排翠藍色斑帶的中型鳳蝶。飛行速度極快。分布於南亞至澳洲。常見於溪流邊吸水。幼蟲以樟科植物為食。",
    "diet": "花蜜、水果汁液",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。",
      "care": "飛行速度快。需大空間。",
      "breeding": "幼蟲食樟樹葉。"
    },
    "nickname": "青斑鳳蝶",
    "image": "data/images/unique_487.jpg"
  },
  {
    "id": 488,
    "name": "巨型蛙口蛾",
    "scientificName": "Copiopteryx semiramis",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "南美洲的大型蛾類，後翅有極長的尾突可達20公分。整體如同一片落葉。外型奇特優美。成蟲不進食，壽命僅約一週。",
    "diet": "幼蟲：胡桃科樹葉",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風箱。極大空間。",
      "care": "成蟲不進食。壽命極短。",
      "breeding": "幼蟲以特定食草生長。"
    },
    "nickname": "長尾蛾",
    "image": "data/images/unique_488.jpg"
  },
  {
    "id": 489,
    "name": "印尼角蛙",
    "scientificName": "Megophrys nasuta",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-26°C)",
    "humidityLabel": "潮濕 (75-90%)",
    "spaceLabel": "大型雨林缸",
    "ventilationLabel": "低通風/保濕",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "兩棲綱",
    "description": "眼睛上方有三角形角狀突起的奇特蛙類。全身褐色，完美模擬落葉。來自東南亞雨林地被層。體型約10-12公分。靜止式伏擊掠食者。",
    "diet": "蟋蟀、蟑螂、蚯蚓",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "大型雨林缸。厚落葉底材。淺水域。",
      "care": "高濕度。靜態伏擊型不活躍。",
      "breeding": "卵產於溪流中。蝌蚪在撫養中成長。"
    },
    "nickname": "三角枯葉蛙",
    "image": "data/images/unique_489.jpg"
  },
  {
    "id": 490,
    "name": "黑紫蛺蝶",
    "scientificName": "Eunica alpais",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "腐果/樹液",
    "type": "鱗翅目",
    "description": "南美洲的中型蛺蝶，翅膀正面深紫色帶有金屬光澤，反面為隱蔽的灰褐色。喜愛吸食腐果和樹液。飛行快速靈活。",
    "diet": "腐爛水果、樹液",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。提供腐果。",
      "care": "需要熱帶環境。飛行快。",
      "breeding": "幼蟲以大戟科植物為食。"
    },
    "nickname": "紫閃蝶",
    "image": "data/images/unique_490.jpg"
  },
  {
    "id": 491,
    "name": "圓胸肥蛛",
    "scientificName": "Steatoda nobilis",
    "difficulty": "進階",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蜘蛛",
    "description": "又稱貴族蛛，是黑寡婦的近親。胸部圓潤棕色帶有乳白色花紋。原產地中海地區，已入侵英國。毒性為歐洲最強的蜘蛛之一。",
    "diet": "小型昆蟲、蒼蠅",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "小型箱。提供角落結網。",
      "care": "歐洲外來入侵種。毒性中等。",
      "breeding": "卵囊懸掛於網上。"
    },
    "nickname": "假寡婦蛛",
    "image": "data/images/unique_491.jpg"
  },
  {
    "id": 492,
    "name": "銅色綠天牛",
    "scientificName": "Sternotomis virescens",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "枝條樹皮",
    "type": "甲蟲",
    "description": "非洲雨林的華麗天牛，全身翠綠色帶有黑色斑紋。觸角長且帶有藍色環節。體長約3-4公分。是世界上色彩最豐富的天牛之一。",
    "diet": "新鮮樹枝皮層",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "中型保濕箱。提供新鮮樹枝。",
      "care": "壽命數月。需要高濕度。",
      "breeding": "幼蟲蛀食木材。"
    },
    "nickname": "綠寶石天牛",
    "image": "data/images/unique_492.jpg"
  },
  {
    "id": 493,
    "name": "大頭蟻",
    "scientificName": "Pheidole megacephala",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "中型螞蟻農場",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "雜食/糖水/昆蟲",
    "type": "膜翅目",
    "description": "入侵性極強的螞蟻，工蟻分為大頭兵蟻和小型工蟻。大頭兵蟻用來壓碎種子和防禦。是世界百大入侵種之一。群體可達百萬隻。",
    "diet": "糖水、昆蟲、種子",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "easy",
        "live"
      ]
    },
    "guide": {
      "setup": "防逃螞蟻農場。注意！入侵種。",
      "care": "嚴格防逃！入侵種。",
      "breeding": "蟻后持續產卵。多蟻后制。"
    },
    "nickname": "熱帶大頭蟻",
    "image": "data/images/unique_493.jpg"
  },
  {
    "id": 494,
    "name": "寬尾燕蝶",
    "scientificName": "Papilio cresphontes",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (22-28°C)",
    "humidityLabel": "適中 (60-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "充足光照",
    "dietLabel": "花蜜",
    "type": "鱗翅目",
    "description": "北美洲最大的蝴蝶之一，翅展可達15公分。黑色底帶有黃色虎紋。幼蟲模擬鳥糞，後期變成綠色帶有假眼斑和臭角。以柑橘為食。",
    "diet": "花蜜 / 幼蟲：柑橘類、花椒葉",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。柑橘食草。",
      "care": "幼蟲有臭角防禦。好養。",
      "breeding": "卵產於柑橘類葉片。"
    },
    "nickname": "巨型鳳蝶",
    "image": "data/images/unique_494.jpg"
  },
  {
    "id": 495,
    "name": "巨型黑蠍",
    "scientificName": "Opisthacanthus rugiceps",
    "difficulty": "進階",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "陰暗處",
    "dietLabel": "活體昆蟲",
    "type": "蠍子",
    "description": "非洲產的大型扁平蠍子，全身暗褐色到黑色。螯肢粗壯寬大。毒性低，主要靠力量制伏獵物。棲息在樹皮下和石頭下。體長約10公分。",
    "diet": "蟋蟀、蟑螂、大麥蟲",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "live"
      ]
    },
    "guide": {
      "setup": "中型箱。樹皮片和石頭供躲藏。",
      "care": "扁平型蠍。毒性低。穩定好養。",
      "breeding": "胎生。母蠍護幼。"
    },
    "nickname": "扁蠍",
    "image": "data/images/unique_495.jpg"
  },
  {
    "id": 496,
    "name": "蘭嶼角鼻龜甲蟲",
    "scientificName": "Cassida viridis",
    "difficulty": "進階",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "小型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "新鮮葉片",
    "type": "甲蟲",
    "description": "翠綠色的龜甲蟲，身體扁平如同小型龜殼。邊緣半透明。分布於歐亞大陸。以薄荷和蕁麻為食。受驚時會緊貼葉片表面不動。",
    "diet": "薄荷、蕁麻葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "small"
      ],
      "ventilation": [
        "low",
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "小型箱。新鮮食草。",
      "care": "需新鮮食草。體型小巧。",
      "breeding": "卵和幼蟲在葉片上。"
    },
    "nickname": "綠龜甲蟲",
    "image": "data/images/unique_496.jpg"
  },
  {
    "id": 497,
    "name": "金龜子（彩虹）",
    "scientificName": "Chrysina beyeri",
    "difficulty": "進階",
    "tempLabel": "常溫/溫暖 (20-26°C)",
    "humidityLabel": "適中/潮濕 (60-80%)",
    "spaceLabel": "中型飼養箱",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "果凍/腐植土",
    "type": "甲蟲",
    "description": "墨西哥的銀色金龜子，全身如同液態水銀般的銀色金屬光澤。是Chrysina屬的美麗成員。體型約2-3公分。夜間趨光活動。",
    "diet": "幼蟲：腐植土 / 成蟲：果凍",
    "match": {
      "temp": [
        "room",
        "warm"
      ],
      "humidity": [
        "medium",
        "high"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "medium"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "easy",
        "soil"
      ]
    },
    "guide": {
      "setup": "中型箱。底材偏濕。",
      "care": "需適度濕度。壽命數月。",
      "breeding": "幼蟲在腐植土中生長。"
    },
    "nickname": "銀色金龜",
    "image": "data/images/unique_497.jpg"
  },
  {
    "id": 498,
    "name": "天蠶蛾",
    "scientificName": "Antherea polyphemus",
    "difficulty": "進階",
    "tempLabel": "常溫 (16-24°C)",
    "humidityLabel": "適中 (50-70%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "陰暗處",
    "dietLabel": "新鮮葉片",
    "type": "鱗翅目",
    "description": "北美洲大型天蠶蛾，翅展可達15公分。棕色翅膀上有大型眼斑如同獨眼巨人。成蟲不進食。幼蟲碧綠色，以多種闊葉樹為食。",
    "diet": "幼蟲：橡樹、楓樹、柳樹葉",
    "match": {
      "temp": [
        "room"
      ],
      "humidity": [
        "medium"
      ],
      "exp": [
        "intermediate",
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "dark"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型通風網箱。食草枝條。",
      "care": "成蟲不進食。壽命僅一週。",
      "breeding": "卵產於食草上。幼蟲飼養容易。"
    },
    "nickname": "獨眼蛾",
    "image": "data/images/unique_498.jpg"
  },
  {
    "id": 499,
    "name": "烏龜蟻",
    "scientificName": "Cephalotes atratus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-30°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型螞蟻農場",
    "ventilationLabel": "一般打孔",
    "lightLabel": "室內散光",
    "dietLabel": "蜜水/花蜜",
    "type": "膜翅目",
    "description": "樹棲螞蟻，兵蟻頭部極度扁平如同盾牌，用來堵住巢穴入口。全身黑色光亮。有滑翔能力。分布於中南美洲雨林。群體樹上築巢。",
    "diet": "蜜露、花蜜、菌類",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "low"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型樹棲式螞蟻農場。需要樹枝。",
      "care": "樹棲型。需要高濕環境。",
      "breeding": "社會性。蟻后統治。"
    },
    "nickname": "盾頭蟻",
    "image": "data/images/unique_499.jpg"
  },
  {
    "id": 500,
    "name": "閃蝶",
    "scientificName": "Morpho menelaus",
    "difficulty": "專家",
    "tempLabel": "溫暖 (24-28°C)",
    "humidityLabel": "潮濕 (70-85%)",
    "spaceLabel": "大型網箱",
    "ventilationLabel": "高通風/網箱",
    "lightLabel": "室內散光",
    "dietLabel": "腐果/花蜜",
    "type": "鱗翅目",
    "description": "全世界最具標誌性的蝴蝶，翅面呈現極度耀眼的金屬藍色光澤。藍色來自翅膀表面的奈米結構而非色素。來自中南美洲雨林。翅展可達15公分。",
    "diet": "腐爛水果汁液",
    "match": {
      "temp": [
        "warm"
      ],
      "humidity": [
        "high"
      ],
      "exp": [
        "advanced"
      ],
      "space": [
        "large"
      ],
      "ventilation": [
        "high"
      ],
      "light": [
        "indoor"
      ],
      "dietType": [
        "plant"
      ]
    },
    "guide": {
      "setup": "大型溫室花房式網箱。",
      "care": "極難維持。需要雨林環境。",
      "breeding": "幼蟲以豆科植物為食。"
    },
    "nickname": "大藍閃蝶",
    "image": "data/images/unique_500.jpg"
  }
];
