
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("trust proxy", 1);

const allowedOrigins = [
  "http://localhost:5173",
  ...(process.env.FRONTEND_URL || "")
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean),
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
  })
);

app.use(express.json({ limit: "10kb" }));

// Supported languages
const supportedLanguages = {
  English: "English",
  Spanish: "Spanish",
  French: "French",
  German: "German",
  Italian: "Italian",
  Portuguese: "Portuguese",
  Turkish: "Turkish",
  Japanese: "Japanese",
  Korean: "Korean",
  Hindi: "Hindi",
  Arabic: "Arabic",
  Chinese: "Mandarin Chinese",
  Russian: "Russian",
  Dutch: "Dutch",
  Polish: "Polish",
  Greek: "Greek",
  Swedish: "Swedish",
  Indonesian: "Indonesian",
  Vietnamese: "Vietnamese",
  Thai: "Thai",
  Ukrainian: "Ukrainian",
  Hebrew: "Hebrew",
  Bengali: "Bengali",
  Urdu: "Urdu",
  Tamil: "Tamil",
  Telugu: "Telugu",
  Marathi: "Marathi",
};

const supportedLevels = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Upper-Intermediate",
  "Advanced",
];

// Daily usage limits
const USER_DAILY_LIMIT = 10;
const GLOBAL_DAILY_LIMIT = 40;

// In-memory usage tracking
let usageDate = new Date().toISOString().slice(0, 10);
let globalDailyCount = 0;
const userDailyUsage = new Map();

function resetDailyUsageIfNeeded() {
  const today = new Date().toISOString().slice(0, 10);

  if (today !== usageDate) {
    usageDate = today;
    globalDailyCount = 0;
    userDailyUsage.clear();
  }
}

// API health check
app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "LinguaVerse AI",
  });
});

// AI Tutor API
app.post("/api/chat", async (req, res) => {
  try {
    resetDailyUsageIfNeeded();

    const {
      message,
      language,
      level = "Beginner",
      mode = "chat",
    } = req.body || {};

    // Validate message
    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please enter a message.",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        error: "Message is too long. Maximum 1000 characters allowed.",
      });
    }

    // Validate language
    if (
      typeof language !== "string" ||
      !Object.prototype.hasOwnProperty.call(
        supportedLanguages,
        language
      )
    ) {
      return res.status(400).json({
        error: "Please select a supported language.",
      });
    }

    // Check API key
    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({
        error: "AI service is not configured properly.",
      });
    }

    const targetLanguage = supportedLanguages[language];

    const studentLevel = supportedLevels.includes(level)
      ? level
      : "Beginner";

    const allowedModes = [
      "chat",
      "voice",
      "practice",
      "conversation",
      "speaking",
    ];

    const conversationMode = allowedModes.includes(mode)
      ? mode
      : "chat";

    // Identify visitor
    const visitorIP =
      req.ip || req.socket.remoteAddress || "unknown";

    const userRequests = userDailyUsage.get(visitorIP) || 0;

    // Per-visitor daily limit
    if (userRequests >= USER_DAILY_LIMIT) {
      return res.status(429).json({
        error:
          "Daily message limit reached. Please try again tomorrow.",
      });
    }

    // Combined daily limit for all visitors
    if (globalDailyCount >= GLOBAL_DAILY_LIMIT) {
      return res.status(429).json({
        error:
          "The AI tutor has reached its daily usage limit. Please try again tomorrow.",
      });
    }

    // Count request before calling the AI service
    userDailyUsage.set(visitorIP, userRequests + 1);
    globalDailyCount++;

    const tutorInstructions = `
You are Buddy, the friendly AI language tutor inside LinguaVerse AI.

The language the student is learning is: ${targetLanguage}.
The student's current learning level is: ${studentLevel}.
Conversation mode: ${conversationMode}.

YOUR GOAL:
Help the student learn ${targetLanguage} step by step,
from their current level toward advanced fluency.

LEVEL GUIDELINES:

Beginner:
- Teach greetings, pronunciation, alphabet and basic words.
- Use simple phrases and short sentences.
- Explain slowly and clearly.
- Introduce a small amount of new material at a time.

Elementary:
- Practice everyday situations.
- Teach common expressions and simple grammar.
- Gradually increase sentence length.

Intermediate:
- Use natural conversations and useful grammar.
- Explain common mistakes.
- Introduce vocabulary in context.

Upper-Intermediate:
- Practice longer conversations.
- Teach nuanced vocabulary and natural expressions.
- Improve fluency.

Advanced:
- Teach idioms, advanced grammar and precise word choice.
- Help the student communicate naturally and confidently.

CONVERSATION RULES:

- Reply mainly in ${targetLanguage}.
- Match vocabulary and sentence complexity to the student's level.
- Keep spoken replies concise and easy to understand.
- Ask only one useful follow-up question at a time.
- Gently correct mistakes.
- Show the corrected sentence and briefly explain why.
- Do not overwhelm the student with corrections.
- Give simple English explanations when helpful.
- Provide pronunciation guidance when requested.
- Avoid unnecessary markdown, emojis and long lists in voice conversations.
- Be patient, encouraging and interactive.
- Never claim the student has mastered something without evidence.
- If the student asks something unrelated, answer briefly and guide them back to language practice.
`;

    // OpenRouter request
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer":
            process.env.FRONTEND_URL || "http://localhost:5173",
          "X-Title": "LinguaVerse AI",
        },
        body: JSON.stringify({
          model: process.env.OPENROUTER_MODEL || "openrouter/free",
          messages: [
            {
              role: "system",
              content: tutorInstructions,
            },
            {
              role: "user",
              content: message.trim(),
            },
          ],
          max_tokens: 350,
          temperature: 0.7,
          stream: false,
        }),
        signal: AbortSignal.timeout(25000),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "OpenRouter error:",
        response.status,
        data.error?.message
      );

      return res.status(502).json({
        error:
          response.status === 429
            ? "The AI service is busy. Please try again later."
            : "The AI tutor could not respond. Please try again.",
      });
    }

    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(502).json({
        error: "The AI tutor returned an empty response.",
      });
    }

    return res.json({
      reply,
      language: targetLanguage,
      level: studentLevel,
    });
  } catch (error) {
    console.error("LinguaVerse backend error:", error.message);

    if (error.name === "TimeoutError") {
      return res.status(504).json({
        error: "The AI tutor took too long to respond. Try again.",
      });
    }

    return res.status(500).json({
      error: "Something went wrong while contacting the AI tutor.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `LinguaVerse AI server running on port ${PORT}`
  );
});
