import React from "react";
import "./App.css";
import Notebook from "./items/Notebook";
import rain from "./assets/rain.mp3";
function App() {
  let rainsound = new Audio(rain);
  rainsound.loop = true;
  rainsound.onplay = () => {
    console.log("playing");
  };
  rainsound.onpause = () => {
    console.log("paused");
  };
  let startRain = async () => {
    try {
      await rainsound.play();
    } catch (err) {
      console.log("Failed to play..." + err);
    }
  };

  let stopRain = async () => {
    try {
      await rainsound.pause();
    } catch (err) {
      console.log("Failed to pause..." + err);
    }
  };
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-table">
          <Notebook></Notebook>
          <button onClick={startRain}>Play</button>
          <button onClick={stopRain}>Pause</button>
        </div>
      </div>
    </div>
  );
}

export default App;
{
  /*  */
}
{
  /* <p>Current number is {number}</p>
        <button onClick={addToNumber}>Add 1 to number</button>
        <button onClick={reset}>Reset to 0</button>
        <button onClick={save}>Save</button> */
}
{
  /* <img src={wood} className="App-desk" alt="desk" /> */
}
