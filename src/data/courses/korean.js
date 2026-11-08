const koreanCourse = {
  language: "Korean",
  code: "ko",
  levels: [
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: 첫 단어",
          lessons: [
            {
              title: "Greetings",
              activities: [
                {
                  type: "vocabulary",
                  word: "안녕하세요",
                  pronunciation: "annyeonghaseyo",
                  meaning: "नमस्ते",
                  example: "안녕하세요, 잘 지내세요?",
                  exampleMeaning: "नमस्ते, आप कैसे हैं?",
                },
                {
                  type: "quiz",
                  question: '"안녕하세요" का अर्थ क्या है?',
                  options: ["अलविदा", "नमस्ते", "धन्यवाद", "शुभ रात्रि"],
                  answer: "नमस्ते",
                },
                {
                  type: "vocabulary",
                  word: "좋은 아침이에요",
                  pronunciation: "joeun achimieyo",
                  meaning: "सुप्रभात",
                  example: "좋은 아침이에요!",
                  exampleMeaning: "सुप्रभात!",
                },
                {
                  type: "quiz",
                  question: '"좋은 아침이에요" का अर्थ क्या है?',
                  options: ["सुप्रभात", "शुभ रात्रि", "अलविदा", "धन्यवाद"],
                  answer: "सुप्रभात",
                },
                {
                  type: "vocabulary",
                  word: "감사합니다",
                  pronunciation: "gamsahamnida",
                  meaning: "धन्यवाद",
                  example: "도와주셔서 감사합니다.",
                  exampleMeaning: "मदद करने के लिए धन्यवाद।",
                },
                {
                  type: "quiz",
                  question: '"감사합니다" का अर्थ क्या है?',
                  options: ["कृपया", "धन्यवाद", "नमस्ते", "माफ़ कीजिए"],
                  answer: "धन्यवाद",
                },
                {
                  type: "vocabulary",
                  word: "안녕히 가세요",
                  pronunciation: "annyeonghi gaseyo",
                  meaning: "अलविदा (जाने वाले से)",
                  example: "안녕히 가세요!",
                  exampleMeaning: "अलविदा, अच्छे से जाइए!",
                },
                {
                  type: "quiz",
                  question: '"안녕히 가세요" कब कहते हैं?',
                  options: [
                    "किसी के जाने पर",
                    "किसी के आने पर",
                    "धन्यवाद देते समय",
                    "परिचय देते समय",
                  ],
                  answer: "किसी के जाने पर",
                },
                {
                  type: "vocabulary",
                  word: "안녕히 계세요",
                  pronunciation: "annyeonghi gyeseyo",
                  meaning: "अलविदा (रुकने वाले से)",
                  example: "안녕히 계세요!",
                  exampleMeaning: "अलविदा, अच्छे से रहिए!",
                },
              ],
            },
            {
              title: "자기소개",
              activities: [
                {
                  type: "vocabulary",
                  word: "제 이름은",
                  pronunciation: "je ireumeun",
                  meaning: "मेरा नाम है",
                  example: "제 이름은 아리쉬입니다.",
                  exampleMeaning: "मेरा नाम अरिश है।",
                },
                {
                  type: "quiz",
                  question: '"제 이름은 아리쉬입니다" का अर्थ क्या है?',
                  options: [
                    "मैं अरिश से हूँ",
                    "मेरा नाम अरिश है",
                    "मैं अरिश को जानता हूँ",
                    "अरिश मेरा दोस्त है",
                  ],
                  answer: "मेरा नाम अरिश है",
                },
                {
                  type: "vocabulary",
                  word: "저는 학생입니다",
                  pronunciation: "jeoneun haksaengimnida",
                  meaning: "मैं विद्यार्थी हूँ",
                  example: "저는 학생입니다.",
                  exampleMeaning: "मैं विद्यार्थी हूँ।",
                },
                {
                  type: "quiz",
                  question: '"저는 학생입니다" का अर्थ क्या है?',
                  options: [
                    "मैं शिक्षक हूँ",
                    "मैं विद्यार्थी हूँ",
                    "वह विद्यार्थी है",
                    "मैं घर पर हूँ",
                  ],
                  answer: "मैं विद्यार्थी हूँ",
                },
                {
                  type: "vocabulary",
                  word: "만나서 반갑습니다",
                  pronunciation: "mannaseo bangapseumnida",
                  meaning: "आपसे मिलकर खुशी हुई",
                  example: "만나서 반갑습니다!",
                  exampleMeaning: "आपसे मिलकर खुशी हुई!",
                },
                {
                  type: "quiz",
                  question: '"만나서 반갑습니다" कब कहते हैं?',
                  options: [
                    "पहली बार मिलने पर",
                    "विदा लेते समय",
                    "सोते समय",
                    "खाना खाते समय",
                  ],
                  answer: "पहली बार मिलने पर",
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
          title: "Unit 1: 일상생활",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                {
                  type: "vocabulary",
                  word: "일어나다",
                  pronunciation: "ireonada",
                  meaning: "जागना",
                  example: "일곱 시에 일어납니다.",
                  exampleMeaning: "मैं सात बजे जागता हूँ।",
                },
                {
                  type: "quiz",
                  question: '"일어나다" का अर्थ क्या है?',
                  options: ["सोना", "जागना", "खाना", "चलना"],
                  answer: "जागना",
                },
                {
                  type: "vocabulary",
                  word: "아침 식사",
                  pronunciation: "achim siksa",
                  meaning: "सुबह का नाश्ता",
                  example: "아침 식사를 합니다.",
                  exampleMeaning: "मैं नाश्ता करता हूँ।",
                },
                {
                  type: "quiz",
                  question: '"아침 식사" कौन-सा भोजन है?',
                  options: [
                    "सुबह का नाश्ता",
                    "दोपहर का खाना",
                    "रात का खाना",
                    "मिठाई",
                  ],
                  answer: "सुबह का नाश्ता",
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
          title: "Unit 1: 경험",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                {
                  type: "vocabulary",
                  word: "방문했어요",
                  pronunciation: "bangmunhaesseoyo",
                  meaning: "मैंने मुलाक़ात की / घूमकर देखा",
                  example: "작년에 서울을 방문했어요.",
                  exampleMeaning: "मैंने पिछले साल सियोल घूमकर देखा।",
                },
                {
                  type: "quiz",
                  question: '"방문했어요" किस समय की बात है?',
                  options: ["वर्तमान", "भविष्य", "भूतकाल", "आदेश"],
                  answer: "भूतकाल",
                },
                {
                  type: "vocabulary",
                  word: "경험",
                  pronunciation: "gyeongheom",
                  meaning: "अनुभव",
                  example: "좋은 경험이었어요.",
                  exampleMeaning: "यह एक अच्छा अनुभव था।",
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
          title: "Unit 1: 의견 표현",
          lessons: [
            {
              title: "Expressing Opinions",
              activities: [
                {
                  type: "vocabulary",
                  word: "제 생각에는",
                  pronunciation: "je saenggageneun",
                  meaning: "मेरी राय में",
                  example: "제 생각에는 언어 공부가 중요해요.",
                  exampleMeaning: "मेरी राय में, भाषा सीखना महत्वपूर्ण है।",
                },
                {
                  type: "quiz",
                  question: '"제 생각에는" का उपयोग किसलिए होता है?',
                  options: [
                    "राय बताने के लिए",
                    "माफ़ी माँगने के लिए",
                    "विदा लेने के लिए",
                    "समय पूछने के लिए",
                  ],
                  answer: "राय बताने के लिए",
                },
                {
                  type: "vocabulary",
                  word: "하지만",
                  pronunciation: "hajiman",
                  meaning: "हालाँकि / लेकिन",
                  example: "어렵지만 노력할 거예요.",
                  exampleMeaning: "यह कठिन है, लेकिन मैं कोशिश करूँगा।",
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
          title: "Unit 1: 고급 표현",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                {
                  type: "vocabulary",
                  word: "그럼에도 불구하고",
                  pronunciation: "geureomedo bulguhago",
                  meaning: "इसके बावजूद",
                  example: "어려웠어요. 그럼에도 불구하고 성공했어요.",
                  exampleMeaning: "यह कठिन था। इसके बावजूद, हम सफल हुए।",
                },
                {
                  type: "quiz",
                  question: '"그럼에도 불구하고" का अर्थ क्या है?',
                  options: ["इसलिए", "इसके बावजूद", "उदाहरण के लिए", "इसके अलावा"],
                  answer: "इसके बावजूद",
                },
                {
                  type: "vocabulary",
                  word: "게다가",
                  pronunciation: "gedaga",
                  meaning: "इसके अलावा",
                  example: "유용해요. 게다가 무료예요.",
                  exampleMeaning: "यह उपयोगी है। इसके अलावा, यह मुफ़्त है।",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default koreanCourse;