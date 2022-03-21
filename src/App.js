import './App.css';
import ExampleUseCallback from './eksempler/exampleUseCallback';
import ExampleUseMemo from './eksempler/exampleUseMemo';
import Oppgave1_useEffect from './oppgaver/Oppgave1_useEffect';
import Oppgave2_useMemo from './oppgaver/Oppgave2_useMemo';
import Oppgave3_useCallback from './oppgaver/Oppgave3_useCallback/Oppgave3_useCallback';
import Oppgave4_useCallback from './oppgaver/Oppgave4_useCallback';

function Eksempler() {
  return (
    <>
      <ExampleUseMemo />
      {/* <ExampleUseCallback /> */}
    </>
  )
}

function Oppgaver() {
  return (
    <>
      {/* <Oppgave1_useEffect /> */}
      <Oppgave2_useMemo />
      {/* <Oppgave3_useCallback /> */}
      {/* <Oppgave4_useCallback /> */}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Eksempler />
        {/* <Oppgaver /> */}
        {/* <Fasit /> */}
      </header>
    </div>
  );
}

export default App;