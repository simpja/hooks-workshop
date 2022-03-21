/*
    Se denne: https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60

    Case : Referential equality
    I javascript er funksjoner objekter. Dvs. at som med objekter og arrays,
    vil ikke to funksjoner være like (===) om ikke de faktisk referer til det samme.
    Dersom en funksjon er definert i komponent A, og en avhengighet i en useEffect i komponent B
    Vil komponent B re-rendres dersom komponent A re-rendres. Det er fordi funksjonen i
    komponent A blir re-definert når komponent rendres, og får ny referanse.
    Når useEffecten i komponent B da i dependency-arrayet sjekker om den nye funksjonen er lik den gamle 
    vil svaret være nei!

    PS: At en funksjon tegnes på nytt for hver re-render virker kanskje litt rart? 
    Men dette er nødvendig dersom funksjonen avhenger av noe som endrer seg. For eksempel
    om man bruker state som parameter inne i funksjonen. Dersom funksjonen ikke avhenger av
    noe i komponenten, bør den selvfølgelig heller defineres utenfor komponenten.

    Vi kan da bruke useCallback for å memoisere funksjonen, slik at vi kan sammeligne den
    by value, og ikke by reference.
*/




import { useEffect } from "react"

// Child component
const ChildComponent = ({ congratulate, haveNewLotteryTicket, revealTheLuckyNumber, setWinnerTicket} ) => {

    
    // re-run congratulate ONLY when the function changes
    useEffect(() => {
        congratulate();
        revealTheLuckyNumber();
    }, 
    [congratulate])

    const pickNewLuckyNumber = () => {
        // make a random int 0 < 10
        const randomInt = 3;
        // set winner ticket using
        setWinnerTicket(randomInt);
    }
    
    return (
    <>
        <h2>Child component</h2>
        <button style={{padding:'20px 20px'}} onClick={haveNewLotteryTicket}><p style={{fontSize:'3rem', margin: '0px'}}>🎫</p>Have another!</button>
        <button style={{padding:'20px 20px'}} onClick={pickNewLuckyNumber}><p style={{fontSize:'3rem', margin: '0px'}}>🎫</p>New lottery!</button>
    </>
    )
}

export default ChildComponent