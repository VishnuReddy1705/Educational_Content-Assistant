import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [topic, setTopic] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Load search history from LocalStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("eduHistory") || "[]");
    setHistory(saved);
  }, []);

  const fetchDashboard = async (selectedTopic = topic) => {
    if (!selectedTopic) return;
    setLoading(true);
    try {
      // REPLACE with your actual Render backend URL
      const res = await fetch("https://your-api-name.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: selectedTopic })
      });
      const result = await res.json();
      setData(result);

      // Add to history if it's a new topic
      if (!history.includes(selectedTopic)) {
        const newHistory = [selectedTopic, ...history].slice(0, 5);
        setHistory(newHistory);
        localStorage.setItem("eduHistory", JSON.stringify(newHistory));
      }
    } catch (err) {
      alert("Server is waking up. Please wait 30 seconds and try again!");
    }
    setLoading(false);
  };

  const downloadPDF = () => {
    const element = document.getElementById('dashboard-to-print');
    const opt = {
      margin: 0.5,
      filename: `${topic || 'study'}-guide.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    window.html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="dashboard-app">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo">🎓 EduAI</div>
        <div className="menu-section">
          <p className="label">RECENT SEARCHES</p>
          <ul className="history-list">
            {history.map((item, i) => (
              <li key={i} onClick={() => fetchDashboard(item)}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search a topic..." 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && fetchDashboard()}
            />
            <button onClick={() => fetchDashboard()} disabled={loading}>
              {loading ? "..." : "Analyze"}
            </button>
          </div>
          <div className="profile">
            <span>Vishnu Reddy</span>
            <div className="avatar">VR</div>
          </div>
        </header>

        {data ? (
          <div className="view-container">
            <button className="download-btn" onClick={downloadPDF}>📥 Download PDF</button>
            
            <div id="dashboard-to-print" className="print-section">
              <h1 className="topic-title">{topic.toUpperCase()}</h1>
              
              <div className="stats-grid">
                <div className="card blue">
                  <h4>DIFFICULTY</h4>
                  <p>{data.difficulty}</p>
                </div>
                <div className="card orange">
                  <h4>EST. TIME</h4>
                  <p>{data.timeToLearn}</p>
                </div>
                <div className="card green">
                  <h4>RELEVANCE</h4>
                  <p>{data.relevanceScore}%</p>
                </div>
              </div>

              <div className="content-card">
                <h3>Expert Summary</h3>
                <p>{data.summary}</p>
                <div className="tags">
                  {data.keyTerms.map(t => <span key={t} className="tag">#{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="welcome-screen">
            <h2>Ready to learn?</h2>
            <p>Type any topic above to generate your custom dashboard.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
