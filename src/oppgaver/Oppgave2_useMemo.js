
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

import { useEffect } from "react"

const Oppgave2_useMemo = () => {

    const peopleHobbies = [
        {
            name: 'Simon',
            hobby: 'guitar'
        },
        {
            name: 'Caroline',
            hobby: 'Zelda'
        },
        {
            name: 'Hein',
            hobby: 'drinking games'
        },
    ]

    useEffect(() => {
        console.log('I am running again!');
    },
    [peopleHobbies])

    return (
        <div>
            <h1>Litt om oss i faggruppa</h1>
            <h2>Folks hobbyer</h2>
            <ul>
                {peopleHobbies.map(ph => <li key={ph.name+ph.hobby}>{`${ph.name} driver med ${ph.hobby}`}</li>)}
            </ul>
        </div>
    )
}

export default Oppgave2_useMemo