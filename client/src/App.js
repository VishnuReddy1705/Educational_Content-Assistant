import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    try {
      // REPLACE with your live Render URL after Step 4
      const API_URL = "https://educational-content-assistant-ldux.onrender.com"; 
      
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
      });
      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      setResponse("Error connecting to server.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🎓 EduAssistant AI</h1>
      <p>Your 24/7 personal tutor.</p>
      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        placeholder="E.g., Explain Quantum Physics like I'm 10..." 
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Generate Lesson"}
      </button>
      {response && (
        <div className="output">
          <h3>Study Notes:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
