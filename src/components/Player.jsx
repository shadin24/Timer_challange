import { useState, useRef } from "react";
export default function Player() {
  const playername = useRef();
  

  function handleChange() {
    playername.current.value
  }

  return (
    <section id="player">
      <h2>Welcome {playername.current ? playername.current.value:"UnKnown  Entity"} </h2>
      <p>
        <input type="text" ref={playername} />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
