"use client";
import { useState, useRef } from "react";

export default function Ores() {
  const num = () => Math.floor(Math.random() * 100);
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);
  const ref = useRef(null);

  let handleClick = () => {
    const newNumber = num();
    setRandomNumber(newNumber);
    setHistory((previousHistory) => [...previousHistory, newNumber]);
  };

  let secondClick = () => {
    let incrementValue = parseInt(ref.current.value);
    console.log(incrementValue);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h1> the number is {randomNumber}</h1>
      <ul>
        {history.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <div className="bg-red-500 w-[300px] h-[300px]">
        <input type="number" ref={ref} className="m-[30px]" />
        <button className="bg-blue-300 p-[20px] m-[30px]" onClick={secondClick}>
          Collect info!
        </button>
      </div>
    </div>
  );
}
