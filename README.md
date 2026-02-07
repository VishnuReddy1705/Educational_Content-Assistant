# 🎓 Educational Content Assistant

![Python](https://img.shields.io/badge/Python-3.9-blue?logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?logo=streamlit&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?logo=openai&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-RAG-1C3C3C?logo=langchain&logoColor=white)

> **A personalized AI Tutor that doesn't just "read" textbooks—it understands, compresses, and maps them.**

🔗 **[Live Demo App](https://vishnureddy-ai.vercel.app/)**

---

## 🧠 The Problem vs. The Solution

**The Problem:** Textbooks are dense. Students drown in 500+ pages of information and struggle to connect concepts.

**The Solution:** An AI-powered platform featuring **ScaleDown™ Technology**—a custom engine that compresses academic text by 70% while retaining pedagogical value, coupled with a visual knowledge graph.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **⚡ ScaleDown Engine** | Compresses complex topics into bulleted "cheat sheets" without losing nuance. |
| **🕸️ Knowledge Graph** | Auto-generates visual maps showing how concepts (e.g., *Force*) link to others (e.g., *Acceleration*). |
| **📚 Deep Dive RAG** | Chat directly with your PDF. Citations are pulled instantly from the source text. |
| **📝 Adaptive Quiz** | Generates dynamic multiple-choice questions based on the difficulty of the topic. |
| **📊 Analytics Dashboard** | Tracks study streaks and knowledge retention metrics. |

---

## 🏗️ Architecture

All processing happens in the cloud using a **Retrieval-Augmented Generation (RAG)** pipeline.

```mermaid
graph LR
    A[📂 PDF Textbook] -->|Ingest| B(📄 Chunking Strategy)
    B -->|Embed| C{📦 ChromaDB Vector Store}
    D[👤 Student] -->|Query| E[🤖 Streamlit UI]
    E -->|Search| C
    C -->|Context| F[🧠 OpenAI GPT-4]
    F -->|ScaleDown/Quiz| E
