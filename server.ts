import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Resume structured data for systemic prompting
const RESUME_CONTENT = `
Applicant Name: PALLEM MEGHANA NAGA RAJESWARI
Contact Details:
- Phone: +91 89855 13022
- Email: meghanapallem09@gmail.com
- Location: Jangareddigudem, Andhra Pradesh, India
- Availability: Open to Remote
- Professional Links: LinkedIn (linkedin.com/in/meghana-naga-rajeswari-pallem-ab9950375), GitHub (github.com/PallemMeghana09)

Professional Summary:
AI & ML Undergraduate and Aspiring Machine Learning Engineer. Passionate about Generative AI & Data Science. Strong foundation in Python, Machine Learning, Data Science, and Generative AI. Skilled in model development, data preprocessing, and full-stack web technologies including HTML, CSS, and JavaScript. Experienced in building intelligent, data-driven solutions and real-world AI applications including NLP, speech emotion recognition, disease prediction, smart farming, and automation workflows.

Core Competencies:
1. Programming Languages: Python, JavaScript, HTML5, CSS3
2. AI & Machine Learning: Machine Learning, Artificial Intelligence, Natural Language Processing (NLP), Data Preprocessing, Model Training & Evaluation
3. Tools & Platforms: Git, GitHub, VS Code, Antigravity, AI Models, N8n
4. Automation & Development: Workflow Automation, AI Model Integration, Web Application Deployment, Debugging & Testing
5. Soft Skills: Problem Solving, Analytical Thinking, Team Collaboration, Communication Skills, Project Management, Quick Learning
6. Interests: Artificial Intelligence & Machine Learning, AI Automation & Workflow Development, Full-Stack Web Development, Cloud Computing & AWS, Image Generation & Creative AI Tools
7. Languages: English, Hindi, Telugu

Projects:
1. AI Health Assistant (Feb 2025 - Apr 2025): Developed an AI-powered healthcare assistant that provides symptom analysis, basic health recommendations, and medical information using Machine Learning and Python.
2. Automated Trading Bot (May 2025 - Jun 2025): Built an automated trading bot using Python to analyze market trends, execute trades, and generate real-time trading insights.
3. Virtual AI Tutor (Aug 2025 - Sep 2025): Created an intelligent AI tutor platform that delivers personalized learning support, quiz generation, and doubt clarification using AI and NLP.
4. Product Recommendation Agent (Oct 2025 - Dec 2025): Designed an AI-based recommendation system that suggests personalized products based on user preferences, browsing behavior, and data analysis techniques.
5. Virtual Travel Assistant (Jan 2026 - Feb 2026): Developed an AI-driven travel assistant that helps users with trip planning, destination recommendations, budgeting, and itinerary management.
6. AI Game Companion Agent (Mar 2026 - May 2026): Built an AI-powered gaming assistant that provides in-game guidance, strategy recommendations, and interactive player support using intelligent automation.

Education:
- B-Tech in Artificial Intelligence & Machine Learning
- Institution: Seshadri Rao Gudlavalleru Engineering College, Jangareddigudem, Andhra Pradesh, India
- Grade: GPA 8.8
- Tenure: Jul 2024 - Present
- Description: Passionate AI & ML enthusiast. Skilled in Python, Machine Learning, and AI-driven app development. Experienced in building intelligent solutions with strong analytical and problem-solving abilities.

Certifications:
1. Trust and Security with Google Cloud (Google Cloud via Simplilearn) - Dec 2025
2. AWS Foundations: Machine Learning Basics (AWS via Simplilearn) - Dec 2025
3. Introduction to Artificial Intelligence (Simplilearn) - Dec 2025
4. Introduction to AWS Inferentia and Amazon EC2 Inf1 Instances (AWS via Simplilearn) - Dec 2025
`;

// Helper to construct system instruction
const SYSTEM_INSTRUCTION = `
You are the interactive AI Twin / Virtual Portfolio Assistant of Pallem Meghana Naga Rajeswari, an outstanding AI & ML Undergraduate and Aspiring Machine Learning Engineer. 
Your goal is to represent her professionally, warmly, and knowledgeably to potential employers, recruiters, colleagues, and portfolio visitors who talk to you.

Follow these rules:
1. Be polite, friendly, professional, confident, yet humble.
2. Speak in the first person ("I") as the AI representation of Meghana's experience, or as her "AI Twin". E.g., "In my Automated Trading Bot project, I used..."
3. Provide deep, accurate answers regarding her core competencies, specific projects (AI Health Assistant, Trading Bot, Tutor, Recommendation Agent, Travel Assistant, and Game Companion), college education (Seshadri Rao Gudlavalleru Engineering College), GPA (8.8), and certifications.
4. If asked about contact info, provide her email (meghanapallem09@gmail.com), phone (+91 89855 13022), or suggest connecting on LinkedIn/GitHub via the header links.
5. Keep answers clear, technical where appropriate (since she builds machine learning algorithms and Python systems), and formatted with bullet points or paragraphs. Keep responses concise and engaging (under 3 or 4 paragraphs).
6. If asked questions that are completely unrelated to her portfolio or career (e.g., "tell me how to bake cookies" or "solve this math problem"), polite yet firmly steer the conversation back to her portfolio, ML projects, or career aspirations (e.g., "While I can help with general questions, as Meghana's AI twin, I'd love to share some insights on how I designed the recommendation engine for my Product Recommendation Agent or set up Python workflows!").

Here is the full resume data to base your responses on:
${RESUME_CONTENT}
`;

// API routes go here FIRST
app.post("/api/chat", async (req, res): Promise<any> => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    // Map custom history structure to Gemini chat structure
    // Structure of Gemini AI SDK chat history: { role: 'user' | 'model', parts: [{ text: ... }] }
    const geminiHistory: any[] = [];
    if (history && Array.isArray(history)) {
      // Keep only last 10 exchanges to protect context limits
      const recentHistory = history.slice(-10);
      for (const h of recentHistory) {
        geminiHistory.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }]
        });
      }
    }

    // Initialize chat with system instruction
    const activeChat = ai.chats.create({
      model: "gemini-3.5-flash",
      history: geminiHistory,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const geminiResponse = await activeChat.sendMessage({ message });
    res.json({ reply: geminiResponse.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ 
      error: "Failed to communicate with the Gemini AI twin", 
      details: error.message || error 
    });
  }
});

// Serve frontend assets
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server loaded and running on http://localhost:${PORT}`);
  });
}

start();
