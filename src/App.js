import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const savedNumber = localStorage.getItem("number");
  const [number, setNumber] = useState(
    savedNumber === null ? 0 : parseInt(savedNumber)
  );
  let addToNumber = () => {
    setNumber(number + 1);
  };
  let reset = () => {
    setNumber(0);
  };
  let save = () => {
    localStorage.setItem("number", number.toString());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current number is {number}</p>
        <button onClick={addToNumber}>Add 1 to number</button>
        <button onClick={reset}>Reset to 0</button>
        <button onClick={save}>Save</button>
      </header>
    </div>
  );
}

export default App;
