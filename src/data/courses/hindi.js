const hindiCourse = {
  language: "Hindi",
  code: "hi",
  levels: [
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: पहले शब्द",
          lessons: [
            {
              title: "Greetings",
              activities: [
                { type: "vocabulary", word: "नमस्ते", pronunciation: "namaste", meaning: "Hello / नमस्कार", example: "नमस्ते, आप कैसे हैं?", exampleMeaning: "Hello, how are you?" },
                { type: "quiz", question: '"नमस्ते" का अंग्रेज़ी अर्थ क्या है?', options: ["Goodbye", "Hello", "Thanks", "Please"], answer: "Hello" },
                { type: "vocabulary", word: "सुप्रभात", pronunciation: "suprabhat", meaning: "Good morning", example: "सुप्रभात! आपका दिन अच्छा हो।", exampleMeaning: "Good morning! Have a nice day." },
                { type: "quiz", question: '"सुप्रभात" का अर्थ क्या है?', options: ["Good night", "Good morning", "Goodbye", "Thank you"], answer: "Good morning" },
                { type: "vocabulary", word: "धन्यवाद", pronunciation: "dhanyavaad", meaning: "Thank you", example: "आपकी मदद के लिए धन्यवाद।", exampleMeaning: "Thank you for your help." },
                { type: "quiz", question: '"धन्यवाद" का अंग्रेज़ी अर्थ क्या है?', options: ["Please", "Thank you", "Hello", "Sorry"], answer: "Thank you" },
                { type: "vocabulary", word: "अलविदा", pronunciation: "alvida", meaning: "Goodbye", example: "अलविदा, फिर मिलेंगे।", exampleMeaning: "Goodbye, see you again." },
                { type: "quiz", question: '"अलविदा" का अर्थ क्या है?', options: ["Hello", "Goodbye", "Thanks", "Welcome"], answer: "Goodbye" }
              ]
            },
            {
              title: "अपना परिचय",
              activities: [
                { type: "vocabulary", word: "मेरा नाम है", pronunciation: "mera naam hai", meaning: "My name is", example: "मेरा नाम अरिश है।", exampleMeaning: "My name is Arish." },
                { type: "quiz", question: '"मेरा नाम अरिश है" का अर्थ क्या है?', options: ["I am from Arish", "My name is Arish", "I know Arish", "Arish is my friend"], answer: "My name is Arish" },
                { type: "vocabulary", word: "मैं विद्यार्थी हूँ", pronunciation: "main vidyarthi hoon", meaning: "I am a student", example: "मैं एक विद्यार्थी हूँ।", exampleMeaning: "I am a student." },
                { type: "quiz", question: '"मैं विद्यार्थी हूँ" का अर्थ क्या है?', options: ["I am a teacher", "I am a student", "He is a student", "I am at home"], answer: "I am a student" },
                { type: "vocabulary", word: "आपसे मिलकर खुशी हुई", pronunciation: "aapse milkar khushi hui", meaning: "Nice to meet you", example: "आपसे मिलकर खुशी हुई।", exampleMeaning: "Nice to meet you." },
                { type: "quiz", question: '"आपसे मिलकर खुशी हुई" कब कहते हैं?', options: ["पहली बार मिलने पर", "विदा लेते समय", "सोते समय", "खाना खाते समय"], answer: "पहली बार मिलने पर" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "A2",
      title: "Elementary",
      units: [
        {
          title: "Unit 1: रोज़मर्रा की ज़िंदगी",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                { type: "vocabulary", word: "जागना", pronunciation: "jaagna", meaning: "To wake up", example: "मैं सात बजे जागता हूँ।", exampleMeaning: "I wake up at seven." },
                { type: "quiz", question: '"जागना" का अर्थ क्या है?', options: ["To sleep", "To wake up", "To eat", "To walk"], answer: "To wake up" },
                { type: "vocabulary", word: "नाश्ता", pronunciation: "nashta", meaning: "Breakfast", example: "मैं सुबह नाश्ता करता हूँ।", exampleMeaning: "I eat breakfast in the morning." },
                { type: "quiz", question: '"नाश्ता" कौन-सा भोजन है?', options: ["Breakfast", "Lunch", "Dinner", "Dessert"], answer: "Breakfast" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "B1",
      title: "Intermediate",
      units: [
        {
          title: "Unit 1: अनुभव",
          lessons: [
            {
              title: "बीते समय की बातें",
              activities: [
                { type: "vocabulary", word: "मैंने देखा", pronunciation: "maine dekha", meaning: "I saw", example: "मैंने पिछले साल दिल्ली देखी।", exampleMeaning: "I visited Delhi last year." },
                { type: "quiz", question: '"मैंने देखा" किस समय की बात है?', options: ["वर्तमान", "भविष्य", "भूतकाल", "आदेश"], answer: "भूतकाल" },
                { type: "vocabulary", word: "अनुभव", pronunciation: "anubhav", meaning: "Experience", example: "यह एक शानदार अनुभव था।", exampleMeaning: "It was a wonderful experience." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "B2",
      title: "Upper Intermediate",
      units: [
        {
          title: "Unit 1: अपनी राय",
          lessons: [
            {
              title: "राय व्यक्त करना",
              activities: [
                { type: "vocabulary", word: "मेरी राय में", pronunciation: "meri raay mein", meaning: "In my opinion", example: "मेरी राय में, भाषा सीखना उपयोगी है।", exampleMeaning: "In my opinion, learning languages is useful." },
                { type: "quiz", question: '"मेरी राय में" का उपयोग किसलिए होता है?', options: ["राय बताने के लिए", "माफ़ी माँगने के लिए", "विदा लेने के लिए", "समय पूछने के लिए"], answer: "राय बताने के लिए" },
                { type: "vocabulary", word: "हालाँकि", pronunciation: "haalanki", meaning: "However / Although", example: "यह कठिन है, हालाँकि मैं कोशिश करूँगा।", exampleMeaning: "It is difficult; however, I will try." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "C1",
      title: "Advanced",
      units: [
        {
          title: "Unit 1: उन्नत अभिव्यक्ति",
          lessons: [
            {
              title: "सूक्ष्म अर्थ वाले वाक्यांश",
              activities: [
                { type: "vocabulary", word: "इसके बावजूद", pronunciation: "iske bawajood", meaning: "Nevertheless", example: "काम कठिन था; इसके बावजूद, हम सफल हुए।", exampleMeaning: "The task was difficult; nevertheless, we succeeded." },
                { type: "quiz", question: '"इसके बावजूद" का अर्थ क्या है?', options: ["Therefore", "Nevertheless", "For example", "Furthermore"], answer: "Nevertheless" },
                { type: "vocabulary", word: "इसके अलावा", pronunciation: "iske alawa", meaning: "Furthermore / In addition", example: "यह उपयोगी है। इसके अलावा, यह मुफ़्त है।", exampleMeaning: "It is useful. Furthermore, it is free." }
              ]
            }
          ]
        }
      ]
    },

    
/* ADD THESE EXTRA UNITS INSIDE EACH LEVEL'S units ARRAY */

// A1 - Add inside A1 units
{
  title: "Unit 2: परिवार और रोज़मर्रा के शब्द",
  lessons: [
    {
      title: "Family Members",
      activities: [
        {
          type: "vocabulary",
          word: "माता",
          pronunciation: "mata",
          meaning: "Mother",
          example: "मेरी माता घर पर हैं।",
          exampleMeaning: "My mother is at home.",
        },
        {
          type: "quiz",
          question: 'What does "माता" mean?',
          options: ["Father", "Mother", "Sister", "Brother"],
          answer: "Mother",
        },
        {
          type: "vocabulary",
          word: "पिता",
          pronunciation: "pita",
          meaning: "Father",
          example: "मेरे पिता काम करते हैं।",
          exampleMeaning: "My father works.",
        },
        {
          type: "quiz",
          question: 'What does "पिता" mean?',
          options: ["Mother", "Father", "Friend", "Teacher"],
          answer: "Father",
        },
        {
          type: "vocabulary",
          word: "भाई",
          pronunciation: "bhai",
          meaning: "Brother",
          example: "मेरा भाई विद्यार्थी है।",
          exampleMeaning: "My brother is a student.",
        },
        {
          type: "quiz",
          question: 'What does "भाई" mean?',
          options: ["Sister", "Brother", "Father", "Uncle"],
          answer: "Brother",
        },
      ],
    },
    {
      title: "Common Everyday Words",
      activities: [
        {
          type: "vocabulary",
          word: "पानी",
          pronunciation: "paani",
          meaning: "Water",
          example: "मुझे पानी चाहिए।",
          exampleMeaning: "I need water.",
        },
        {
          type: "quiz",
          question: 'What does "पानी" mean?',
          options: ["Food", "Water", "Milk", "Tea"],
          answer: "Water",
        },
        {
          type: "vocabulary",
          word: "किताब",
          pronunciation: "kitaab",
          meaning: "Book",
          example: "यह मेरी किताब है।",
          exampleMeaning: "This is my book.",
        },
        {
          type: "quiz",
          question: 'What does "किताब" mean?',
          options: ["Pen", "Book", "Bag", "Chair"],
          answer: "Book",
        },
      ],
    },
  ],
},

// A2 - Add inside A2 units
{
  title: "Unit 2: शहर और खरीदारी",
  lessons: [
    {
      title: "Places in the City",
      activities: [
        {
          type: "vocabulary",
          word: "अस्पताल",
          pronunciation: "aspataal",
          meaning: "Hospital",
          example: "अस्पताल यहाँ पास में है।",
          exampleMeaning: "The hospital is nearby.",
        },
        {
          type: "quiz",
          question: 'What does "अस्पताल" mean?',
          options: ["School", "Hospital", "Market", "Station"],
          answer: "Hospital",
        },
        {
          type: "vocabulary",
          word: "बाज़ार",
          pronunciation: "bazaar",
          meaning: "Market",
          example: "मैं बाज़ार जा रहा हूँ।",
          exampleMeaning: "I am going to the market.",
        },
        {
          type: "quiz",
          question: 'What does "बाज़ार" mean?',
          options: ["Market", "Hospital", "Library", "Office"],
          answer: "Market",
        },
        {
          type: "vocabulary",
          word: "दुकान",
          pronunciation: "dukaan",
          meaning: "Shop",
          example: "यह दुकान बहुत बड़ी है।",
          exampleMeaning: "This shop is very big.",
        },
        {
          type: "quiz",
          question: 'What does "दुकान" mean?',
          options: ["House", "Shop", "Road", "School"],
          answer: "Shop",
        },
      ],
    },
    {
      title: "Shopping Conversations",
      activities: [
        {
          type: "vocabulary",
          word: "कितने का है?",
          pronunciation: "kitne ka hai",
          meaning: "How much does it cost?",
          example: "यह बैग कितने का है?",
          exampleMeaning: "How much does this bag cost?",
        },
        {
          type: "quiz",
          question: 'What does "कितने का है?" mean?',
          options: [
            "Where is it?",
            "How much does it cost?",
            "Who owns it?",
            "What is this?",
          ],
          answer: "How much does it cost?",
        },
        {
          type: "vocabulary",
          word: "महँगा",
          pronunciation: "mehnga",
          meaning: "Expensive",
          example: "यह मोबाइल बहुत महँगा है।",
          exampleMeaning: "This phone is very expensive.",
        },
        {
          type: "quiz",
          question: 'What does "महँगा" mean?',
          options: ["Cheap", "Expensive", "Beautiful", "Small"],
          answer: "Expensive",
        },
      ],
    },
  ],
},

// B1 - Add inside B1 units
{
  title: "Unit 2: योजनाएँ और अनुभव",
  lessons: [
    {
      title: "Talking About Future Plans",
      activities: [
        {
          type: "vocabulary",
          word: "मैं जाने वाला हूँ",
          pronunciation: "main jaane wala hoon",
          meaning: "I am going to leave",
          example: "मैं कल दिल्ली जाने वाला हूँ।",
          exampleMeaning: "I am going to Delhi tomorrow.",
        },
        {
          type: "quiz",
          question: 'What does "मैं जाने वाला हूँ" express?',
          options: ["A future plan", "A past event", "A greeting", "An apology"],
          answer: "A future plan",
        },
        {
          type: "vocabulary",
          word: "अगले सप्ताह",
          pronunciation: "agle saptah",
          meaning: "Next week",
          example: "अगले सप्ताह मेरी परीक्षा है।",
          exampleMeaning: "I have my exam next week.",
        },
        {
          type: "quiz",
          question: 'What does "अगले सप्ताह" mean?',
          options: ["Last week", "Next week", "Yesterday", "Tomorrow morning"],
          answer: "Next week",
        },
      ],
    },
    {
      title: "Sharing Experiences",
      activities: [
        {
          type: "vocabulary",
          word: "मुझे याद है",
          pronunciation: "mujhe yaad hai",
          meaning: "I remember",
          example: "मुझे वह दिन याद है।",
          exampleMeaning: "I remember that day.",
        },
        {
          type: "quiz",
          question: 'What does "मुझे याद है" mean?',
          options: ["I forget", "I remember", "I understand", "I agree"],
          answer: "I remember",
        },
        {
          type: "vocabulary",
          word: "पहले कभी",
          pronunciation: "pehle kabhi",
          meaning: "Ever before",
          example: "क्या आपने पहले कभी ऐसा देखा है?",
          exampleMeaning: "Have you ever seen something like this before?",
        },
        {
          type: "quiz",
          question: 'What does "पहले कभी" mean?',
          options: ["Ever before", "Never again", "Right now", "Next year"],
          answer: "Ever before",
        },
      ],
    },
  ],
},

// B2 - Add inside B2 units
{
  title: "Unit 2: समाज और विचार",
  lessons: [
    {
      title: "Society and Culture",
      activities: [
        {
          type: "vocabulary",
          word: "जागरूकता",
          pronunciation: "jagrukta",
          meaning: "Awareness",
          example: "शिक्षा से जागरूकता बढ़ती है।",
          exampleMeaning: "Education increases awareness.",
        },
        {
          type: "quiz",
          question: 'What does "जागरूकता" mean?',
          options: ["Awareness", "Confusion", "Entertainment", "Competition"],
          answer: "Awareness",
        },
        {
          type: "vocabulary",
          word: "विकास",
          pronunciation: "vikas",
          meaning: "Development",
          example: "देश का विकास आवश्यक है।",
          exampleMeaning: "The development of the country is essential.",
        },
        {
          type: "quiz",
          question: 'What does "विकास" mean?',
          options: ["Destruction", "Development", "Problem", "Memory"],
          answer: "Development",
        },
      ],
    },
    {
      title: "Expressing Agreement and Disagreement",
      activities: [
        {
          type: "vocabulary",
          word: "मैं सहमत हूँ",
          pronunciation: "main sahmat hoon",
          meaning: "I agree",
          example: "मैं आपकी बात से सहमत हूँ।",
          exampleMeaning: "I agree with your point.",
        },
        {
          type: "quiz",
          question: 'What does "मैं सहमत हूँ" mean?',
          options: ["I disagree", "I agree", "I am confused", "I am leaving"],
          answer: "I agree",
        },
        {
          type: "vocabulary",
          word: "इसके विपरीत",
          pronunciation: "iske vipreet",
          meaning: "On the contrary",
          example: "इसके विपरीत, मेरा विचार अलग है।",
          exampleMeaning: "On the contrary, my opinion is different.",
        },
        {
          type: "quiz",
          question: 'What does "इसके विपरीत" mean?',
          options: ["In addition", "On the contrary", "Therefore", "For example"],
          answer: "On the contrary",
        },
      ],
    },
  ],
},

// C1 - Add inside C1 units
{
  title: "Unit 2: अकादमिक और औपचारिक भाषा",
  lessons: [
    {
      title: "Academic Vocabulary",
      activities: [
        {
          type: "vocabulary",
          word: "परिकल्पना",
          pronunciation: "parikalpana",
          meaning: "Hypothesis",
          example: "इस परिकल्पना की जाँच आवश्यक है।",
          exampleMeaning: "This hypothesis needs to be tested.",
        },
        {
          type: "quiz",
          question: 'What does "परिकल्पना" mean?',
          options: ["Conclusion", "Hypothesis", "Evidence", "Result"],
          answer: "Hypothesis",
        },
        {
          type: "vocabulary",
          word: "परिणामस्वरूप",
          pronunciation: "parinaamswaroop",
          meaning: "Consequently / As a result",
          example: "उसने मेहनत की, परिणामस्वरूप वह सफल हुआ।",
          exampleMeaning: "He worked hard; consequently, he succeeded.",
        },
        {
          type: "quiz",
          question: 'What does "परिणामस्वरूप" mean?',
          options: ["Nevertheless", "Consequently", "Although", "Meanwhile"],
          answer: "Consequently",
        },
      ],
    },
    {
      title: "Advanced Expressions",
      activities: [
        {
          type: "vocabulary",
          word: "उल्लेखनीय",
          pronunciation: "ullekhniya",
          meaning: "Noteworthy / Remarkable",
          example: "उसका प्रदर्शन उल्लेखनीय था।",
          exampleMeaning: "His performance was remarkable.",
        },
        {
          type: "quiz",
          question: 'What does "उल्लेखनीय" mean?',
          options: ["Noteworthy", "Ordinary", "Unnecessary", "Impossible"],
          answer: "Noteworthy",
        },
        {
          type: "vocabulary",
          word: "निष्कर्ष",
          pronunciation: "nishkarsh",
          meaning: "Conclusion",
          example: "हम इस निष्कर्ष पर पहुँचे हैं।",
          exampleMeaning: "We have reached this conclusion.",
        },
        {
          type: "quiz",
          question: 'What does "निष्कर्ष" mean?',
          options: ["Question", "Conclusion", "Introduction", "Argument"],
          answer: "Conclusion",
        },
      ],
    },
  ],
},

// C2 - Add this as a NEW level after C1
{
  id: "C2",
  title: "Proficient",
  units: [
    {
      title: "Unit 1: मुहावरे और अभिव्यक्तियाँ",
      lessons: [
        {
          title: "Idiomatic Expressions",
          activities: [
            {
              type: "vocabulary",
              word: "आँखों का तारा",
              pronunciation: "aankhon ka taara",
              meaning: "The apple of someone's eye",
              example: "वह अपनी माँ की आँखों का तारा है।",
              exampleMeaning: "He is the apple of his mother's eye.",
            },
            {
              type: "quiz",
              question: 'What does "आँखों का तारा" mean figuratively?',
              options: [
                "Someone very dear",
                "Someone very angry",
                "Someone very tired",
                "Someone unknown",
              ],
              answer: "Someone very dear",
            },
            {
              type: "vocabulary",
              word: "दाँत खट्टे करना",
              pronunciation: "daant khatte karna",
              meaning: "To defeat someone decisively",
              example: "टीम ने विरोधियों के दाँत खट्टे कर दिए।",
              exampleMeaning: "The team defeated its opponents decisively.",
            },
            {
              type: "quiz",
              question: 'What does "दाँत खट्टे करना" mean?',
              options: [
                "To defeat someone decisively",
                "To eat something sour",
                "To make someone laugh",
                "To help someone",
              ],
              answer: "To defeat someone decisively",
            },
          ],
        },
        {
          title: "Subtle Expressions",
          activities: [
            {
              type: "vocabulary",
              word: "बाल-बाल बचना",
              pronunciation: "baal-baal bachna",
              meaning: "To have a narrow escape",
              example: "वह दुर्घटना में बाल-बाल बच गया।",
              exampleMeaning: "He had a narrow escape in the accident.",
            },
            {
              type: "quiz",
              question: 'What does "बाल-बाल बचना" mean?',
              options: [
                "To have a narrow escape",
                "To win a competition",
                "To lose something",
                "To arrive early",
              ],
              answer: "To have a narrow escape",
            },
            {
              type: "vocabulary",
              word: "नौ दो ग्यारह होना",
              pronunciation: "nau do gyarah hona",
              meaning: "To run away quickly",
              example: "पुलिस को देखकर चोर नौ दो ग्यारह हो गया।",
              exampleMeaning: "The thief ran away quickly after seeing the police.",
            },
            {
              type: "quiz",
              question: 'What does "नौ दो ग्यारह होना" mean?',
              options: [
                "To run away quickly",
                "To count numbers",
                "To become successful",
                "To work together",
              ],
              answer: "To run away quickly",
            },
          ],
        },
      ],
    },
    {
      title: "Unit 2: विशेषज्ञ संचार",
      lessons: [
        {
          title: "Formal and Professional Language",
          activities: [
            {
              type: "vocabulary",
              word: "सादर निवेदन",
              pronunciation: "saadar nivedan",
              meaning: "Respectful request",
              example: "आपसे सादर निवेदन है कि समय पर पहुँचें।",
              exampleMeaning: "I respectfully request you to arrive on time.",
            },
            {
              type: "quiz",
              question: 'What does "सादर निवेदन" mean?',
              options: [
                "Respectful request",
                "Angry complaint",
                "Casual greeting",
                "Informal invitation",
              ],
              answer: "Respectful request",
            },
            {
              type: "vocabulary",
              word: "उपरोक्त",
              pronunciation: "uparokt",
              meaning: "Aforementioned / Above-mentioned",
              example: "उपरोक्त जानकारी सही है।",
              exampleMeaning: "The aforementioned information is correct.",
            },
            {
              type: "quiz",
              question: 'What does "उपरोक्त" mean?',
              options: [
                "Aforementioned",
                "Upcoming",
                "Unrelated",
                "Uncertain",
              ],
              answer: "Aforementioned",
            },
          ],
        },
        {
          title: "Mastering Communication",
          activities: [
            {
              type: "vocabulary",
              word: "अंततः",
              pronunciation: "antatah",
              meaning: "Ultimately / Eventually",
              example: "अंततः हमें समाधान मिल गया।",
              exampleMeaning: "Ultimately, we found a solution.",
            },
            {
              type: "quiz",
              question: 'What does "अंततः" mean?',
              options: [
                "Initially",
                "Ultimately",
                "Meanwhile",
                "Immediately",
              ],
              answer: "Ultimately",
            },
            {
              type: "vocabulary",
              word: "यथासंभव",
              pronunciation: "yathasambhav",
              meaning: "As far as possible",
              example: "कृपया यथासंभव जल्दी उत्तर दें।",
              exampleMeaning: "Please respond as soon as possible.",
            },
            {
              type: "quiz",
              question: 'What does "यथासंभव" mean?',
              options: [
                "As far as possible",
                "Never again",
                "Without reason",
                "By accident",
              ],
              answer: "As far as possible",
            },
          ],
        },
      ],
    },
  ],
},

  ]

};



export default hindiCourse;