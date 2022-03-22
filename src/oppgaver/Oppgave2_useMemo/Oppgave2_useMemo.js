
/* Case 2: Reference equality
    I situasjoner der man ønsker å sammenligne to arrays eller objects by value.
    Dersom du har et objekt eller et array som avhengighet i f.eks en useEffect,
    vil react kjøre useEffect'en på nytt for hver re-render der objektet/arrayet er definert. 
    Dette er fordi javascript sammenligner by reference, ikke value.
    Dersom objektet/arrayet er initialisert på nytt, vil det ha en ny reference,
    og useEffecten vil tolke det som at dependency'en har oppdatert seg.

    Her kan man la funksjonen i en useMemo returnere objektet/arrayet, og la useMemo
    være avhengig av eventuelle parametre i objektet/arrayet. useEffecten kan referere
    resultatet fra useMemo'en i stedet, og du vil effektivt få en sammenligning by value.
*/

// OPPGAVE 2 - useMemo
//
// Her har du en liten liste med folk i faggruppe, og deres hobbyer
// I tillegg til navn og hobby ønsker vi selvfølgelig å vise hvilken faggruppe de er med i
// faggruppa ligger i fagGruppe-objektet, og vi later som om det er noe som kan endre seg
//
// Dette eksemplet er ikke veldig bra. Men vi håper du kan lære deg å kjenne igjen denne type feil, hvorfor det skjer, og hvordan man løser det!
//
// Når du utkommenterer fagGruppe vil du fort se hva som går galt!

import { useMemo } from "react";
import { useState, useEffect } from "react";
import HobbyList from "./HobbyList";



const Oppgave2_useMemo = () => {
    const [renderCount, setRenderCount] = useState(0);
    const [peopleHobbies, setPeopleHobbies] = useState([]);
    const [name, setName] = useState("");
    const [hobby, setHobby] = useState("");

    const fagGroupTitle = 'React 2022'

    // This will go bananas!
    const fagGruppe = { faggruppe: fagGroupTitle }

    useEffect(() => {
        console.log('useEffect ran again!');
        setRenderCount(prev => prev + 1)
    },
    [fagGruppe])

    const onChangeName = (event) => {
        setName(event.target.value);
    }
    const onChangeHobby = (event) => {
        setHobby(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setPeopleHobbies(prev => [...prev, {name, hobby, faggruppe: fagGruppe.faggruppe}])
        setName("")
        setHobby("")
    }

    return (
        <div>
            <h3>{`Rendered ${renderCount} times...`}</h3>
            <h1>{`Litt om oss i faggruppa ${fagGruppe.faggruppe}`}</h1>
            <h2>Folks hobbyer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Navn:
                    <input name="name" value={name} onChange={onChangeName} placeholder="Barbara" />
                </label>
                <label>
                    Hobby:
                    <input name="hobby" value={hobby} onChange={onChangeHobby} placeholder="Korps" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <HobbyList peopleHobbies={peopleHobbies}/>
        </div>
    )
}

export default Oppgave2_useMemo