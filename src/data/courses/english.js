const englishCourse = {
  language: "English",
  code: "en",
  levels: [
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: First Words",
          lessons: [
            {
              title: "Greetings",
              activities: [
                { type: "vocabulary", word: "Hello", pronunciation: "heh-LOH", meaning: "नमस्ते", example: "Hello, how are you?", exampleMeaning: "नमस्ते, आप कैसे हैं?" },
                { type: "quiz", question: '"Hello" का हिंदी अर्थ क्या है?', options: ["अलविदा", "नमस्ते", "धन्यवाद", "माफ़ कीजिए"], answer: "नमस्ते" },
                { type: "vocabulary", word: "Good morning", pronunciation: "good MOR-ning", meaning: "सुप्रभात", example: "Good morning, everyone!", exampleMeaning: "सभी को सुप्रभात!" },
                { type: "quiz", question: '"Good morning" कब कहते हैं?', options: ["सुबह", "रात में", "विदा लेते समय", "खाना खाते समय"], answer: "सुबह" },
                { type: "vocabulary", word: "Good evening", pronunciation: "good EEV-ning", meaning: "शुभ संध्या", example: "Good evening, sir.", exampleMeaning: "शुभ संध्या, सर।" },
                { type: "quiz", question: '"Good evening" का अर्थ क्या है?', options: ["सुप्रभात", "शुभ संध्या", "शुभ रात्रि", "अलविदा"], answer: "शुभ संध्या" },
                { type: "vocabulary", word: "Goodbye", pronunciation: "good-BYE", meaning: "अलविदा", example: "Goodbye, see you tomorrow!", exampleMeaning: "अलविदा, कल मिलते हैं!" },
                { type: "quiz", question: '"Goodbye" कब कहते हैं?', options: ["मिलते समय", "विदा लेते समय", "धन्यवाद देते समय", "खाना माँगते समय"], answer: "विदा लेते समय" }
              ]
            },
            {
              title: "Introducing Yourself",
              activities: [
                { type: "vocabulary", word: "My name is", pronunciation: "my naym iz", meaning: "मेरा नाम है", example: "My name is Arish.", exampleMeaning: "मेरा नाम अरिश है।" },
                { type: "quiz", question: '"My name is Arish" का अर्थ क्या है?', options: ["मैं अरिश से हूँ", "मेरा नाम अरिश है", "मैं अरिश को जानता हूँ", "अरिश मेरा दोस्त है"], answer: "मेरा नाम अरिश है" },
                { type: "vocabulary", word: "I am", pronunciation: "eye am", meaning: "मैं हूँ", example: "I am a student.", exampleMeaning: "मैं एक विद्यार्थी हूँ।" },
                { type: "quiz", question: '"I am a student" का सही अर्थ चुनें।', options: ["वह विद्यार्थी है", "मैं एक विद्यार्थी हूँ", "तुम शिक्षक हो", "मैं घर पर हूँ"], answer: "मैं एक विद्यार्थी हूँ" },
                { type: "vocabulary", word: "Where are you from?", pronunciation: "wair ar yoo frum", meaning: "आप कहाँ से हैं?", example: "Where are you from? I am from India.", exampleMeaning: "आप कहाँ से हैं? मैं भारत से हूँ।" },
                { type: "quiz", question: '"Where are you from?" क्या पूछता है?', options: ["नाम", "उम्र", "आप कहाँ से हैं", "पसंद"], answer: "आप कहाँ से हैं" },
                { type: "vocabulary", word: "Nice to meet you", pronunciation: "nाइस tu meet yoo", meaning: "आपसे मिलकर अच्छा लगा", example: "Nice to meet you, Sara.", exampleMeaning: "सारा, आपसे मिलकर अच्छा लगा।" },
                { type: "quiz", question: '"Nice to meet you" कब कहते हैं?', options: ["पहली बार मिलने पर", "विदा लेते समय", "सोते समय", "खाना खाते समय"], answer: "पहली बार मिलने पर" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Everyday Basics",
          lessons: [
            {
              title: "Numbers and Age",
              activities: [
                { type: "vocabulary", word: "One", pronunciation: "wun", meaning: "एक", example: "I have one book.", exampleMeaning: "मेरे पास एक किताब है।" },
                { type: "quiz", question: '"One" कौन-सी संख्या है?', options: ["एक", "दो", "तीन", "चार"], answer: "एक" },
                { type: "vocabulary", word: "How old are you?", pronunciation: "how ohld ar yoo", meaning: "आपकी उम्र कितनी है?", example: "How old are you? I am sixteen.", exampleMeaning: "आपकी उम्र कितनी है? मेरी उम्र सोलह साल है।" },
                { type: "quiz", question: '"How old are you?" क्या पूछता है?', options: ["नाम", "उम्र", "पता", "पेशा"], answer: "उम्र" },
                { type: "vocabulary", word: "Today", pronunciation: "tuh-DAY", meaning: "आज", example: "Today is Monday.", exampleMeaning: "आज सोमवार है।" },
                { type: "quiz", question: '"Today" का अर्थ क्या है?', options: ["कल", "आज", "परसों", "अभी"], answer: "आज" }
              ]
            },
            {
              title: "Common Objects",
              activities: [
                { type: "vocabulary", word: "Book", pronunciation: "book", meaning: "किताब", example: "This is my book.", exampleMeaning: "यह मेरी किताब है।" },
                { type: "quiz", question: '"Book" का अर्थ क्या है?', options: ["किताब", "कलम", "मेज़", "कुर्सी"], answer: "किताब" },
                { type: "vocabulary", word: "This is", pronunciation: "this iz", meaning: "यह है", example: "This is my bag.", exampleMeaning: "यह मेरा बैग है।" },
                { type: "quiz", question: '"This is my bag" का अर्थ क्या है?', options: ["वह मेरा बैग है", "यह मेरा बैग है", "मेरा बैग कहाँ है", "यह तुम्हारा बैग है"], answer: "यह मेरा बैग है" },
                { type: "vocabulary", word: "That is", pronunciation: "that iz", meaning: "वह है", example: "That is a school.", exampleMeaning: "वह एक स्कूल है।" },
                { type: "quiz", question: '"That is a school" का अर्थ क्या है?', options: ["यह एक घर है", "वह एक स्कूल है", "यह एक स्कूल है", "वह एक दुकान है"], answer: "वह एक स्कूल है" }
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
          title: "Unit 1: Everyday Life",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                { type: "vocabulary", word: "Wake up", pronunciation: "wayk up", meaning: "जागना", example: "I wake up at seven.", exampleMeaning: "मैं सात बजे जागता हूँ।" },
                { type: "quiz", question: '"Wake up" का अर्थ क्या है?', options: ["सोना", "जागना", "चलना", "खाना"], answer: "जागना" },
                { type: "vocabulary", word: "Get dressed", pronunciation: "get drest", meaning: "कपड़े पहनना", example: "I get dressed after breakfast.", exampleMeaning: "मैं नाश्ते के बाद कपड़े पहनता हूँ।" },
                { type: "quiz", question: '"Get dressed" का अर्थ क्या है?', options: ["कपड़े धोना", "कपड़े पहनना", "कपड़े खरीदना", "कपड़े उतारना"], answer: "कपड़े पहनना" },
                { type: "vocabulary", word: "Usually", pronunciation: "YOO-zhoo-uh-lee", meaning: "आमतौर पर", example: "I usually walk to school.", exampleMeaning: "मैं आमतौर पर पैदल स्कूल जाता हूँ।" },
                { type: "quiz", question: '"Usually" का अर्थ क्या है?', options: ["कभी नहीं", "आमतौर पर", "अचानक", "शायद"], answer: "आमतौर पर" }
              ]
            },
            {
              title: "Present Simple",
              activities: [
                { type: "vocabulary", word: "I study", pronunciation: "eye STUH-dee", meaning: "मैं पढ़ाई करता हूँ", example: "I study English every day.", exampleMeaning: "मैं हर दिन अंग्रेज़ी पढ़ता हूँ।" },
                { type: "quiz", question: '"I study English every day" कौन-सा tense है?', options: ["Present Simple", "Past Simple", "Future Simple", "Present Continuous"], answer: "Present Simple" },
                { type: "vocabulary", word: "She works", pronunciation: "shee works", meaning: "वह काम करती है", example: "She works in a hospital.", exampleMeaning: "वह एक अस्पताल में काम करती है।" },
                { type: "quiz", question: "Present Simple में he/she/it के साथ verb में आमतौर पर क्या जुड़ता है?", options: ["-ing", "-s या -es", "-ed", "कुछ नहीं"], answer: "-s या -es" },
                { type: "vocabulary", word: "Do you like...?", pronunciation: "doo yoo lyk", meaning: "क्या आपको ... पसंद है?", example: "Do you like music?", exampleMeaning: "क्या आपको संगीत पसंद है?" },
                { type: "quiz", question: '"Do you like music?" क्या पूछता है?', options: ["संगीत कहाँ है?", "क्या आपको संगीत पसंद है?", "क्या आप संगीत बजाते हैं?", "आप कौन-सा संगीत सुनते हैं?"], answer: "क्या आपको संगीत पसंद है?" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Around Town",
          lessons: [
            {
              title: "Asking for Directions",
              activities: [
                { type: "vocabulary", word: "Where is...?", pronunciation: "wair iz", meaning: "... कहाँ है?", example: "Where is the bus stop?", exampleMeaning: "बस स्टॉप कहाँ है?" },
                { type: "quiz", question: '"Where is the bus stop?" क्या पूछता है?', options: ["बस स्टॉप कहाँ है?", "बस कब आएगी?", "बस कितने की है?", "बस किसकी है?"], answer: "बस स्टॉप कहाँ है?" },
                { type: "vocabulary", word: "Turn left", pronunciation: "turn left", meaning: "बाएँ मुड़ें", example: "Turn left at the corner.", exampleMeaning: "कोने पर बाएँ मुड़ें।" },
                { type: "quiz", question: '"Turn left" का अर्थ क्या है?', options: ["दाएँ मुड़ें", "बाएँ मुड़ें", "सीधे जाएँ", "वापस जाएँ"], answer: "बाएँ मुड़ें" },
                { type: "vocabulary", word: "Go straight", pronunciation: "goh strayt", meaning: "सीधे जाएँ", example: "Go straight for two minutes.", exampleMeaning: "दो मिनट तक सीधे जाएँ।" },
                { type: "quiz", question: '"Go straight" का अर्थ क्या है?', options: ["सीधे जाएँ", "पीछे जाएँ", "बाएँ मुड़ें", "रुक जाएँ"], answer: "सीधे जाएँ" }
              ]
            },
            {
              title: "Shopping and Prices",
              activities: [
                { type: "vocabulary", word: "How much is it?", pronunciation: "how much iz it", meaning: "यह कितने का है?", example: "How much is this shirt?", exampleMeaning: "यह कमीज़ कितने की है?" },
                { type: "quiz", question: '"How much is it?" का उपयोग किसलिए होता है?', options: ["कीमत पूछने के लिए", "रंग पूछने के लिए", "नाम पूछने के लिए", "पता पूछने के लिए"], answer: "कीमत पूछने के लिए" },
                { type: "vocabulary", word: "Expensive", pronunciation: "ik-SPEN-siv", meaning: "महँगा", example: "This phone is expensive.", exampleMeaning: "यह फोन महँगा है।" },
                { type: "quiz", question: '"Expensive" का अर्थ क्या है?', options: ["सस्ता", "महँगा", "मुफ़्त", "पुराना"], answer: "महँगा" },
                { type: "vocabulary", word: "Can I have...?", pronunciation: "kan eye hav", meaning: "क्या मुझे ... मिल सकता है?", example: "Can I have a bottle of water?", exampleMeaning: "क्या मुझे पानी की एक बोतल मिल सकती है?" },
                { type: "quiz", question: '"Can I have a bottle of water?" क्या है?', options: ["अनुमति या अनुरोध", "शिकायत", "अभिवादन", "विदाई"], answer: "अनुमति या अनुरोध" }
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
          title: "Unit 1: Experiences",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                { type: "vocabulary", word: "Visited", pronunciation: "VIZ-i-tid", meaning: "मुलाक़ात की / घूमने गया", example: "I visited Delhi last year.", exampleMeaning: "मैं पिछले साल दिल्ली गया था।" },
                { type: "quiz", question: '"I visited Delhi last year" कौन-से समय की बात करता है?', options: ["वर्तमान", "भविष्य", "भूतकाल", "आदेश"], answer: "भूतकाल" },
                { type: "vocabulary", word: "Experience", pronunciation: "ik-SPEER-ee-uhns", meaning: "अनुभव", example: "It was a great experience.", exampleMeaning: "यह एक शानदार अनुभव था।" },
                { type: "quiz", question: '"Experience" का अर्थ क्या है?', options: ["योजना", "अनुभव", "सवाल", "नियम"], answer: "अनुभव" },
                { type: "vocabulary", word: "Have you ever...?", pronunciation: "hav yoo EV-er", meaning: "क्या आपने कभी ...?", example: "Have you ever visited London?", exampleMeaning: "क्या आपने कभी लंदन की यात्रा की है?" },
                { type: "quiz", question: '"Have you ever...?" किसलिए उपयोग होता है?', options: ["जीवन के अनुभव पूछने के लिए", "आदेश देने के लिए", "समय बताने के लिए", "विदा लेने के लिए"], answer: "जीवन के अनुभव पूछने के लिए" }
              ]
            },
            {
              title: "Future Plans",
              activities: [
                { type: "vocabulary", word: "Going to", pronunciation: "GOH-ing too", meaning: "करने वाला / करने जा रहा", example: "I am going to learn French.", exampleMeaning: "मैं फ्रेंच सीखने जा रहा हूँ।" },
                { type: "quiz", question: '"I am going to learn French" किस बारे में है?', options: ["भूतकाल", "वर्तमान आदत", "भविष्य की योजना", "आदेश"], answer: "भविष्य की योजना" },
                { type: "vocabulary", word: "I plan to", pronunciation: "eye plan too", meaning: "मैं ... की योजना बनाता हूँ", example: "I plan to visit my grandparents.", exampleMeaning: "मैं अपने दादा-दादी से मिलने की योजना बना रहा हूँ।" },
                { type: "quiz", question: '"I plan to" का उपयोग किसलिए होता है?', options: ["योजना बताने के लिए", "माफ़ी माँगने के लिए", "अतीत बताने के लिए", "राय से असहमत होने के लिए"], answer: "योजना बताने के लिए" },
                { type: "vocabulary", word: "Hopefully", pronunciation: "HOHP-fuh-lee", meaning: "उम्मीद है", example: "Hopefully, we will finish on time.", exampleMeaning: "उम्मीद है, हम समय पर पूरा कर लेंगे।" },
                { type: "quiz", question: '"Hopefully" किस भाव को व्यक्त करता है?', options: ["उम्मीद", "नाराज़गी", "डर", "आदेश"], answer: "उम्मीद" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Communication",
          lessons: [
            {
              title: "Giving Advice",
              activities: [
                { type: "vocabulary", word: "You should", pronunciation: "yoo shood", meaning: "आपको चाहिए", example: "You should get more sleep.", exampleMeaning: "आपको अधिक नींद लेनी चाहिए।" },
                { type: "quiz", question: '"You should" किसलिए उपयोग होता है?', options: ["सलाह देने के लिए", "अतीत बताने के लिए", "नाम पूछने के लिए", "विदाई के लिए"], answer: "सलाह देने के लिए" },
                { type: "vocabulary", word: "You could", pronunciation: "yoo kood", meaning: "आप ... कर सकते हैं", example: "You could try a different method.", exampleMeaning: "आप कोई दूसरा तरीका आज़मा सकते हैं।" },
                { type: "quiz", question: '"You could try a different method" क्या व्यक्त करता है?', options: ["एक सुझाव", "एक आदेश", "एक शिकायत", "एक विदाई"], answer: "एक सुझाव" },
                { type: "vocabulary", word: "If I were you", pronunciation: "if eye wer yoo", meaning: "अगर मैं आपकी जगह होता", example: "If I were you, I would ask for help.", exampleMeaning: "अगर मैं आपकी जगह होता, तो मदद माँगता।" },
                { type: "quiz", question: '"If I were you" किसलिए उपयोग होता है?', options: ["सलाह देने के लिए", "अपना नाम बताने के लिए", "समय पूछने के लिए", "धन्यवाद देने के लिए"], answer: "सलाह देने के लिए" }
              ]
            },
            {
              title: "Connecting Ideas",
              activities: [
                { type: "vocabulary", word: "Because", pronunciation: "bih-KAWZ", meaning: "क्योंकि", example: "I stayed home because it was raining.", exampleMeaning: "मैं घर पर रहा क्योंकि बारिश हो रही थी।" },
                { type: "quiz", question: '"Because" का अर्थ क्या है?', options: ["लेकिन", "क्योंकि", "इसलिए", "हालाँकि"], answer: "क्योंकि" },
                { type: "vocabulary", word: "Although", pronunciation: "awl-THOH", meaning: "हालाँकि", example: "Although it was cold, we went outside.", exampleMeaning: "हालाँकि ठंड थी, हम बाहर गए।" },
                { type: "quiz", question: '"Although" किस संबंध को बताता है?', options: ["विरोध / रियायत", "कारण", "समय", "स्थान"], answer: "विरोध / रियायत" },
                { type: "vocabulary", word: "As a result", pronunciation: "az uh ri-ZULT", meaning: "परिणामस्वरूप", example: "He practiced daily. As a result, he improved.", exampleMeaning: "उसने रोज़ अभ्यास किया। परिणामस्वरूप, वह बेहतर हुआ।" },
                { type: "quiz", question: '"As a result" का अर्थ क्या है?', options: ["उदाहरण के लिए", "परिणामस्वरूप", "इसके बावजूद", "इसके अलावा"], answer: "परिणामस्वरूप" }
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
          title: "Unit 1: Expressing Opinions",
          lessons: [
            {
              title: "Giving Your Opinion",
              activities: [
                { type: "vocabulary", word: "In my opinion", pronunciation: "in my uh-PIN-yuhn", meaning: "मेरी राय में", example: "In my opinion, learning languages is useful.", exampleMeaning: "मेरी राय में, भाषाएँ सीखना उपयोगी है।" },
                { type: "quiz", question: '"In my opinion" का उपयोग किसलिए होता है?', options: ["राय बताने के लिए", "माफ़ी माँगने के लिए", "विदा लेने के लिए", "समय पूछने के लिए"], answer: "राय बताने के लिए" },
                { type: "vocabulary", word: "From my perspective", pronunciation: "frum my per-SPEK-tiv", meaning: "मेरे दृष्टिकोण से", example: "From my perspective, teamwork is essential.", exampleMeaning: "मेरे दृष्टिकोण से, टीमवर्क आवश्यक है।" },
                { type: "quiz", question: '"From my perspective" का अर्थ क्या है?', options: ["मेरे दृष्टिकोण से", "मेरे घर के पास", "मेरे समय में", "मेरे दोस्त के साथ"], answer: "मेरे दृष्टिकोण से" },
                { type: "vocabulary", word: "I would argue that", pronunciation: "eye wood AR-gyoo that", meaning: "मैं यह तर्क दूँगा कि", example: "I would argue that education should be accessible to everyone.", exampleMeaning: "मैं यह तर्क दूँगा कि शिक्षा सभी के लिए सुलभ होनी चाहिए।" },
                { type: "quiz", question: '"I would argue that" किसलिए उपयोग होता है?', options: ["तर्क प्रस्तुत करने के लिए", "अभिवादन के लिए", "माफ़ी माँगने के लिए", "समय पूछने के लिए"], answer: "तर्क प्रस्तुत करने के लिए" }
              ]
            },
            {
              title: "Agreeing and Disagreeing",
              activities: [
                { type: "vocabulary", word: "I completely agree", pronunciation: "eye kum-PLEET-lee uh-GREE", meaning: "मैं पूरी तरह सहमत हूँ", example: "I completely agree with your suggestion.", exampleMeaning: "मैं आपके सुझाव से पूरी तरह सहमत हूँ।" },
                { type: "quiz", question: '"I completely agree" क्या व्यक्त करता है?', options: ["पूरी सहमति", "असहमति", "अनिश्चितता", "शिकायत"], answer: "पूरी सहमति" },
                { type: "vocabulary", word: "I see your point, but", pronunciation: "eye see yor point but", meaning: "मैं आपकी बात समझता हूँ, लेकिन", example: "I see your point, but I have a different opinion.", exampleMeaning: "मैं आपकी बात समझता हूँ, लेकिन मेरी राय अलग है।" },
                { type: "quiz", question: "यह वाक्य किस प्रकार की प्रतिक्रिया है?", options: ["विनम्र असहमति", "पूरी सहमति", "आदेश", "अभिवादन"], answer: "विनम्र असहमति" },
                { type: "vocabulary", word: "To some extent", pronunciation: "too sum ik-STENT", meaning: "कुछ हद तक", example: "I agree with you to some extent.", exampleMeaning: "मैं कुछ हद तक आपसे सहमत हूँ।" },
                { type: "quiz", question: '"To some extent" का अर्थ क्या है?', options: ["पूरी तरह", "कुछ हद तक", "बिल्कुल नहीं", "अचानक"], answer: "कुछ हद तक" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Work and Study",
          lessons: [
            {
              title: "Professional Communication",
              activities: [
                { type: "vocabulary", word: "I am writing to", pronunciation: "eye am RY-ting too", meaning: "मैं ... के लिए लिख रहा हूँ", example: "I am writing to ask about the position.", exampleMeaning: "मैं इस पद के बारे में पूछने के लिए लिख रहा हूँ।" },
                { type: "quiz", question: '"I am writing to" आमतौर पर कहाँ उपयोग होता है?', options: ["औपचारिक ईमेल", "दोस्तों के खेल में", "अभिवादन में", "खरीदारी में"], answer: "औपचारिक ईमेल" },
                { type: "vocabulary", word: "I would appreciate", pronunciation: "eye wood uh-PREE-shee-ayt", meaning: "मैं आभारी रहूँगा", example: "I would appreciate your feedback.", exampleMeaning: "मैं आपकी प्रतिक्रिया के लिए आभारी रहूँगा।" },
                { type: "quiz", question: '"I would appreciate your feedback" क्या है?', options: ["विनम्र अनुरोध", "आदेश", "शिकायत", "विदाई"], answer: "विनम्र अनुरोध" },
                { type: "vocabulary", word: "Please find attached", pronunciation: "pleez fynd uh-TACHT", meaning: "कृपया संलग्न देखें", example: "Please find attached my resume.", exampleMeaning: "कृपया मेरा रिज़्यूमे संलग्न देखें।" },
                { type: "quiz", question: '"Please find attached" का उपयोग किसलिए होता है?', options: ["फ़ाइल संलग्न होने की सूचना देने के लिए", "किसी से मिलने के लिए", "राय बताने के लिए", "समय पूछने के लिए"], answer: "फ़ाइल संलग्न होने की सूचना देने के लिए" }
              ]
            },
            {
              title: "Problem Solving",
              activities: [
                { type: "vocabulary", word: "One possible solution", pronunciation: "wun POS-uh-bul suh-LOO-shun", meaning: "एक संभावित समाधान", example: "One possible solution is to reduce costs.", exampleMeaning: "एक संभावित समाधान खर्च कम करना है।" },
                { type: "quiz", question: '"One possible solution" का अर्थ क्या है?', options: ["एक संभावित समाधान", "एक नई समस्या", "एक पुरानी योजना", "एक कठिन सवाल"], answer: "एक संभावित समाधान" },
                { type: "vocabulary", word: "On the other hand", pronunciation: "on thee UTH-er hand", meaning: "दूसरी ओर", example: "The idea is expensive. On the other hand, it may save time.", exampleMeaning: "यह विचार महँगा है। दूसरी ओर, यह समय बचा सकता है।" },
                { type: "quiz", question: '"On the other hand" किसलिए उपयोग होता है?', options: ["दूसरा पक्ष प्रस्तुत करने के लिए", "निष्कर्ष बताने के लिए", "अभिवादन के लिए", "समय बताने के लिए"], answer: "दूसरा पक्ष प्रस्तुत करने के लिए" },
                { type: "vocabulary", word: "Taking everything into account", pronunciation: "TAY-king EV-ree-thing IN-too uh-KOWNT", meaning: "सभी बातों को ध्यान में रखते हुए", example: "Taking everything into account, this is the best option.", exampleMeaning: "सभी बातों को ध्यान में रखते हुए, यह सबसे अच्छा विकल्प है।" },
                { type: "quiz", question: '"Taking everything into account" किसलिए उपयोग होता है?', options: ["समग्र निष्कर्ष देने के लिए", "नाम पूछने के लिए", "आदेश देने के लिए", "विदाई लेने के लिए"], answer: "समग्र निष्कर्ष देने के लिए" }
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
          title: "Unit 1: Fluent Communication",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                { type: "vocabulary", word: "Nevertheless", pronunciation: "nev-er-thuh-LES", meaning: "इसके बावजूद", example: "The task was challenging; nevertheless, we succeeded.", exampleMeaning: "काम चुनौतीपूर्ण था; इसके बावजूद, हम सफल हुए।" },
                { type: "quiz", question: '"Nevertheless" का सबसे सही अर्थ क्या है?', options: ["इसलिए", "इसके बावजूद", "उदाहरण के लिए", "इसके अलावा"], answer: "इसके बावजूद" },
                { type: "vocabulary", word: "Furthermore", pronunciation: "fur-ther-MOR", meaning: "इसके अलावा", example: "The course is useful. Furthermore, it is free.", exampleMeaning: "यह कोर्स उपयोगी है। इसके अलावा, यह मुफ़्त है।" },
                { type: "quiz", question: '"Furthermore" का अर्थ क्या है?', options: ["इसके अलावा", "इसके बावजूद", "इसलिए", "क्योंकि"], answer: "इसके अलावा" },
                { type: "vocabulary", word: "In light of", pronunciation: "in lyt uhv", meaning: "को ध्यान में रखते हुए", example: "In light of recent events, we changed our plans.", exampleMeaning: "हाल की घटनाओं को ध्यान में रखते हुए, हमने अपनी योजनाएँ बदलीं।" },
                { type: "quiz", question: '"In light of" का उपयोग किसलिए होता है?', options: ["जानकारी को ध्यान में रखने के लिए", "समय पूछने के लिए", "विदाई लेने के लिए", "आदेश देने के लिए"], answer: "जानकारी को ध्यान में रखने के लिए" }
              ]
            },
            {
              title: "Persuasive Language",
              activities: [
                { type: "vocabulary", word: "It is worth considering", pronunciation: "it iz wurth kun-SID-er-ing", meaning: "इस पर विचार करना उचित है", example: "It is worth considering a different approach.", exampleMeaning: "एक अलग दृष्टिकोण पर विचार करना उचित है।" },
                { type: "quiz", question: '"It is worth considering" क्या व्यक्त करता है?', options: ["विचार करने का सुझाव", "एक आदेश", "एक विदाई", "एक शिकायत"], answer: "विचार करने का सुझाव" },
                { type: "vocabulary", word: "This highlights", pronunciation: "this HY-lyts", meaning: "यह उजागर करता है", example: "This highlights the importance of teamwork.", exampleMeaning: "यह टीमवर्क के महत्व को उजागर करता है।" },
                { type: "quiz", question: '"This highlights" का अर्थ क्या है?', options: ["यह उजागर करता है", "यह छिपाता है", "यह समाप्त करता है", "यह भूल जाता है"], answer: "यह उजागर करता है" },
                { type: "vocabulary", word: "There is compelling evidence", pronunciation: "thair iz kum-PEL-ing EV-i-dens", meaning: "इसके समर्थन में ठोस प्रमाण हैं", example: "There is compelling evidence to support this claim.", exampleMeaning: "इस दावे के समर्थन में ठोस प्रमाण हैं।" },
                { type: "quiz", question: '"Compelling evidence" का अर्थ क्या है?', options: ["कमज़ोर प्रमाण", "ठोस और प्रभावशाली प्रमाण", "एक राय", "एक अनुमान"], answer: "ठोस और प्रभावशाली प्रमाण" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Academic English",
          lessons: [
            {
              title: "Academic Vocabulary",
              activities: [
                { type: "vocabulary", word: "Hypothesis", pronunciation: "hy-POTH-uh-sis", meaning: "परिकल्पना", example: "The researchers tested their hypothesis.", exampleMeaning: "शोधकर्ताओं ने अपनी परिकल्पना की जाँच की।" },
                { type: "quiz", question: '"Hypothesis" का अर्थ क्या है?', options: ["परिकल्पना", "निष्कर्ष", "प्रमाण", "सर्वेक्षण"], answer: "परिकल्पना" },
                { type: "vocabulary", word: "Significant", pronunciation: "sig-NIF-i-kunt", meaning: "महत्वपूर्ण / उल्लेखनीय", example: "The study found significant results.", exampleMeaning: "अध्ययन में महत्वपूर्ण परिणाम मिले।" },
                { type: "quiz", question: '"Significant" का अर्थ क्या है?', options: ["महत्वहीन", "महत्वपूर्ण", "असंभव", "अस्पष्ट"], answer: "महत्वपूर्ण" },
                { type: "vocabulary", word: "Consequently", pronunciation: "KON-suh-kwent-lee", meaning: "परिणामस्वरूप", example: "The data was incomplete; consequently, the conclusion was limited.", exampleMeaning: "डेटा अधूरा था; परिणामस्वरूप, निष्कर्ष सीमित था।" },
                { type: "quiz", question: '"Consequently" किस संबंध को बताता है?', options: ["कारण और परिणाम", "विरोध", "उदाहरण", "समय"], answer: "कारण और परिणाम" }
              ]
            },
            {
              title: "Formal Writing",
              activities: [
                { type: "vocabulary", word: "With regard to", pronunciation: "with ri-GARD too", meaning: "के संबंध में", example: "With regard to your request, we will respond soon.", exampleMeaning: "आपके अनुरोध के संबंध में, हम जल्द जवाब देंगे।" },
                { type: "quiz", question: '"With regard to" का अर्थ क्या है?', options: ["के संबंध में", "के बावजूद", "के कारण", "के बाद"], answer: "के संबंध में" },
                { type: "vocabulary", word: "I would like to clarify", pronunciation: "eye wood lyk too KLAIR-uh-fy", meaning: "मैं स्पष्ट करना चाहूँगा", example: "I would like to clarify one important point.", exampleMeaning: "मैं एक महत्वपूर्ण बिंदु स्पष्ट करना चाहूँगा।" },
                { type: "quiz", question: '"I would like to clarify" किसलिए उपयोग होता है?', options: ["बात स्पष्ट करने के लिए", "विदाई लेने के लिए", "आदेश देने के लिए", "धन्यवाद देने के लिए"], answer: "बात स्पष्ट करने के लिए" },
                { type: "vocabulary", word: "In conclusion", pronunciation: "in kun-KLOO-zhun", meaning: "निष्कर्षतः", example: "In conclusion, further research is needed.", exampleMeaning: "निष्कर्षतः, आगे और शोध की आवश्यकता है।" },
                { type: "quiz", question: '"In conclusion" आमतौर पर कहाँ उपयोग होता है?', options: ["निष्कर्ष के आरंभ में", "अभिवादन में", "प्रश्न पूछते समय", "किसी का नाम बताते समय"], answer: "निष्कर्ष के आरंभ में" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "C2",
      title: "Proficient",
      units: [
        {
          title: "Unit 1: Idioms and Nuance",
          lessons: [
            {
              title: "Advanced Idioms",
              activities: [
                { type: "vocabulary", word: "A blessing in disguise", pronunciation: "uh BLESS-ing in dis-GYZE", meaning: "ऐसी घटना जो पहले बुरी लगे लेकिन बाद में अच्छी साबित हो", example: "Losing that job was a blessing in disguise.", exampleMeaning: "वह नौकरी खोना अंततः एक अच्छी घटना साबित हुई।" },
                { type: "quiz", question: '"A blessing in disguise" का भावार्थ क्या है?', options: ["छिपा हुआ खतरा", "बाद में अच्छा साबित होने वाली घटना", "एक बड़ी गलती", "एक कठिन निर्णय"], answer: "बाद में अच्छा साबित होने वाली घटना" },
                { type: "vocabulary", word: "To hit the nail on the head", pronunciation: "too hit the nayl on the hed", meaning: "बिल्कुल सही बात कहना", example: "You hit the nail on the head with that explanation.", exampleMeaning: "आपने उस व्याख्या में बिल्कुल सही बात कही।" },
                { type: "quiz", question: '"To hit the nail on the head" का अर्थ क्या है?', options: ["गलत होना", "बिल्कुल सही बात कहना", "बहस शुरू करना", "काम टालना"], answer: "बिल्कुल सही बात कहना" },
                { type: "vocabulary", word: "To read between the lines", pronunciation: "too reed bih-TWEEN the lynz", meaning: "कही गई बात के पीछे का अर्थ समझना", example: "You need to read between the lines to understand his message.", exampleMeaning: "उसका संदेश समझने के लिए आपको छिपा हुआ अर्थ समझना होगा।" },
                { type: "quiz", question: '"Read between the lines" का अर्थ क्या है?', options: ["तेज़ पढ़ना", "छिपा हुआ अर्थ समझना", "शब्दों को गिनना", "किताब बंद करना"], answer: "छिपा हुआ अर्थ समझना" }
              ]
            },
            {
              title: "Subtle Meaning",
              activities: [
                { type: "vocabulary", word: "Granted that", pronunciation: "GRAN-tid that", meaning: "यह मानते हुए कि", example: "Granted that the plan is expensive, it may still be worthwhile.", exampleMeaning: "यह मानते हुए कि योजना महँगी है, फिर भी यह उपयोगी हो सकती है।" },
                { type: "quiz", question: '"Granted that" किसलिए उपयोग होता है?', options: ["एक बात स्वीकार करके आगे तर्क देने के लिए", "विदाई लेने के लिए", "आदेश देने के लिए", "समय पूछने के लिए"], answer: "एक बात स्वीकार करके आगे तर्क देने के लिए" },
                { type: "vocabulary", word: "By no means", pronunciation: "by noh meenz", meaning: "किसी भी तरह से नहीं", example: "The task is by no means easy.", exampleMeaning: "यह काम किसी भी तरह से आसान नहीं है।" },
                { type: "quiz", question: '"By no means" का अर्थ क्या है?', options: ["बिल्कुल", "किसी भी तरह से नहीं", "शायद", "कुछ हद तक"], answer: "किसी भी तरह से नहीं" },
                { type: "vocabulary", word: "Insofar as", pronunciation: "in-soh-FAR az", meaning: "जहाँ तक / जिस सीमा तक", example: "The proposal is useful insofar as it addresses the main problem.", exampleMeaning: "यह प्रस्ताव वहाँ तक उपयोगी है जहाँ तक यह मुख्य समस्या का समाधान करता है।" },
                { type: "quiz", question: '"Insofar as" किस भाव को व्यक्त करता है?', options: ["सीमा या हद", "समय", "अभिवादन", "आदेश"], answer: "सीमा या हद" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Expert Communication",
          lessons: [
            {
              title: "Precise and Formal Language",
              activities: [
                { type: "vocabulary", word: "Notwithstanding", pronunciation: "not-with-STAN-ding", meaning: "के बावजूद", example: "Notwithstanding the difficulties, the project was completed.", exampleMeaning: "कठिनाइयों के बावजूद, परियोजना पूरी हुई।" },
                { type: "quiz", question: '"Notwithstanding" का अर्थ क्या है?', options: ["के कारण", "के बावजूद", "इसलिए", "उदाहरण के लिए"], answer: "के बावजूद" },
                { type: "vocabulary", word: "To the extent that", pronunciation: "too thee ik-STENT that", meaning: "इस सीमा तक कि", example: "The policy is effective to the extent that it is properly implemented.", exampleMeaning: "यह नीति इस सीमा तक प्रभावी है कि इसे सही ढंग से लागू किया जाए।" },
                { type: "quiz", question: '"To the extent that" क्या व्यक्त करता है?', options: ["सीमा या शर्त", "अभिवादन", "विदाई", "समय"], answer: "सीमा या शर्त" },
                { type: "vocabulary", word: "For all intents and purposes", pronunciation: "for awl in-TENTS and PUR-puh-siz", meaning: "व्यावहारिक रूप से / लगभग पूरी तरह", example: "For all intents and purposes, the project is complete.", exampleMeaning: "व्यावहारिक रूप से, परियोजना पूरी हो चुकी है।" },
                { type: "quiz", question: '"For all intents and purposes" का अर्थ क्या है?', options: ["व्यावहारिक रूप से", "इसके विपरीत", "शुरुआत में", "संयोग से"], answer: "व्यावहारिक रूप से" }
              ]
            },
            {
              title: "Mastering Communication",
              activities: [
                { type: "vocabulary", word: "It goes without saying", pronunciation: "it gohz with-OWT SAY-ing", meaning: "यह कहने की आवश्यकता नहीं है", example: "It goes without saying that honesty is important.", exampleMeaning: "यह कहने की आवश्यकता नहीं है कि ईमानदारी महत्वपूर्ण है।" },
                { type: "quiz", question: '"It goes without saying" का भावार्थ क्या है?', options: ["यह स्पष्ट है", "यह असंभव है", "यह गलत है", "यह अनिश्चित है"], answer: "यह स्पष्ट है" },
                { type: "vocabulary", word: "To put it mildly", pronunciation: "too put it MYLD-lee", meaning: "कम करके कहें तो", example: "The presentation was, to put it mildly, disappointing.", exampleMeaning: "कम करके कहें तो, प्रस्तुति निराशाजनक थी।" },
                { type: "quiz", question: '"To put it mildly" किसलिए उपयोग होता है?', options: ["बात को नरम तरीके से कहने के लिए", "आदेश देने के लिए", "समय पूछने के लिए", "विदाई लेने के लिए"], answer: "बात को नरम तरीके से कहने के लिए" },
                { type: "vocabulary", word: "All things considered", pronunciation: "awl thingz kun-SID-erd", meaning: "सभी बातों पर विचार करने के बाद", example: "All things considered, it was a successful year.", exampleMeaning: "सभी बातों पर विचार करने के बाद, यह एक सफल वर्ष था।" },
                { type: "quiz", question: '"All things considered" का अर्थ क्या है?', options: ["सभी बातों पर विचार करने के बाद", "शुरुआत में", "बिना सोचे", "इसके बावजूद"], answer: "सभी बातों पर विचार करने के बाद" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default englishCourse;