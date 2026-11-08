const portugueseCourse = {
  language: "Portuguese",
  code: "pt",
  levels: [
    {
      id: "A1",
      title: "Beginner",
      units: [
        {
          title: "Unit 1: Primeiras palavras",
          lessons: [
            {
              title: "Greetings",
              activities: [
                { type: "vocabulary", word: "Olá", pronunciation: "oh-LAH", meaning: "नमस्ते", example: "Olá, tudo bem?", exampleMeaning: "नमस्ते, सब ठीक है?" },
                { type: "quiz", question: '"Olá" का अर्थ क्या है?', options: ["अलविदा", "नमस्ते", "धन्यवाद", "कृपया"], answer: "नमस्ते" },
                { type: "vocabulary", word: "Bom dia", pronunciation: "bohn DEE-ah", meaning: "सुप्रभात", example: "Bom dia, Maria!", exampleMeaning: "सुप्रभात, मारिया!" },
                { type: "quiz", question: '"Bom dia" कब कहते हैं?', options: ["सुबह", "आधी रात", "विदा लेते समय", "खाना खाते समय"], answer: "सुबह" },
                { type: "vocabulary", word: "Obrigado / Obrigada", pronunciation: "oh-bree-GAH-doo / dah", meaning: "धन्यवाद", example: "Muito obrigado!", exampleMeaning: "बहुत-बहुत धन्यवाद!" },
                { type: "quiz", question: '"Obrigado" का अर्थ क्या है?', options: ["कृपया", "धन्यवाद", "नमस्ते", "माफ़ कीजिए"], answer: "धन्यवाद" },
                { type: "vocabulary", word: "Tchau", pronunciation: "chow", meaning: "अलविदा", example: "Tchau, até amanhã!", exampleMeaning: "अलविदा, कल मिलते हैं!" },
                { type: "quiz", question: '"Tchau" कब कहते हैं?', options: ["मिलते समय", "विदा लेते समय", "धन्यवाद देते समय", "परिचय देते समय"], answer: "विदा लेते समय" }
              ]
            },
            {
              title: "Introducing Yourself",
              activities: [
                { type: "vocabulary", word: "Meu nome é", pronunciation: "meh-oo NOH-mee eh", meaning: "मेरा नाम है", example: "Meu nome é Arish.", exampleMeaning: "मेरा नाम अरिश है।" },
                { type: "quiz", question: '"Meu nome é Arish" का अर्थ क्या है?', options: ["मैं अरिश से हूँ", "मेरा नाम अरिश है", "मैं अरिश को जानता हूँ", "अरिश मेरा दोस्त है"], answer: "मेरा नाम अरिश है" },
                { type: "vocabulary", word: "Eu sou", pronunciation: "eh-oo soh", meaning: "मैं हूँ", example: "Eu sou estudante.", exampleMeaning: "मैं विद्यार्थी हूँ।" },
                { type: "quiz", question: '"Eu sou estudante" का अर्थ क्या है?', options: ["मैं शिक्षक हूँ", "मैं विद्यार्थी हूँ", "वह विद्यार्थी है", "मैं घर पर हूँ"], answer: "मैं विद्यार्थी हूँ" },
                { type: "vocabulary", word: "Prazer", pronunciation: "prah-ZEHR", meaning: "आपसे मिलकर खुशी हुई", example: "Prazer em conhecer você.", exampleMeaning: "आपसे मिलकर खुशी हुई।" },
                { type: "quiz", question: '"Prazer" का उपयोग कब होता है?', options: ["पहली बार मिलने पर", "विदा लेते समय", "सोते समय", "खाना खाते समय"], answer: "पहली बार मिलने पर" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Pessoas e números",
          lessons: [
            {
              title: "Numbers and Age",
              activities: [
                { type: "vocabulary", word: "Um / Uma", pronunciation: "oom / OO-mah", meaning: "एक", example: "Tenho uma irmã.", exampleMeaning: "मेरी एक बहन है।" },
                { type: "quiz", question: '"Um / Uma" का अर्थ क्या है?', options: ["एक", "दो", "तीन", "चार"], answer: "एक" },
                { type: "vocabulary", word: "Quantos anos você tem?", pronunciation: "KWAN-toos AH-noos voh-SEH teng", meaning: "आपकी उम्र कितनी है?", example: "Tenho dezesseis anos.", exampleMeaning: "मेरी उम्र सोलह साल है।" },
                { type: "quiz", question: '"Quantos anos você tem?" क्या पूछता है?', options: ["नाम", "उम्र", "पता", "पसंद"], answer: "उम्र" }
              ]
            },
            {
              title: "Family",
              activities: [
                { type: "vocabulary", word: "A família", pronunciation: "ah fah-MEE-lee-ah", meaning: "परिवार", example: "Minha família é grande.", exampleMeaning: "मेरा परिवार बड़ा है।" },
                { type: "quiz", question: '"A família" का अर्थ क्या है?', options: ["दोस्त", "परिवार", "स्कूल", "घर"], answer: "परिवार" },
                { type: "vocabulary", word: "Meu pai", pronunciation: "meh-oo pie", meaning: "मेरे पिता", example: "Meu pai trabalha muito.", exampleMeaning: "मेरे पिता बहुत काम करते हैं।" },
                { type: "quiz", question: '"Meu pai" का अर्थ क्या है?', options: ["मेरी माँ", "मेरे भाई", "मेरे पिता", "मेरे दादा"], answer: "मेरे पिता" }
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
          title: "Unit 1: Vida diária",
          lessons: [
            {
              title: "Daily Routine",
              activities: [
                { type: "vocabulary", word: "Acordar", pronunciation: "ah-kor-DAR", meaning: "जागना", example: "Eu acordo às sete.", exampleMeaning: "मैं सात बजे जागता हूँ।" },
                { type: "quiz", question: '"Acordar" का अर्थ क्या है?', options: ["सोना", "जागना", "खाना", "चलना"], answer: "जागना" },
                { type: "vocabulary", word: "O café da manhã", pronunciation: "oo kah-FEH dah mah-NYAHN", meaning: "सुबह का नाश्ता", example: "Eu tomo café da manhã.", exampleMeaning: "मैं सुबह का नाश्ता करता हूँ।" },
                { type: "quiz", question: '"Café da manhã" कौन-सा भोजन है?', options: ["सुबह का नाश्ता", "दोपहर का खाना", "रात का खाना", "मिठाई"], answer: "सुबह का नाश्ता" },
                { type: "vocabulary", word: "Eu trabalho", pronunciation: "eh-oo trah-BAH-lyoo", meaning: "मैं काम करता हूँ", example: "Eu trabalho de segunda a sexta.", exampleMeaning: "मैं सोमवार से शुक्रवार तक काम करता हूँ।" },
                { type: "quiz", question: '"Eu trabalho" का अर्थ क्या है?', options: ["मैं पढ़ता हूँ", "मैं काम करता हूँ", "मैं सोता हूँ", "मैं खेलता हूँ"], answer: "मैं काम करता हूँ" }
              ]
            },
            {
              title: "At a Café",
              activities: [
                { type: "vocabulary", word: "Eu gostaria de", pronunciation: "eh-oo goos-tah-REE-ah jee", meaning: "मुझे चाहिए / मैं चाहूँगा", example: "Eu gostaria de um café.", exampleMeaning: "मुझे एक कॉफी चाहिए।" },
                { type: "quiz", question: '"Eu gostaria de" किसलिए उपयोग होता है?', options: ["विनम्रता से कुछ माँगने के लिए", "माफ़ी माँगने के लिए", "रास्ता पूछने के लिए", "विदा लेने के लिए"], answer: "विनम्रता से कुछ माँगने के लिए" },
                { type: "vocabulary", word: "A conta", pronunciation: "ah KON-tah", meaning: "बिल", example: "A conta, por favor.", exampleMeaning: "बिल दीजिए, कृपया।" },
                { type: "quiz", question: '"A conta" का अर्थ क्या है?', options: ["मेन्यू", "बिल", "पानी", "मेज़"], answer: "बिल" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Na cidade",
          lessons: [
            {
              title: "Asking for Directions",
              activities: [
                { type: "vocabulary", word: "Onde fica...?", pronunciation: "ON-jee FEE-kah", meaning: "...कहाँ है?", example: "Onde fica a estação?", exampleMeaning: "स्टेशन कहाँ है?" },
                { type: "quiz", question: '"Onde fica a estação?" क्या पूछता है?', options: ["स्टेशन कहाँ है?", "स्टेशन कब खुलता है?", "स्टेशन कितना दूर है?", "स्टेशन किसका है?"], answer: "स्टेशन कहाँ है?" },
                { type: "vocabulary", word: "À direita", pronunciation: "ah jee-RAY-tah", meaning: "दाईं ओर", example: "Vire à direita.", exampleMeaning: "दाईं ओर मुड़िए।" },
                { type: "quiz", question: '"À direita" का अर्थ क्या है?', options: ["बाईं ओर", "सीधे", "दाईं ओर", "पीछे"], answer: "दाईं ओर" }
              ]
            },
            {
              title: "Shopping",
              activities: [
                { type: "vocabulary", word: "Quanto custa?", pronunciation: "KWAN-too KOOS-tah", meaning: "इसकी कीमत कितनी है?", example: "Quanto custa esta camisa?", exampleMeaning: "इस कमीज़ की कीमत कितनी है?" },
                { type: "quiz", question: '"Quanto custa?" का अर्थ क्या है?', options: ["यह कहाँ बना है?", "इसकी कीमत कितनी है?", "यह किसका है?", "क्या यह खुला है?"], answer: "इसकी कीमत कितनी है?" },
                { type: "vocabulary", word: "É muito caro", pronunciation: "eh MWEEN-too KAH-roo", meaning: "यह बहुत महँगा है", example: "É muito caro para mim.", exampleMeaning: "यह मेरे लिए बहुत महँगा है।" },
                { type: "quiz", question: '"É muito caro" कब कहेंगे?', options: ["जब चीज़ मुफ़्त हो", "जब चीज़ बहुत महँगी हो", "जब चीज़ स्वादिष्ट हो", "जब चीज़ छोटी हो"], answer: "जब चीज़ बहुत महँगी हो" }
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
          title: "Unit 1: Experiências",
          lessons: [
            {
              title: "Talking About the Past",
              activities: [
                { type: "vocabulary", word: "Eu visitei", pronunciation: "eh-oo vee-zee-TAY", meaning: "मैंने घूमकर देखा", example: "Eu visitei Lisboa no ano passado.", exampleMeaning: "मैंने पिछले साल लिस्बन घूमकर देखा।" },
                { type: "quiz", question: '"Eu visitei Lisboa" किस समय की बात है?', options: ["वर्तमान", "भविष्य", "भूतकाल", "आदेश"], answer: "भूतकाल" },
                { type: "vocabulary", word: "Uma experiência", pronunciation: "OO-mah ex-peh-ree-EN-see-ah", meaning: "एक अनुभव", example: "Foi uma experiência incrível.", exampleMeaning: "यह एक शानदार अनुभव था।" },
                { type: "quiz", question: '"Uma experiência" का अर्थ क्या है?', options: ["एक योजना", "एक अनुभव", "एक सवाल", "एक नियम"], answer: "एक अनुभव" },
                { type: "vocabulary", word: "Eu me diverti", pronunciation: "eh-oo mee jee-vehr-CHEE", meaning: "मैंने अच्छा समय बिताया", example: "Eu me diverti muito na festa.", exampleMeaning: "मैंने पार्टी में बहुत अच्छा समय बिताया।" },
                { type: "quiz", question: '"Eu me diverti" क्या व्यक्त करता है?', options: ["बोरियत", "अच्छा समय बिताना", "डर", "नाराज़गी"], answer: "अच्छा समय बिताना" }
              ]
            },
            {
              title: "Plans and Invitations",
              activities: [
                { type: "vocabulary", word: "Pretendo", pronunciation: "preh-TEN-doo", meaning: "मेरा इरादा है", example: "Pretendo estudar português.", exampleMeaning: "मेरा इरादा पुर्तगाली पढ़ने का है।" },
                { type: "quiz", question: '"Pretendo" किसलिए उपयोग होता है?', options: ["इरादा बताने के लिए", "अतीत बताने के लिए", "माफ़ी माँगने के लिए", "तुलना करने के लिए"], answer: "इरादा बताने के लिए" },
                { type: "vocabulary", word: "Você gostaria de...?", pronunciation: "voh-SEH goos-tah-REE-ah jee", meaning: "क्या आप ... करना चाहेंगे?", example: "Você gostaria de ir ao cinema?", exampleMeaning: "क्या आप सिनेमा जाना चाहेंगे?" },
                { type: "quiz", question: '"Você gostaria de...?" किस प्रकार का वाक्य है?', options: ["निमंत्रण / प्रस्ताव", "आदेश", "शिकायत", "परिचय"], answer: "निमंत्रण / प्रस्ताव" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Comunicação",
          lessons: [
            {
              title: "Giving Advice",
              activities: [
                { type: "vocabulary", word: "Você deveria", pronunciation: "voh-SEH deh-veh-REE-ah", meaning: "आपको चाहिए", example: "Você deveria descansar.", exampleMeaning: "आपको आराम करना चाहिए।" },
                { type: "quiz", question: '"Você deveria" किसलिए उपयोग होता है?', options: ["सलाह देने के लिए", "आदेश देने के लिए", "अतीत बताने के लिए", "नाम पूछने के लिए"], answer: "सलाह देने के लिए" },
                { type: "vocabulary", word: "Na minha opinião", pronunciation: "nah MEEN-yah oh-pee-nee-OWN", meaning: "मेरी राय में", example: "Na minha opinião, é uma boa ideia.", exampleMeaning: "मेरी राय में, यह एक अच्छा विचार है।" },
                { type: "quiz", question: '"Na minha opinião" का उपयोग किसलिए होता है?', options: ["राय बताने के लिए", "समय बताने के लिए", "दिशा बताने के लिए", "धन्यवाद देने के लिए"], answer: "राय बताने के लिए" }
              ]
            },
            {
              title: "Connecting Ideas",
              activities: [
                { type: "vocabulary", word: "Porque", pronunciation: "por-KEH", meaning: "क्योंकि", example: "Estudo porque quero aprender.", exampleMeaning: "मैं पढ़ता हूँ क्योंकि मैं सीखना चाहता हूँ।" },
                { type: "quiz", question: '"Porque" का अर्थ क्या है?', options: ["लेकिन", "क्योंकि", "इसलिए", "हालाँकि"], answer: "क्योंकि" },
                { type: "vocabulary", word: "Por isso", pronunciation: "por EE-soo", meaning: "इसलिए", example: "Estou cansado, por isso vou para casa.", exampleMeaning: "मैं थका हूँ, इसलिए घर जा रहा हूँ।" },
                { type: "quiz", question: '"Por isso" का अर्थ क्या है?', options: ["इसके बावजूद", "इसलिए", "उदाहरण के लिए", "हालाँकि"], answer: "इसलिए" }
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
          title: "Unit 1: Opiniões e argumentos",
          lessons: [
            {
              title: "Expressing Opinions",
              activities: [
                { type: "vocabulary", word: "A meu ver", pronunciation: "ah MEH-oo vehr", meaning: "मेरे विचार से", example: "A meu ver, a tecnologia é útil.", exampleMeaning: "मेरे विचार से, तकनीक उपयोगी है।" },
                { type: "quiz", question: '"A meu ver" का अर्थ क्या है?', options: ["मेरे विचार से", "मेरे घर में", "मेरे अनुसार समय", "मेरे दोस्त के लिए"], answer: "मेरे विचार से" },
                { type: "vocabulary", word: "No entanto", pronunciation: "noo en-TAN-too", meaning: "हालाँकि / फिर भी", example: "É difícil, no entanto vou tentar.", exampleMeaning: "यह कठिन है, फिर भी मैं कोशिश करूँगा।" },
                { type: "quiz", question: '"No entanto" किस विचार को जोड़ता है?', options: ["विरोध / विपरीत विचार", "समान विचार", "समय", "स्थान"], answer: "विरोध / विपरीत विचार" },
                { type: "vocabulary", word: "Além disso", pronunciation: "ah-LENG DEE-soo", meaning: "इसके अलावा", example: "O curso é útil. Além disso, é gratuito.", exampleMeaning: "कोर्स उपयोगी है। इसके अलावा, यह मुफ़्त है।" },
                { type: "quiz", question: '"Além disso" का अर्थ क्या है?', options: ["इसके अलावा", "इसके बावजूद", "इसलिए", "क्योंकि"], answer: "इसके अलावा" }
              ]
            },
            {
              title: "Debating Respectfully",
              activities: [
                { type: "vocabulary", word: "Não concordo totalmente", pronunciation: "now kon-KOR-doo toh-tahl-MEN-chee", meaning: "मैं पूरी तरह सहमत नहीं हूँ", example: "Não concordo totalmente com essa ideia.", exampleMeaning: "मैं इस विचार से पूरी तरह सहमत नहीं हूँ।" },
                { type: "quiz", question: "यह वाक्य क्या व्यक्त करता है?", options: ["पूरी सहमति", "आंशिक असहमति", "खुशी", "निमंत्रण"], answer: "आंशिक असहमति" },
                { type: "vocabulary", word: "Por um lado... por outro", pronunciation: "por oom LAH-doo... por OH-troo", meaning: "एक ओर... दूसरी ओर", example: "Por um lado é prático, por outro é caro.", exampleMeaning: "एक ओर यह व्यावहारिक है, दूसरी ओर महँगा है।" },
                { type: "quiz", question: '"Por um lado... por outro" किसलिए उपयोग होता है?', options: ["दो पक्षों की तुलना के लिए", "समय पूछने के लिए", "आदेश देने के लिए", "माफ़ी माँगने के लिए"], answer: "दो पक्षों की तुलना के लिए" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Sociedade e cultura",
          lessons: [
            {
              title: "Society and Technology",
              activities: [
                { type: "vocabulary", word: "A conscientização", pronunciation: "ah kon-see-en-chee-zah-SOWN", meaning: "जागरूकता", example: "Precisamos aumentar a conscientização.", exampleMeaning: "हमें जागरूकता बढ़ाने की ज़रूरत है।" },
                { type: "quiz", question: '"A conscientização" का अर्थ क्या है?', options: ["जागरूकता", "आलस", "मनोरंजन", "यात्रा"], answer: "जागरूकता" },
                { type: "vocabulary", word: "Desenvolver", pronunciation: "dez-en-vol-VEHR", meaning: "विकसित करना", example: "Precisamos desenvolver novas habilidades.", exampleMeaning: "हमें नए कौशल विकसित करने चाहिए।" },
                { type: "quiz", question: '"Desenvolver" का अर्थ क्या है?', options: ["भूलना", "विकसित करना", "रोकना", "बेचना"], answer: "विकसित करना" }
              ]
            },
            {
              title: "Formal Communication",
              activities: [
                { type: "vocabulary", word: "Ficaria muito agradecido", pronunciation: "fee-kah-REE-ah MWEEN-too ah-grah-deh-SEE-doo", meaning: "मैं बहुत आभारी रहूँगा", example: "Ficaria muito agradecido se pudesse ajudar.", exampleMeaning: "यदि आप मदद कर सकें तो मैं बहुत आभारी रहूँगा।" },
                { type: "quiz", question: "यह वाक्य किस शैली का है?", options: ["अनौपचारिक", "विनम्र और औपचारिक", "मज़ाकिया", "आदेशात्मक"], answer: "विनम्र और औपचारिक" },
                { type: "vocabulary", word: "Atenciosamente", pronunciation: "ah-ten-see-oh-zah-MEN-chee", meaning: "सादर", example: "Atenciosamente, João Silva.", exampleMeaning: "सादर, जोआओ सिल्वा।" },
                { type: "quiz", question: '"Atenciosamente" कहाँ उपयोग होता है?', options: ["औपचारिक पत्र के अंत में", "दोस्त को अभिवादन में", "खाने का ऑर्डर देते समय", "रास्ता पूछते समय"], answer: "औपचारिक पत्र के अंत में" }
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
          title: "Unit 1: Comunicação avançada",
          lessons: [
            {
              title: "Nuanced Expressions",
              activities: [
                { type: "vocabulary", word: "Apesar disso", pronunciation: "ah-peh-ZAR DEE-soo", meaning: "इसके बावजूद", example: "Foi difícil; apesar disso, conseguimos.", exampleMeaning: "यह कठिन था; इसके बावजूद, हम सफल हुए।" },
                { type: "quiz", question: '"Apesar disso" का अर्थ क्या है?', options: ["इसलिए", "इसके बावजूद", "उदाहरण के लिए", "इसके अलावा"], answer: "इसके बावजूद" },
                { type: "vocabulary", word: "Empreender", pronunciation: "em-preh-en-DEHR", meaning: "उद्यम शुरू करना", example: "Ela decidiu empreender um novo projeto.", exampleMeaning: "उसने एक नया प्रोजेक्ट शुरू करने का निर्णय लिया।" },
                { type: "quiz", question: '"Empreender" का अर्थ क्या है?', options: ["समाप्त करना", "उद्यम शुरू करना", "टालना", "भूलना"], answer: "उद्यम शुरू करना" },
                { type: "vocabulary", word: "Independentemente de", pronunciation: "een-deh-pen-den-chee-MEN-chee jee", meaning: "की परवाह किए बिना", example: "Independentemente do resultado, continuarei.", exampleMeaning: "परिणाम की परवाह किए बिना, मैं जारी रखूँगा।" },
                { type: "quiz", question: '"Independentemente de" का अर्थ क्या है?', options: ["के कारण", "की परवाह किए बिना", "के समान", "के बाद"], answer: "की परवाह किए बिना" }
              ]
            },
            {
              title: "Academic Language",
              activities: [
                { type: "vocabulary", word: "A hipótese", pronunciation: "ah ee-POH-teh-zee", meaning: "परिकल्पना", example: "A hipótese deve ser verificada.", exampleMeaning: "परिकल्पना की जाँच की जानी चाहिए।" },
                { type: "quiz", question: '"A hipótese" का अर्थ क्या है?', options: ["निष्कर्ष", "परिकल्पना", "प्रमाण", "समस्या"], answer: "परिकल्पना" },
                { type: "vocabulary", word: "Consequentemente", pronunciation: "kon-seh-kwen-chee-MEN-chee", meaning: "परिणामस्वरूप", example: "Estudou muito; consequentemente, passou no exame.", exampleMeaning: "उसने बहुत पढ़ाई की; परिणामस्वरूप, वह परीक्षा में सफल हुआ।" },
                { type: "quiz", question: '"Consequentemente" किस संबंध को बताता है?', options: ["कारण और परिणाम", "विरोध", "उदाहरण", "समय"], answer: "कारण और परिणाम" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Análise e expressão",
          lessons: [
            {
              title: "Analyzing Ideas",
              activities: [
                { type: "vocabulary", word: "É conveniente", pronunciation: "eh kon-veh-nee-EN-chee", meaning: "उचित / सुविधाजनक है", example: "É conveniente analisar todas as opções.", exampleMeaning: "सभी विकल्पों का विश्लेषण करना उचित है।" },
                { type: "quiz", question: '"É conveniente" का अर्थ क्या है?', options: ["उचित / सुविधाजनक है", "असंभव है", "आश्चर्यजनक है", "अनावश्यक है"], answer: "उचित / सुविधाजनक है" },
                { type: "vocabulary", word: "Ressaltar", pronunciation: "heh-sahl-TAR", meaning: "ज़ोर देना / रेखांकित करना", example: "Gostaria de ressaltar um ponto importante.", exampleMeaning: "मैं एक महत्वपूर्ण बिंदु पर ज़ोर देना चाहूँगा।" },
                { type: "quiz", question: '"Ressaltar" का अर्थ क्या है?', options: ["छिपाना", "ज़ोर देना", "अनदेखा करना", "नकल करना"], answer: "ज़ोर देना" }
              ]
            },
            {
              title: "Professional Discussion",
              activities: [
                { type: "vocabulary", word: "Levar em consideração", pronunciation: "leh-VAR em kon-see-deh-rah-SOWN", meaning: "विचार में लेना", example: "Devemos levar em consideração a proposta.", exampleMeaning: "हमें प्रस्ताव पर विचार करना चाहिए।" },
                { type: "quiz", question: '"Levar em consideração" का अर्थ क्या है?', options: ["विचार करना", "अस्वीकार करना", "भूल जाना", "समाप्त करना"], answer: "विचार करना" },
                { type: "vocabulary", word: "À luz de", pronunciation: "ah looz jee", meaning: "को ध्यान में रखते हुए", example: "À luz dos resultados, mudaremos a estratégia.", exampleMeaning: "परिणामों को ध्यान में रखते हुए, हम रणनीति बदलेंगे।" },
                { type: "quiz", question: '"À luz de" का उपयोग किसलिए होता है?', options: ["जानकारी को ध्यान में रखने के लिए", "समय बताने के लिए", "अभिवादन के लिए", "अनुमति माँगने के लिए"], answer: "जानकारी को ध्यान में रखने के लिए" }
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
          title: "Unit 1: Expressões idiomáticas",
          lessons: [
            {
              title: "Idiomatic Expressions",
              activities: [
                { type: "vocabulary", word: "Pôr a mão na massa", pronunciation: "por ah MOWN nah MAH-sah", meaning: "खुद काम में लग जाना", example: "Chega de falar; vamos pôr a mão na massa.", exampleMeaning: "बातें बहुत हुईं; अब काम में लगते हैं।" },
                { type: "quiz", question: '"Pôr a mão na massa" का भावार्थ क्या है?', options: ["खाना बनाना", "खुद काम में लग जाना", "काम छोड़ना", "आराम करना"], answer: "खुद काम में लग जाना" },
                { type: "vocabulary", word: "Mal posso esperar", pronunciation: "mahl POH-soo es-peh-RAR", meaning: "मैं इंतज़ार नहीं कर सकता", example: "Mal posso esperar para viajar.", exampleMeaning: "मैं यात्रा करने के लिए बहुत उत्सुक हूँ।" },
                { type: "quiz", question: '"Mal posso esperar" का अर्थ क्या है?', options: ["देर से पहुँचना", "बेहद उत्सुक होना", "समय भूलना", "आराम करना"], answer: "बेहद उत्सुक होना" }
              ]
            },
            {
              title: "Subtle Meaning",
              activities: [
                { type: "vocabulary", word: "Por mais que", pronunciation: "por mice keh", meaning: "भले ही / चाहे जितना", example: "Por mais que seja difícil, vale a pena.", exampleMeaning: "भले ही यह कठिन हो, फिर भी यह करने योग्य है।" },
                { type: "quiz", question: '"Por mais que" क्या व्यक्त कर सकता है?', options: ["विरोध / रियायत", "समय", "स्थान", "आदेश"], answer: "विरोध / रियायत" },
                { type: "vocabulary", word: "A custo", pronunciation: "ah KOOS-too", meaning: "मुश्किल से", example: "Consegui a custo terminar o trabalho.", exampleMeaning: "मैं मुश्किल से काम पूरा कर पाया।" },
                { type: "quiz", question: '"A custo" का अर्थ क्या है?', options: ["आसानी से", "मुश्किल से", "तुरंत", "बार-बार"], answer: "मुश्किल से" }
              ]
            }
          ]
        },
        {
          title: "Unit 2: Comunicação especializada",
          lessons: [
            {
              title: "Precise and Formal Language",
              activities: [
                { type: "vocabulary", word: "Caso", pronunciation: "KAH-zoo", meaning: "यदि / ऐसी स्थिति में", example: "Caso precise de ajuda, entre em contato.", exampleMeaning: "यदि आपको मदद चाहिए, तो संपर्क करें।" },
                { type: "quiz", question: '"Caso" इस वाक्य में किसका अर्थ देता है?', options: ["यदि", "क्योंकि", "हालाँकि", "इसलिए"], answer: "यदि" },
                { type: "vocabulary", word: "Sem prejuízo de", pronunciation: "sem preh-JOO-ee-zoo jee", meaning: "को प्रभावित किए बिना", example: "Sem prejuízo dos direitos existentes, podemos avançar.", exampleMeaning: "मौजूदा अधिकारों को प्रभावित किए बिना, हम आगे बढ़ सकते हैं।" },
                { type: "quiz", question: '"Sem prejuízo de" किस भाव को व्यक्त करता है?', options: ["किसी चीज़ को प्रभावित किए बिना", "बात वापस लेना", "विषय बदलना", "अनिश्चितता"], answer: "किसी चीज़ को प्रभावित किए बिना" }
              ]
            },
            {
              title: "Mastering Communication",
              activities: [
                { type: "vocabulary", word: "Em última análise", pronunciation: "em OOL-chee-mah ah-NAH-lee-zee", meaning: "अंततः / अंतिम विश्लेषण में", example: "Em última análise, a decisão é sua.", exampleMeaning: "अंततः, निर्णय आपका है।" },
                { type: "quiz", question: '"Em última análise" का अर्थ क्या है?', options: ["शुरुआत में", "अंततः / अंतिम विश्लेषण में", "उदाहरण के लिए", "इसके विपरीत"], answer: "अंततः / अंतिम विश्लेषण में" },
                { type: "vocabulary", word: "Em princípio", pronunciation: "em preen-SEE-pyoo", meaning: "सिद्धांततः", example: "Em princípio, estou de acordo.", exampleMeaning: "सिद्धांततः, मैं सहमत हूँ।" },
                { type: "quiz", question: '"Em princípio" का अर्थ क्या है?', options: ["सिद्धांततः", "व्यक्तिगत रूप से", "संयोग से", "तुरंत"], answer: "सिद्धांततः" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default portugueseCourse;