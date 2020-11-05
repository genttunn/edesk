import React, { useState } from "react";
import "./App.css";
import Notebook from "./items/Notebook";

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
      <div className="App-container">
        <div className="App-table">
          <Notebook></Notebook>
        </div>
      </div>
    </div>
  );
}

export default App;
{
  /* <p>Current number is {number}</p>
        <button onClick={addToNumber}>Add 1 to number</button>
        <button onClick={reset}>Reset to 0</button>
        <button onClick={save}>Save</button> */
}
{
  /* <img src={wood} className="App-desk" alt="desk" /> */
}
