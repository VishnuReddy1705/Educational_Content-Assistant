import React, { useState } from 'react';
import { offlineLibrary } from './Data'; 
import './App.css';

function App() {
  const [topic, setTopic] = useState("Physics 101");
  const [activeHover, setActiveHover] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false); // Zoom State
  const [view, setView] = useState("dashboard"); // Navigation State

  const weeklyData = [
    { day: "Mon", hours: 2 }, { day: "Tue", hours: 3.5 },
    { day: "Wed", hours: 1 }, { day: "Thu", hours: 4 }, { day: "Fri", hours: 3 },
  ];

  return (
    <div className="dashboard-app">
      <aside className="sidebar">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" className="bot-logo" alt="bot" />
        <h2>EduAI Assistant</h2>
        <ul className="nav-menu">
          <li className={view === "dashboard" ? "active" : ""} onClick={() => setView("dashboard")}>
            <span className="dot"></span> Dashboard
          </li>
          <li className={view === "flowchart" ? "active" : ""} onClick={() => setView("flowchart")}>
            ⚪ Knowledge Flow
          </li>
          <li>⚪ Quiz Arena</li>
        </ul>
      </aside>

      <main className="main-content">
        {view === "dashboard" ? (
          <>
            <h1>📊 Student Progress Dashboard</h1>
            
            {/* Graph with Full Zoom Feature */}
            <section className={`activity-section ${isZoomed ? "fullscreen-graph" : ""}`}>
              <div className="section-header">
                <h2>Weekly Activity</h2>
                <button className="zoom-btn" onClick={() => setIsZoomed(!isZoomed)}>
                  {isZoomed ? "✖ Exit Zoom" : "🔍 Full Zoom"}
                </button>
              </div>
              
              <div className="chart-container">
                <div className="bar-chart">
                  {weeklyData.map((data, index) => (
                    <div key={index} className="bar-wrapper" 
                         onMouseEnter={() => setActiveHover(index)} 
                         onMouseLeave={() => setActiveHover(null)}>
                      {activeHover === index && <div className="tooltip">{data.hours} hrs</div>}
                      <div className="bar" style={{ height: `${(data.hours / 4) * 100}%` }} data-label={data.day}></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="flowchart-view">
            <h1>🚀 Knowledge Flow: {topic}</h1>
            <div className="flow-container">
              <div className="flow-node root">Start: {topic}</div>
              <div className="flow-line"></div>
              <div className="flow-row">
                <div className="flow-node">Basic Concepts</div>
                <div className="flow-node">Advanced Theory</div>
              </div>
              <div className="flow-line"></div>
              <div className="flow-node final">Mastery Target</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
