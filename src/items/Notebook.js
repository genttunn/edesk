import React, { useState } from "react";
import "../styles/Notebook.css";
export default function Notebook() {
  const savedNote = localStorage.getItem("savedNote");
  const [yesterday, setYesterday] = useState(
    savedNote === null ? "" : savedNote
  );

  let save = (e) => {
    let note = String.valueOf(e.target.value);
    console.log(Date.now());
    localStorage.setItem("savedNote", e.target.value);
  };

  return (
    <div className="Notebook">
      <div className="Notebook-left">
        <form>
          <textarea name="yesterday" id="left" value={yesterday} />
        </form>
      </div>
      <div className="Notebook-right">
        <textarea name="today" id="right" onChange={save} />
      </div>
    </div>
  );
}
