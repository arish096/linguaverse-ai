
const germanCourse = {
  language: "German",
  code: "de",

  levels: [
    // =====================================================
    // A1 - BEGINNER
    // =====================================================
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: Erste Wörter",
          lessons: [
            {
              title: "Greetings",
              activities: [
                {
                  type: "vocabulary",
                  word: "Hallo",
                  pronunciation: "HAH-loh",
                  meaning: "Hello",
                  example: "Hallo, wie geht es dir?",
                  exampleMeaning: "Hello, how are you?",
                },
                {
                  type: "quiz",
                  question: 'What does "Hallo" mean?',
                  options: ["Goodbye", "Hello", "Thank you", "Good night"],
                  answer: "Hello",
                },
                {
                  type: "vocabulary",
                  word: "Guten Morgen",
                  pronunciation: "GOO-ten MOR-gen",
                  meaning: "Good morning",
                  example: "Guten Morgen, Anna!",
                  exampleMeaning: "Good morning, Anna!",
                },
                {
                  type: "quiz",
                  question: 'When do we say "Guten Morgen"?',
                  options: ["In the morning", "In the afternoon", "In the evening", "At night"],
                  answer: "In the morning",
                },
                {
                  type: "vocabulary",
                  word: "Danke",
                  pronunciation: "DAHN-kuh",
                  meaning: "Thank you",
                  example: "Danke für deine Hilfe.",
                  exampleMeaning: "Thank you for your help.",
                },
                {
                  type: "quiz",
                  question: 'What does "Danke" mean?',
                  options: ["Please", "Thank you", "Hello", "Excuse me"],
                  answer: "Thank you",
                },
                {
                  type: "vocabulary",
                  word: "Auf Wiedersehen",
                  pronunciation: "owf VEE-der-zay-en",
                  meaning: "Goodbye",
                  example: "Auf Wiedersehen, bis morgen!",
                  exampleMeaning: "Goodbye, see you tomorrow!",
                },
                {
                  type: "quiz",
                  question: 'When do we use "Auf Wiedersehen"?',
                  options: [
                    "When meeting someone",
                    "When saying goodbye",
                    "When thanking someone",
                    "When ordering food",
                  ],
                  answer: "When saying goodbye",
                },
              ],
            },
            {
              title: "Introducing Yourself",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ich heiße",
                  pronunciation: "ikh HIGH-suh",
                  meaning: "My name is",
                  example: "Ich heiße Arish.",
                  exampleMeaning: "My name is Arish.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ich heiße Arish" mean?',
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
                  word: "Ich bin Schüler",
                  pronunciation: "ikh bin SHOO-ler",
                  meaning: "I am a student",
                  example: "Ich bin Schüler.",
                  exampleMeaning: "I am a student.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ich bin Schüler" mean?',
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
                  word: "Freut mich",
                  pronunciation: "froyt mikh",
                  meaning: "Nice to meet you",
                  example: "Freut mich, dich kennenzulernen.",
                  exampleMeaning: "Nice to meet you.",
                },
                {
                  type: "quiz",
                  question: 'When do we use "Freut mich"?',
                  options: [
                    "When meeting someone for the first time",
                    "When saying goodbye",
                    "When going to sleep",
                    "When eating food",
                  ],
                  answer: "When meeting someone for the first time",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Zahlen und Familie",
          lessons: [
            {
              title: "Numbers 1–10",
              activities: [
                {
                  type: "vocabulary",
                  word: "Eins, zwei, drei",
                  pronunciation: "eyns, tsvy, dry",
                  meaning: "One, two, three",
                  example: "Ich habe drei Bücher.",
                  exampleMeaning: "I have three books.",
                },
                {
                  type: "quiz",
                  question: 'Which number does "Zwei" represent?',
                  options: ["One", "Two", "Three", "Four"],
                  answer: "Two",
                },
                {
                  type: "vocabulary",
                  word: "Zehn",
                  pronunciation: "tsayn",
                  meaning: "Ten",
                  example: "Ich habe zehn Stifte.",
                  exampleMeaning: "I have ten pens.",
                },
                {
                  type: "quiz",
                  question: 'What does "Zehn" mean?',
                  options: ["Eight", "Nine", "Ten", "Eleven"],
                  answer: "Ten",
                },
              ],
            },
            {
              title: "Family Members",
              activities: [
                {
                  type: "vocabulary",
                  word: "Die Mutter",
                  pronunciation: "dee MOO-ter",
                  meaning: "Mother",
                  example: "Meine Mutter ist freundlich.",
                  exampleMeaning: "My mother is kind.",
                },
                {
                  type: "quiz",
                  question: 'What does "Die Mutter" mean?',
                  options: ["Father", "Mother", "Sister", "Brother"],
                  answer: "Mother",
                },
                {
                  type: "vocabulary",
                  word: "Der Vater",
                  pronunciation: "dehr FAH-ter",
                  meaning: "Father",
                  example: "Mein Vater arbeitet.",
                  exampleMeaning: "My father works.",
                },
                {
                  type: "quiz",
                  question: 'What does "Der Vater" mean?',
                  options: ["Mother", "Father", "Grandfather", "Uncle"],
                  answer: "Father",
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
          title: "Unit 1: Alltag",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                {
                  type: "vocabulary",
                  word: "Aufwachen",
                  pronunciation: "OWF-vakh-en",
                  meaning: "To wake up",
                  example: "Ich wache um sieben Uhr auf.",
                  exampleMeaning: "I wake up at seven o'clock.",
                },
                {
                  type: "quiz",
                  question: 'What does "Aufwachen" mean?',
                  options: ["To sleep", "To wake up", "To eat", "To walk"],
                  answer: "To wake up",
                },
                {
                  type: "vocabulary",
                  word: "Das Frühstück",
                  pronunciation: "DAS FROO-shtook",
                  meaning: "Breakfast",
                  example: "Ich esse mein Frühstück.",
                  exampleMeaning: "I eat my breakfast.",
                },
                {
                  type: "quiz",
                  question: 'Which meal does "Das Frühstück" refer to?',
                  options: ["Breakfast", "Lunch", "Dinner", "Dessert"],
                  answer: "Breakfast",
                },
                {
                  type: "vocabulary",
                  word: "Ich gehe zur Schule",
                  pronunciation: "ikh GAY-uh tsoor SHOO-luh",
                  meaning: "I go to school",
                  example: "Ich gehe um acht Uhr zur Schule.",
                  exampleMeaning: "I go to school at eight o'clock.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ich gehe zur Schule" mean?',
                  options: [
                    "I go home",
                    "I go to school",
                    "I eat food",
                    "I sleep",
                  ],
                  answer: "I go to school",
                },
              ],
            },
            {
              title: "Asking Questions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Wo wohnst du?",
                  pronunciation: "voh vohnst doo",
                  meaning: "Where do you live?",
                  example: "Wo wohnst du? Ich wohne in Berlin.",
                  exampleMeaning: "Where do you live? I live in Berlin.",
                },
                {
                  type: "quiz",
                  question: 'What does "Wo" mean?',
                  options: ["When", "Where", "Why", "How"],
                  answer: "Where",
                },
                {
                  type: "vocabulary",
                  word: "Wie alt bist du?",
                  pronunciation: "vee alt bist doo",
                  meaning: "How old are you?",
                  example: "Wie alt bist du? Ich bin sechzehn.",
                  exampleMeaning: "How old are you? I am sixteen.",
                },
                {
                  type: "quiz",
                  question: 'What does "Wie alt bist du?" ask about?',
                  options: ["Name", "Age", "Address", "Favorite color"],
                  answer: "Age",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: In der Stadt",
          lessons: [
            {
              title: "Places in the City",
              activities: [
                {
                  type: "vocabulary",
                  word: "Der Bahnhof",
                  pronunciation: "dehr BAHN-hohf",
                  meaning: "Train station",
                  example: "Der Bahnhof ist in der Nähe.",
                  exampleMeaning: "The train station is nearby.",
                },
                {
                  type: "quiz",
                  question: 'What does "Der Bahnhof" mean?',
                  options: ["Hospital", "Train station", "School", "Market"],
                  answer: "Train station",
                },
                {
                  type: "vocabulary",
                  word: "Links",
                  pronunciation: "links",
                  meaning: "Left",
                  example: "Gehen Sie nach links.",
                  exampleMeaning: "Go to the left.",
                },
                {
                  type: "quiz",
                  question: 'What does "Links" mean?',
                  options: ["Right", "Straight", "Left", "Back"],
                  answer: "Left",
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
          title: "Unit 1: Erfahrungen",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ich habe besucht",
                  pronunciation: "ikh HAH-buh buh-ZOOKHT",
                  meaning: "I have visited",
                  example: "Ich habe Berlin letztes Jahr besucht.",
                  exampleMeaning: "I visited Berlin last year.",
                },
                {
                  type: "quiz",
                  question: 'Which tense is used in "Ich habe Berlin besucht"?',
                  options: ["Present", "Future", "Past", "Command"],
                  answer: "Past",
                },
                {
                  type: "vocabulary",
                  word: "Die Erfahrung",
                  pronunciation: "dee er-FAH-roong",
                  meaning: "Experience",
                  example: "Das war eine tolle Erfahrung.",
                  exampleMeaning: "That was a great experience.",
                },
                {
                  type: "quiz",
                  question: 'What does "Die Erfahrung" mean?',
                  options: ["A plan", "An experience", "A question", "An answer"],
                  answer: "An experience",
                },
              ],
            },
            {
              title: "Future Plans",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ich werde reisen",
                  pronunciation: "ikh VEHR-duh RY-zen",
                  meaning: "I will travel",
                  example: "Ich werde nach Deutschland reisen.",
                  exampleMeaning: "I will travel to Germany.",
                },
                {
                  type: "quiz",
                  question: 'Which tense does "Ich werde reisen" express?',
                  options: ["Past", "Present habit", "Future", "Command"],
                  answer: "Future",
                },
                {
                  type: "vocabulary",
                  word: "Morgen",
                  pronunciation: "MOR-gen",
                  meaning: "Tomorrow",
                  example: "Wir fahren morgen ab.",
                  exampleMeaning: "We are leaving tomorrow.",
                },
                {
                  type: "quiz",
                  question: 'What does "Morgen" mean in this sentence?',
                  options: ["Today", "Tomorrow", "Yesterday", "Now"],
                  answer: "Tomorrow",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Kommunikation",
          lessons: [
            {
              title: "Giving Advice",
              activities: [
                {
                  type: "vocabulary",
                  word: "Du solltest",
                  pronunciation: "doo ZOOL-test",
                  meaning: "You should",
                  example: "Du solltest mehr üben.",
                  exampleMeaning: "You should practice more.",
                },
                {
                  type: "quiz",
                  question: 'What is "Du solltest" used for?',
                  options: [
                    "Giving advice",
                    "Saying goodbye",
                    "Telling the time",
                    "Asking someone's name",
                  ],
                  answer: "Giving advice",
                },
                {
                  type: "vocabulary",
                  word: "Meiner Meinung nach",
                  pronunciation: "MY-ner MY-noong nakh",
                  meaning: "In my opinion",
                  example: "Meiner Meinung nach ist das eine gute Idee.",
                  exampleMeaning: "In my opinion, that is a good idea.",
                },
                {
                  type: "quiz",
                  question: 'What does "Meiner Meinung nach" mean?',
                  options: [
                    "In my opinion",
                    "At my home",
                    "With me",
                    "After me",
                  ],
                  answer: "In my opinion",
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
          title: "Unit 1: Meinungen",
          lessons: [
            {
              title: "Expressing Opinions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Meiner Ansicht nach",
                  pronunciation: "MY-ner AN-zikht nakh",
                  meaning: "In my view",
                  example: "Meiner Ansicht nach ist Sprachenlernen wichtig.",
                  exampleMeaning: "In my view, learning languages is important.",
                },
                {
                  type: "quiz",
                  question: 'What is "Meiner Ansicht nach" used for?',
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
                  word: "Allerdings",
                  pronunciation: "AHL-er-dings",
                  meaning: "However / Nevertheless",
                  example: "Es ist schwierig, allerdings werde ich es versuchen.",
                  exampleMeaning: "It is difficult; however, I will try.",
                },
                {
                  type: "quiz",
                  question: 'What does "Allerdings" mean?',
                  options: ["Therefore", "However", "Because", "For example"],
                  answer: "However",
                },
              ],
            },
            {
              title: "Complex Sentences",
              activities: [
                {
                  type: "vocabulary",
                  word: "Obwohl",
                  pronunciation: "ob-VOHL",
                  meaning: "Although",
                  example: "Obwohl es spät ist, lernen wir weiter.",
                  exampleMeaning: "Although it is late, we continue studying.",
                },
                {
                  type: "quiz",
                  question: 'What does "Obwohl" mean?',
                  options: ["Although", "Therefore", "When", "So that"],
                  answer: "Although",
                },
                {
                  type: "vocabulary",
                  word: "Damit",
                  pronunciation: "DAH-mit",
                  meaning: "So that",
                  example: "Ich lerne, damit ich die Prüfung bestehe.",
                  exampleMeaning: "I study so that I can pass the exam.",
                },
                {
                  type: "quiz",
                  question: 'What is "Damit" used for?',
                  options: [
                    "Expressing purpose",
                    "Expressing time",
                    "Expressing place",
                    "Saying goodbye",
                  ],
                  answer: "Expressing purpose",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Beruf und Alltag",
          lessons: [
            {
              title: "Professional Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ich schreibe Ihnen bezüglich",
                  pronunciation: "ikh SHRY-buh EE-nen buh-TSYOO-klikh",
                  meaning: "I am writing to you regarding",
                  example: "Ich schreibe Ihnen bezüglich Ihrer Anzeige.",
                  exampleMeaning: "I am writing to you regarding your advertisement.",
                },
                {
                  type: "quiz",
                  question: "In which situation is this phrase useful?",
                  options: [
                    "In formal communication",
                    "When saying goodbye to a friend",
                    "When ordering food",
                    "When playing a game",
                  ],
                  answer: "In formal communication",
                },
                {
                  type: "vocabulary",
                  word: "Vielen Dank für Ihre Antwort",
                  pronunciation: "FEE-len dahnk fyoor EE-ruh ANT-vort",
                  meaning: "Thank you very much for your reply",
                  example: "Vielen Dank für Ihre Antwort.",
                  exampleMeaning: "Thank you very much for your reply.",
                },
                {
                  type: "quiz",
                  question: "What is this phrase used for?",
                  options: [
                    "Expressing thanks",
                    "Apologizing",
                    "Asking the time",
                    "Saying goodbye",
                  ],
                  answer: "Expressing thanks",
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
          title: "Unit 1: Fortgeschrittene Kommunikation",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Nichtsdestotrotz",
                  pronunciation: "nikhts-day-stoh-trots",
                  meaning: "Nevertheless",
                  example: "Die Aufgabe war schwierig; nichtsdestotrotz haben wir sie geschafft.",
                  exampleMeaning: "The task was difficult; nevertheless, we completed it.",
                },
                {
                  type: "quiz",
                  question: 'What is the closest meaning of "Nichtsdestotrotz"?',
                  options: ["Therefore", "Nevertheless", "For example", "Furthermore"],
                  answer: "Nevertheless",
                },
                {
                  type: "vocabulary",
                  word: "Darüber hinaus",
                  pronunciation: "dah-ROO-ber hi-NAWS",
                  meaning: "Furthermore / In addition",
                  example: "Der Kurs ist hilfreich. Darüber hinaus ist er kostenlos.",
                  exampleMeaning: "The course is helpful. Furthermore, it is free.",
                },
                {
                  type: "quiz",
                  question: 'What does "Darüber hinaus" mean?',
                  options: [
                    "Furthermore",
                    "On the contrary",
                    "Therefore",
                    "Although",
                  ],
                  answer: "Furthermore",
                },
              ],
            },
            {
              title: "Formal and Academic Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "Es ist erforderlich",
                  pronunciation: "es ist ehr-FOR-der-likh",
                  meaning: "It is necessary",
                  example: "Es ist erforderlich, die Angaben zu überprüfen.",
                  exampleMeaning: "It is necessary to check the information.",
                },
                {
                  type: "quiz",
                  question: 'In which type of language is "Es ist erforderlich" used?',
                  options: [
                    "Formal language",
                    "Slang only",
                    "Informal greetings",
                    "Children's language",
                  ],
                  answer: "Formal language",
                },
                {
                  type: "vocabulary",
                  word: "Folglich",
                  pronunciation: "FOL-glikh",
                  meaning: "Consequently",
                  example: "Er hat viel gearbeitet. Folglich war er erfolgreich.",
                  exampleMeaning: "He worked hard. Consequently, he was successful.",
                },
                {
                  type: "quiz",
                  question: 'What does "Folglich" mean?',
                  options: [
                    "Consequently",
                    "Nevertheless",
                    "For example",
                    "On the other hand",
                  ],
                  answer: "Consequently",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Redewendungen",
          lessons: [
            {
              title: "German Idioms",
              activities: [
                {
                  type: "vocabulary",
                  word: "Tomaten auf den Augen haben",
                  pronunciation: "toh-MAH-ten owf den OW-gen HAH-ben",
                  meaning: "To fail to notice something obvious",
                  example: "Du hast wohl Tomaten auf den Augen!",
                  exampleMeaning: "You seem to be missing something obvious!",
                },
                {
                  type: "quiz",
                  question: "What is the figurative meaning of this idiom?",
                  options: [
                    "To fail to notice something obvious",
                    "To run very fast",
                    "To be happy",
                    "To feel hungry",
                  ],
                  answer: "To fail to notice something obvious",
                },
                {
                  type: "vocabulary",
                  word: "Daumen drücken",
                  pronunciation: "DOW-men DRY-ken",
                  meaning: "To keep one's fingers crossed for someone",
                  example: "Ich drücke dir die Daumen für die Prüfung.",
                  exampleMeaning: "I am keeping my fingers crossed for your exam.",
                },
                {
                  type: "quiz",
                  question: 'What does "Daumen drücken" mean?',
                  options: [
                    "To wish someone success",
                    "To become angry",
                    "To relax",
                    "To arrive late",
                  ],
                  answer: "To wish someone success",
                },
              ],
            },
          ],
        },
      ],
    },

    // =====================================================
    // C2 - MASTERY
    // =====================================================
    {
      id: "C2",
      title: "Mastery",
      units: [
        {
          title: "Unit 1: Sprachliche Meisterschaft",
          lessons: [
            {
              title: "Subtle Differences in Meaning",
              activities: [
                {
                  type: "vocabulary",
                  word: "Wenngleich",
                  pronunciation: "VEN-glikh",
                  meaning: "Although / Even though",
                  example: "Wenngleich er erfahren ist, bleibt er bescheiden.",
                  exampleMeaning: "Although he is experienced, he remains modest.",
                },
                {
                  type: "quiz",
                  question: 'What is the closest meaning of "Wenngleich"?',
                  options: ["Even though", "Therefore", "So that", "While"],
                  answer: "Even though",
                },
                {
                  type: "vocabulary",
                  word: "Nicht zuletzt",
                  pronunciation: "nikht tsoo-LETST",
                  meaning: "Not least / Especially",
                  example: "Nicht zuletzt die Zusammenarbeit führte zum Erfolg.",
                  exampleMeaning: "Collaboration, not least, contributed to the success.",
                },
                {
                  type: "quiz",
                  question: 'What is "Nicht zuletzt" used for?',
                  options: [
                    "Emphasizing an important reason",
                    "Saying goodbye",
                    "Asking the time",
                    "Apologizing",
                  ],
                  answer: "Emphasizing an important reason",
                },
              ],
            },
            {
              title: "Advanced Writing",
              activities: [
                {
                  type: "vocabulary",
                  word: "Es lässt sich nicht leugnen, dass",
                  pronunciation: "es LESST zikh nikht LOY-gen dass",
                  meaning: "It cannot be denied that",
                  example: "Es lässt sich nicht leugnen, dass diese Lösung effektiv ist.",
                  exampleMeaning: "It cannot be denied that this solution is effective.",
                },
                {
                  type: "quiz",
                  question: "In which type of writing is this phrase useful?",
                  options: [
                    "Advanced formal writing",
                    "Greetings only",
                    "Basic counting",
                    "Farewells",
                  ],
                  answer: "Advanced formal writing",
                },
                {
                  type: "vocabulary",
                  word: "In Anbetracht dessen",
                  pronunciation: "in AN-buh-trakht DES-en",
                  meaning: "In view of that / Considering this",
                  example: "In Anbetracht dessen sollten wir vorsichtig handeln.",
                  exampleMeaning: "Considering this, we should act carefully.",
                },
                {
                  type: "quiz",
                  question: 'What does "In Anbetracht dessen" mean?',
                  options: [
                    "Considering this",
                    "Nevertheless",
                    "The next day",
                    "Generally speaking",
                  ],
                  answer: "Considering this",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Ausdruck und Gespräch",
          lessons: [
            {
              title: "Advanced Conversation",
              activities: [
                {
                  type: "vocabulary",
                  word: "Das versteht sich von selbst",
                  pronunciation: "das fehr-SHTAYT zikh fon ZELBST",
                  meaning: "That goes without saying",
                  example: "Das versteht sich von selbst, dass Übung wichtig ist.",
                  exampleMeaning: "It goes without saying that practice is important.",
                },
                {
                  type: "quiz",
                  question: 'What is the meaning of "Das versteht sich von selbst"?',
                  options: [
                    "That is obvious",
                    "That is impossible",
                    "That is wrong",
                    "That is new",
                  ],
                  answer: "That is obvious",
                },
                {
                  type: "vocabulary",
                  word: "Sozusagen",
                  pronunciation: "ZOH-tsoo-zah-gen",
                  meaning: "So to speak",
                  example: "Er ist sozusagen das Herz des Projekts.",
                  exampleMeaning: "He is, so to speak, the heart of the project.",
                },
                {
                  type: "quiz",
                  question: 'What is "Sozusagen" used for?',
                  options: [
                    "To express something approximately or figuratively",
                    "To ask a question",
                    "To say goodbye",
                    "To tell the time",
                  ],
                  answer: "To express something approximately or figuratively",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default germanCourse;
