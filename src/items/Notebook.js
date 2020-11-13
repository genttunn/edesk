import React, { useState, useEffect } from "react";
import "../styles/Notebook.css";

export default function Notebook() {
  const yesterdayNote = localStorage.getItem("yesterdayNote");
  const lastNote = localStorage.getItem("lastWrittenNote");
  const [yesterday, setYesterday] = useState(
    yesterdayNote === null ? "" : yesterdayNote
  );
  const [today, setToday] = useState(lastNote === null ? "" : lastNote);

  useEffect(() => {
    updateNote();
  }, []);

  let updateNote = () => {
    const lastWrittenTimeStamp = localStorage.getItem("lastWrittenTimeStamp");
    if (lastWrittenTimeStamp !== null) {
      let lastDate = new Date(Number(lastWrittenTimeStamp)).getDate();
      let nowDate = new Date().getDate();
      if (lastDate !== nowDate) {
        localStorage.setItem("yesterdayNote", lastNote);
        localStorage.setItem("lastWrittenNote", "");
        localStorage.setItem("lastWrittenTimeStamp", Date.now().toString());
        setYesterday(lastNote);
        setToday("");
      }
    }
  };

  let save = async (e) => {
    await setToday(e.target.value);
    localStorage.setItem("lastWrittenNote", today);
    localStorage.setItem("lastWrittenTimeStamp", Date.now().toString());
  };

  return (
    <div className="Notebook">
      <div className="Notebook-left">
        <form>
          <textarea name="yesterday" id="left" value={yesterday} readOnly />
        </form>
      </div>
      <div className="Notebook-right">
        <textarea name="today" id="right" value={today} onChange={save} />
      </div>
    </div>
  );
}
