import { useState, useEffect } from "react";

const Oppgave1_useEffect = () => {
  // Her skal du lage en komponent som viser en tilfeldig
  // Chuck Norris vits!

  // Lag en state som holder på en Chuck Norris vits

  // Lag en funksjon som henter en Chuck Norris vits fra:
  const url = "https://api.chucknorris.io/jokes/random";
  // ved å bruke fetch APIet
  // OBS! Selve vitsen ligger under "value" på objektet i responsen

  // Lag en useEffect som lagrer en Chuck Norris vits til state
  // når komponenten monteres (når siden lastes inn)

  useEffect(() => {
  }, []);
  
  function fetchChuckJoke() {
  }

  return (
    <div style={{ width: "75vw" }}>
      <p>
        <b>Fakta om Chuck Norris: </b>
      </p>
      <p>
        <q>"Insert joke!"</q>
      </p>
      <button
        onClick={fetchChuckJoke}
        style={{ padding: "8px", fontSize: "24px" }}
      >
        Klikk for å hente ny fakta!
      </button>
    </div>
  );
}

export default Oppgave1_useEffect