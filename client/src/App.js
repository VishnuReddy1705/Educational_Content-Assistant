import React, { useState } from 'react';
import { offlineLibrary } from './Data'; 
import './App.css';

function App() {
  const [view, setView] = useState("dashboard"); // Navigation State
  const [topic, setTopic] = useState("Physics 101");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Function to render the active "Page"
  const renderContent = () => {
    switch(view) {
      case "dashboard":
        return (
          <div className="fade-in">
            <h1>📊 Student Progress Dashboard</h1>
            <div className="top-stats">
              <div className="stat-box"><h4>Current Course</h4><h1>{topic}</h1></div>
              <div className="stat-box"><h4>Knowledge Retention</h4><h1>87%</h1></div>
              <div className="stat-box"><h4>Study Streak</h4><h1>4 Days</h1></div>
            </div>
            <div className="chart-container">
               <h3>Weekly Activity</h3>
               <div className="bar-chart">{/* ... Bar logic ... */}</div>
            </div>
          </div>
        );
      case "rag":
        return (
          <div className="tool-view fade-in">
            <h1>🔍 Deep Dive (RAG)</h1>
            <p>Upload your research papers and let AI index the knowledge.</p>
            <div className="dropzone">Drop PDF Files Here</div>
          </div>
        );
      case "summarizer":
        return (
          <div className="tool-view fade-in">
            <h1>📝 ScaleDown Summarizer</h1>
            <textarea placeholder="Paste long articles here..."></textarea>
            <button className="btn-glow">Summarize Now</button>
          </div>
        );
      case "quiz":
        return (
          <div className="tool-view fade-in">
            <h1>🎯 Quiz Arena</h1>
            <div className="quiz-card">
              <h3>Question 1: What is the velocity of light?</h3>
              <button className="option">A) 3x10^8 m/s</button>
              <button className="option">B) 5x10^5 m/s</button>
            </div>
          </div>
        );
      default:
        return <h1>Dashboard</h1>;
    }
  };

  return (
    <div className="dashboard-app">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" className="bot-logo" alt="bot" />
        <h2>EduAI Assistant</h2>
        <ul className="nav-menu">
          <li className={view === "dashboard" ? "active" : ""} onClick={() => setView("dashboard")}>Dashboard</li>
          <li className={view === "rag" ? "active" : ""} onClick={() => setView("rag")}>Deep Dive (RAG)</li>
          <li className={view === "summarizer" ? "active" : ""} onClick={() => setView("summarizer")}>Summarizer</li>
          <li className={view === "quiz" ? "active" : ""} onClick={() => setView("quiz")}>Quiz Arena</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-header">
          <div className="fork-container">
            <a href="https://github.com/VishnuReddy1705/Educational_Content-Assistant" target="_blank" className="fork-btn">
              ⭐ Fork on GitHub
            </a>
          </div>
          <div className="profile-section" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <div className="avatar">VR</div>
            {showProfileMenu && (
              <div className="profile-dropdown">
                <p>⚙️ Settings</p>
                <p>👤 Profile</p>
                <hr />
                <p style={{color: '#ff4b4b'}}>Logout</p>
              </div>
            )}
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;
