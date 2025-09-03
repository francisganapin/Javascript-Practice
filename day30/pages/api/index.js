import { useEffect,useState } from "react";


export default function home(){
    const [question,setQuestion] = useState("");
    const [option,setOptions] = useState({});
    const [answer,setAnswer] = useState("");
    const [result,setResult] = useState(null);


    useEffect(() => {
        fetch('/api/question')
        .then((res) => res.json())
        .then((data) => {
            setQuestion(data.question);
            setOptions(data.options);
        });
    }, []);

    const checkAnaswer = async () => {
        const res = await fetch('/api/answer',{
            method:'POST',
            headers:{'Content-Type':'applicaion/json'},
            body:JSON.stringify({answer}),
        });
        const data = await res.json();
        setResult(data);
    };

    return (
        <div style={{ padding: 20 }}>
          <h1>Quiz App</h1>
          <h2>{question}</h2>
          <ul>
            {Object.entries(options).map(([key, value]) => (
              <li key={key}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={key}
                    onChange={(e) => setAnswer(e.target.value)}
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
                  <h3>Wrong! Correct answer: {result.correct_answer.toUpperCase()}</h3>
                  <p>{result.facts}</p>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }