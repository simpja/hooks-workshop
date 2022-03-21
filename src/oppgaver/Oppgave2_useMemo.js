/* Case 1: Trege funksjonskall
    I situasjoner der man kaller en ren (samme resultat hver gang gitt samme input) 
    og dyr(treg) funksjon er det lurt å cache resultatet. React har et hook som 
    kalles useMemo (memoization) som memoiserer resultatet av en funksjon slik at
    funksjonen ikke kalles på nytt dersom input ikke har endret seg.
*/

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

const Oppgave2_useMemo = () => {


    return (
        <div>
            <h1>Oppgave2_useMemo</h1>
        </div>
    )
}

export default Oppgave2_useMemo