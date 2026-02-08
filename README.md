# Educational Content Assistant

> **A personalized AI Tutor that transforms static textbooks into interactive, digestible learning experiences.**

🔗 **[Launch Live Demo](https://vishnureddy-ai.vercel.app/)**

---

## 📄 Project Overview

In the modern educational landscape, students face a critical challenge: **Information Overload**. Textbooks are dense (500+ pages), search is inefficient, and standard AI tools often "hallucinate" or lack specific context.

The **Educational Content Assistant** solves this by creating a "Knowledge Bridge." It ingests specific educational material (PDFs), indexes them into a semantic vector space, and uses a custom **ScaleDown™ Engine** to compress complex topics into digestible insights without losing pedagogical value.

### Problem Statement
Traditional education relies heavily on static, voluminous textbooks. Students often struggle with:
* **Passive Learning:** Reading without active engagement leads to poor retention.
* **Search Inefficiency:** Inability to quickly locate specific context or definitions.
* **Cognitive Load:** Difficulty identifying core concepts amidst verbose text.

### Solution
This application serves as an active study partner, offering:
1.  **Context-Aware Answers:** It doesn't just match keywords; it understands the question and retrieves precise paragraphs.
2.  **ScaleDown™ Technology:** A custom summarization engine that strips "fluff" while keeping pedagogical value.
3.  **Active Recall Tools:** Automated generation of flashcards and quizzes.

# Educational Content Assistant

## Project Structure

Educational-Content-Assistant/
├── .gitignore
│   └── Files to ignore (node_modules, .env, etc.)
├── README.md
│   └── Project documentation and setup instructions
├── client/
│   └── Frontend (React / Web Interface)
│       ├── package.json
│       │   └── Frontend dependencies (React, scripts)
│       ├── public/
│       │   └── index.html
│       │       └── Main entry HTML file
│       └── src/
│           ├── index.js
│           │   └── React entry point
│           ├── app.js
│           │   └── Main component logic
│           ├── app.css
│           │   └── Global and component styling
│           └── data.js
│               └── Static data / configuration constants
├── server/
│   └── Backend (Node.js / Express API)
│       ├── package.json
│       │   └── Backend dependencies (Express, CORS)
│       └── index.js
│           └── API entry point and server logic

---
🛠️ Tech Stack

Core Logic: Python 3.9

LLM Orchestration: LangChain

Intelligence: OpenAI GPT-4

Vector Database: ChromaDB

Frontend: Modern Web Interface (HTML/CSS/JS)

Deployment: Vercel / Cloud Hosting

## 🏗️ System Architecture

The system utilizes a cloud-based pipeline to process and serve information. All processing happens in the cloud using a **Retrieval-Augmented Generation (RAG)** pipeline.

```mermaid
graph LR
    A[📂 PDF Textbook] -->|Ingest| B(📄 Chunking Strategy)
    B -->|Embed| C{📦 ChromaDB Vector Store}
    D[👤 Student] -->|Query| E[💻 Web Interface]
    E -->|Search| C
    C -->|Context| F[🧠 OpenAI GPT-4]
    F -->|ScaleDown/Quiz| E

