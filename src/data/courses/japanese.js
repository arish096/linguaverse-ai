
const japaneseCourse = {
  language: "Japanese",
  code: "ja",

  levels: [
    // A1 - BEGINNER
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: はじめての言葉",
          lessons: [
            {
              title: "Greetings",
              activities: [
                {
                  type: "vocabulary",
                  word: "こんにちは",
                  pronunciation: "konnichiwa",
                  meaning: "Hello",
                  example: "こんにちは、元気ですか？",
                  exampleMeaning: "Hello, how are you?",
                },
                {
                  type: "quiz",
                  question: 'What does "こんにちは" mean?',
                  options: ["Goodbye", "Hello", "Thank you", "Good night"],
                  answer: "Hello",
                },
                {
                  type: "vocabulary",
                  word: "おはようございます",
                  pronunciation: "ohayou gozaimasu",
                  meaning: "Good morning",
                  example: "おはようございます、田中さん。",
                  exampleMeaning: "Good morning, Mr. Tanaka.",
                },
                {
                  type: "quiz",
                  question: 'When do you say "おはようございます"?',
                  options: ["In the morning", "At noon", "In the evening", "When leaving"],
                  answer: "In the morning",
                },
                {
                  type: "vocabulary",
                  word: "ありがとう",
                  pronunciation: "arigatou",
                  meaning: "Thank you",
                  example: "ありがとう！",
                  exampleMeaning: "Thank you!",
                },
                {
                  type: "quiz",
                  question: 'What does "ありがとう" mean?',
                  options: ["Please", "Thank you", "Hello", "Sorry"],
                  answer: "Thank you",
                },
                {
                  type: "vocabulary",
                  word: "さようなら",
                  pronunciation: "sayounara",
                  meaning: "Goodbye",
                  example: "さようなら、また明日。",
                  exampleMeaning: "Goodbye, see you tomorrow.",
                },
                {
                  type: "quiz",
                  question: 'When is "さようなら" used?',
                  options: [
                    "When meeting someone",
                    "When saying goodbye",
                    "When thanking someone",
                    "When introducing yourself",
                  ],
                  answer: "When saying goodbye",
                },
              ],
            },
            {
              title: "自己紹介",
              activities: [
                {
                  type: "vocabulary",
                  word: "私の名前は",
                  pronunciation: "watashi no namae wa",
                  meaning: "My name is",
                  example: "私の名前はアリシュです。",
                  exampleMeaning: "My name is Arish.",
                },
                {
                  type: "quiz",
                  question: 'What does "私の名前はアリシュです" mean?',
                  options: [
                    "I am from Arish",
                    "My name is Arish",
                    "I know Arish",
                    "Arish is my friend",
                  ],
                  answer: "My name is Arish",
                },
                {
                  type: "vocabulary",
                  word: "私は学生です",
                  pronunciation: "watashi wa gakusei desu",
                  meaning: "I am a student",
                  example: "私は学生です。",
                  exampleMeaning: "I am a student.",
                },
                {
                  type: "quiz",
                  question: 'What does "私は学生です" mean?',
                  options: [
                    "I am a teacher",
                    "I am a student",
                    "He is a student",
                    "I am at home",
                  ],
                  answer: "I am a student",
                },
                {
                  type: "vocabulary",
                  word: "はじめまして",
                  pronunciation: "hajimemashite",
                  meaning: "Nice to meet you",
                  example: "はじめまして。よろしくお願いします。",
                  exampleMeaning: "Nice to meet you. I look forward to getting along with you.",
                },
                {
                  type: "quiz",
                  question: 'When do you say "はじめまして"?',
                  options: [
                    "When meeting someone for the first time",
                    "When saying goodbye",
                    "Before sleeping",
                    "While eating",
                  ],
                  answer: "When meeting someone for the first time",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: 数字と家族",
          lessons: [
            {
              title: "Numbers",
              activities: [
                {
                  type: "vocabulary",
                  word: "一",
                  pronunciation: "ichi",
                  meaning: "One",
                  example: "りんごが一つあります。",
                  exampleMeaning: "There is one apple.",
                },
                {
                  type: "quiz",
                  question: 'What number is "一"?',
                  options: ["One", "Two", "Three", "Four"],
                  answer: "One",
                },
                {
                  type: "vocabulary",
                  word: "二",
                  pronunciation: "ni",
                  meaning: "Two",
                  example: "本が二冊あります。",
                  exampleMeaning: "There are two books.",
                },
                {
                  type: "quiz",
                  question: 'What number is "二"?',
                  options: ["One", "Two", "Five", "Ten"],
                  answer: "Two",
                },
                {
                  type: "vocabulary",
                  word: "三",
                  pronunciation: "san",
                  meaning: "Three",
                  example: "三人の学生がいます。",
                  exampleMeaning: "There are three students.",
                },
                {
                  type: "quiz",
                  question: 'What number is "三"?',
                  options: ["Two", "Three", "Four", "Six"],
                  answer: "Three",
                },
              ],
            },
            {
              title: "Family Members",
              activities: [
                {
                  type: "vocabulary",
                  word: "家族",
                  pronunciation: "kazoku",
                  meaning: "Family",
                  example: "私の家族は四人です。",
                  exampleMeaning: "There are four people in my family.",
                },
                {
                  type: "quiz",
                  question: 'What does "家族" mean?',
                  options: ["Friend", "Family", "School", "House"],
                  answer: "Family",
                },
                {
                  type: "vocabulary",
                  word: "母",
                  pronunciation: "haha",
                  meaning: "My mother",
                  example: "母は料理が好きです。",
                  exampleMeaning: "My mother likes cooking.",
                },
                {
                  type: "quiz",
                  question: 'What does "母" mean?',
                  options: ["Father", "Mother", "Sister", "Brother"],
                  answer: "Mother",
                },
              ],
            },
          ],
        },
      ],
    },

    // A2 - ELEMENTARY
    {
      id: "A2",
      title: "Elementary",
      units: [
        {
          title: "Unit 1: 毎日の生活",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                {
                  type: "vocabulary",
                  word: "起きる",
                  pronunciation: "okiru",
                  meaning: "To wake up",
                  example: "七時に起きます。",
                  exampleMeaning: "I wake up at seven.",
                },
                {
                  type: "quiz",
                  question: 'What does "起きる" mean?',
                  options: ["To sleep", "To wake up", "To eat", "To walk"],
                  answer: "To wake up",
                },
                {
                  type: "vocabulary",
                  word: "朝ごはん",
                  pronunciation: "asagohan",
                  meaning: "Breakfast",
                  example: "朝ごはんを食べます。",
                  exampleMeaning: "I eat breakfast.",
                },
                {
                  type: "quiz",
                  question: 'Which meal is "朝ごはん"?',
                  options: ["Breakfast", "Lunch", "Dinner", "Dessert"],
                  answer: "Breakfast",
                },
                {
                  type: "vocabulary",
                  word: "学校へ行く",
                  pronunciation: "gakkou e iku",
                  meaning: "To go to school",
                  example: "毎日学校へ行きます。",
                  exampleMeaning: "I go to school every day.",
                },
                {
                  type: "quiz",
                  question: 'What does "学校へ行く" mean?',
                  options: ["To go home", "To go to school", "To go shopping", "To go to work"],
                  answer: "To go to school",
                },
              ],
            },
            {
              title: "Hobbies and Free Time",
              activities: [
                {
                  type: "vocabulary",
                  word: "読書",
                  pronunciation: "dokusho",
                  meaning: "Reading books",
                  example: "私の趣味は読書です。",
                  exampleMeaning: "My hobby is reading books.",
                },
                {
                  type: "quiz",
                  question: 'What does "読書" mean?',
                  options: ["Swimming", "Reading books", "Cooking", "Dancing"],
                  answer: "Reading books",
                },
                {
                  type: "vocabulary",
                  word: "音楽を聞く",
                  pronunciation: "ongaku o kiku",
                  meaning: "To listen to music",
                  example: "毎晩音楽を聞きます。",
                  exampleMeaning: "I listen to music every evening.",
                },
                {
                  type: "quiz",
                  question: 'What does "音楽を聞く" mean?',
                  options: [
                    "To watch a movie",
                    "To listen to music",
                    "To play a game",
                    "To read a book",
                  ],
                  answer: "To listen to music",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: レストランと買い物",
          lessons: [
            {
              title: "At a Restaurant",
              activities: [
                {
                  type: "vocabulary",
                  word: "ください",
                  pronunciation: "kudasai",
                  meaning: "Please give me",
                  example: "水をください。",
                  exampleMeaning: "Water, please.",
                },
                {
                  type: "quiz",
                  question: 'What does "ください" mean?',
                  options: [
                    "Please give me",
                    "Thank you",
                    "Goodbye",
                    "Excuse me",
                  ],
                  answer: "Please give me",
                },
                {
                  type: "vocabulary",
                  word: "お会計",
                  pronunciation: "okaikei",
                  meaning: "The bill / Payment",
                  example: "お会計をお願いします。",
                  exampleMeaning: "The bill, please.",
                },
                {
                  type: "quiz",
                  question: 'What does "お会計" mean?',
                  options: ["Menu", "Bill", "Water", "Table"],
                  answer: "Bill",
                },
              ],
            },
            {
              title: "Shopping",
              activities: [
                {
                  type: "vocabulary",
                  word: "いくらですか",
                  pronunciation: "ikura desu ka",
                  meaning: "How much is it?",
                  example: "これはいくらですか。",
                  exampleMeaning: "How much is this?",
                },
                {
                  type: "quiz",
                  question: 'What does "いくらですか" mean?',
                  options: [
                    "Where is it?",
                    "How much is it?",
                    "What is this?",
                    "Who is that?",
                  ],
                  answer: "How much is it?",
                },
                {
                  type: "vocabulary",
                  word: "高い",
                  pronunciation: "takai",
                  meaning: "Expensive / High",
                  example: "この時計は高いです。",
                  exampleMeaning: "This watch is expensive.",
                },
                {
                  type: "quiz",
                  question: 'What does "高い" mean?',
                  options: ["Cheap", "Expensive", "Beautiful", "Small"],
                  answer: "Expensive",
                },
              ],
            },
          ],
        },
      ],
    },

    // B1 - INTERMEDIATE
    {
      id: "B1",
      title: "Intermediate",
      units: [
        {
          title: "Unit 1: 経験",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                {
                  type: "vocabulary",
                  word: "訪れました",
                  pronunciation: "otozure mashita",
                  meaning: "Visited",
                  example: "去年、東京を訪れました。",
                  exampleMeaning: "I visited Tokyo last year.",
                },
                {
                  type: "quiz",
                  question: 'Which tense does "訪れました" represent?',
                  options: ["Present", "Future", "Past", "Command"],
                  answer: "Past",
                },
                {
                  type: "vocabulary",
                  word: "経験",
                  pronunciation: "keiken",
                  meaning: "Experience",
                  example: "それは素晴らしい経験でした。",
                  exampleMeaning: "That was a wonderful experience.",
                },
                {
                  type: "quiz",
                  question: 'What does "経験" mean?',
                  options: ["Experience", "Plan", "Question", "Rule"],
                  answer: "Experience",
                },
                {
                  type: "vocabulary",
                  word: "楽しかった",
                  pronunciation: "tanoshikatta",
                  meaning: "It was fun",
                  example: "旅行はとても楽しかった。",
                  exampleMeaning: "The trip was very fun.",
                },
                {
                  type: "quiz",
                  question: 'What does "楽しかった" mean?',
                  options: ["It was boring", "It was fun", "It was difficult", "It was expensive"],
                  answer: "It was fun",
                },
              ],
            },
            {
              title: "Plans and Invitations",
              activities: [
                {
                  type: "vocabulary",
                  word: "予定",
                  pronunciation: "yotei",
                  meaning: "Plan / Schedule",
                  example: "明日の予定があります。",
                  exampleMeaning: "I have plans for tomorrow.",
                },
                {
                  type: "quiz",
                  question: 'What does "予定" mean?',
                  options: ["Schedule", "Memory", "Problem", "Gift"],
                  answer: "Schedule",
                },
                {
                  type: "vocabulary",
                  word: "一緒に行きませんか",
                  pronunciation: "issho ni ikimasen ka",
                  meaning: "Would you like to go together?",
                  example: "映画に一緒に行きませんか。",
                  exampleMeaning: "Would you like to go to the movies together?",
                },
                {
                  type: "quiz",
                  question: 'What does "一緒に行きませんか" express?',
                  options: ["An invitation", "An apology", "A complaint", "A command"],
                  answer: "An invitation",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: 意見とアドバイス",
          lessons: [
            {
              title: "Giving Advice",
              activities: [
                {
                  type: "vocabulary",
                  word: "したほうがいい",
                  pronunciation: "shita hou ga ii",
                  meaning: "You should",
                  example: "もっと勉強したほうがいいです。",
                  exampleMeaning: "You should study more.",
                },
                {
                  type: "quiz",
                  question: 'What does "したほうがいい" express?',
                  options: ["Advice", "A greeting", "A past event", "A question"],
                  answer: "Advice",
                },
                {
                  type: "vocabulary",
                  word: "私の考えでは",
                  pronunciation: "watashi no kangae dewa",
                  meaning: "In my opinion",
                  example: "私の考えでは、これは良い方法です。",
                  exampleMeaning: "In my opinion, this is a good method.",
                },
                {
                  type: "quiz",
                  question: 'What does "私の考えでは" mean?',
                  options: ["In my opinion", "At my home", "After work", "With my friend"],
                  answer: "In my opinion",
                },
              ],
            },
            {
              title: "Connecting Ideas",
              activities: [
                {
                  type: "vocabulary",
                  word: "だから",
                  pronunciation: "dakara",
                  meaning: "Therefore / So",
                  example: "雨が降っています。だから、家にいます。",
                  exampleMeaning: "It is raining. Therefore, I am staying at home.",
                },
                {
                  type: "quiz",
                  question: 'What does "だから" mean?',
                  options: ["However", "Therefore", "Although", "For example"],
                  answer: "Therefore",
                },
                {
                  type: "vocabulary",
                  word: "でも",
                  pronunciation: "demo",
                  meaning: "But / However",
                  example: "高いです。でも、買いたいです。",
                  exampleMeaning: "It is expensive. However, I want to buy it.",
                },
                {
                  type: "quiz",
                  question: 'What does "でも" mean?',
                  options: ["Because", "But", "Therefore", "Before"],
                  answer: "But",
                },
              ],
            },
          ],
        },
      ],
    },

    // B2 - UPPER INTERMEDIATE
    {
      id: "B2",
      title: "Upper Intermediate",
      units: [
        {
          title: "Unit 1: 意見を伝える",
          lessons: [
            {
              title: "Expressing Opinions",
              activities: [
                {
                  type: "vocabulary",
                  word: "私の意見では",
                  pronunciation: "watashi no iken dewa",
                  meaning: "In my opinion",
                  example: "私の意見では、語学学習は大切です。",
                  exampleMeaning: "In my opinion, language learning is important.",
                },
                {
                  type: "quiz",
                  question: 'What is "私の意見では" used for?',
                  options: [
                    "Expressing an opinion",
                    "Apologizing",
                    "Saying goodbye",
                    "Asking the time",
                  ],
                  answer: "Expressing an opinion",
                },
                {
                  type: "vocabulary",
                  word: "しかし",
                  pronunciation: "shikashi",
                  meaning: "However / But",
                  example: "難しいです。しかし、挑戦します。",
                  exampleMeaning: "It is difficult. However, I will try.",
                },
                {
                  type: "quiz",
                  question: 'What does "しかし" mean?',
                  options: ["Therefore", "However", "Because", "For example"],
                  answer: "However",
                },
                {
                  type: "vocabulary",
                  word: "さらに",
                  pronunciation: "sarani",
                  meaning: "Furthermore / Moreover",
                  example: "この方法は便利です。さらに、時間も節約できます。",
                  exampleMeaning: "This method is convenient. Furthermore, it saves time.",
                },
                {
                  type: "quiz",
                  question: 'What does "さらに" mean?',
                  options: ["Furthermore", "Nevertheless", "Instead", "Yesterday"],
                  answer: "Furthermore",
                },
              ],
            },
            {
              title: "Agreeing and Disagreeing",
              activities: [
                {
                  type: "vocabulary",
                  word: "賛成です",
                  pronunciation: "sansei desu",
                  meaning: "I agree",
                  example: "あなたの意見に賛成です。",
                  exampleMeaning: "I agree with your opinion.",
                },
                {
                  type: "quiz",
                  question: 'What does "賛成です" mean?',
                  options: ["I disagree", "I agree", "I am confused", "I am tired"],
                  answer: "I agree",
                },
                {
                  type: "vocabulary",
                  word: "反対です",
                  pronunciation: "hantai desu",
                  meaning: "I disagree / I am against it",
                  example: "その計画には反対です。",
                  exampleMeaning: "I am against that plan.",
                },
                {
                  type: "quiz",
                  question: 'What does "反対です" mean?',
                  options: ["I agree", "I disagree", "I am happy", "I am ready"],
                  answer: "I disagree",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: 社会と技術",
          lessons: [
            {
              title: "Society and Technology",
              activities: [
                {
                  type: "vocabulary",
                  word: "環境問題",
                  pronunciation: "kankyou mondai",
                  meaning: "Environmental problems",
                  example: "環境問題について話しましょう。",
                  exampleMeaning: "Let's talk about environmental problems.",
                },
                {
                  type: "quiz",
                  question: 'What does "環境問題" mean?',
                  options: ["Environmental problems", "Sports", "Entertainment", "Travel"],
                  answer: "Environmental problems",
                },
                {
                  type: "vocabulary",
                  word: "発展する",
                  pronunciation: "hatten suru",
                  meaning: "To develop / To progress",
                  example: "技術は急速に発展しています。",
                  exampleMeaning: "Technology is developing rapidly.",
                },
                {
                  type: "quiz",
                  question: 'What does "発展する" mean?',
                  options: ["To forget", "To develop", "To stop", "To sell"],
                  answer: "To develop",
                },
              ],
            },
            {
              title: "Formal Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "よろしくお願いいたします",
                  pronunciation: "yoroshiku onegai itashimasu",
                  meaning: "Thank you for your cooperation",
                  example: "今後ともよろしくお願いいたします。",
                  exampleMeaning: "Thank you for your continued cooperation.",
                },
                {
                  type: "quiz",
                  question: 'What kind of expression is "よろしくお願いいたします"?',
                  options: [
                    "Very polite and formal",
                    "Rude",
                    "Casual slang",
                    "An angry command",
                  ],
                  answer: "Very polite and formal",
                },
                {
                  type: "vocabulary",
                  word: "お世話になっております",
                  pronunciation: "osewa ni natte orimasu",
                  meaning: "Thank you for your continued support",
                  example: "いつもお世話になっております。",
                  exampleMeaning: "Thank you for your continued support.",
                },
                {
                  type: "quiz",
                  question: 'Where is "お世話になっております" commonly used?',
                  options: [
                    "Professional communication",
                    "Casual gaming",
                    "Sports competitions",
                    "Ordering food",
                  ],
                  answer: "Professional communication",
                },
              ],
            },
          ],
        },
      ],
    },

    // C1 - ADVANCED
    {
      id: "C1",
      title: "Advanced",
      units: [
        {
          title: "Unit 1: 高度な表現",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "それにもかかわらず",
                  pronunciation: "sore ni mo kakawarazu",
                  meaning: "Nevertheless / Despite that",
                  example: "困難でした。それにもかかわらず、成功しました。",
                  exampleMeaning: "It was difficult. Nevertheless, we succeeded.",
                },
                {
                  type: "quiz",
                  question: 'What does "それにもかかわらず" mean?',
                  options: ["Therefore", "Nevertheless", "For example", "Furthermore"],
                  answer: "Nevertheless",
                },
                {
                  type: "vocabulary",
                  word: "さらに言えば",
                  pronunciation: "sara ni ieba",
                  meaning: "Furthermore / To go a step further",
                  example: "さらに言えば、この方法は費用も節約できます。",
                  exampleMeaning: "Furthermore, this method can also save costs.",
                },
                {
                  type: "quiz",
                  question: 'What does "さらに言えば" mean?',
                  options: ["Furthermore", "On the contrary", "At first", "By chance"],
                  answer: "Furthermore",
                },
                {
                  type: "vocabulary",
                  word: "避けられない",
                  pronunciation: "sakerarenai",
                  meaning: "Unavoidable / Inevitable",
                  example: "変化は避けられないものです。",
                  exampleMeaning: "Change is inevitable.",
                },
                {
                  type: "quiz",
                  question: 'What does "避けられない" mean?',
                  options: ["Avoidable", "Unavoidable", "Optional", "Unnecessary"],
                  answer: "Unavoidable",
                },
              ],
            },
            {
              title: "Academic Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "仮説",
                  pronunciation: "kasetsu",
                  meaning: "Hypothesis",
                  example: "この仮説を検証する必要があります。",
                  exampleMeaning: "We need to test this hypothesis.",
                },
                {
                  type: "quiz",
                  question: 'What does "仮説" mean?',
                  options: ["Conclusion", "Hypothesis", "Evidence", "Problem"],
                  answer: "Hypothesis",
                },
                {
                  type: "vocabulary",
                  word: "したがって",
                  pronunciation: "shitagatte",
                  meaning: "Therefore / Consequently",
                  example: "証拠がありません。したがって、結論は出せません。",
                  exampleMeaning: "There is no evidence. Therefore, we cannot reach a conclusion.",
                },
                {
                  type: "quiz",
                  question: 'What relationship does "したがって" express?',
                  options: ["Cause and effect", "Contrast", "Comparison", "Location"],
                  answer: "Cause and effect",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: 分析と議論",
          lessons: [
            {
              title: "Analyzing Ideas",
              activities: [
                {
                  type: "vocabulary",
                  word: "注目すべき",
                  pronunciation: "chuumoku subeki",
                  meaning: "Worth noting / Noteworthy",
                  example: "注目すべき点がいくつかあります。",
                  exampleMeaning: "There are several noteworthy points.",
                },
                {
                  type: "quiz",
                  question: 'What does "注目すべき" mean?',
                  options: ["Worth noting", "Impossible", "Unnecessary", "Unimportant"],
                  answer: "Worth noting",
                },
                {
                  type: "vocabulary",
                  word: "明らかにする",
                  pronunciation: "akiraka ni suru",
                  meaning: "To clarify / To reveal",
                  example: "調査で問題を明らかにしました。",
                  exampleMeaning: "The investigation revealed the problem.",
                },
                {
                  type: "quiz",
                  question: 'What does "明らかにする" mean?',
                  options: ["To hide", "To clarify", "To ignore", "To postpone"],
                  answer: "To clarify",
                },
              ],
            },
            {
              title: "Professional Discussion",
              activities: [
                {
                  type: "vocabulary",
                  word: "考慮に入れる",
                  pronunciation: "kouryo ni ireru",
                  meaning: "To take into consideration",
                  example: "すべての条件を考慮に入れる必要があります。",
                  exampleMeaning: "We need to take all conditions into consideration.",
                },
                {
                  type: "quiz",
                  question: 'What does "考慮に入れる" mean?',
                  options: ["To consider", "To reject", "To forget", "To finish"],
                  answer: "To consider",
                },
                {
                  type: "vocabulary",
                  word: "観点から",
                  pronunciation: "kanten kara",
                  meaning: "From the perspective of",
                  example: "教育の観点から考えましょう。",
                  exampleMeaning: "Let's think about it from an educational perspective.",
                },
                {
                  type: "quiz",
                  question: 'What does "観点から" mean?',
                  options: [
                    "From the perspective of",
                    "Because of",
                    "Instead of",
                    "After",
                  ],
                  answer: "From the perspective of",
                },
              ],
            },
          ],
        },
      ],
    },

    // C2 - PROFICIENT
    {
      id: "C2",
      title: "Proficient",
      units: [
        {
          title: "Unit 1: 慣用表現",
          lessons: [
            {
              title: "Idiomatic Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "猫の手も借りたい",
                  pronunciation: "neko no te mo karitai",
                  meaning: "To be extremely busy and need all the help possible",
                  example: "仕事が多すぎて、猫の手も借りたいです。",
                  exampleMeaning: "I have so much work that I need all the help I can get.",
                },
                {
                  type: "quiz",
                  question: 'What does "猫の手も借りたい" mean figuratively?',
                  options: [
                    "To be extremely busy",
                    "To love animals",
                    "To go shopping",
                    "To take a vacation",
                  ],
                  answer: "To be extremely busy",
                },
                {
                  type: "vocabulary",
                  word: "腹を割って話す",
                  pronunciation: "hara o watte hanasu",
                  meaning: "To speak frankly and openly",
                  example: "今日は腹を割って話しましょう。",
                  exampleMeaning: "Let's speak openly and honestly today.",
                },
                {
                  type: "quiz",
                  question: 'What does "腹を割って話す" mean?',
                  options: [
                    "To speak frankly and openly",
                    "To avoid a conversation",
                    "To tell a joke",
                    "To give an order",
                  ],
                  answer: "To speak frankly and openly",
                },
              ],
            },
            {
              title: "Subtle Meaning",
              activities: [
                {
                  type: "vocabulary",
                  word: "いかに",
                  pronunciation: "ikani",
                  meaning: "How / To what extent",
                  example: "いかに難しくても、挑戦する価値があります。",
                  exampleMeaning: "No matter how difficult it is, it is worth trying.",
                },
                {
                  type: "quiz",
                  question: 'What can "いかに" express?',
                  options: [
                    "How or to what extent",
                    "Only location",
                    "Only time",
                    "A direct command",
                  ],
                  answer: "How or to what extent",
                },
                {
                  type: "vocabulary",
                  word: "かろうじて",
                  pronunciation: "karoujite",
                  meaning: "Barely / Just manage to",
                  example: "試験にかろうじて合格しました。",
                  exampleMeaning: "I barely passed the exam.",
                },
                {
                  type: "quiz",
                  question: 'What does "かろうじて" mean?',
                  options: ["Easily", "Barely", "Immediately", "Repeatedly"],
                  answer: "Barely",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: 高度なコミュニケーション",
          lessons: [
            {
              title: "Precise and Formal Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "万が一",
                  pronunciation: "man ga ichi",
                  meaning: "If by any chance / In the unlikely event",
                  example: "万が一問題が起きたら、連絡してください。",
                  exampleMeaning: "If a problem occurs, please contact me.",
                },
                {
                  type: "quiz",
                  question: 'What does "万が一" express?',
                  options: [
                    "An unlikely possibility",
                    "A certainty",
                    "A past event",
                    "A regular habit",
                  ],
                  answer: "An unlikely possibility",
                },
                {
                  type: "vocabulary",
                  word: "あらかじめ",
                  pronunciation: "arakajime",
                  meaning: "In advance / Beforehand",
                  example: "必要な書類をあらかじめ準備してください。",
                  exampleMeaning: "Please prepare the necessary documents in advance.",
                },
                {
                  type: "quiz",
                  question: 'What does "あらかじめ" mean?',
                  options: ["In advance", "Afterwards", "Suddenly", "Never"],
                  answer: "In advance",
                },
              ],
            },
            {
              title: "Mastering Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "結局のところ",
                  pronunciation: "kekkyoku no tokoro",
                  meaning: "Ultimately / After all",
                  example: "結局のところ、決めるのはあなたです。",
                  exampleMeaning: "Ultimately, you are the one who decides.",
                },
                {
                  type: "quiz",
                  question: 'What does "結局のところ" mean?',
                  options: [
                    "At the beginning",
                    "Ultimately",
                    "For example",
                    "On the contrary",
                  ],
                  answer: "Ultimately",
                },
                {
                  type: "vocabulary",
                  word: "言うまでもなく",
                  pronunciation: "iu made mo naku",
                  meaning: "Needless to say",
                  example: "言うまでもなく、健康は大切です。",
                  exampleMeaning: "Needless to say, health is important.",
                },
                {
                  type: "quiz",
                  question: 'What does "言うまでもなく" mean?',
                  options: [
                    "Needless to say",
                    "To say again",
                    "To disagree",
                    "To ask permission",
                  ],
                  answer: "Needless to say",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default japaneseCourse;
