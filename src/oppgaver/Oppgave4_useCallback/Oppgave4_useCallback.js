import { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

// Parent component
const Oppgave4_useCallback = () => {
    console.log('Rendering parent component');

    const [hasWon, setHasWon] = useState(false);
    const [lotteryTicket, setLotteryTicket] = useState(0);
    const [winnerTicket, setWinnerTicket] = useState(undefined);

    const luckyNumber = 7;

    const haveNewLotteryTicket = () => {
        setLotteryTicket(prev => prev + 1);
        if (lotteryTicket === luckyNumber){
            setHasWon(true);
        }
    }

    const congratulate = () => {
        // This line will congratulate you if you won the lottery
        hasWon && console.log('You won!');
    }
    
    const revealTheLuckyNumber = () => {
        // And this line will reveal the lucky number
        console.log(`The lucky number was: ${winnerTicket}`);
    }
    
   /*  const congratulate =  useCallback(() => {
        // The next line is simply a hack to avoid running this function on inital render of the child component...
        if (lotteryTicket === 0) return

        // This line will congratulate you if you won the lottery
        hasWon && console.log('You won!');

        // And this line will reveal the lucky number
        console.log(`The lucky number was: ${luckyNumber}`);
    }, [hasWon]) */

    return (
    <div>
        <h1>Parent component</h1>
        <h2>{lotteryTicket}</h2>
        {/* <button style={{padding:'20px 20px', height:'120px', marginRight: '20px'}} onClick={toggleToReRender}>Re-render parent</button> */}
        <ChildComponent hasWon={hasWon} haveNewLotteryTicket={haveNewLotteryTicket} congratulate={congratulate} revealTheLuckyNumber={revealTheLuckyNumber} setWinnerTicket={setWinnerTicket}/>
    </div>)
}

export default Oppgave4_useCallback