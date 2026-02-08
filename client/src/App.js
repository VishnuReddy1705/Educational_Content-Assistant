import React, { useState } from 'react';
import { offlineLibrary } from './Data'; 
import './App.css';

function App() {
  // 1. Navigation & Search States
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeHover, setActiveHover] = useState(null);

  // Weekly Activity Data (Internal for Dashboard)
  const weeklyData = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 3.5 },
    { day: "Wed", hours: 1 },
    { day: "Thu", hours: 4 },
    { day: "Fri", hours: 3 },
  ];

  // 2. Navigation Logic
  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
    setSearchTerm(''); // Clear search when switching sections
  };

  // 3. Search & Filter Logic
  const getFilteredData = () => {
    const data = offlineLibrary[activeTab] || [];
    if (!searchTerm) return data;

    // Search through arrays or objects
    if (Array.isArray(data)) {
      return data.filter(item => 
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return data; // Return as is if it's a single dashboard object
  };

  const currentContent = getFilteredData();

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
            <li className={activeTab === 'Dashboard' ? 'active' : ''} onClick={() => handleNavClick('Dashboard')}>
              <span className="dot"></span> Dashboard
            </li>
            <li className={activeTab === 'Deep Dive (RAG)' ? 'active' : ''} onClick={() => handleNavClick('Deep Dive (RAG)')}>
              {activeTab === 'Deep Dive (RAG)' ? '●' : '⚪'} Deep Dive (RAG)
            </li>
            <li className={activeTab === 'ScaleDown Summarizer' ? 'active' : ''} onClick={() => handleNavClick('ScaleDown Summarizer')}>
              {activeTab === 'ScaleDown Summarizer' ? '●' : '⚪'} ScaleDown Summarizer
            </li>
            <li className={activeTab === 'Quiz Arena' ? 'active' : ''} onClick={() => handleNavClick('Quiz Arena')}>
              {activeTab === 'Quiz Arena' ? '●' : '⚪'} Quiz Arena
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Section */}
      <main className="main-content">
        <header>
          <h1>{activeTab === 'Dashboard' ? '📊 Student Progress Dashboard' : `🔍 ${activeTab}`}</h1>
          <div className="search-container">
             <input 
              type="text" 
              placeholder="Search content or topics..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </div>
        </header>

        {activeTab === 'Dashboard' ? (
          <>
            {/* Standard Dashboard View */}
            <div className="top-stats">
              <div className="stat-box">
                <h4>Current Course</h4>
                <h1>{offlineLibrary.Dashboard.stats.topic || "Physics 101"}</h1>
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

            <section className="activity-section">
              <h2>Weekly Activity</h2>
              <div className="chart-container">
                <div className="bar-chart">
                  {weeklyData.map((data, index) => (
                    <div key={index} className="bar-wrapper" onMouseEnter={() => setActiveHover(index)} onMouseLeave={() => setActiveHover(null)}>
                      {activeHover === index && <div className="tooltip">{data.hours} hrs</div>}
                      <div className="bar" style={{ height: `${(data.hours / 4) * 100}%` }} data-label={data.day}></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Dynamic Content View (RAG, Summarizer, Quiz) */
          <div className="dynamic-content">
            {Array.isArray(currentContent) ? (
              currentContent.map((item, i) => (
                <div key={i} className="data-card">
                  <h3>{item.title || item.topic || `Quiz Question ${i+1}`}</h3>
                  <p>{item.summary || item.q || item.content}</p>
                  {item.keyTerms && <div className="tags">{item.keyTerms.map(t => <span key={t} className="tag">{t}</span>)}</div>}
                </div>
              ))
            ) : (
              <p>No data found for this search.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
