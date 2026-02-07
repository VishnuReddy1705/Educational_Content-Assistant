import React, { useState } from 'react';
import { offlineLibrary } from './Data'; 
import './App.css';

function App() {
  const [topic, setTopic] = useState("Physics 101");
  const [activeHover, setActiveHover] = useState(null); // Track which bar is hovered

  // Sample data for the chart
  const weeklyData = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 3.5 },
    { day: "Wed", hours: 1 },
    { day: "Thu", hours: 4 },
    { day: "Fri", hours: 3 },
  ];

  return (
    <div className="dashboard-app">
      {/* Sidebar Section */}
      <aside className="sidebar">
        <div className="bot-container">
          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" className="bot-logo" alt="bot" />
        </div>
        <h2>EduAI Assistant</h2>
        <nav>
          <ul className="nav-menu">
            <li className="active"><span className="dot"></span> Dashboard</li>
            <li>⚪ Deep Dive (RAG)</li>
            <li>⚪ ScaleDown Summarizer</li>
            <li>⚪ Quiz Arena</li>
          </ul>
        </nav>
      </aside>

      {/* Main Dashboard Section */}
      <main className="main-content">
        <header>
          <h1>📊 Student Progress Dashboard</h1>
        </header>

        {/* Top Metric Cards */}
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

        {/* Interactive Chart Section */}
        <section className="activity-section">
          <h2>Weekly Activity</h2>
          <div className="chart-container">
            <div className="bar-chart">
              {weeklyData.map((data, index) => (
                <div 
                  key={index} 
                  className="bar-wrapper"
                  onMouseEnter={() => setActiveHover(index)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  {activeHover === index && (
                    <div className="tooltip">{data.hours} hrs</div>
                  )}
                  <div 
                    className="bar" 
                    style={{ height: `${(data.hours / 4) * 100}%` }}
                    data-label={data.day}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
