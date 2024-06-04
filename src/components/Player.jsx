import { useState, useRef } from "react";
export default function Player() {
  const playername = useRef();
  const [enterPlayerName, setenterPlayerName] = useState(null);

  function handleChange() {
    setenterPlayerName(playername.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "UnKnown  Entity"} </h2>
      <p>
        <input type="text" ref={playername} />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
