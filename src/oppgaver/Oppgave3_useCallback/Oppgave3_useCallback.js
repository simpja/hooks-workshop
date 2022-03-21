import { useState, useCallback } from 'react';
import LotterySpiller from './ChildComponent';

//  OPPGAVE 4 - useCallback - LOTTERIET!
//
//  I lotteriet har vi to perspektiv, lotteriets og spillerens, som vi kan se av de to sorte boksene
//  Lotteriet vet naturligvis hva som er vinnerloddet, og hvilket lodd som er det siste som ble trukket
//  Spilleren vet derimot ikke noe av dette, men har muligheten til å starte lotteriet, og trekke nye lodd
//
//  Men lotteriet har fått tilbakemeldinger på at det er sabla masete, da man får høre at lotteriet er startet for hvert eneste lodd som trekkes
//  
//  Klarer du å se hvorfor? 
//  Kan du fikse problemet ved å implementere useCallback rundt en av funksjonene?

const Oppgave3_useCallback = () => {
    const [hasStarted, setHasStarted] = useState(false);
    const [hasWon, setHasWon] = useState(false);
    const [lotteryTicket, setLotteryTicket] = useState(0);

    // vinnertallet skulle vært satt hver gang lotteriet startet, men det ble litt mye støy i oppgaven... 
    // Derfor er den hardkodet!
    const winnerTicket = 3;

    const haveNewLotteryTicket = () => {
        if (lotteryTicket + 1 === winnerTicket){
            setHasWon(true);
        }
        setLotteryTicket(lotteryTicket + 1);
    }

    const callOutStarted = () => {
        hasStarted && alert('Lottery started!');
    }

    return (
    <div>
        <div style={{padding: '8px' ,border: '2px solid black'}}>
            <h1>Lotteriets perspektiv</h1>
            <h2>{`Vinnerlodd: ${winnerTicket}`}</h2>
            <h2>{`Siste lodd: ${lotteryTicket}`}</h2>
        </div>
        <LotterySpiller 
            hasWon={hasWon} 
            haveNewLotteryTicket={haveNewLotteryTicket} 
            callOutStarted={callOutStarted}
            hasStarted={hasStarted}
            setHasStarted={setHasStarted}
            />
    </div>)
}

export default Oppgave3_useCallback