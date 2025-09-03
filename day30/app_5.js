import { useEffect, useState } from "react";

export default function QuizApp() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({});
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState(null);

  // Load question from Flask API
  useEffect(() => {
    fetch("http://localhost:3000/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.question);
        setOptions(data.options || {}); // make sure options exist
      });
  }, []);

  const checkAnswer = async () => {
    if (!selected) {
      alert("Please select an answer first.");
      return;
    }

    const res = await fetch("http://localhost:3000/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: selected }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Quiz App</h1>
      <h2>{question || "Loading..."}</h2>
      <ul>
        {Object.entries(options).map(([key, value]) => (
          <li key={key}>
            <label>
              <input
                type="radio"
                name="answer"
                value={key}
                onChange={(e) => setSelected(e.target.value)}
              />
              {key.toUpperCase()}: {value}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={checkAnswer}>Submit</button>

      {result && (
        <div style={{ marginTop: 20 }}>
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
