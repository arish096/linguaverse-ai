import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  Send,
  Sparkles,
  Bot,
  User,
  Mic,
  MicOff,
  Volume2,
  AudioLines,
  Square,
} from "lucide-react";
import "./AITutor.css";

const languageVoices = {
  English: "en-US",
  Spanish: "es-ES",
  French: "fr-FR",
  German: "de-DE",
  Italian: "it-IT",
  Portuguese: "pt-PT",
  Turkish: "tr-TR",
  Japanese: "ja-JP",
  Korean: "ko-KR",
  Hindi: "hi-IN",
  Arabic: "ar-SA",
  Chinese: "zh-CN",
  Russian: "ru-RU",
  Dutch: "nl-NL",
  Polish: "pl-PL",
  Greek: "el-GR",
  Swedish: "sv-SE",
  Indonesian: "id-ID",
  Vietnamese: "vi-VN",
  Thai: "th-TH",
  Ukrainian: "uk-UA",
  Hebrew: "he-IL",
  Bengali: "bn-BD",
  Urdu: "ur-PK",
  Tamil: "ta-IN",
  Telugu: "te-IN",
  Marathi: "mr-IN",
  Norwegian: "nb-NO",
  Danish: "da-DK",
  Persian: "fa-IR",
};

const welcomeMessages = {
  English: "Hello! I'm your English practice partner. Let's learn together!",
  Spanish: "¡Hola! Soy tu compañero de práctica de español. ¡Vamos a aprender!",
  French: "Bonjour ! Je suis ton partenaire de pratique en français. Apprenons ensemble !",
  German: "Hallo! Ich bin dein Deutsch-Übungspartner. Lass uns gemeinsam lernen!",
  Italian: "Ciao! Sono il tuo partner per praticare l'italiano. Impariamo insieme!",
  Portuguese: "Olá! Sou seu parceiro de prática de português. Vamos aprender juntos!",
  Turkish: "Merhaba! Türkçe pratik partnerinim. Hadi birlikte öğrenelim!",
  Japanese: "こんにちは！日本語の練習パートナーです。一緒に学びましょう！",
  Korean: "안녕하세요! 한국어 연습 파트너예요. 함께 배워 봐요!",
  Hindi: "नमस्ते! मैं आपका हिंदी अभ्यास साथी हूँ। चलिए साथ में सीखते हैं!",
  Arabic: "مرحبًا! أنا شريكك في ممارسة اللغة العربية. لنتعلم معًا!",
  Chinese: "你好！我是你的中文练习伙伴。我们一起学习吧！",
  Russian: "Привет! Я твой партнер для практики русского языка. Давай учиться вместе!",
  Dutch: "Hallo! Ik ben je Nederlands-oefenpartner. Laten we samen leren!",
  Polish: "Cześć! Jestem twoim partnerem do nauki języka polskiego. Uczmy się razem!",
  Greek: "Γεια σου! Είμαι ο συνεργάτης σου για εξάσκηση στα ελληνικά. Ας μάθουμε μαζί!",
  Swedish: "Hej! Jag är din svenska övningspartner. Vi lär oss tillsammans!",
  Indonesian: "Halo! Saya teman latihan bahasa Indonesia kamu. Ayo belajar bersama!",
  Vietnamese: "Xin chào! Mình là bạn luyện tiếng Việt của bạn. Cùng học nhé!",
  Thai: "สวัสดี! ฉันเป็นคู่ฝึกภาษาไทยของคุณ มาเรียนรู้ด้วยกันนะ!",
  Ukrainian: "Привіт! Я твій партнер для практики української. Навчаймося разом!",
  Hebrew: "שלום! אני שותף התרגול שלך לעברית. בואו נלמד יחד!",
  Bengali: "নমস্কার! আমি আপনার বাংলা অনুশীলনের সঙ্গী। চলুন একসঙ্গে শিখি!",
  Urdu: "السلام علیکم! میں آپ کا اردو پریکٹس پارٹنر ہوں۔ آئیے سیکھتے ہیں!",
  Norwegian: "Hei! Jeg er din norske øvingspartner. La oss lære sammen!",
  Danish: "Hej! Jeg er din danske øvepartner. Lad os lære sammen!",
  Persian: "سلام! من شریک تمرین فارسی شما هستم. بیایید با هم یاد بگیریم!",
};

