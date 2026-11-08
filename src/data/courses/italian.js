
const italianCourse = {
  language: "Italian",
  code: "it",

  levels: [
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: Prime parole",
          lessons: [
            {
              title: "Greetings",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ciao",
                  pronunciation: "chow",
                  meaning: "Hello / Goodbye",
                  example: "Ciao, come stai?",
                  exampleMeaning: "Hello, how are you?",
                },
                {
                  type: "quiz",
                  question: 'What does "Ciao" mean?',
                  options: ["Thank you", "Hello / Goodbye", "Please", "Good night"],
                  answer: "Hello / Goodbye",
                },
                {
                  type: "vocabulary",
                  word: "Buongiorno",
                  pronunciation: "bwon-JOR-no",
                  meaning: "Good morning / Good day",
                  example: "Buongiorno, signora!",
                  exampleMeaning: "Good morning, madam!",
                },
                {
                  type: "quiz",
                  question: 'When do you say "Buongiorno"?',
                  options: [
                    "In the morning or during the day",
                    "At midnight",
                    "When saying goodbye",
                    "While eating",
                  ],
                  answer: "In the morning or during the day",
                },
                {
                  type: "vocabulary",
                  word: "Grazie",
                  pronunciation: "GRAHT-tsyeh",
                  meaning: "Thank you",
                  example: "Grazie mille!",
                  exampleMeaning: "Thank you very much!",
                },
                {
                  type: "quiz",
                  question: 'What does "Grazie" mean?',
                  options: ["Sorry", "Thank you", "Hello", "Goodbye"],
                  answer: "Thank you",
                },
                {
                  type: "vocabulary",
                  word: "Arrivederci",
                  pronunciation: "ah-ree-veh-DER-chee",
                  meaning: "Goodbye",
                  example: "Arrivederci, a domani!",
                  exampleMeaning: "Goodbye, see you tomorrow!",
                },
                {
                  type: "quiz",
                  question: 'When do you say "Arrivederci"?',
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
              title: "Introducing Yourself",
              activities: [
                {
                  type: "vocabulary",
                  word: "Mi chiamo",
                  pronunciation: "mee KYAH-mo",
                  meaning: "My name is",
                  example: "Mi chiamo Arish.",
                  exampleMeaning: "My name is Arish.",
                },
                {
                  type: "quiz",
                  question: 'What does "Mi chiamo Arish" mean?',
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
                  word: "Sono",
                  pronunciation: "SOH-no",
                  meaning: "I am",
                  example: "Sono uno studente.",
                  exampleMeaning: "I am a student.",
                },
                {
                  type: "quiz",
                  question: 'What does "Sono uno studente" mean?',
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
                  word: "Piacere",
                  pronunciation: "pya-CHEH-reh",
                  meaning: "Nice to meet you",
                  example: "Piacere di conoscerti.",
                  exampleMeaning: "Nice to meet you.",
                },
                {
                  type: "quiz",
                  question: 'When is "Piacere" commonly used?',
                  options: [
                    "When meeting someone for the first time",
                    "When saying goodbye",
                    "When sleeping",
                    "While eating",
                  ],
                  answer: "When meeting someone for the first time",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Numeri e famiglia",
          lessons: [
            {
              title: "Numbers and Age",
              activities: [
                {
                  type: "vocabulary",
                  word: "Uno",
                  pronunciation: "OO-no",
                  meaning: "One",
                  example: "Ho un libro.",
                  exampleMeaning: "I have one book.",
                },
                {
                  type: "quiz",
                  question: 'Which number is "Uno"?',
                  options: ["One", "Two", "Three", "Four"],
                  answer: "One",
                },
                {
                  type: "vocabulary",
                  word: "Quanti anni hai?",
                  pronunciation: "KWAN-tee AN-nee eye",
                  meaning: "How old are you?",
                  example: "Quanti anni hai? Ho sedici anni.",
                  exampleMeaning: "How old are you? I am sixteen years old.",
                },
                {
                  type: "quiz",
                  question: 'What does "Quanti anni hai?" ask about?',
                  options: ["Name", "Age", "Address", "Favorite thing"],
                  answer: "Age",
                },
              ],
            },
            {
              title: "Family Members",
              activities: [
                {
                  type: "vocabulary",
                  word: "La famiglia",
                  pronunciation: "lah fah-MEEL-yah",
                  meaning: "The family",
                  example: "La mia famiglia è grande.",
                  exampleMeaning: "My family is big.",
                },
                {
                  type: "quiz",
                  question: 'What does "La famiglia" mean?',
                  options: ["Friend", "Family", "School", "House"],
                  answer: "Family",
                },
                {
                  type: "vocabulary",
                  word: "Mia madre",
                  pronunciation: "MEE-ah MAH-dreh",
                  meaning: "My mother",
                  example: "Mia madre è gentile.",
                  exampleMeaning: "My mother is kind.",
                },
                {
                  type: "quiz",
                  question: 'What does "Mia madre" mean?',
                  options: ["My father", "My sister", "My mother", "My grandmother"],
                  answer: "My mother",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "A2",
      title: "Elementary",
      units: [
        {
          title: "Unit 1: Vita quotidiana",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                {
                  type: "vocabulary",
                  word: "Svegliarsi",
                  pronunciation: "zveh-LYAR-see",
                  meaning: "To wake up",
                  example: "Mi sveglio alle sette.",
                  exampleMeaning: "I wake up at seven.",
                },
                {
                  type: "quiz",
                  question: 'What does "Svegliarsi" mean?',
                  options: ["To sleep", "To wake up", "To eat", "To walk"],
                  answer: "To wake up",
                },
                {
                  type: "vocabulary",
                  word: "La colazione",
                  pronunciation: "lah koh-lah-TSYOH-neh",
                  meaning: "Breakfast",
                  example: "Faccio colazione ogni mattina.",
                  exampleMeaning: "I have breakfast every morning.",
                },
                {
                  type: "quiz",
                  question: 'Which meal is "La colazione"?',
                  options: ["Breakfast", "Lunch", "Dinner", "Dessert"],
                  answer: "Breakfast",
                },
                {
                  type: "vocabulary",
                  word: "Vado al lavoro",
                  pronunciation: "VAH-doh al lah-VOH-roh",
                  meaning: "I go to work",
                  example: "Vado al lavoro alle nove.",
                  exampleMeaning: "I go to work at nine.",
                },
                {
                  type: "quiz",
                  question: 'What does "Vado al lavoro" mean?',
                  options: [
                    "I come home",
                    "I go to work",
                    "I sleep",
                    "I study",
                  ],
                  answer: "I go to work",
                },
              ],
            },
            {
              title: "At a Restaurant",
              activities: [
                {
                  type: "vocabulary",
                  word: "Vorrei",
                  pronunciation: "vor-RAY",
                  meaning: "I would like",
                  example: "Vorrei un caffè, per favore.",
                  exampleMeaning: "I would like a coffee, please.",
                },
                {
                  type: "quiz",
                  question: 'What is "Vorrei" used for?',
                  options: [
                    "Politely asking for something",
                    "Apologizing",
                    "Asking for directions",
                    "Saying goodbye",
                  ],
                  answer: "Politely asking for something",
                },
                {
                  type: "vocabulary",
                  word: "Il conto",
                  pronunciation: "eel KON-toh",
                  meaning: "The bill",
                  example: "Il conto, per favore.",
                  exampleMeaning: "The bill, please.",
                },
                {
                  type: "quiz",
                  question: 'What does "Il conto" mean?',
                  options: ["Menu", "Bill", "Water", "Table"],
                  answer: "Bill",
                },
                {
                  type: "vocabulary",
                  word: "Delizioso",
                  pronunciation: "deh-lee-TSYOH-zoh",
                  meaning: "Delicious",
                  example: "La pasta è deliziosa.",
                  exampleMeaning: "The pasta is delicious.",
                },
                {
                  type: "quiz",
                  question: 'What does "Delizioso" mean?',
                  options: ["Expensive", "Cold", "Delicious", "Sour"],
                  answer: "Delicious",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: In città",
          lessons: [
            {
              title: "Asking for Directions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Dov'è...?",
                  pronunciation: "doh-VEH",
                  meaning: "Where is...?",
                  example: "Dov'è la stazione?",
                  exampleMeaning: "Where is the station?",
                },
                {
                  type: "quiz",
                  question: 'What does "Dov\'è la stazione?" ask?',
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
                  word: "A destra",
                  pronunciation: "ah DES-trah",
                  meaning: "To the right",
                  example: "Gira a destra.",
                  exampleMeaning: "Turn right.",
                },
                {
                  type: "quiz",
                  question: 'What does "A destra" mean?',
                  options: ["To the left", "Straight ahead", "To the right", "Behind"],
                  answer: "To the right",
                },
              ],
            },
            {
              title: "Shopping",
              activities: [
                {
                  type: "vocabulary",
                  word: "Quanto costa?",
                  pronunciation: "KWAN-toh KOH-stah",
                  meaning: "How much does it cost?",
                  example: "Quanto costa questa maglietta?",
                  exampleMeaning: "How much does this T-shirt cost?",
                },
                {
                  type: "quiz",
                  question: 'What does "Quanto costa?" mean?',
                  options: [
                    "Where was it made?",
                    "How much does it cost?",
                    "Whose is it?",
                    "Is it open?",
                  ],
                  answer: "How much does it cost?",
                },
                {
                  type: "vocabulary",
                  word: "È troppo caro",
                  pronunciation: "eh TROP-poh KAH-roh",
                  meaning: "It is too expensive",
                  example: "È troppo caro per me.",
                  exampleMeaning: "It is too expensive for me.",
                },
                {
                  type: "quiz",
                  question: 'When would you say "È troppo caro"?',
                  options: [
                    "When something is free",
                    "When something is too expensive",
                    "When something is delicious",
                    "When something is small",
                  ],
                  answer: "When something is too expensive",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "B1",
      title: "Intermediate",
      units: [
        {
          title: "Unit 1: Esperienze",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ho visitato",
                  pronunciation: "oh vee-zee-TAH-toh",
                  meaning: "I visited / I have visited",
                  example: "Ho visitato Roma l'anno scorso.",
                  exampleMeaning: "I visited Rome last year.",
                },
                {
                  type: "quiz",
                  question: 'Which time does "Ho visitato Roma" refer to?',
                  options: ["Present", "Future", "Past", "Command"],
                  answer: "Past",
                },
                {
                  type: "vocabulary",
                  word: "Un'esperienza",
                  pronunciation: "oon-es-peh-ree-EN-tsah",
                  meaning: "An experience",
                  example: "È stata una bella esperienza.",
                  exampleMeaning: "It was a wonderful experience.",
                },
                {
                  type: "quiz",
                  question: 'What does "Un\'esperienza" mean?',
                  options: ["A plan", "An experience", "A question", "A rule"],
                  answer: "An experience",
                },
                {
                  type: "vocabulary",
                  word: "Mi sono divertito",
                  pronunciation: "mee SOH-noh dee-vehr-TEE-toh",
                  meaning: "I had a good time",
                  example: "Mi sono divertito molto alla festa.",
                  exampleMeaning: "I had a great time at the party.",
                },
                {
                  type: "quiz",
                  question: 'What feeling does "Mi sono divertito" express?',
                  options: ["Boredom", "Having a good time", "Fear", "Anger"],
                  answer: "Having a good time",
                },
              ],
            },
            {
              title: "Plans and Invitations",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ho intenzione di",
                  pronunciation: "oh een-ten-TSYOH-neh dee",
                  meaning: "I intend to",
                  example: "Ho intenzione di studiare italiano.",
                  exampleMeaning: "I intend to study Italian.",
                },
                {
                  type: "quiz",
                  question: 'What is "Ho intenzione di" used for?',
                  options: [
                    "Expressing an intention",
                    "Talking about the past",
                    "Apologizing",
                    "Making comparisons",
                  ],
                  answer: "Expressing an intention",
                },
                {
                  type: "vocabulary",
                  word: "Ti va di...?",
                  pronunciation: "tee vah dee",
                  meaning: "Would you like to...?",
                  example: "Ti va di andare al cinema?",
                  exampleMeaning: "Would you like to go to the cinema?",
                },
                {
                  type: "quiz",
                  question: 'What type of sentence is "Ti va di...?"',
                  options: ["Invitation / Suggestion", "Command", "Complaint", "Introduction"],
                  answer: "Invitation / Suggestion",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Comunicazione",
          lessons: [
            {
              title: "Giving Advice",
              activities: [
                {
                  type: "vocabulary",
                  word: "Dovresti",
                  pronunciation: "doh-VRES-tee",
                  meaning: "You should",
                  example: "Dovresti riposare.",
                  exampleMeaning: "You should rest.",
                },
                {
                  type: "quiz",
                  question: 'What is "Dovresti" used for?',
                  options: [
                    "Giving advice",
                    "Giving orders",
                    "Talking about the past",
                    "Asking someone's name",
                  ],
                  answer: "Giving advice",
                },
                {
                  type: "vocabulary",
                  word: "Secondo me",
                  pronunciation: "seh-KON-doh meh",
                  meaning: "In my opinion",
                  example: "Secondo me, questa è una buona idea.",
                  exampleMeaning: "In my opinion, this is a good idea.",
                },
                {
                  type: "quiz",
                  question: 'What is "Secondo me" used for?',
                  options: [
                    "Expressing an opinion",
                    "Telling the time",
                    "Giving directions",
                    "Saying thank you",
                  ],
                  answer: "Expressing an opinion",
                },
              ],
            },
            {
              title: "Connecting Ideas",
              activities: [
                {
                  type: "vocabulary",
                  word: "Perché",
                  pronunciation: "pehr-KEH",
                  meaning: "Because / Why",
                  example: "Studio perché voglio imparare.",
                  exampleMeaning: "I study because I want to learn.",
                },
                {
                  type: "quiz",
                  question: 'What is one meaning of "Perché"?',
                  options: ["But", "Because", "Therefore", "Although"],
                  answer: "Because",
                },
                {
                  type: "vocabulary",
                  word: "Quindi",
                  pronunciation: "KWEEN-dee",
                  meaning: "Therefore / So",
                  example: "Sono stanco, quindi vado a casa.",
                  exampleMeaning: "I am tired, so I am going home.",
                },
                {
                  type: "quiz",
                  question: 'What does "Quindi" mean?',
                  options: ["Nevertheless", "Therefore", "For example", "Although"],
                  answer: "Therefore",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "B2",
      title: "Upper Intermediate",
      units: [
        {
          title: "Unit 1: Opinioni e argomentazioni",
          lessons: [
            {
              title: "Expressing Opinions",
              activities: [
                {
                  type: "vocabulary",
                  word: "A mio avviso",
                  pronunciation: "ah MEE-oh ah-VEE-zoh",
                  meaning: "In my view",
                  example: "A mio avviso, la tecnologia è utile.",
                  exampleMeaning: "In my view, technology is useful.",
                },
                {
                  type: "quiz",
                  question: 'What does "A mio avviso" mean?',
                  options: [
                    "In my view",
                    "At my home",
                    "According to my schedule",
                    "For my friend",
                  ],
                  answer: "In my view",
                },
                {
                  type: "vocabulary",
                  word: "Tuttavia",
                  pronunciation: "toot-tah-VEE-ah",
                  meaning: "However / Nevertheless",
                  example: "È difficile, tuttavia proverò.",
                  exampleMeaning: "It is difficult; however, I will try.",
                },
                {
                  type: "quiz",
                  question: 'What kind of ideas does "Tuttavia" connect?',
                  options: ["Opposing ideas", "Similar ideas", "Time", "Place"],
                  answer: "Opposing ideas",
                },
                {
                  type: "vocabulary",
                  word: "Inoltre",
                  pronunciation: "ee-NOL-treh",
                  meaning: "Furthermore / Besides",
                  example: "Il corso è utile. Inoltre, è gratuito.",
                  exampleMeaning: "The course is useful. Furthermore, it is free.",
                },
                {
                  type: "quiz",
                  question: 'What does "Inoltre" mean?',
                  options: ["Furthermore", "Nevertheless", "Therefore", "Because"],
                  answer: "Furthermore",
                },
              ],
            },
            {
              title: "Debating Respectfully",
              activities: [
                {
                  type: "vocabulary",
                  word: "Non sono del tutto d'accordo",
                  pronunciation: "non SOH-noh del TOOT-toh dah-KOR-doh",
                  meaning: "I do not entirely agree",
                  example: "Non sono del tutto d'accordo con questa idea.",
                  exampleMeaning: "I do not entirely agree with this idea.",
                },
                {
                  type: "quiz",
                  question: "What does this sentence express?",
                  options: [
                    "Complete agreement",
                    "Partial disagreement",
                    "Happiness",
                    "An invitation",
                  ],
                  answer: "Partial disagreement",
                },
                {
                  type: "vocabulary",
                  word: "Da un lato... dall'altro",
                  pronunciation: "dah oon LAH-toh... dal-LAHL-troh",
                  meaning: "On one hand... on the other hand",
                  example: "Da un lato è comodo, dall'altro è costoso.",
                  exampleMeaning: "On one hand it is convenient; on the other hand, it is expensive.",
                },
                {
                  type: "quiz",
                  question: 'What is "Da un lato... dall\'altro" used for?',
                  options: [
                    "Comparing two sides",
                    "Asking about time",
                    "Giving orders",
                    "Apologizing",
                  ],
                  answer: "Comparing two sides",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Società e cultura",
          lessons: [
            {
              title: "Society and Technology",
              activities: [
                {
                  type: "vocabulary",
                  word: "La consapevolezza",
                  pronunciation: "lah kon-sah-peh-voh-LEHT-tsah",
                  meaning: "Awareness",
                  example: "Dobbiamo aumentare la consapevolezza.",
                  exampleMeaning: "We need to increase awareness.",
                },
                {
                  type: "quiz",
                  question: 'What does "La consapevolezza" mean?',
                  options: ["Awareness", "Laziness", "Entertainment", "Travel"],
                  answer: "Awareness",
                },
                {
                  type: "vocabulary",
                  word: "Sviluppare",
                  pronunciation: "sveel-LOO-pah-reh",
                  meaning: "To develop",
                  example: "Dobbiamo sviluppare nuove competenze.",
                  exampleMeaning: "We need to develop new skills.",
                },
                {
                  type: "quiz",
                  question: 'What does "Sviluppare" mean?',
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
                  word: "Le sarei grato",
                  pronunciation: "leh sah-RAY GRAH-toh",
                  meaning: "I would be grateful to you",
                  example: "Le sarei grato se potesse aiutarmi.",
                  exampleMeaning: "I would be grateful if you could help me.",
                },
                {
                  type: "quiz",
                  question: 'What style does "Le sarei grato" represent?',
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
                  word: "Cordiali saluti",
                  pronunciation: "kor-DYAH-lee sah-LOO-tee",
                  meaning: "Kind regards",
                  example: "Cordiali saluti, Marco Rossi.",
                  exampleMeaning: "Kind regards, Marco Rossi.",
                },
                {
                  type: "quiz",
                  question: 'Where is "Cordiali saluti" used?',
                  options: [
                    "At the end of a formal letter",
                    "In casual greetings",
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

    {
      id: "C1",
      title: "Advanced",
      units: [
        {
          title: "Unit 1: Comunicazione avanzata",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Ciononostante",
                  pronunciation: "choh-noh-noh-STAN-teh",
                  meaning: "Nevertheless / Despite that",
                  example: "Era difficile; ciononostante, abbiamo continuato.",
                  exampleMeaning: "It was difficult; nevertheless, we continued.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ciononostante" mean?',
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
                  word: "Intraprendere",
                  pronunciation: "een-trah-pren-DEH-reh",
                  meaning: "To undertake / To embark on",
                  example: "Ha deciso di intraprendere una nuova carriera.",
                  exampleMeaning: "He decided to embark on a new career.",
                },
                {
                  type: "quiz",
                  question: 'What does "Intraprendere" mean?',
                  options: ["To finish", "To undertake", "To postpone", "To forget"],
                  answer: "To undertake",
                },
                {
                  type: "vocabulary",
                  word: "A prescindere da",
                  pronunciation: "ah preh-SHEEN-deh-reh dah",
                  meaning: "Regardless of",
                  example: "A prescindere dal risultato, continuerò.",
                  exampleMeaning: "Regardless of the result, I will continue.",
                },
                {
                  type: "quiz",
                  question: 'What does "A prescindere da" mean?',
                  options: [
                    "Because of",
                    "Regardless of",
                    "Similar to",
                    "After",
                  ],
                  answer: "Regardless of",
                },
              ],
            },
            {
              title: "Academic Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "L'ipotesi",
                  pronunciation: "lee-POH-teh-zee",
                  meaning: "The hypothesis",
                  example: "L'ipotesi deve essere verificata.",
                  exampleMeaning: "The hypothesis must be verified.",
                },
                {
                  type: "quiz",
                  question: 'What does "L\'ipotesi" mean?',
                  options: [
                    "Conclusion",
                    "Hypothesis",
                    "Evidence",
                    "Problem",
                  ],
                  answer: "Hypothesis",
                },
                {
                  type: "vocabulary",
                  word: "Di conseguenza",
                  pronunciation: "dee kon-seh-GWEN-tsah",
                  meaning: "Consequently / As a result",
                  example: "Ha studiato molto; di conseguenza, ha superato l'esame.",
                  exampleMeaning: "He studied a lot; consequently, he passed the exam.",
                },
                {
                  type: "quiz",
                  question: 'What relationship does "Di conseguenza" express?',
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
          title: "Unit 2: Espressione e analisi",
          lessons: [
            {
              title: "Analyzing Ideas",
              activities: [
                {
                  type: "vocabulary",
                  word: "È opportuno",
                  pronunciation: "eh op-por-TOO-noh",
                  meaning: "It is appropriate",
                  example: "È opportuno considerare tutte le possibilità.",
                  exampleMeaning: "It is appropriate to consider all possibilities.",
                },
                {
                  type: "quiz",
                  question: 'What does "È opportuno" mean?',
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
                  word: "Sottolineare",
                  pronunciation: "sot-toh-lee-neh-AH-reh",
                  meaning: "To emphasize / To underline",
                  example: "Vorrei sottolineare un punto importante.",
                  exampleMeaning: "I would like to emphasize an important point.",
                },
                {
                  type: "quiz",
                  question: 'What does "Sottolineare" mean?',
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
                  word: "Prendere in considerazione",
                  pronunciation: "PREHN-deh-reh een kon-see-deh-rah-TSYOH-neh",
                  meaning: "To consider / To take into consideration",
                  example: "Dobbiamo prendere in considerazione la proposta.",
                  exampleMeaning: "We must consider the proposal.",
                },
                {
                  type: "quiz",
                  question: 'What does "Prendere in considerazione" mean?',
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
                  word: "Alla luce di",
                  pronunciation: "AL-lah LOO-cheh dee",
                  meaning: "In light of",
                  example: "Alla luce dei risultati, cambieremo strategia.",
                  exampleMeaning: "In light of the results, we will change our strategy.",
                },
                {
                  type: "quiz",
                  question: 'What is "Alla luce di" used for?',
                  options: [
                    "Taking information into account",
                    "Telling the time",
                    "Greeting someone",
                    "Asking for permission",
                  ],
                  answer: "Taking information into account",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "C2",
      title: "Proficient",
      units: [
        {
          title: "Unit 1: Padronanza linguistica",
          lessons: [
            {
              title: "Idiomatic Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Avere le mani in pasta",
                  pronunciation: "ah-VEH-reh leh MAH-nee een PAH-stah",
                  meaning: "To be deeply involved in something",
                  example: "Ha le mani in pasta in molti progetti.",
                  exampleMeaning: "He is deeply involved in many projects.",
                },
                {
                  type: "quiz",
                  question: 'What is the figurative meaning of "Avere le mani in pasta"?',
                  options: [
                    "Cooking food",
                    "Being deeply involved in something",
                    "Washing hands",
                    "Leaving a job",
                  ],
                  answer: "Being deeply involved in something",
                },
                {
                  type: "vocabulary",
                  word: "Non vedere l'ora",
                  pronunciation: "non veh-DEH-reh loh-RAH",
                  meaning: "To look forward to something",
                  example: "Non vedo l'ora di partire.",
                  exampleMeaning: "I cannot wait to leave.",
                },
                {
                  type: "quiz",
                  question: 'What does "Non vedere l\'ora" mean?',
                  options: [
                    "To arrive late",
                    "To look forward to something",
                    "To forget the time",
                    "To relax",
                  ],
                  answer: "To look forward to something",
                },
              ],
            },
            {
              title: "Subtle Meaning",
              activities: [
                {
                  type: "vocabulary",
                  word: "Per quanto",
                  pronunciation: "pehr KWAN-toh",
                  meaning: "Although / As far as",
                  example: "Per quanto sia difficile, vale la pena.",
                  exampleMeaning: "Although it is difficult, it is worth it.",
                },
                {
                  type: "quiz",
                  question: 'What does "Per quanto" express in this example?',
                  options: [
                    "Contrast / Concession",
                    "Time",
                    "Place",
                    "Command",
                  ],
                  answer: "Contrast / Concession",
                },
                {
                  type: "vocabulary",
                  word: "A malapena",
                  pronunciation: "ah mah-lah-PEH-nah",
                  meaning: "Barely / With difficulty",
                  example: "Sono riuscito a malapena a finire.",
                  exampleMeaning: "I barely managed to finish.",
                },
                {
                  type: "quiz",
                  question: 'What does "A malapena" mean?',
                  options: [
                    "Easily",
                    "Barely",
                    "Immediately",
                    "Repeatedly",
                  ],
                  answer: "Barely",
                },
              ],
            },
          ],
        },
        {
          title: "Unit 2: Uso esperto",
          lessons: [
            {
              title: "Precise and Formal Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "Qualora",
                  pronunciation: "kwah-LOH-rah",
                  meaning: "If / In the event that",
                  example: "Qualora avesse bisogno, mi contatti.",
                  exampleMeaning: "If you need anything, please contact me.",
                },
                {
                  type: "quiz",
                  question: 'What is "Qualora" a more formal equivalent of?',
                  options: ["If", "Because", "Although", "Therefore"],
                  answer: "If",
                },
                {
                  type: "vocabulary",
                  word: "Fermo restando",
                  pronunciation: "FER-moh reh-STAN-doh",
                  meaning: "Without changing the fact that",
                  example: "Fermo restando quanto detto, possiamo procedere.",
                  exampleMeaning: "Keeping what has been said unchanged, we can proceed.",
                },
                {
                  type: "quiz",
                  question: 'What does "Fermo restando" express?',
                  options: [
                    "Maintaining what was previously stated",
                    "Taking back a statement",
                    "Changing the subject",
                    "Uncertainty",
                  ],
                  answer: "Maintaining what was previously stated",
                },
              ],
            },
            {
              title: "Mastering Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "In definitiva",
                  pronunciation: "een deh-fee-nee-TEE-vah",
                  meaning: "Ultimately / All in all",
                  example: "In definitiva, la decisione spetta a noi.",
                  exampleMeaning: "Ultimately, the decision is ours to make.",
                },
                {
                  type: "quiz",
                  question: 'What does "In definitiva" mean?',
                  options: [
                    "At the beginning",
                    "Ultimately / All in all",
                    "For example",
                    "On the contrary",
                  ],
                  answer: "Ultimately / All in all",
                },
                {
                  type: "vocabulary",
                  word: "In linea di principio",
                  pronunciation: "een LEE-neh-ah dee preen-CHEE-pyoh",
                  meaning: "In principle",
                  example: "In linea di principio, sono d'accordo.",
                  exampleMeaning: "In principle, I agree.",
                },
                {
                  type: "quiz",
                  question: 'What does "In linea di principio" mean?',
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

export default italianCourse;
