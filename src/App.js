import './App.css';
import ExampleUseCallback from './eksempler/exampleUseCallback';
import { Oppgave1_UseState } from "./oppgaver/Oppgave1_useState";
import { Oppgave2_useEffect } from './oppgaver/Oppgave2_useEffect';
import Oppgave3_useCustomHook from './oppgaver/Oppgave3_useCustomHook';
import Oppgave4_useCallback from './oppgaver/Oppgave4_useCallback/Oppgave4_useCallback';



function Eksempler() {
  return (
    <>
      <ExampleUseCallback />
    </>
  )
}

function Oppgaver() {
  return (
    <>
      {/* <Oppgave1_UseState /> */}
      {/* <Oppgave2_useEffect /> */}
      {/* <Oppgave3_useCustomHook /> */}
      <Oppgave4_useCallback />
    </>
  );
}

function Fasit() {
  return (
    <>
      {/* <Fasit1 /> */}
      {/* <Fasit2 /> */}
      {/* <Fasit3 /> */}
      {/* <Fasit4 /> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Eksempler /> */}
        <Oppgaver />
        {/* <Fasit /> */}
      </header>
    </div>
  );
}

export default App;