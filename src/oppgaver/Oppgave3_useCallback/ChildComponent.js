import { useEffect } from "react"

const LotterySpiller = ({ hasWon, haveNewLotteryTicket, callOutStarted, hasStarted, setHasStarted} ) => {

    useEffect(() => {
        callOutStarted();
    }, 
    [callOutStarted])

    useEffect(() => {
        hasWon && alert('You won!');
    }, 
    [hasWon])
   

    const pickNewLuckyNumber = () => {
        // vinnertallet er hardkodet i parent-komponenten da det skapte litt mye støy i oppgaven 😅
        setHasStarted(true);
    }
    
    return (
    <div style={{padding: '8px' ,border: '2px solid black'}}>
        <h2>Spillerens perspektiv</h2>
        { hasStarted 
            ? <button style={{padding:'20px 20px'}} onClick={haveNewLotteryTicket}><p style={{fontSize:'3rem', margin: '0px'}}>🎫</p>Try again!</button>
            : <button style={{padding:'20px 20px'}} onClick={pickNewLuckyNumber}>Start lottery!</button>
        }
    </div>
    )
}

export default LotterySpiller