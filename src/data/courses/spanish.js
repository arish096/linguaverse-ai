
const spanishCourse = {
  language: "Spanish",
  code: "es",

  levels: [
    // =====================================================
    // A1 - BEGINNER
    // =====================================================
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          id: 1,
          title: "Greetings & Introductions",
          lessons: [
            {
              id: 1,
              title: "Hello and Goodbye",
              activities: [
                {
                  type: "vocabulary",
                  word: "Hola",
                  pronunciation: "OH-lah",
                  meaning: "Hello",
                  example: "Hola, Ana.",
                  exampleMeaning: "Hello, Ana.",
                },
                {
                  type: "vocabulary",
                  word: "Adiós",
                  pronunciation: "ah-DYOS",
                  meaning: "Goodbye",
                  example: "Adiós, amigo.",
                  exampleMeaning: "Goodbye, friend.",
                },
                {
                  type: "vocabulary",
                  word: "Gracias",
                  pronunciation: "GRAH-syahs",
                  meaning: "Thank you",
                  example: "Gracias por tu ayuda.",
                  exampleMeaning: "Thank you for your help.",
                },
                {
                  type: "quiz",
                  question: 'What does "Hola" mean?',
                  options: ["Goodbye", "Hello", "Please", "Thanks"],
                  answer: "Hello",
                },
              ],
            },
            {
              id: 2,
              title: "Introducing Yourself",
              activities: [
                {
                  type: "vocabulary",
                  word: "Me llamo…",
                  pronunciation: "meh YAH-moh",
                  meaning: "My name is…",
                  example: "Me llamo Ana.",
                  exampleMeaning: "My name is Ana.",
                },
                {
                  type: "vocabulary",
                  word: "¿Cómo te llamas?",
                  pronunciation: "KOH-moh teh YAH-mahs",
                  meaning: "What is your name?",
                  example: "Hola, ¿cómo te llamas?",
                  exampleMeaning: "Hello, what is your name?",
                },
                {
                  type: "quiz",
                  question: "How do you say 'My name is Carlos'?",
                  options: [
                    "Me llamo Carlos.",
                    "Estoy Carlos.",
                    "Hola Carlos.",
                    "Adiós Carlos.",
                  ],
                  answer: "Me llamo Carlos.",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Basic Everyday Words",
          lessons: [
            {
              id: 1,
              title: "Yes, No and Please",
              activities: [
                {
                  type: "vocabulary",
                  word: "Sí",
                  pronunciation: "see",
                  meaning: "Yes",
                  example: "Sí, por favor.",
                  exampleMeaning: "Yes, please.",
                },
                {
                  type: "vocabulary",
                  word: "No",
                  pronunciation: "noh",
                  meaning: "No",
                  example: "No, gracias.",
                  exampleMeaning: "No, thank you.",
                },
                {
                  type: "vocabulary",
                  word: "Por favor",
                  pronunciation: "por fah-VOR",
                  meaning: "Please",
                  example: "Agua, por favor.",
                  exampleMeaning: "Water, please.",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "How Are You?",
          lessons: [
            {
              id: 1,
              title: "Asking About Feelings",
              activities: [
                {
                  type: "vocabulary",
                  word: "¿Cómo estás?",
                  pronunciation: "KOH-moh ehs-TAHS",
                  meaning: "How are you?",
                  example: "Hola, ¿cómo estás?",
                  exampleMeaning: "Hello, how are you?",
                },
                {
                  type: "vocabulary",
                  word: "Estoy bien",
                  pronunciation: "ehs-TOY byehn",
                  meaning: "I am fine",
                  example: "Estoy bien, gracias.",
                  exampleMeaning: "I am fine, thank you.",
                },
                {
                  type: "vocabulary",
                  word: "¿Y tú?",
                  pronunciation: "ee too",
                  meaning: "And you?",
                  example: "Estoy bien. ¿Y tú?",
                  exampleMeaning: "I am fine. And you?",
                },
                {
                  type: "quiz",
                  question: 'What does "Estoy bien" mean?',
                  options: [
                    "I am tired",
                    "I am fine",
                    "Goodbye",
                    "My name is",
                  ],
                  answer: "I am fine",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Where Are You From?",
          lessons: [
            {
              id: 1,
              title: "Countries and Introductions",
              activities: [
                {
                  type: "vocabulary",
                  word: "¿De dónde eres?",
                  pronunciation: "deh DON-deh EH-rehs",
                  meaning: "Where are you from?",
                  example: "¿De dónde eres, Ana?",
                  exampleMeaning: "Where are you from, Ana?",
                },
                {
                  type: "vocabulary",
                  word: "Soy de India",
                  pronunciation: "soy deh IN-dyah",
                  meaning: "I am from India",
                  example: "Soy de India.",
                  exampleMeaning: "I am from India.",
                },
                {
                  type: "vocabulary",
                  word: "Mucho gusto",
                  pronunciation: "MOO-choh GOOS-toh",
                  meaning: "Nice to meet you",
                  example: "Hola, mucho gusto.",
                  exampleMeaning: "Hello, nice to meet you.",
                },
                {
                  type: "quiz",
                  question: "How do you say 'I am from India'?",
                  options: [
                    "Estoy bien",
                    "Soy de India",
                    "Me llamo India",
                    "¿Cómo estás?",
                  ],
                  answer: "Soy de India",
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
          id: 1,
          title: "La vida diaria",
          lessons: [
            {
              id: 1,
              title: "Daily Routine",
              activities: [
                {
                  type: "vocabulary",
                  word: "Despertarse",
                  pronunciation: "des-per-TAR-seh",
                  meaning: "To wake up",
                  example: "Me despierto a las siete.",
                  exampleMeaning: "I wake up at seven.",
                },
                {
                  type: "quiz",
                  question: 'What does "Despertarse" mean?',
                  options: ["To sleep", "To wake up", "To eat", "To run"],
                  answer: "To wake up",
                },
                {
                  type: "vocabulary",
                  word: "Desayunar",
                  pronunciation: "deh-sah-yoo-NAR",
                  meaning: "To have breakfast",
                  example: "Desayuno a las ocho.",
                  exampleMeaning: "I have breakfast at eight.",
                },
                {
                  type: "quiz",
                  question: 'What does "Desayunar" mean?',
                  options: [
                    "To have breakfast",
                    "To have dinner",
                    "To study",
                    "To work",
                  ],
                  answer: "To have breakfast",
                },
                {
                  type: "vocabulary",
                  word: "Ir al trabajo",
                  pronunciation: "eer al trah-BAH-hoh",
                  meaning: "To go to work",
                  example: "Voy al trabajo en autobús.",
                  exampleMeaning: "I go to work by bus.",
                },
                {
                  type: "quiz",
                  question: 'What does "Ir al trabajo" mean?',
                  options: [
                    "To go to school",
                    "To go to work",
                    "To go home",
                    "To go shopping",
                  ],
                  answer: "To go to work",
                },
              ],
            },
            {
              id: 2,
              title: "Free Time and Hobbies",
              activities: [
                {
                  type: "vocabulary",
                  word: "Leer",
                  pronunciation: "leh-ER",
                  meaning: "To read",
                  example: "Me gusta leer libros.",
                  exampleMeaning: "I like reading books.",
                },
                {
                  type: "quiz",
                  question: 'What does "Leer" mean?',
                  options: ["To write", "To read", "To listen", "To speak"],
                  answer: "To read",
                },
                {
                  type: "vocabulary",
                  word: "Escuchar música",
                  pronunciation: "es-koo-CHAR MOO-see-kah",
                  meaning: "To listen to music",
                  example: "Escucho música todos los días.",
                  exampleMeaning: "I listen to music every day.",
                },
                {
                  type: "quiz",
                  question: 'What does "Escuchar música" mean?',
                  options: [
                    "To watch television",
                    "To listen to music",
                    "To play football",
                    "To read a book",
                  ],
                  answer: "To listen to music",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "En la ciudad",
          lessons: [
            {
              id: 1,
              title: "Places in the City",
              activities: [
                {
                  type: "vocabulary",
                  word: "La estación",
                  pronunciation: "lah es-tah-SYON",
                  meaning: "The station",
                  example: "La estación está cerca.",
                  exampleMeaning: "The station is nearby.",
                },
                {
                  type: "quiz",
                  question: 'What does "La estación" mean?',
                  options: ["The hospital", "The station", "The school", "The park"],
                  answer: "The station",
                },
                {
                  type: "vocabulary",
                  word: "El supermercado",
                  pronunciation: "el soo-per-mer-KAH-doh",
                  meaning: "The supermarket",
                  example: "Voy al supermercado.",
                  exampleMeaning: "I am going to the supermarket.",
                },
                {
                  type: "quiz",
                  question: 'What does "El supermercado" mean?',
                  options: ["The supermarket", "The restaurant", "The bank", "The library"],
                  answer: "The supermarket",
                },
                {
                  type: "vocabulary",
                  word: "A la derecha",
                  pronunciation: "ah lah deh-REH-chah",
                  meaning: "To the right",
                  example: "Gira a la derecha.",
                  exampleMeaning: "Turn right.",
                },
                {
                  type: "quiz",
                  question: 'What does "A la derecha" mean?',
                  options: ["To the left", "To the right", "Straight ahead", "Behind"],
                  answer: "To the right",
                },
              ],
            },
            {
              id: 2,
              title: "Shopping",
              activities: [
                {
                  type: "vocabulary",
                  word: "¿Cuánto cuesta?",
                  pronunciation: "KWAN-toh KWES-tah",
                  meaning: "How much does it cost?",
                  example: "¿Cuánto cuesta esta camisa?",
                  exampleMeaning: "How much does this shirt cost?",
                },
                {
                  type: "quiz",
                  question: 'What does "¿Cuánto cuesta?" mean?',
                  options: [
                    "Where is it?",
                    "How much does it cost?",
                    "What is your name?",
                    "What time is it?",
                  ],
                  answer: "How much does it cost?",
                },
                {
                  type: "vocabulary",
                  word: "Es demasiado caro",
                  pronunciation: "es deh-mah-SYAH-doh KAH-roh",
                  meaning: "It is too expensive",
                  example: "Este teléfono es demasiado caro.",
                  exampleMeaning: "This phone is too expensive.",
                },
                {
                  type: "quiz",
                  question: 'What does "Es demasiado caro" mean?',
                  options: [
                    "It is very cheap",
                    "It is too expensive",
                    "It is beautiful",
                    "It is free",
                  ],
                  answer: "It is too expensive",
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
          id: 1,
          title: "Experiencias y recuerdos",
          lessons: [
            {
              id: 1,
              title: "Talking About the Past",
              activities: [
                {
                  type: "vocabulary",
                  word: "He visitado",
                  pronunciation: "eh beh-see-TAH-doh",
                  meaning: "I have visited",
                  example: "He visitado Madrid dos veces.",
                  exampleMeaning: "I have visited Madrid twice.",
                },
                {
                  type: "quiz",
                  question: 'What does "He visitado" mean?',
                  options: [
                    "I will visit",
                    "I have visited",
                    "I am visiting",
                    "I want to visit",
                  ],
                  answer: "I have visited",
                },
                {
                  type: "vocabulary",
                  word: "La experiencia",
                  pronunciation: "lah eks-peh-RYEN-syah",
                  meaning: "The experience",
                  example: "Fue una experiencia increíble.",
                  exampleMeaning: "It was an incredible experience.",
                },
                {
                  type: "quiz",
                  question: 'What does "La experiencia" mean?',
                  options: ["The experience", "The opportunity", "The journey", "The memory"],
                  answer: "The experience",
                },
                {
                  type: "vocabulary",
                  word: "El año pasado",
                  pronunciation: "el AH-nyoh pah-SAH-doh",
                  meaning: "Last year",
                  example: "El año pasado viajé a España.",
                  exampleMeaning: "Last year I traveled to Spain.",
                },
                {
                  type: "quiz",
                  question: 'What does "El año pasado" mean?',
                  options: ["Next year", "Last year", "This month", "Tomorrow"],
                  answer: "Last year",
                },
              ],
            },
            {
              id: 2,
              title: "Future Plans",
              activities: [
                {
                  type: "vocabulary",
                  word: "Voy a viajar",
                  pronunciation: "boy ah byah-HAR",
                  meaning: "I am going to travel",
                  example: "Voy a viajar a México.",
                  exampleMeaning: "I am going to travel to Mexico.",
                },
                {
                  type: "quiz",
                  question: 'What does "Voy a viajar" express?',
                  options: ["A past event", "A future plan", "A daily habit", "A question"],
                  answer: "A future plan",
                },
                {
                  type: "vocabulary",
                  word: "La próxima semana",
                  pronunciation: "lah PROK-see-mah seh-MAH-nah",
                  meaning: "Next week",
                  example: "La próxima semana tengo un examen.",
                  exampleMeaning: "I have an exam next week.",
                },
                {
                  type: "quiz",
                  question: 'What does "La próxima semana" mean?',
                  options: ["Last week", "Next week", "This morning", "Next year"],
                  answer: "Next week",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Comunicación",
          lessons: [
            {
              id: 1,
              title: "Giving Advice",
              activities: [
                {
                  type: "vocabulary",
                  word: "Deberías",
                  pronunciation: "deh-beh-REE-ahs",
                  meaning: "You should",
                  example: "Deberías estudiar más.",
                  exampleMeaning: "You should study more.",
                },
                {
                  type: "quiz",
                  question: 'What is "Deberías" used for?',
                  options: [
                    "Giving advice",
                    "Saying goodbye",
                    "Asking for directions",
                    "Describing the past",
                  ],
                  answer: "Giving advice",
                },
                {
                  type: "vocabulary",
                  word: "En mi opinión",
                  pronunciation: "en mee oh-pee-NYON",
                  meaning: "In my opinion",
                  example: "En mi opinión, es una buena idea.",
                  exampleMeaning: "In my opinion, it is a good idea.",
                },
                {
                  type: "quiz",
                  question: 'What does "En mi opinión" mean?',
                  options: [
                    "In my opinion",
                    "At my home",
                    "With my friend",
                    "After my work",
                  ],
                  answer: "In my opinion",
                },
              ],
            },
            {
              id: 2,
              title: "Connecting Ideas",
              activities: [
                {
                  type: "vocabulary",
                  word: "Sin embargo",
                  pronunciation: "seen em-BAR-goh",
                  meaning: "However",
                  example: "Es difícil; sin embargo, lo intentaré.",
                  exampleMeaning: "It is difficult; however, I will try.",
                },
                {
                  type: "quiz",
                  question: 'What does "Sin embargo" mean?',
                  options: ["Because", "However", "Therefore", "For example"],
                  answer: "However",
                },
                {
                  type: "vocabulary",
                  word: "Por lo tanto",
                  pronunciation: "por loh TAN-toh",
                  meaning: "Therefore",
                  example: "Estoy cansado, por lo tanto descansaré.",
                  exampleMeaning: "I am tired; therefore, I will rest.",
                },
                {
                  type: "quiz",
                  question: 'What does "Por lo tanto" express?',
                  options: ["Contrast", "Result", "Time", "Location"],
                  answer: "Result",
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
          id: 1,
          title: "Opiniones y debates",
          lessons: [
            {
              id: 1,
              title: "Expressing Opinions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Desde mi punto de vista",
                  pronunciation: "DES-deh mee POON-toh deh BEES-tah",
                  meaning: "From my point of view",
                  example: "Desde mi punto de vista, la educación es esencial.",
                  exampleMeaning: "From my point of view, education is essential.",
                },
                {
                  type: "quiz",
                  question: 'What does "Desde mi punto de vista" mean?',
                  options: [
                    "From my point of view",
                    "In the past",
                    "At the same time",
                    "In another place",
                  ],
                  answer: "From my point of view",
                },
                {
                  type: "vocabulary",
                  word: "No obstante",
                  pronunciation: "noh ohbs-TAN-teh",
                  meaning: "Nevertheless",
                  example: "No obstante, debemos continuar.",
                  exampleMeaning: "Nevertheless, we must continue.",
                },
                {
                  type: "quiz",
                  question: 'What does "No obstante" mean?',
                  options: ["Therefore", "Nevertheless", "Because", "For example"],
                  answer: "Nevertheless",
                },
                {
                  type: "vocabulary",
                  word: "Además",
                  pronunciation: "ah-deh-MAHS",
                  meaning: "Furthermore / Besides",
                  example: "Además, necesitamos más tiempo.",
                  exampleMeaning: "Furthermore, we need more time.",
                },
                {
                  type: "quiz",
                  question: 'What does "Además" mean?',
                  options: ["Furthermore", "Although", "Instead", "Yesterday"],
                  answer: "Furthermore",
                },
              ],
            },
            {
              id: 2,
              title: "Agreeing and Disagreeing",
              activities: [
                {
                  type: "vocabulary",
                  word: "No estoy de acuerdo",
                  pronunciation: "noh es-TOY deh ah-KWER-doh",
                  meaning: "I do not agree",
                  example: "No estoy de acuerdo con esa idea.",
                  exampleMeaning: "I do not agree with that idea.",
                },
                {
                  type: "quiz",
                  question: 'What does "No estoy de acuerdo" express?',
                  options: ["Agreement", "Disagreement", "Excitement", "Gratitude"],
                  answer: "Disagreement",
                },
                {
                  type: "vocabulary",
                  word: "Por un lado... por otro lado",
                  pronunciation: "por oon LAH-doh... por OH-troh LAH-doh",
                  meaning: "On one hand... on the other hand",
                  example: "Por un lado es barato; por otro lado es lento.",
                  exampleMeaning: "On one hand it is cheap; on the other hand it is slow.",
                },
                {
                  type: "quiz",
                  question: "What is this expression used for?",
                  options: [
                    "Comparing two sides",
                    "Asking for help",
                    "Giving an order",
                    "Saying goodbye",
                  ],
                  answer: "Comparing two sides",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Sociedad y tecnología",
          lessons: [
            {
              id: 1,
              title: "Society and Technology",
              activities: [
                {
                  type: "vocabulary",
                  word: "La conciencia",
                  pronunciation: "lah kon-SYEN-syah",
                  meaning: "Awareness / Consciousness",
                  example: "Debemos crear conciencia ambiental.",
                  exampleMeaning: "We must create environmental awareness.",
                },
                {
                  type: "quiz",
                  question: 'What does "La conciencia" mean?',
                  options: ["Awareness", "Entertainment", "Competition", "Travel"],
                  answer: "Awareness",
                },
                {
                  type: "vocabulary",
                  word: "Desarrollar",
                  pronunciation: "deh-sah-roh-YAR",
                  meaning: "To develop",
                  example: "Debemos desarrollar nuevas habilidades.",
                  exampleMeaning: "We must develop new skills.",
                },
                {
                  type: "quiz",
                  question: 'What does "Desarrollar" mean?',
                  options: ["To forget", "To develop", "To destroy", "To borrow"],
                  answer: "To develop",
                },
              ],
            },
            {
              id: 2,
              title: "Professional Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "Le agradecería",
                  pronunciation: "leh ah-grah-deh-seh-REE-ah",
                  meaning: "I would appreciate it",
                  example: "Le agradecería su respuesta.",
                  exampleMeaning: "I would appreciate your response.",
                },
                {
                  type: "quiz",
                  question: "What style does this expression represent?",
                  options: [
                    "Informal",
                    "Polite and formal",
                    "Angry",
                    "Humorous",
                  ],
                  answer: "Polite and formal",
                },
                {
                  type: "vocabulary",
                  word: "Atentamente",
                  pronunciation: "ah-ten-tah-MEN-teh",
                  meaning: "Sincerely",
                  example: "Atentamente, Carlos.",
                  exampleMeaning: "Sincerely, Carlos.",
                },
                {
                  type: "quiz",
                  question: 'Where is "Atentamente" commonly used?',
                  options: [
                    "At the end of a formal letter",
                    "In casual greetings",
                    "When ordering food",
                    "When asking directions",
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
          id: 1,
          title: "Expresiones avanzadas",
          lessons: [
            {
              id: 1,
              title: "Nuanced Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "A pesar de ello",
                  pronunciation: "ah peh-SAR deh EH-yoh",
                  meaning: "Despite that",
                  example: "Era complicado; a pesar de ello, lo conseguimos.",
                  exampleMeaning: "It was complicated; despite that, we achieved it.",
                },
                {
                  type: "quiz",
                  question: 'What does "A pesar de ello" mean?',
                  options: ["Therefore", "Despite that", "For example", "In addition"],
                  answer: "Despite that",
                },
                {
                  type: "vocabulary",
                  word: "Cabe destacar",
                  pronunciation: "KAH-beh des-tah-KAR",
                  meaning: "It is worth highlighting",
                  example: "Cabe destacar la importancia de la educación.",
                  exampleMeaning: "It is worth highlighting the importance of education.",
                },
                {
                  type: "quiz",
                  question: 'What does "Cabe destacar" express?',
                  options: [
                    "Something worth emphasizing",
                    "A farewell",
                    "A question",
                    "A complaint",
                  ],
                  answer: "Something worth emphasizing",
                },
                {
                  type: "vocabulary",
                  word: "Independientemente de",
                  pronunciation: "een-deh-pen-dyen-teh-MEN-teh deh",
                  meaning: "Regardless of",
                  example: "Independientemente de las dificultades, seguiremos adelante.",
                  exampleMeaning: "Regardless of the difficulties, we will move forward.",
                },
                {
                  type: "quiz",
                  question: 'What does "Independientemente de" mean?',
                  options: ["Regardless of", "Because of", "Instead of", "In front of"],
                  answer: "Regardless of",
                },
              ],
            },
            {
              id: 2,
              title: "Academic Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "La hipótesis",
                  pronunciation: "lah ee-POH-teh-sees",
                  meaning: "The hypothesis",
                  example: "La hipótesis necesita más investigación.",
                  exampleMeaning: "The hypothesis needs more research.",
                },
                {
                  type: "quiz",
                  question: 'What does "La hipótesis" mean?',
                  options: ["The conclusion", "The hypothesis", "The evidence", "The result"],
                  answer: "The hypothesis",
                },
                {
                  type: "vocabulary",
                  word: "En consecuencia",
                  pronunciation: "en kon-seh-KWEN-syah",
                  meaning: "Consequently",
                  example: "No había pruebas; en consecuencia, el caso fue cerrado.",
                  exampleMeaning: "There was no evidence; consequently, the case was closed.",
                },
                {
                  type: "quiz",
                  question: 'What relationship does "En consecuencia" express?',
                  options: [
                    "Cause and effect",
                    "Contrast",
                    "Comparison",
                    "Location",
                  ],
                  answer: "Cause and effect",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Análisis y argumentación",
          lessons: [
            {
              id: 1,
              title: "Analyzing Arguments",
              activities: [
                {
                  type: "vocabulary",
                  word: "Conviene señalar",
                  pronunciation: "kon-BYEH-neh seh-nyah-LAR",
                  meaning: "It is worth pointing out",
                  example: "Conviene señalar algunos aspectos importantes.",
                  exampleMeaning: "It is worth pointing out some important aspects.",
                },
                {
                  type: "quiz",
                  question: 'What does "Conviene señalar" mean?',
                  options: [
                    "It is worth pointing out",
                    "It is impossible",
                    "It is unnecessary",
                    "It is too late",
                  ],
                  answer: "It is worth pointing out",
                },
                {
                  type: "vocabulary",
                  word: "Poner de manifiesto",
                  pronunciation: "poh-NER deh mah-nee-FYES-toh",
                  meaning: "To demonstrate / Reveal",
                  example: "Los resultados ponen de manifiesto el problema.",
                  exampleMeaning: "The results reveal the problem.",
                },
                {
                  type: "quiz",
                  question: 'What does "Poner de manifiesto" mean?',
                  options: ["To hide", "To reveal", "To forget", "To postpone"],
                  answer: "To reveal",
                },
              ],
            },
            {
              id: 2,
              title: "Professional Discussion",
              activities: [
                {
                  type: "vocabulary",
                  word: "Teniendo en cuenta",
                  pronunciation: "teh-NYEN-doh en KWEN-tah",
                  meaning: "Taking into account",
                  example: "Teniendo en cuenta los resultados, cambiaremos el plan.",
                  exampleMeaning: "Taking the results into account, we will change the plan.",
                },
                {
                  type: "quiz",
                  question: 'What does "Teniendo en cuenta" mean?',
                  options: [
                    "Taking into account",
                    "Ignoring something",
                    "Changing the subject",
                    "Making a promise",
                  ],
                  answer: "Taking into account",
                },
                {
                  type: "vocabulary",
                  word: "A raíz de",
                  pronunciation: "ah rah-EES deh",
                  meaning: "As a result of / Following",
                  example: "A raíz de la reunión, se tomó una decisión.",
                  exampleMeaning: "Following the meeting, a decision was made.",
                },
                {
                  type: "quiz",
                  question: 'What does "A raíz de" indicate?',
                  options: ["A cause or consequence", "A greeting", "A location", "A command"],
                  answer: "A cause or consequence",
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
          id: 1,
          title: "Dominio del idioma",
          lessons: [
            {
              id: 1,
              title: "Idiomatic Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "Estar en las nubes",
                  pronunciation: "es-TAR en lahs NOO-bes",
                  meaning: "To have one's head in the clouds",
                  example: "Hoy estás en las nubes.",
                  exampleMeaning: "Today your head is in the clouds.",
                },
                {
                  type: "quiz",
                  question: 'What does "Estar en las nubes" mean figuratively?',
                  options: [
                    "To be distracted or daydreaming",
                    "To be very angry",
                    "To be extremely hungry",
                    "To travel by plane",
                  ],
                  answer: "To be distracted or daydreaming",
                },
                {
                  type: "vocabulary",
                  word: "Tomar el pelo",
                  pronunciation: "toh-MAR el PEH-loh",
                  meaning: "To tease someone / Pull someone's leg",
                  example: "No te preocupes, solo estoy tomando el pelo.",
                  exampleMeaning: "Do not worry, I am just pulling your leg.",
                },
                {
                  type: "quiz",
                  question: 'What does "Tomar el pelo" mean?',
                  options: [
                    "To tease someone",
                    "To help someone",
                    "To invite someone",
                    "To ignore someone",
                  ],
                  answer: "To tease someone",
                },
              ],
            },
            {
              id: 2,
              title: "Subtle Differences in Meaning",
              activities: [
                {
                  type: "vocabulary",
                  word: "Por más que",
                  pronunciation: "por mahs keh",
                  meaning: "No matter how much / Even though",
                  example: "Por más que lo intento, no puedo resolverlo.",
                  exampleMeaning: "No matter how hard I try, I cannot solve it.",
                },
                {
                  type: "quiz",
                  question: 'What can "Por más que" express?',
                  options: [
                    "Concession or contrast",
                    "Only location",
                    "Only time",
                    "A direct command",
                  ],
                  answer: "Concession or contrast",
                },
                {
                  type: "vocabulary",
                  word: "A duras penas",
                  pronunciation: "ah DOO-rahs PEH-nahs",
                  meaning: "Barely / With great difficulty",
                  example: "Terminó el proyecto a duras penas.",
                  exampleMeaning: "They barely managed to finish the project.",
                },
                {
                  type: "quiz",
                  question: 'What does "A duras penas" mean?',
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
          id: 2,
          title: "Comunicación experta",
          lessons: [
            {
              id: 1,
              title: "Precise and Formal Language",
              activities: [
                {
                  type: "vocabulary",
                  word: "Siempre y cuando",
                  pronunciation: "SYEM-preh ee KWAN-doh",
                  meaning: "Provided that / As long as",
                  example: "Puedes participar siempre y cuando cumplas los requisitos.",
                  exampleMeaning: "You can participate provided that you meet the requirements.",
                },
                {
                  type: "quiz",
                  question: 'What does "Siempre y cuando" mean?',
                  options: [
                    "Provided that",
                    "Because",
                    "Although",
                    "Therefore",
                  ],
                  answer: "Provided that",
                },
                {
                  type: "vocabulary",
                  word: "En virtud de",
                  pronunciation: "en beer-TOOD deh",
                  meaning: "By virtue of / Under",
                  example: "En virtud de este acuerdo, ambas partes cooperarán.",
                  exampleMeaning: "Under this agreement, both parties will cooperate.",
                },
                {
                  type: "quiz",
                  question: 'What does "En virtud de" mean?',
                  options: [
                    "By virtue of / Under",
                    "Despite",
                    "Instead of",
                    "After",
                  ],
                  answer: "By virtue of / Under",
                },
              ],
            },
            {
              id: 2,
              title: "Mastering Communication",
              activities: [
                {
                  type: "vocabulary",
                  word: "En última instancia",
                  pronunciation: "en OOL-tee-mah eens-TAN-syah",
                  meaning: "Ultimately / In the final analysis",
                  example: "En última instancia, la decisión es tuya.",
                  exampleMeaning: "Ultimately, the decision is yours.",
                },
                {
                  type: "quiz",
                  question: 'What does "En última instancia" mean?',
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
                  word: "A grandes rasgos",
                  pronunciation: "ah GRAN-des RAS-gos",
                  meaning: "Broadly speaking / In general terms",
                  example: "A grandes rasgos, el proyecto fue un éxito.",
                  exampleMeaning: "Broadly speaking, the project was a success.",
                },
                {
                  type: "quiz",
                  question: 'What does "A grandes rasgos" mean?',
                  options: [
                    "Broadly speaking",
                    "In detail",
                    "By accident",
                    "Immediately",
                  ],
                  answer: "Broadly speaking",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default spanishCourse;
