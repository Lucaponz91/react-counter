import { useState } from "react";

import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date("july 5 2023");
  date.setDate(date.getDate()+count)

  function increaseStep() {
    setStep((s) => s + 1);
    console.log(step);
  }

  function dimStep() {
    setStep((s) => s - 1);
    console.log(step);
  }

  function increaseCount() {
    setCount((s) => s + step);
    console.log(count);
  }

  function dimCount() {
    setCount((s) => s - step);
    console.log(count);
  };

  let text = "";

  if (count < 0 ) {
    text = `${count} days ago was `;
  } else if ( count > 0) {
    text = `in ${count} days will be `;
  } else{
    text = `today is `;
  }



  return (
    <div className="App">
      <div className="step">
        <button onClick={() => dimStep()}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => increaseStep()}>+</button>
      </div>
      <div className="count">
        <button onClick={() => dimCount()}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => increaseCount()}>+</button>
      </div>
      <p>{text} {date.toDateString()}</p>
    </div>
  );
}
