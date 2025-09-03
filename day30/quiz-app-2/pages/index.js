import { useState, useEffect } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({});
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  // Load question from API
  useEffect(() => {
    fetch("/api/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.question);
        setOptions(data.options || {}); // fallback to empty object
      })
      .catch((err) => {
        console.error("Failed to load quiz:", err);
      });
  }, []);

  // Send answer to API
  const checkAnswer = async () => {
    if (!answer) {
      alert("Please select an answer first!");
      return;
    }

    try {
      const res = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Failed to submit answer:", err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Quiz App</h1>
      {question ? (
        <>
          <h2>{question}</h2>
          <ul>
            {Object.entries(options || {}).map(([key, value]) => (
              <li key={key} style={{ marginBottom: "8px" }}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={key}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ marginRight: "8px" }}
                  />
                  {key.toUpperCase()}: {value}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={checkAnswer}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <p>Loading question...</p>
      )}

      {result && (
        <div style={{ marginTop: "20px" }}>
          {result.result ? (
            <h3>{result.result}</h3>
          ) : (
            <div>
              <h3>
                Wrong! Correct answer: {result.correct_answer?.toUpperCase()}
              </h3>
              <p>{result.facts}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
