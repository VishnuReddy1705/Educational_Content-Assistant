import React, { useState } from 'react';
import { offlineLibrary } from './Data'; 
import './App.css';

function App() {
  const [topic, setTopic] = useState("Physics 101");
  const [data, setData] = useState(offlineLibrary["physics"] || null);

  return (
    <div className="dashboard-app">
      {/* Sidebar from your image */}
      <aside className="sidebar">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" className="bot-logo" alt="bot" />
        <h2>EduAI Assistant</h2>
        <ul className="nav-menu">
          <li className="active">🔴 Dashboard</li>
          <li>⚪ Deep Dive (RAG)</li>
          <li>⚪ ScaleDown Summarizer</li>
          <li>⚪ Quiz Arena</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>📊 Student Progress Dashboard</h1>

        <div className="top-stats">
          <div className="stat-box">
            <h4>Current Course</h4>
            <h1>{topic}</h1>
            <span className="badge">↑ +2 Chapters</span>
          </div>
          <div className="stat-box">
            <h4>Knowledge Retention</h4>
            <h1>87%</h1>
            <span className="badge">↑ +5%</span>
          </div>
          <div className="stat-box">
            <h4>Study Streak</h4>
            <h1>4 Days</h1>
            <span className="badge">↑ Keep going!</span>
          </div>
        </div>

        <h2>Weekly Activity</h2>
        <div className="chart-container">
          <div className="bar-chart">
            <div className="bar" style={{height: '50%'}} data-label="Mon"></div>
            <div className="bar" style={{height: '85%'}} data-label="Tue"></div>
            <div className="bar" style={{height: '30%'}} data-label="Wed"></div>
            <div className="bar" style={{height: '100%'}} data-label="Thu"></div>
            <div className="bar" style={{height: '75%'}} data-label="Fri"></div>
          </div>
        </div>

        {/* Search part for the AI/Library */}
        <div style={{marginTop: '40px', background: '#161b22', padding: '20px', borderRadius: '10px'}}>
            <input 
              style={{background: '#0d1117', color: 'white', border: '1px solid #30363d', padding: '10px', borderRadius: '5px', width: '250px'}}
              placeholder="Search other topics..." 
              onChange={(e) => setTopic(e.target.value)}
            />
        </div>
      </main>
    </div>
  );
}

export default App;
