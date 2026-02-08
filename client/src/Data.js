// client/src/Data.js
export const offlineLibrary = {
  "Dashboard": {
    "stats": { "courses": 5, "progress": "75%", "rank": "Top 10" },
    "notifications": ["New Physics quiz available", "Deep Dive updated"]
  },
  "Deep Dive (RAG)": [
    {
      "id": "physics",
      "title": "Physics",
      "difficulty": "Intermediate",
      "timeToLearn": "20 Hours",
      "relevanceScore": 88,
      "summary": "The study of matter, energy, and the fundamental forces of the universe.",
      "keyTerms": ["Quantum", "Relativity", "Thermodynamics"]
    },
    {
      "id": "cs",
      "title": "Computer Science",
      "difficulty": "Advanced",
      "timeToLearn": "40 Hours",
      "relevanceScore": 95,
      "summary": "The study of algorithmic processes and computational machines.",
      "keyTerms": ["Data Structures", "Algorithms", "Compilers"]
    }
  ],
  "ScaleDown Summarizer": [
    { "topic": "Quantum Mechanics", "summary": "Energy is quantized in discrete units." },
    { "topic": "Relativity", "summary": "Space and time are linked for objects moving at high speeds." }
  ],
  "Quiz Arena": [
    { "q": "What is the speed of light?", "a": "299,792,458 m/s" },
    { "q": "Who proposed Relativity?", "a": "Albert Einstein" }
  ]
};
