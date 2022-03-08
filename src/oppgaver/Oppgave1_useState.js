import { useState } from "react";

export function Oppgave1_UseState() {

  // Her skal du lage en måte å inkrementere deg
  // frem til din alder og hvor mange søsken du har :)
  
  // Lag to states "age" og "siblings" med default verdi 0

  // Bruk "get" verdien i <p> istedenfor tallet som er der nå

  // Bruk "set" funksjonen til å inkrementere state for
  // "age" og "siblings" i funksjonene nedenfor

  function handleAgeIncrement() {
  }
  function handleSiblingsIncrement() {
  }

  return (
    <div>
      <p>Jeg er 0 år gammel</p>
      <p>Jeg har 0 søsken</p>
      <div>
        <button onClick={handleAgeIncrement}>Bli eldre!</button>
        <button onClick={handleSiblingsIncrement}>Få flere søsken!</button>
      </div>
    </div>
  );
}
