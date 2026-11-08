
const turkishCourse = {
  language: "Turkish",
  code: "tr",

  levels: [
    // =====================================================
    // A1 - BEGINNER
    // =====================================================
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: İlk kelimeler",
          lessons: [
            {
              title: "Greetings",
              activities: [
                {
                  type: "vocabulary",
                  word: "Merhaba",
                  pronunciation: "mehr-hah-BAH",
                  meaning: "Hello",
                  example: "Merhaba, nasılsın?",
                  exampleMeaning: "Hello, how are you?",
                },
                {
                  type: "quiz",
                  question: 'What does "Merhaba" mean?',
                  options: ["Goodbye", "Hello", "Thank you", "Please"],
                  answer: "Hello",
                },
                {
                  type: "vocabulary",
                  word: "Günaydın",
                  pronunciation: "goo-nahy-DUHN",
                  meaning: "Good morning",
                  example: "Günaydın, Ayşe!",
                  exampleMeaning: "Good morning, Ayşe!",
                },
                {
                  type: "quiz",
                  question: 'When do we say "Günaydın"?',
                  options: ["In the morning", "At midnight", "When saying goodbye", "While eating"],
                  answer: "In the morning",
                },
                {
                  type: "vocabulary",
                  word: "Teşekkürler",
                  pronunciation: "teh-shek-KOOR-lehr",
                  meaning: "Thank you",
                  example: "Çok teşekkürler!",
                  exampleMeaning: "Thank you very much!",
                },
                {
                  type: "quiz",
                  question: 'What does "Teşekkürler" mean?',
                  options: ["Please", "Thank you", "Hello", "Excuse me"],
                  answer: "Thank you",
                },
                {
                  type: "vocabulary",
                  word: "Hoşça kal",
                  pronunciation: "hosh-cha kahl",
                  meaning: "Goodbye",
                  example: "Hoşça kal, görüşürüz!",
                  exampleMeaning: "Goodbye, see you again!",
                },
                {
                  type: "quiz",
                  question: 'When do we use "Hoşça kal"?',
                  options: [
                    "When saying goodbye",
                    "When meeting someone",
                    "When thanking someone",
                    "When introducing ourselves",
                  ],
                  answer: "When saying goodbye",
                },
              ],
            },
            {
              title: "Kendini tanıtma",
              activities: [
                {
                  type: "vocabulary",
                  word: "Benim adım",
                  pronunciation: "beh-neem ah-duhm",
                  meaning: "My name is",
                  example: "Benim adım Arish.",
                  exampleMeaning: "My name is Arish.",
                },
                {
                  type: "quiz",
                  question: 'What does "Benim adım Arish" mean?',
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
                  word: "Ben öğrenciyim",
                  pronunciation: "ben uh-ren-jee-yim",
                  meaning: "I am a student",
                  example: "Ben öğrenciyim.",
                  exampleMeaning: "I am a student.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ben öğrenciyim" mean?',
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
                  word: "Memnun oldum",
                  pronunciation: "mem-noon ol-doom",
                  meaning: "Nice to meet you",
                  example: "Sizinle tanıştığıma memnun oldum.",
                  exampleMeaning: "Nice to meet you.",
                },
                {
                  type: "quiz",
                  question: 'When do we say "Memnun oldum"?',
                  options: [
                    "When meeting someone for the first time",
                    "When saying goodbye",
                    "When sleeping",
                    "When eating",
                  ],
                  answer: "When meeting someone for the first time",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Sayılar ve aile",
          lessons: [
            {
              title: "Numbers and Age",
              activities: [
                {
                  type: "vocabulary",
                  word: "Bir",
                  pronunciation: "beer",
                  meaning: "One",
                  example: "Bir kitabım var.",
                  exampleMeaning: "I have one book.",
                },
                {
                  type: "quiz",
                  question: 'Which number is "Bir"?',
                  options: ["One", "Two", "Three", "Four"],
                  answer: "One",
                },
                {
                  type: "vocabulary",
                  word: "Kaç yaşındasın?",
                  pronunciation: "kahch yah-shuhn-dah-suhn",
                  meaning: "How old are you?",
                  example: "On altı yaşındayım.",
                  exampleMeaning: "I am sixteen years old.",
                },
                {
                  type: "quiz",
                  question: 'What does "Kaç yaşındasın?" ask about?',
                  options: ["Name", "Age", "Address", "Preferences"],
                  answer: "Age",
                },
              ],
            },
            {
              title: "Family Members",
              activities: [
                {
                  type: "vocabulary",
                  word: "Aile",
                  pronunciation: "ah-ee-leh",
                  meaning: "Family",
                  example: "Ailem çok büyük.",
                  exampleMeaning: "My family is very big.",
                },
                {
                  type: "quiz",
                  question: 'What does "Aile" mean?',
                  options: ["Friend", "Family", "School", "Home"],
                  answer: "Family",
                },
                {
                  type: "vocabulary",
                  word: "Annem",
                  pronunciation: "ah-nem",
                  meaning: "My mother",
                  example: "Annem çok nazik.",
                  exampleMeaning: "My mother is very kind.",
                },
                {
                  type: "quiz",
                  question: 'What does "Annem" mean?',
                  options: ["My father", "My sister", "My mother", "My grandmother"],
                  answer: "My mother",
                },
              ],
            },
          ],
        },
      ],
    },

    // =====================================================
    // A2 - ELEMENTARY
    // =====================================================
    {
      id: "A2",
      title: "Elementary",
      units: [
        {
          title: "Unit 1: Günlük hayat",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                {
                  type: "vocabulary",
                  word: "Uyanmak",
                  pronunciation: "oo-yahn-mahk",
                  meaning: "To wake up",
                  example: "Saat yedide uyanırım.",
                  exampleMeaning: "I wake up at seven o'clock.",
                },
                {
                  type: "quiz",
                  question: 'What does "Uyanmak" mean?',
                  options: ["To sleep", "To wake up", "To eat", "To walk"],
                  answer: "To wake up",
                },
                {
                  type: "vocabulary",
                  word: "Kahvaltı",
                  pronunciation: "kah-vahl-tuh",
                  meaning: "Breakfast",
                  example: "Kahvaltı yapıyorum.",
                  exampleMeaning: "I am having breakfast.",
                },
                {
                  type: "quiz",
                  question: 'Which meal does "Kahvaltı" refer to?',
                  options: ["Breakfast", "Lunch", "Dinner", "Dessert"],
                  answer: "Breakfast",
                },
                {
                  type: "vocabulary",
                  word: "İşe gitmek",
                  pronunciation: "ee-sheh geet-mek",
                  meaning: "To go to work",
                  example: "Her gün işe gidiyorum.",
                  exampleMeaning: "I go to work every day.",
                },
                {
                  type: "quiz",
                  question: 'What does "İşe gitmek" mean?',
                  options: ["To go home", "To go to work", "To sleep", "To play"],
                  answer: "To go to work",
                },
              ],
            },
            {
              title: "At a Restaurant",
              activities: [
                {
                  type: "vocabulary",
                  word: "İstiyorum",
                  pronunciation: "ees-tee-yo-room",
                  meaning: "I want",
                  example: "Bir çay istiyorum, lütfen.",
                  exampleMeaning: "I would like a tea, please.",
                },
                {
                  type: "quiz",
                  question: 'What does "İstiyorum" mean?',
                  options: [
                    "I want",
                    "I know",
                    "I am going",
                    "I am watching",
                  ],
                  answer: "I want",
                },
                {
                  type: "vocabulary",
                  word: "Hesap",
                  pronunciation: "heh-sahp",
                  meaning: "Bill",
                  example: "Hesap, lütfen.",
                  exampleMeaning: "The bill, please.",
                },
                {
                  type: "quiz",
                  question: 'What does "Hesap" mean?',
                  options: ["Menu", "Bill", "Water", "Table"],
                  answer: "Bill",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Şehirde",
          lessons: [
            {
              title: "Asking for Directions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Nerede?",
                  pronunciation: "neh-reh-deh",
                  meaning: "Where is it?",
                  example: "İstasyon nerede?",
                  exampleMeaning: "Where is the station?",
                },
                {
                  type: "quiz",
                  question: 'What does "İstasyon nerede?" mean?',
                  options: [
                    "Where is the station?",
                    "When does the station open?",
                    "How far is the station?",
                    "Whose station is it?",
                  ],
                  answer: "Where is the station?",
                },
                {
                  type: "vocabulary",
                  word: "Sağa dön",
                  pronunciation: "sah-ah don",
                  meaning: "Turn right",
                  example: "Lütfen sağa dön.",
                  exampleMeaning: "Please turn right.",
                },
                {
                  type: "quiz",
                  question: 'What does "Sağa dön" mean?',
                  options: ["Turn left", "Go straight", "Turn right", "Go back"],
                  answer: "Turn right",
                },
              ],
            },
            {
              title: "Shopping",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ne kadar?",
                  pronunciation: "neh kah-dahr",
                  meaning: "How much is it?",
                  example: "Bu gömlek ne kadar?",
                  exampleMeaning: "How much is this shirt?",
                },
                {
                  type: "quiz",
                  question: 'What does "Ne kadar?" mean?',
                  options: [
                    "Where is it made?",
                    "How much is it?",
                    "Whose is it?",
                    "Is it open?",
                  ],
                  answer: "How much is it?",
                },
                {
                  type: "vocabulary",
                  word: "Çok pahalı",
                  pronunciation: "chok pah-hah-luh",
                  meaning: "Very expensive",
                  example: "Bu benim için çok pahalı.",
                  exampleMeaning: "This is very expensive for me.",
                },
                {
                  type: "quiz",
                  question: 'When would you say "Çok pahalı"?',
                  options: [
                    "When something is free",
                    "When something is very expensive",
                    "When something is delicious",
                    "When something is small",
                  ],
                  answer: "When something is very expensive",
                },
              ],
            },
          ],
        },
      ],
    },

    // =====================================================
    // B1 - INTERMEDIATE
    // =====================================================
    {
      id: "B1",
      title: "Intermediate",
      units: [
        {
          title: "Unit 1: Deneyimler",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ziyaret ettim",
                  pronunciation: "zee-yah-ret et-teem",
                  meaning: "I visited",
                  example: "Geçen yıl İstanbul'u ziyaret ettim.",
                  exampleMeaning: "I visited Istanbul last year.",
                },
                {
                  type: "quiz",
                  question: 'Which tense does "Ziyaret ettim" express?',
                  options: ["Present", "Future", "Past", "Command"],
                  answer: "Past",
                },
                {
                  type: "vocabulary",
                  word: "Deneyim",
                  pronunciation: "deh-ney-eem",
                  meaning: "Experience",
                  example: "Harika bir deneyimdi.",
                  exampleMeaning: "It was a wonderful experience.",
                },
                {
                  type: "quiz",
                  question: 'What does "Deneyim" mean?',
                  options: ["Plan", "Experience", "Question", "Rule"],
                  answer: "Experience",
                },
                {
                  type: "vocabulary",
                  word: "Çok eğlendim",
                  pronunciation: "chok ey-len-deem",
                  meaning: "I had a lot of fun",
                  example: "Partide çok eğlendim.",
                  exampleMeaning: "I had a lot of fun at the party.",
                },
                {
                  type: "quiz",
                  question: 'What does "Çok eğlendim" express?',
                  options: ["Boredom", "Having fun", "Fear", "Anger"],
                  answer: "Having fun",
                },
              ],
            },
            {
              title: "Plans and Invitations",
              activities: [
                {
                  type: "vocabulary",
                  word: "Planlıyorum",
                  pronunciation: "plahn-luh-yo-room",
                  meaning: "I am planning",
                  example: "Türkiye'ye gitmeyi planlıyorum.",
                  exampleMeaning: "I am planning to go to Turkey.",
                },
                {
                  type: "quiz",
                  question: 'What is "Planlıyorum" used for?',
                  options: [
                    "Talking about plans",
                    "Talking about the past",
                    "Apologizing",
                    "Making comparisons",
                  ],
                  answer: "Talking about plans",
                },
                {
                  type: "vocabulary",
                  word: "İster misin?",
                  pronunciation: "ees-ter mee-seen",
                  meaning: "Would you like?",
                  example: "Birlikte kahve içmek ister misin?",
                  exampleMeaning: "Would you like to have coffee together?",
                },
                {
                  type: "quiz",
                  question: 'What type of sentence is "İster misin?"?',
                  options: [
                    "An invitation or offer",
                    "A command",
                    "A complaint",
                    "An introduction",
                  ],
                  answer: "An invitation or offer",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: İletişim",
          lessons: [
            {
              title: "Giving Advice",
              activities: [
                {
                  type: "vocabulary",
                  word: "Bence",
                  pronunciation: "ben-jeh",
                  meaning: "In my opinion",
                  example: "Bence biraz dinlenmelisin.",
                  exampleMeaning: "In my opinion, you should rest a little.",
                },
                {
                  type: "quiz",
                  question: 'What is "Bence" used for?',
                  options: [
                    "Expressing an opinion",
                    "Telling the time",
                    "Giving directions",
                    "Saying thank you",
                  ],
                  answer: "Expressing an opinion",
                },
                {
                  type: "vocabulary",
                  word: "Yapmalısın",
                  pronunciation: "yap-mah-luh-suhn",
                  meaning: "You should do",
                  example: "Daha çok çalışmalısın.",
                  exampleMeaning: "You should work harder.",
                },
                {
                  type: "quiz",
                  question: 'What is "Yapmalısın" used for?',
                  options: [
                    "Giving advice",
                    "Talking about the past",
                    "Asking someone's name",
                    "Saying goodbye",
                  ],
                  answer: "Giving advice",
                },
              ],
            },
            {
              title: "Connecting Ideas",
              activities: [
                {
                  type: "vocabulary",
                  word: "Çünkü",
                  pronunciation: "choon-koo",
                  meaning: "Because",
                  example: "Türkçe öğreniyorum çünkü ilgimi çekiyor.",
                  exampleMeaning: "I am learning Turkish because it interests me.",
                },
                {
                  type: "quiz",
                  question: 'What does "Çünkü" mean?',
                  options: ["But", "Because", "Therefore", "Although"],
                  answer: "Because",
                },
                {
                  type: "vocabulary",
                  word: "Bu yüzden",
                  pronunciation: "boo yooz-den",
                  meaning: "Therefore / That is why",
                  example: "Yorgunum, bu yüzden eve gidiyorum.",
                  exampleMeaning: "I am tired, so I am going home.",
                },
                {
                  type: "quiz",
                  question: 'What does "Bu yüzden" mean?',
                  options: ["Despite this", "Therefore", "For example", "Although"],
                  answer: "Therefore",
                },
              ],
            },
          ],
        },
      ],
    },

    // =====================================================
    // B2 - UPPER INTERMEDIATE
    // =====================================================
    {
      id: "B2",
      title: "Upper Intermediate",
      units: [
        {
          title: "Unit 1: Fikirler ve tartışmalar",
          lessons: [
            {
              title: "Expressing Opinions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Bana göre",
                  pronunciation: "bah-nah go-reh",
                  meaning: "In my view",
                  example: "Bana göre teknoloji faydalıdır.",
                  exampleMeaning: "In my view, technology is useful.",
                },
                {
                  type: "quiz",
                  question: 'What does "Bana göre" mean?',
                  options: [
                    "In my view",
                    "At my home",
                    "For my friend",
                    "In my time",
                  ],
                  answer: "In my view",
                },
                {
                  type: "vocabulary",
                  word: "Bununla birlikte",
                  pronunciation: "boo-noon-lah beer-leek-teh",
                  meaning: "Nevertheless / Along with this",
                  example: "Zor bir görevdi. Bununla birlikte, başardık.",
                  exampleMeaning: "It was a difficult task. Nevertheless, we succeeded.",
                },
                {
                  type: "quiz",
                  question: 'What kind of idea can "Bununla birlikte" connect?',
                  options: [
                    "A contrasting idea",
                    "Only time",
                    "Only place",
                    "A command",
                  ],
                  answer: "A contrasting idea",
                },
                {
                  type: "vocabulary",
                  word: "Ayrıca",
                  pronunciation: "ahy-ree-jah",
                  meaning: "Furthermore / Also",
                  example: "Kurs faydalı. Ayrıca ücretsiz.",
                  exampleMeaning: "The course is useful. It is also free.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ayrıca" mean?',
                  options: ["Furthermore", "Despite this", "Therefore", "Because"],
                  answer: "Furthermore",
                },
              ],
            },
            {
              title: "Debating Respectfully",
              activities: [
                {
                  type: "vocabulary",
                  word: "Tamamen katılmıyorum",
                  pronunciation: "tah-mah-men kah-tuhl-muh-yo-room",
                  meaning: "I completely disagree",
                  example: "Bu görüşe tamamen katılmıyorum.",
                  exampleMeaning: "I completely disagree with this opinion.",
                },
                {
                  type: "quiz",
                  question: "What does this sentence express?",
                  options: [
                    "Complete agreement",
                    "Disagreement",
                    "Happiness",
                    "An invitation",
                  ],
                  answer: "Disagreement",
                },
                {
                  type: "vocabulary",
                  word: "Bir yandan... diğer yandan",
                  pronunciation: "beer yahn-dahn... dee-er yahn-dahn",
                  meaning: "On one hand... on the other hand",
                  example: "Bir yandan kolay, diğer yandan pahalı.",
                  exampleMeaning: "On one hand, it is easy; on the other hand, it is expensive.",
                },
                {
                  type: "quiz",
                  question: 'What is "Bir yandan... diğer yandan" used for?',
                  options: [
                    "Comparing two sides",
                    "Asking the time",
                    "Giving commands",
                    "Apologizing",
                  ],
                  answer: "Comparing two sides",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Toplum ve kültür",
          lessons: [
            {
              title: "Society and Technology",
              activities: [
                {
                  type: "vocabulary",
                  word: "Farkındalık",
                  pronunciation: "far-kuhn-duh-luhk",
                  meaning: "Awareness",
                  example: "Toplumsal farkındalığı artırmalıyız.",
                  exampleMeaning: "We should increase social awareness.",
                },
                {
                  type: "quiz",
                  question: 'What does "Farkındalık" mean?',
                  options: ["Awareness", "Laziness", "Entertainment", "Travel"],
                  answer: "Awareness",
                },
                {
                  type: "vocabulary",
                  word: "Geliştirmek",
                  pronunciation: "geh-leesh-teer-mek",
                  meaning: "To develop / Improve",
                  example: "Yeni beceriler geliştirmeliyiz.",
                  exampleMeaning: "We should develop new skills.",
                },
                {
                  type: "quiz",
                  question: 'What does "Geliştirmek" mean?',
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
                  word: "Minnettar olurum",
                  pronunciation: "min-net-tar oh-loo-room",
                  meaning: "I would be grateful",
                  example: "Yardım edebilirseniz minnettar olurum.",
                  exampleMeaning: "I would be grateful if you could help.",
                },
                {
                  type: "quiz",
                  question: "What style does this sentence represent?",
                  options: [
                    "Informal",
                    "Polite and formal",
                    "Humorous",
                    "Commanding",
                  ],
                  answer: "Polite and formal",
                },
                {
                  type: "vocabulary",
                  word: "Saygılarımla",
                  pronunciation: "sahy-guh-lah-ruhmlah",
                  meaning: "Sincerely / Best regards",
                  example: "Saygılarımla, Ahmet Yılmaz.",
                  exampleMeaning: "Sincerely, Ahmet Yılmaz.",
                },
                {
                  type: "quiz",
                  question: 'Where is "Saygılarımla" commonly used?',
                  options: [
                    "At the end of a formal letter",
                    "When greeting a friend",
                    "When ordering food",
                    "When asking for directions",
                  ],
                  answer: "At the end of a formal letter",
                },
              ],
            },
          ],
        },
      ],
    },

    // =====================================================
    // C1 - ADVANCED
    // =====================================================
    {
      id: "C1",
      title: "Advanced",
      units: [
        {
          title: "Unit 1: İleri ifadeler",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Buna rağmen",
                  pronunciation: "boo-nah rah-men",
                  meaning: "Nevertheless / Despite this",
                  example: "Zordu; buna rağmen başardık.",
                  exampleMeaning: "It was difficult; nevertheless, we succeeded.",
                },
                {
                  type: "quiz",
                  question: 'What does "Buna rağmen" mean?',
                  options: [
                    "Therefore",
                    "Nevertheless",
                    "For example",
                    "Furthermore",
                  ],
                  answer: "Nevertheless",
                },
                {
                  type: "vocabulary",
                  word: "Girişimde bulunmak",
                  pronunciation: "gee-rees-eem-deh boo-loon-mahk",
                  meaning: "To take initiative / Launch an initiative",
                  example: "Yeni bir girişimde bulunmaya karar verdi.",
                  exampleMeaning: "They decided to launch a new initiative.",
                },
                {
                  type: "quiz",
                  question: 'What does "Girişimde bulunmak" mean?',
                  options: [
                    "To finish",
                    "To take initiative",
                    "To postpone",
                    "To forget",
                  ],
                  answer: "To take initiative",
                },
                {
                  type: "vocabulary",
                  word: "Ne olursa olsun",
                  pronunciation: "neh oh-loor-sah oh-loon",
                  meaning: "No matter what",
                  example: "Ne olursa olsun devam edeceğim.",
                  exampleMeaning: "No matter what happens, I will continue.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ne olursa olsun" mean?',
                  options: [
                    "Because of",
                    "No matter what",
                    "Similar to",
                    "After",
                  ],
                  answer: "No matter what",
                },
              ],
            },
            {
              title: "Academic Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "Varsayım",
                  pronunciation: "var-sah-yuhm",
                  meaning: "Assumption / Hypothesis",
                  example: "Bu varsayımın doğrulanması gerekiyor.",
                  exampleMeaning: "This assumption needs to be verified.",
                },
                {
                  type: "quiz",
                  question: 'What does "Varsayım" mean?',
                  options: [
                    "Conclusion",
                    "Assumption",
                    "Evidence",
                    "Problem",
                  ],
                  answer: "Assumption",
                },
                {
                  type: "vocabulary",
                  word: "Dolayısıyla",
                  pronunciation: "doh-lahy-uh-suh-lah",
                  meaning: "Therefore / Consequently",
                  example: "Çok çalıştı; dolayısıyla başarılı oldu.",
                  exampleMeaning: "They worked hard; consequently, they succeeded.",
                },
                {
                  type: "quiz",
                  question: 'What relationship does "Dolayısıyla" express?',
                  options: [
                    "Cause and effect",
                    "Contrast",
                    "Example",
                    "Time",
                  ],
                  answer: "Cause and effect",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Analiz ve ifade",
          lessons: [
            {
              title: "Analyzing Ideas",
              activities: [
                {
                  type: "vocabulary",
                  word: "Uygundur",
                  pronunciation: "oo-yoon-door",
                  meaning: "It is appropriate / Suitable",
                  example: "Tüm seçenekleri değerlendirmek uygundur.",
                  exampleMeaning: "It is appropriate to evaluate all the options.",
                },
                {
                  type: "quiz",
                  question: 'What does "Uygundur" mean?',
                  options: [
                    "It is appropriate",
                    "It is impossible",
                    "It is surprising",
                    "It is unnecessary",
                  ],
                  answer: "It is appropriate",
                },
                {
                  type: "vocabulary",
                  word: "Vurgulamak",
                  pronunciation: "voor-goo-lah-mahk",
                  meaning: "To emphasize / Highlight",
                  example: "Önemli bir noktayı vurgulamak istiyorum.",
                  exampleMeaning: "I want to emphasize an important point.",
                },
                {
                  type: "quiz",
                  question: 'What does "Vurgulamak" mean?',
                  options: [
                    "To hide",
                    "To emphasize",
                    "To ignore",
                    "To copy",
                  ],
                  answer: "To emphasize",
                },
              ],
            },
            {
              title: "Professional Discussion",
              activities: [
                {
                  type: "vocabulary",
                  word: "Göz önünde bulundurmak",
                  pronunciation: "goz oh-noon-deh booloon-door-mahk",
                  meaning: "To take into consideration",
                  example: "Bu faktörü göz önünde bulundurmalıyız.",
                  exampleMeaning: "We should take this factor into consideration.",
                },
                {
                  type: "quiz",
                  question: 'What does "Göz önünde bulundurmak" mean?',
                  options: [
                    "To consider",
                    "To reject",
                    "To forget",
                    "To finish",
                  ],
                  answer: "To consider",
                },
                {
                  type: "vocabulary",
                  word: "Sonuçlar ışığında",
                  pronunciation: "soh-nooch-lar uh-shuh-uhn-dah",
                  meaning: "In light of the results",
                  example: "Sonuçlar ışığında yeni bir karar alacağız.",
                  exampleMeaning: "In light of the results, we will make a new decision.",
                },
                {
                  type: "quiz",
                  question: 'What is "Sonuçlar ışığında" used for?',
                  options: [
                    "Taking information into consideration",
                    "Telling the time",
                    "Greeting someone",
                    "Asking for permission",
                  ],
                  answer: "Taking information into consideration",
                },
              ],
            },
          ],
        },
      ],
    },

    // =====================================================
    // C2 - PROFICIENT
    // =====================================================
    {
      id: "C2",
      title: "Proficient",
      units: [
        {
          title: "Unit 1: Deyimler ve incelikler",
          lessons: [
            {
              title: "Idiomatic Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Kolları sıvamak",
                  pronunciation: "kol-lah-ruh suh-vah-mahk",
                  meaning: "To roll up one's sleeves and get to work",
                  example: "Artık kolları sıvayıp işe başlayalım.",
                  exampleMeaning: "Now let's roll up our sleeves and get to work.",
                },
                {
                  type: "quiz",
                  question: 'What is the figurative meaning of "Kolları sıvamak"?',
                  options: [
                    "To change clothes",
                    "To get ready to start working",
                    "To quit working",
                    "To relax",
                  ],
                  answer: "To get ready to start working",
                },
                {
                  type: "vocabulary",
                  word: "Dört gözle beklemek",
                  pronunciation: "dort goz-leh bek-leh-mek",
                  meaning: "To eagerly look forward to something",
                  example: "Tatilini dört gözle bekliyor.",
                  exampleMeaning: "They are eagerly looking forward to their holiday.",
                },
                {
                  type: "quiz",
                  question: 'What does "Dört gözle beklemek" mean?',
                  options: [
                    "To arrive late",
                    "To eagerly look forward to something",
                    "To forget the time",
                    "To relax",
                  ],
                  answer: "To eagerly look forward to something",
                },
              ],
            },
            {
              title: "Subtle Meaning",
              activities: [
                {
                  type: "vocabulary",
                  word: "Her ne kadar",
                  pronunciation: "her neh kah-dar",
                  meaning: "Although / Even though",
                  example: "Her ne kadar zor olsa da deneyeceğim.",
                  exampleMeaning: "Although it is difficult, I will still try.",
                },
                {
                  type: "quiz",
                  question: 'What can "Her ne kadar" express?',
                  options: [
                    "Contrast or concession",
                    "Time",
                    "Place",
                    "A command",
                  ],
                  answer: "Contrast or concession",
                },
                {
                  type: "vocabulary",
                  word: "Zar zor",
                  pronunciation: "zar zor",
                  meaning: "Barely / With great difficulty",
                  example: "Ödevi zar zor bitirdim.",
                  exampleMeaning: "I barely managed to finish the homework.",
                },
                {
                  type: "quiz",
                  question: 'What does "Zar zor" mean?',
                  options: [
                    "Easily",
                    "With great difficulty",
                    "Immediately",
                    "Repeatedly",
                  ],
                  answer: "With great difficulty",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Uzman iletişim",
          lessons: [
            {
              title: "Precise and Formal Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "Şayet",
                  pronunciation: "shah-yet",
                  meaning: "If / In case",
                  example: "Şayet yardıma ihtiyacınız olursa, lütfen iletişime geçin.",
                  exampleMeaning: "If you need help, please get in touch.",
                },
                {
                  type: "quiz",
                  question: 'What does "Şayet" mean?',
                  options: ["If", "Because", "Although", "Therefore"],
                  answer: "If",
                },
                {
                  type: "vocabulary",
                  word: "Saklı kalmak kaydıyla",
                  pronunciation: "sahk-luh kahl-mahk kahy-duh-y-lah",
                  meaning: "On the condition that it remains confidential",
                  example: "Bilgiler saklı kalmak kaydıyla paylaşılabilir.",
                  exampleMeaning: "The information can be shared on the condition that it remains confidential.",
                },
                {
                  type: "quiz",
                  question: 'What does "Saklı kalmak kaydıyla" express?',
                  options: [
                    "A condition of confidentiality",
                    "Taking back a statement",
                    "Changing the subject",
                    "Uncertainty",
                  ],
                  answer: "A condition of confidentiality",
                },
              ],
            },
            {
              title: "Mastering Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "Netice itibarıyla",
                  pronunciation: "neh-tee-jeh ee-tee-bah-ruh-y-lah",
                  meaning: "Ultimately / As a result",
                  example: "Netice itibarıyla karar bize ait.",
                  exampleMeaning: "Ultimately, the decision is ours.",
                },
                {
                  type: "quiz",
                  question: 'What does "Netice itibarıyla" mean?',
                  options: [
                    "At the beginning",
                    "Ultimately / As a result",
                    "For example",
                    "On the contrary",
                  ],
                  answer: "Ultimately / As a result",
                },
                {
                  type: "vocabulary",
                  word: "İlke olarak",
                  pronunciation: "eel-keh oh-lah-rahk",
                  meaning: "In principle",
                  example: "İlke olarak bu öneriyi destekliyorum.",
                  exampleMeaning: "In principle, I support this proposal.",
                },
                {
                  type: "quiz",
                  question: 'What does "İlke olarak" mean?',
                  options: [
                    "In principle",
                    "Personally",
                    "By chance",
                    "Immediately",
                  ],
                  answer: "In principle",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default turkishCourse;
