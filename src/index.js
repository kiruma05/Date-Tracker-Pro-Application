import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="countainer">
      <h1 className="header">KIRUMA`S DATE COUNTER APPLICATION ⏱️⌚</h1>
      <div className="count">
        <div>
          <h2 style={{ color: "black", fontStyle: "italic" }}>
            Adding or Substracting number of days from the current day by
            clicking the corresponding button below start on steps you want to
            move
          </h2>
        </div>
        <div>
          <h4>
            <button
              style={{ color: "blue" }}
              onClick={() => setStep((count) => count - 1)}
            >
              -
            </button>
            <span> step : {step} </span>
            <button onClick={() => setStep((count) => count + 1)}>+</button>
          </h4>
        </div>
        <div>
          <h4>
            <button
              style={{ color: "blue" }}
              onClick={() => setCount((count) => count - step)}
            >
              -
            </button>
            <span> count : {count} </span>
            <button onClick={() => setCount((count) => count + step)}>+</button>
          </h4>
        </div>
        <div>
          <h3>
            <span>
              {count === 0
                ? " To day is "
                : count > 0
                ? `${count} day from today is `
                : `${Math.abs(count)} days agoo was `}
            </span>
          </h3>
          <h3>
            <span
              style={{ fontStyle: "italic" }}
            >{`${date.toDateString()}`}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
