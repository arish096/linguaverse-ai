
const frenchCourse = {
  language: "French",
  code: "fr",

  levels: [
    // =====================================================
    // A1 - BEGINNER
    // =====================================================
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: Premiers mots",
          lessons: [
            {
              title: "Greetings",
              activities: [
                {
                  type: "vocabulary",
                  word: "Bonjour",
                  pronunciation: "bohn-ZHOOR",
                  meaning: "Hello / Good day",
                  example: "Bonjour, comment allez-vous ?",
                  exampleMeaning: "Hello, how are you?"
                },
                {
                  type: "quiz",
                  question: 'What does "Bonjour" mean?',
                  options: ["Goodbye", "Hello", "Thank you", "Good night"],
                  answer: "Hello"
                },
                {
                  type: "vocabulary",
                  word: "Salut",
                  pronunciation: "sah-LOO",
                  meaning: "Hi / Hello (informal)",
                  example: "Salut, Marie !",
                  exampleMeaning: "Hi, Marie!"
                },
                {
                  type: "quiz",
                  question: 'What kind of greeting is "Salut" usually?',
                  options: ["Formal", "Informal", "Farewell", "Apology"],
                  answer: "Informal"
                },
                {
                  type: "vocabulary",
                  word: "Merci",
                  pronunciation: "mehr-SEE",
                  meaning: "Thank you",
                  example: "Merci beaucoup !",
                  exampleMeaning: "Thank you very much!"
                },
                {
                  type: "quiz",
                  question: 'What does "Merci" mean?',
                  options: ["Please", "Thank you", "Hello", "Excuse me"],
                  answer: "Thank you"
                },
                {
                  type: "vocabulary",
                  word: "Au revoir",
                  pronunciation: "oh ruh-VWAHR",
                  meaning: "Goodbye",
                  example: "Au revoir, à demain !",
                  exampleMeaning: "Goodbye, see you tomorrow!"
                },
                {
                  type: "quiz",
                  question: 'When do we say "Au revoir"?',
                  options: [
                    "When meeting someone",
                    "When saying goodbye",
                    "When expressing thanks",
                    "When ordering food"
                  ],
                  answer: "When saying goodbye"
                }
              ]
            },
            {
              title: "Introducing Yourself",
              activities: [
                {
                  type: "vocabulary",
                  word: "Je m'appelle",
                  pronunciation: "zhuh mah-PELL",
                  meaning: "My name is",
                  example: "Je m'appelle Arish.",
                  exampleMeaning: "My name is Arish."
                },
                {
                  type: "quiz",
                  question: 'What does "Je m’appelle Arish" mean?',
                  options: [
                    "I am from Arish",
                    "My name is Arish",
                    "I know Arish",
                    "Arish is my friend"
                  ],
                  answer: "My name is Arish"
                },
                {
                  type: "vocabulary",
                  word: "Je suis étudiant",
                  pronunciation: "zhuh SWEE ay-too-dee-AHN",
                  meaning: "I am a student",
                  example: "Je suis étudiant.",
                  exampleMeaning: "I am a student."
                },
                {
                  type: "quiz",
                  question: 'What does "Je suis étudiant" mean?',
                  options: [
                    "I am a teacher",
                    "I am a student",
                    "He is a student",
                    "I am at home"
                  ],
                  answer: "I am a student"
                },
                {
                  type: "vocabulary",
                  word: "Enchanté",
                  pronunciation: "ahn-shahn-TAY",
                  meaning: "Nice to meet you",
                  example: "Enchanté de vous rencontrer.",
                  exampleMeaning: "Nice to meet you."
                },
                {
                  type: "quiz",
                  question: 'When is "Enchanté" used?',
                  options: [
                    "When meeting someone for the first time",
                    "When saying goodbye",
                    "When sleeping",
                    "When eating"
                  ],
                  answer: "When meeting someone for the first time"
                }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Les nombres et la famille",
          lessons: [
            {
              title: "Numbers 1–10",
              activities: [
                {
                  type: "vocabulary",
                  word: "Un, deux, trois",
                  pronunciation: "uhn, duh, twah",
                  meaning: "One, two, three",
                  example: "J'ai trois livres.",
                  exampleMeaning: "I have three books."
                },
                {
                  type: "quiz",
                  question: 'Which number is "Deux"?',
                  options: ["One", "Two", "Three", "Four"],
                  answer: "Two"
                },
                {
                  type: "vocabulary",
                  word: "Dix",
                  pronunciation: "dees",
                  meaning: "Ten",
                  example: "J'ai dix ans.",
                  exampleMeaning: "I am ten years old."
                },
                {
                  type: "quiz",
                  question: 'What does "Dix" mean?',
                  options: ["Eight", "Nine", "Ten", "Eleven"],
                  answer: "Ten"
                }
              ]
            },
            {
              title: "Family Members",
              activities: [
                {
                  type: "vocabulary",
                  word: "La mère",
                  pronunciation: "lah mehr",
                  meaning: "Mother",
                  example: "Ma mère est gentille.",
                  exampleMeaning: "My mother is kind."
                },
                {
                  type: "quiz",
                  question: 'What does "La mère" mean?',
                  options: ["Father", "Mother", "Sister", "Brother"],
                  answer: "Mother"
                },
                {
                  type: "vocabulary",
                  word: "Le père",
                  pronunciation: "luh pehr",
                  meaning: "Father",
                  example: "Mon père travaille.",
                  exampleMeaning: "My father works."
                },
                {
                  type: "quiz",
                  question: 'What does "Le père" mean?',
                  options: ["Mother", "Father", "Grandfather", "Uncle"],
                  answer: "Father"
                }
              ]
            }
          ]
        }
      ]
    },

    // =====================================================
    // A2 - ELEMENTARY
    // =====================================================
    {
      id: "A2",
      title: "Elementary",
      units: [
        {
          title: "Unit 1: La vie quotidienne",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                {
                  type: "vocabulary",
                  word: "Se réveiller",
                  pronunciation: "suh ray-vay-YAY",
                  meaning: "To wake up",
                  example: "Je me réveille à sept heures.",
                  exampleMeaning: "I wake up at seven o'clock."
                },
                {
                  type: "quiz",
                  question: 'What does "Se réveiller" mean?',
                  options: ["To sleep", "To wake up", "To eat", "To walk"],
                  answer: "To wake up"
                },
                {
                  type: "vocabulary",
                  word: "Le petit-déjeuner",
                  pronunciation: "luh puh-TEE day-zhuh-NAY",
                  meaning: "Breakfast",
                  example: "Je prends le petit-déjeuner.",
                  exampleMeaning: "I have breakfast."
                },
                {
                  type: "quiz",
                  question: 'Which meal is "Le petit-déjeuner"?',
                  options: [
                    "Breakfast",
                    "Lunch",
                    "Dinner",
                    "Dessert"
                  ],
                  answer: "Breakfast"
                },
                {
                  type: "vocabulary",
                  word: "Je vais à l'école",
                  pronunciation: "zhuh vay ah lay-KOHL",
                  meaning: "I go to school",
                  example: "Je vais à l'école à huit heures.",
                  exampleMeaning: "I go to school at eight o'clock."
                },
                {
                  type: "quiz",
                  question: 'What does "Je vais à l’école" mean?',
                  options: [
                    "I go home",
                    "I go to school",
                    "I eat food",
                    "I sleep"
                  ],
                  answer: "I go to school"
                }
              ]
            },
            {
              title: "Asking Questions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Où habites-tu ?",
                  pronunciation: "oo ah-BEET too",
                  meaning: "Where do you live?",
                  example: "Où habites-tu ? J'habite à Paris.",
                  exampleMeaning: "Where do you live? I live in Paris."
                },
                {
                  type: "quiz",
                  question: 'What does "Où" mean?',
                  options: ["When", "Where", "Why", "How"],
                  answer: "Where"
                },
                {
                  type: "vocabulary",
                  word: "Quel âge as-tu ?",
                  pronunciation: "kel ahzh ah too",
                  meaning: "How old are you?",
                  example: "Quel âge as-tu ? J'ai seize ans.",
                  exampleMeaning: "How old are you? I am sixteen years old."
                },
                {
                  type: "quiz",
                  question: 'What does "Quel âge as-tu ?" ask about?',
                  options: [
                    "Name",
                    "Age",
                    "Address",
                    "Favorite color"
                  ],
                  answer: "Age"
                }
              ]
            }
          ]
        },
        {
          title: "Unit 2: En ville",
          lessons: [
            {
              title: "Places in the City",
              activities: [
                {
                  type: "vocabulary",
                  word: "La gare",
                  pronunciation: "lah gahr",
                  meaning: "Railway station",
                  example: "La gare est près du centre.",
                  exampleMeaning: "The railway station is near the city center."
                },
                {
                  type: "quiz",
                  question: 'What does "La gare" mean?',
                  options: [
                    "Hospital",
                    "Railway station",
                    "School",
                    "Market"
                  ],
                  answer: "Railway station"
                },
                {
                  type: "vocabulary",
                  word: "À gauche",
                  pronunciation: "ah gosh",
                  meaning: "To the left",
                  example: "Tournez à gauche.",
                  exampleMeaning: "Turn left."
                },
                {
                  type: "quiz",
                  question: 'What does "À gauche" mean?',
                  options: [
                    "To the right",
                    "Straight ahead",
                    "To the left",
                    "Behind"
                  ],
                  answer: "To the left"
                }
              ]
            }
          ]
        }
      ]
    },

    // =====================================================
    // B1 - INTERMEDIATE
    // =====================================================
    {
      id: "B1",
      title: "Intermediate",
      units: [
        {
          title: "Unit 1: Les expériences",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                {
                  type: "vocabulary",
                  word: "J'ai visité",
                  pronunciation: "zhay vee-zee-TAY",
                  meaning: "I visited",
                  example: "J'ai visité Paris l'année dernière.",
                  exampleMeaning: "I visited Paris last year."
                },
                {
                  type: "quiz",
                  question: 'Which tense is used in "J’ai visité Paris"?',
                  options: [
                    "Present",
                    "Future",
                    "Past",
                    "Imperative"
                  ],
                  answer: "Past"
                },
                {
                  type: "vocabulary",
                  word: "Une expérience",
                  pronunciation: "ewn ex-pay-ree-AHNS",
                  meaning: "An experience",
                  example: "C'était une expérience incroyable.",
                  exampleMeaning: "It was an incredible experience."
                },
                {
                  type: "quiz",
                  question: 'What does "Une expérience" mean?',
                  options: [
                    "A plan",
                    "An experience",
                    "A question",
                    "An answer"
                  ],
                  answer: "An experience"
                }
              ]
            },
            {
              title: "Future Plans",
              activities: [
                {
                  type: "vocabulary",
                  word: "Je vais voyager",
                  pronunciation: "zhuh vay vwah-yah-ZHAY",
                  meaning: "I am going to travel",
                  example: "Je vais voyager en France.",
                  exampleMeaning: "I am going to travel to France."
                },
                {
                  type: "quiz",
                  question: 'Which time does "Je vais voyager" express?',
                  options: [
                    "Past",
                    "Present habit",
                    "Near future",
                    "Command"
                  ],
                  answer: "Near future"
                },
                {
                  type: "vocabulary",
                  word: "Demain",
                  pronunciation: "duh-MAHN",
                  meaning: "Tomorrow",
                  example: "Nous partirons demain.",
                  exampleMeaning: "We will leave tomorrow."
                },
                {
                  type: "quiz",
                  question: 'What does "Demain" mean?',
                  options: [
                    "Today",
                    "Tomorrow",
                    "Yesterday",
                    "Now"
                  ],
                  answer: "Tomorrow"
                }
              ]
            }
          ]
        },
        {
          title: "Unit 2: La communication",
          lessons: [
            {
              title: "Giving Advice",
              activities: [
                {
                  type: "vocabulary",
                  word: "Tu devrais",
                  pronunciation: "too duh-VRAY",
                  meaning: "You should",
                  example: "Tu devrais étudier davantage.",
                  exampleMeaning: "You should study more."
                },
                {
                  type: "quiz",
                  question: 'What is "Tu devrais" used for?',
                  options: [
                    "Giving advice",
                    "Saying goodbye",
                    "Giving a command",
                    "Telling the time"
                  ],
                  answer: "Giving advice"
                },
                {
                  type: "vocabulary",
                  word: "À mon avis",
                  pronunciation: "ah mohn ah-VEE",
                  meaning: "In my opinion",
                  example: "À mon avis, c'est une bonne idée.",
                  exampleMeaning: "In my opinion, it is a good idea."
                },
                {
                  type: "quiz",
                  question: 'What does "À mon avis" mean?',
                  options: [
                    "In my opinion",
                    "At my home",
                    "With me",
                    "After me"
                  ],
                  answer: "In my opinion"
                }
              ]
            }
          ]
        }
      ]
    },

    // =====================================================
    // B2 - UPPER INTERMEDIATE
    // =====================================================
    {
      id: "B2",
      title: "Upper Intermediate",
      units: [
        {
          title: "Unit 1: Donner son opinion",
          lessons: [
            {
              title: "Expressing Opinions",
              activities: [
                {
                  type: "vocabulary",
                  word: "À mon avis",
                  pronunciation: "ah mohn ah-VEE",
                  meaning: "In my opinion",
                  example: "À mon avis, apprendre les langues est utile.",
                  exampleMeaning: "In my opinion, learning languages is useful."
                },
                {
                  type: "quiz",
                  question: 'What is "À mon avis" used for?',
                  options: [
                    "Expressing an opinion",
                    "Apologizing",
                    "Saying goodbye",
                    "Asking the time"
                  ],
                  answer: "Expressing an opinion"
                },
                {
                  type: "vocabulary",
                  word: "Cependant",
                  pronunciation: "suh-pahn-DAHN",
                  meaning: "However / Nevertheless",
                  example: "C'est difficile, cependant je vais essayer.",
                  exampleMeaning: "It is difficult; however, I will try."
                },
                {
                  type: "quiz",
                  question: 'What does "Cependant" mean?',
                  options: [
                    "Therefore",
                    "However / Nevertheless",
                    "Because",
                    "For example"
                  ],
                  answer: "However / Nevertheless"
                }
              ]
            },
            {
              title: "Complex Sentences",
              activities: [
                {
                  type: "vocabulary",
                  word: "Bien que",
                  pronunciation: "byehn kuh",
                  meaning: "Although",
                  example: "Bien qu'il soit tard, nous continuons.",
                  exampleMeaning: "Although it is late, we continue."
                },
                {
                  type: "quiz",
                  question: 'What does "Bien que" mean?',
                  options: [
                    "Although",
                    "Therefore",
                    "When",
                    "So that"
                  ],
                  answer: "Although"
                },
                {
                  type: "vocabulary",
                  word: "Afin de",
                  pronunciation: "ah-fehn duh",
                  meaning: "In order to",
                  example: "J'étudie afin de réussir.",
                  exampleMeaning: "I study in order to succeed."
                },
                {
                  type: "quiz",
                  question: 'What is "Afin de" used for?',
                  options: [
                    "Expressing purpose",
                    "Telling time",
                    "Describing a place",
                    "Saying goodbye"
                  ],
                  answer: "Expressing purpose"
                }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Le monde professionnel",
          lessons: [
            {
              title: "Professional Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "Je vous contacte au sujet de",
                  pronunciation: "zhuh voo kohn-TAKT oh soo-ZHAY duh",
                  meaning: "I am contacting you regarding",
                  example: "Je vous contacte au sujet de votre annonce.",
                  exampleMeaning: "I am contacting you regarding your advertisement."
                },
                {
                  type: "quiz",
                  question: "In which situation is this phrase useful?",
                  options: [
                    "Formal communication",
                    "Saying goodbye to a friend",
                    "Ordering food",
                    "Playing a game"
                  ],
                  answer: "Formal communication"
                },
                {
                  type: "vocabulary",
                  word: "Je vous remercie",
                  pronunciation: "zhuh voo ruh-mehr-SEE",
                  meaning: "I thank you",
                  example: "Je vous remercie pour votre réponse.",
                  exampleMeaning: "Thank you for your response."
                },
                {
                  type: "quiz",
                  question: 'What does "Je vous remercie" mean?',
                  options: [
                    "I meet you",
                    "I thank you",
                    "I call you",
                    "I ask you"
                  ],
                  answer: "I thank you"
                }
              ]
            }
          ]
        }
      ]
    },

    // =====================================================
    // C1 - ADVANCED
    // =====================================================
    {
      id: "C1",
      title: "Advanced",
      units: [
        {
          title: "Unit 1: Communication avancée",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Néanmoins",
                  pronunciation: "nay-ahn-MWAHN",
                  meaning: "Nevertheless / Despite that",
                  example: "Le défi était difficile ; néanmoins, nous avons réussi.",
                  exampleMeaning: "The challenge was difficult; nevertheless, we succeeded."
                },
                {
                  type: "quiz",
                  question: 'What is the closest meaning of "Néanmoins"?',
                  options: [
                    "Therefore",
                    "Nevertheless",
                    "For example",
                    "Furthermore"
                  ],
                  answer: "Nevertheless"
                },
                {
                  type: "vocabulary",
                  word: "En outre",
                  pronunciation: "ahn OOT-ruh",
                  meaning: "Furthermore / In addition",
                  example: "Le cours est utile. En outre, il est gratuit.",
                  exampleMeaning: "The course is useful. Furthermore, it is free."
                },
                {
                  type: "quiz",
                  question: 'What does "En outre" mean?',
                  options: [
                    "Furthermore",
                    "On the contrary",
                    "Therefore",
                    "However"
                  ],
                  answer: "Furthermore"
                }
              ]
            },
            {
              title: "Formal and Academic Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "Il convient de",
                  pronunciation: "eel kohn-VYEHN duh",
                  meaning: "It is appropriate to",
                  example: "Il convient de vérifier les informations.",
                  exampleMeaning: "It is appropriate to verify the information."
                },
                {
                  type: "quiz",
                  question: 'In what type of language is "Il convient de" used?',
                  options: [
                    "Formal language",
                    "Slang only",
                    "Children's language",
                    "Informal greetings"
                  ],
                  answer: "Formal language"
                },
                {
                  type: "vocabulary",
                  word: "En conséquence",
                  pronunciation: "ahn kohn-say-KAHNS",
                  meaning: "Consequently / As a result",
                  example: "Il a beaucoup travaillé. En conséquence, il a réussi.",
                  exampleMeaning: "He worked very hard. As a result, he succeeded."
                },
                {
                  type: "quiz",
                  question: 'What does "En conséquence" mean?',
                  options: [
                    "As a result",
                    "Nevertheless",
                    "For example",
                    "On the other hand"
                  ],
                  answer: "As a result"
                }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Expressions idiomatiques",
          lessons: [
            {
              title: "French Idioms",
              activities: [
                {
                  type: "vocabulary",
                  word: "Avoir le coup de foudre",
                  pronunciation: "ah-VWAHR luh koo duh FOODR",
                  meaning: "To fall in love at first sight",
                  example: "Elle a eu le coup de foudre pour cette ville.",
                  exampleMeaning: "She fell in love with this city at first sight."
                },
                {
                  type: "quiz",
                  question: 'What is the figurative meaning of "Avoir le coup de foudre"?',
                  options: [
                    "To fall in love at first sight",
                    "To become very tired",
                    "To arrive late",
                    "To feel hungry"
                  ],
                  answer: "To fall in love at first sight"
                },
                {
                  type: "vocabulary",
                  word: "Mettre la main à la pâte",
                  pronunciation: "MEHTR lah MEHN ah lah PAHT",
                  meaning: "To lend a hand / To help with the work",
                  example: "Tout le monde doit mettre la main à la pâte.",
                  exampleMeaning: "Everyone should lend a hand."
                },
                {
                  type: "quiz",
                  question: 'What does "Mettre la main à la pâte" mean?',
                  options: [
                    "To help with the work",
                    "To relax",
                    "To cook food",
                    "To call someone"
                  ],
                  answer: "To help with the work"
                }
              ]
            }
          ]
        }
      ]
    },

    // =====================================================
    // C2 - MASTERY
    // =====================================================
    {
      id: "C2",
      title: "Mastery",
      units: [
        {
          title: "Unit 1: Maîtrise de la langue",
          lessons: [
            {
              title: "Subtle Differences in Meaning",
              activities: [
                {
                  type: "vocabulary",
                  word: "Quoique",
                  pronunciation: "kwah-kuh",
                  meaning: "Although / Even though",
                  example: "Quoiqu'il soit compétent, il reste modeste.",
                  exampleMeaning: "Although he is competent, he remains modest."
                },
                {
                  type: "quiz",
                  question: 'What is the closest meaning of "Quoique"?',
                  options: [
                    "Even though",
                    "Therefore",
                    "So that",
                    "Whereas"
                  ],
                  answer: "Even though"
                },
                {
                  type: "vocabulary",
                  word: "À plus forte raison",
                  pronunciation: "ah ploo FOR ruh-ZOHN",
                  meaning: "All the more reason",
                  example: "S'il peut aider un élève, à plus forte raison peut-il aider une classe.",
                  exampleMeaning: "If he can help one student, then all the more reason he can help an entire class."
                },
                {
                  type: "quiz",
                  question: 'What is "À plus forte raison" used for?',
                  options: [
                    "Giving an even stronger reason",
                    "Saying goodbye",
                    "Asking the time",
                    "Apologizing"
                  ],
                  answer: "Giving an even stronger reason"
                }
              ]
            },
            {
              title: "Advanced Writing",
              activities: [
                {
                  type: "vocabulary",
                  word: "Il n'en demeure pas moins que",
                  pronunciation: "eel nahn duh-MUHR pah MWAHN kuh",
                  meaning: "Nevertheless, the fact remains that",
                  example: "Il n'en demeure pas moins que cette solution est efficace.",
                  exampleMeaning: "Nevertheless, the fact remains that this solution is effective."
                },
                {
                  type: "quiz",
                  question: "In which type of writing is this expression useful?",
                  options: [
                    "Advanced formal writing",
                    "Greetings only",
                    "Counting simple numbers",
                    "Farewells"
                  ],
                  answer: "Advanced formal writing"
                },
                {
                  type: "vocabulary",
                  word: "En l'occurrence",
                  pronunciation: "ahn loh-kuh-RAHNS",
                  meaning: "In this particular case",
                  example: "En l'occurrence, une autre approche serait préférable.",
                  exampleMeaning: "In this particular case, another approach would be preferable."
                },
                {
                  type: "quiz",
                  question: 'What does "En l’occurrence" mean?',
                  options: [
                    "In this particular case",
                    "Nevertheless",
                    "The next day",
                    "Generally"
                  ],
                  answer: "In this particular case"
                }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Compréhension et expression",
          lessons: [
            {
              title: "Advanced Conversation",
              activities: [
                {
                  type: "vocabulary",
                  word: "Cela va sans dire",
                  pronunciation: "suh-LAH vah sahn DEER",
                  meaning: "It goes without saying",
                  example: "Cela va sans dire que la pratique est essentielle.",
                  exampleMeaning: "It goes without saying that practice is essential."
                },
                {
                  type: "quiz",
                  question: 'What is the figurative meaning of "Cela va sans dire"?',
                  options: [
                    "It is obvious",
                    "It is impossible",
                    "It is wrong",
                    "It is new"
                  ],
                  answer: "It is obvious"
                },
                {
                  type: "vocabulary",
                  word: "Pour ainsi dire",
                  pronunciation: "poor ehN-see DEER",
                  meaning: "So to speak",
                  example: "Il est, pour ainsi dire, le cœur du projet.",
                  exampleMeaning: "He is, so to speak, the heart of the project."
                },
                {
                  type: "quiz",
                  question: 'What is "Pour ainsi dire" used for?',
                  options: [
                    "Speaking approximately or figuratively",
                    "Asking a question",
                    "Saying goodbye",
                    "Telling the time"
                  ],
                  answer: "Speaking approximately or figuratively"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default frenchCourse;