const levels = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
];

export default function AITutor({
  selectedLanguage = "Spanish",
  selectedCourse = null,
  currentLesson = null,
}) {
  const [mode, setMode] = useState("speak");
  const [level, setLevel] = useState("Beginner");
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [handsFree, setHandsFree] = useState(false);
  const [messages, setMessages] = useState([]);

  const recognitionRef = useRef(null);
  const handsFreeRef = useRef(false);
  const speakingRef = useRef(false);
  const processingRef = useRef(false);
  const modeRef = useRef(mode);
  const voiceTextRef = useRef("");
  const restartTimerRef = useRef(null);
  const manualStopRef = useRef(false);

  const languageCode = languageVoices[selectedLanguage] || "en-US";

  const courseTitle =
    typeof selectedCourse === "string"
      ? selectedCourse
      : selectedCourse?.title || selectedCourse?.name || "";

  const lessonTitle =
    typeof currentLesson === "string"
      ? currentLesson
      : currentLesson?.title || currentLesson?.name || "";

  const lessonContext = [
    courseTitle && `Course: ${courseTitle}`,
    lessonTitle && `Current lesson: ${lessonTitle}`,
    currentLesson?.description &&
      `Lesson description: ${currentLesson.description}`,
    currentLesson?.content && `Lesson content: ${currentLesson.content}`,
    currentLesson?.vocabulary &&
      `Lesson vocabulary: ${
        Array.isArray(currentLesson.vocabulary)
          ? currentLesson.vocabulary.join(", ")
          : currentLesson.vocabulary
      }`,
    currentLesson?.grammar &&
      `Lesson grammar: ${
        Array.isArray(currentLesson.grammar)
          ? currentLesson.grammar.join(", ")
          : currentLesson.grammar
      }`,
  ]
    .filter(Boolean)
    .join("\n");

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const welcome =
      welcomeMessages[selectedLanguage] ||
      `Hello! I'm your ${selectedLanguage} practice partner. Let's learn together!`;

    let content = welcome;

    if (courseTitle || lessonTitle) {
      content += `\n\n${courseTitle ? `Course: ${courseTitle}` : ""}${
        courseTitle && lessonTitle ? "\n" : ""
      }${lessonTitle ? `Today's lesson: ${lessonTitle}` : ""}`;
    }

    content += `\n\nYour current level is ${level}.`;
    setMessages([{ role: "assistant", content }]);
    setInput("");
    stopHandsFree();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage, level, courseTitle, lessonTitle]);

  function chooseVoice(code) {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    const exact = voices.find(
      (voice) => voice.lang.toLowerCase() === code.toLowerCase()
    );
    const regional = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith(code.split("-")[0].toLowerCase())
    );
    return exact || regional || null;
  }

  function speakText(text, afterSpeak) {
    if (!("speechSynthesis" in window)) {
      afterSpeak?.();
      return;
    }

    const cleanText = text
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
      .replace(/[\\*_~`#]/g, "")
      .replace(/\s+/g, " ")
      .trim();

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = languageCode;
    utterance.rate = 0.88;
    utterance.pitch = 1;

    const voice = chooseVoice(languageCode);
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      speakingRef.current = true;
      setIsSpeaking(true);
    };

    const finish = () => {
      speakingRef.current = false;
      setIsSpeaking(false);
      afterSpeak?.();
    };

    utterance.onend = finish;
    utterance.onerror = finish;
    window.speechSynthesis.speak(utterance);
  }

  function clearRestartTimer() {
    if (restartTimerRef.current) {
      window.clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }
  }

  function stopRecognition() {
    clearRestartTimer();
    const recognition = recognitionRef.current;
    recognitionRef.current = null;

    try {
      recognition?.stop();
    } catch {
      // Recognition may already have stopped.
    }

    setIsListening(false);
  }

  function stopHandsFree() {
    handsFreeRef.current = false;
    manualStopRef.current = true;
    setHandsFree(false);
    stopRecognition();

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    speakingRef.current = false;
    setIsSpeaking(false);
    processingRef.current = false;
    setIsProcessing(false);
  }

  function startRecognition() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition isn't supported here. Please try Google Chrome.");
      stopHandsFree();
      return;
    }

    if (
      !handsFreeRef.current ||
      speakingRef.current ||
      processingRef.current ||
      recognitionRef.current
    ) {
      return;
    }

    manualStopRef.current = false;

    const recognition = new SpeechRecognition();
    recognition.lang = languageCode;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.continuous = true;

    recognitionRef.current = recognition;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      let combined = "";

      // Read every result, not just the last word/result.
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result?.[0]?.transcript || "";
        if (transcript) combined += `${transcript} `;
      }

      const cleanTranscript = combined.trim();
      if (cleanTranscript) {
        voiceTextRef.current = cleanTranscript;
        setInput(cleanTranscript);
      }
    };

    recognition.onerror = (event) => {
      setIsListening(false);

      if (
        event.error === "not-allowed" ||
        event.error === "service-not-allowed"
      ) {
        stopHandsFree();
        alert("Microphone permission is blocked. Allow it in your browser settings.");
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      if (recognitionRef.current === recognition) {
        recognitionRef.current = null;
      }

      // If Chrome ends recognition on a pause, restart it and keep
      // the transcript. Do not submit until the user presses Send voice.
      if (
        handsFreeRef.current &&
        !manualStopRef.current &&
        !speakingRef.current &&
        !processingRef.current
      ) {
        restartTimerRef.current = window.setTimeout(() => {
          restartTimerRef.current = null;
          startRecognition();
        }, 400);
      }
    };

    try {
      recognition.start();
    } catch {
      setIsListening(false);
      recognitionRef.current = null;
    }
  }

  function startHandsFree() {
    voiceTextRef.current = "";
    setInput("");
    manualStopRef.current = false;
    handsFreeRef.current = true;
    setHandsFree(true);
    startRecognition();
  }

  function sendVoiceMessage() {
    const spokenText = (voiceTextRef.current || input).trim();

    if (!spokenText) {
      alert("I couldn't hear any words yet. Please try speaking again.");
      return;
    }

    manualStopRef.current = true;
    handsFreeRef.current = false;
    setHandsFree(false);
    stopRecognition();

    voiceTextRef.current = "";
    setInput("");
    sendMessageText(spokenText, true);
  }

  async function sendMessageText(text, fromVoice = false) {
    const messageText = text.trim();
    if (!messageText || processingRef.current) return;

    stopRecognition();
    processingRef.current = true;
    setIsProcessing(true);

    setMessages((current) => [
      ...current,
      { role: "user", content: messageText },
    ]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          language: selectedLanguage,
          level,
          mode: fromVoice ? "speak" : mode,
          course: courseTitle,
          lesson: lessonTitle,
          lessonContext,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "AI request failed");
      }

      const reply = data.reply || "Let's try that again!";
      setMessages((current) => [
        ...current,
        { role: "assistant", content: reply },
      ]);

      processingRef.current = false;
      setIsProcessing(false);

      if (fromVoice || modeRef.current === "speak") {
        speakText(reply, () => {
          if (handsFreeRef.current) {
            window.setTimeout(() => startRecognition(), 350);
          }
        });
      } else if (handsFreeRef.current) {
        startRecognition();
      }
    } catch {
      const fallback =
        "I couldn't connect to the AI server. Please check that your backend is running.";

      setMessages((current) => [
        ...current,
        { role: "assistant", content: fallback },
      ]);

      processingRef.current = false;
      setIsProcessing(false);

      if (handsFreeRef.current) {
        speakText(fallback, () => {
          if (handsFreeRef.current) startRecognition();
        });
      }
    }
  }

  function sendMessage(event) {
    event?.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    sendMessageText(text, false);
  }

  useEffect(() => {
    return () => {
      handsFreeRef.current = false;
      clearRestartTimer();

      try {
        recognitionRef.current?.stop();
      } catch {
        // Recognition may already be stopped.
      }

      window.speechSynthesis?.cancel();
    };
  }, []);

  return (
    <section className="ai-tutor-section" id="ai-tutor">
      <div className="ai-tutor-heading">
        <span className="ai-tutor-eyebrow">
          <Sparkles size={15} /> YOUR PERSONAL LANGUAGE PARTNER
        </span>

        <h2>
          Meet your <span>AI Tutor</span>
        </h2>

        <p>
          Practice {selectedLanguage} from beginner to advanced.
          {courseTitle ? ` Course: ${courseTitle}.` : ""}
          {lessonTitle ? ` Current lesson: ${lessonTitle}.` : ""}
        </p>
      </div>

      <div className="ai-tutor-card">
        <div className="ai-tutor-topbar">
          <div className="ai-tutor-avatar">
            <Bot size={22} />
          </div>

          <div className="ai-tutor-title">
            <strong>LinguaVerse Buddy</strong>
            <span>
              {isListening
                ? "Listening to you..."
                : isSpeaking
                ? "Speaking..."
                : isProcessing
                ? "Thinking..."
                : "Ready to practice"}
            </span>
          </div>

          <span className="ai-tutor-status">
            <span className="status-dot" />
            Online
          </span>
        </div>

        <div className="ai-tutor-controls">
          <label htmlFor="tutor-level">Learning level</label>
          <select
            id="tutor-level"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          >
            {levels.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="ai-tutor-mode-switch">
          <button
            className={mode === "speak" ? "active" : ""}
            onClick={() => setMode("speak")}
            type="button"
          >
            <Mic size={16} /> Speak with AI
          </button>

          <button
            className={mode === "chat" ? "active" : ""}
            onClick={() => setMode("chat")}
            type="button"
          >
            <MessageCircle size={16} /> Chat with AI
          </button>
        </div>

        {mode === "speak" && (
          <div
            className={`ai-tutor-robot ${isSpeaking ? "speaking" : ""} ${
              isListening ? "listening" : ""
            }`}
          >
            <div className="robot-glow" />

            <div className="robot">
              <div className="robot-antenna">
                <span />
              </div>

              <div className="robot-head">
                <div className="robot-ear left" />
                <div className="robot-ear right" />

                <div className="robot-face">
                  <div className="robot-eyes">
                    <span />
                    <span />
                  </div>
                  <div className="robot-mouth" />
                </div>
              </div>

              <div className="robot-body">
                <Sparkles size={20} />
              </div>
            </div>

            <div className="robot-caption">
              {isListening
                ? "I'm listening..."
                : isSpeaking
                ? "I'm speaking..."
                : isProcessing
                ? "Thinking..."
                : `Let's speak ${selectedLanguage}!`}
            </div>

            <div className="robot-voice-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            {!handsFree ? (
              <button
                className="robot-mic-button"
                type="button"
                onClick={startHandsFree}
              >
                <AudioLines size={20} />
                Start hands-free conversation
              </button>
            ) : (
              <div className="voice-action-buttons">
                <button
                  className="robot-mic-button active"
                  type="button"
                  onClick={sendVoiceMessage}
                  disabled={!input.trim() || isProcessing}
                >
                  <Send size={18} />
                  Send voice message
                </button>

                <button
                  className="robot-mic-button"
                  type="button"
                  onClick={stopHandsFree}
                >
                  <Square size={18} />
                  Stop conversation
                </button>
              </div>
            )}
          </div>
        )}

        <div className="ai-tutor-messages">
          {messages.map((message, index) => (
            <div
              className={`ai-tutor-message ${message.role}`}
              key={`${message.role}-${index}`}
            >
              <div className="ai-message-avatar">
                {message.role === "assistant" ? (
                  <Bot size={16} />
                ) : (
                  <User size={16} />
                )}
              </div>

              <p>{message.content}</p>

              {message.role === "assistant" && (
                <button
                  className="message-speak-button"
                  type="button"
                  onClick={() => speakText(message.content)}
                  aria-label="Play message"
                >
                  <Volume2 size={15} />
                </button>
              )}
            </div>
          ))}
        </div>

        <form className="ai-tutor-input" onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              if (handsFreeRef.current) {
                voiceTextRef.current = event.target.value;
              }
            }}
            placeholder={`Write in ${selectedLanguage}...`}
            aria-label="Message AI tutor"
          />

          {mode === "chat" && (
            <button
              type="button"
              onClick={startHandsFree}
              disabled={isListening || handsFree}
              aria-label="Use voice input"
            >
              {isListening ? <MicOff size={17} /> : <Mic size={17} />}
            </button>
          )}

          <button
            type="submit"
            disabled={!input.trim() || isProcessing}
            aria-label="Send message"
          >
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
