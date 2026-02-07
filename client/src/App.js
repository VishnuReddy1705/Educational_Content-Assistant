import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [topic, setTopic] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Load history from browser storage on start
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("eduHistory") || "[]");
    setHistory(savedHistory);
  }, []);

  const fetchDashboard = async () => {
    if (!topic) return;
    setLoading(true);
    try {
      const res = await fetch("https://your-api.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: topic })
      });
      const result = await res.json();
      
      setData(result);
      
      // Update history and save to LocalStorage
      const newHistory = [topic, ...history].slice(0, 5);
      setHistory(newHistory);
      localStorage.setItem("eduHistory", JSON.stringify(newHistory));
      
    } catch (err) {
      alert("Server is waking up, please try again in 30 seconds!");
    }
    setLoading(false);
  };

  return (
    <div className="dashboard-container">
      {/* SIDEBAR: Static look, but clickable history */}
      <aside className="sidebar">
        <div className="logo">🎓 EduAI</div>
        <div className="menu-label">RECENT TOPICS</div>
        <ul className="history-list">
          {history.map((h, i) => (
            <li key={i} onClick={() => {setTopic(h); fetchDashboard();}}>{h}</li>
          ))}
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="top-nav">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Enter a topic (e.g. Photosynthesis)..." 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <button onClick={fetchDashboard}>{loading ? "..." : "Analyze"}</button>
          </div>
          <div className="user-profile">
            <span>Vishnu Reddy</span>
            <div className="avatar">VR</div>
          </div>
        </header>

        {data ? (
          <div className="stats-grid">
            <div className="stat-card blue">
              <h3>Difficulty</h3>
              <p>{data.difficulty}</p>
            </div>
            <div className="stat-card orange">
              <h3>Learning Time</h3>
              <p>{data.timeToLearn}</p>
            </div>
            <div className="stat-card green">
              <h3>Relevance</h3>
              <p>{data.relevanceScore}%</p>
            </div>
            
            <div className="info-box">
              <h2>Top Concepts</h2>
              <div className="tags">
                {data.keyTerms.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <p className="summary-text">{data.summary}</p>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <h2>Welcome to your Dashboard</h2>
            <p>Enter a topic above to generate study statistics.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
