/* Case 1: Trege funksjonskall
    I situasjoner der man kaller en ren (samme resultat hver gang gitt samme input) 
    og dyr(treg) funksjon er det lurt å cache resultatet. React har et hook som 
    kalles useMemo (memoization) som memoiserer resultatet av en funksjon slik at
    funksjonen ikke kalles på nytt dersom input ikke har endret seg.
*/

import { useMemo } from "react";
import { useState } from "react";

const mockFishPriceCalculatorApi = (amountOfFish) => {
    const constantPrice = 125;
    // simulate sloooooow response
    for (let i = 0; i <= 1000000000; i++) {}
    return constantPrice * amountOfFish
}


const ExampleUseMemo = () => {
    // Code to let you re-render by pushing the Re-render button. No need to change this
    const [toggle, setToggle] = useState(false);
    const toggleToReRender = () => {
        setToggle(!toggle);
    }
    console.log('I rendered!');
    
    const [amount, setAmount] = useState(0);
    
    const updateAmount = (event) => {
        setAmount(event.target.value)
    }
    
    // Implement useMemo!
    const calculatePrice = () => {
        console.log('I re-calculated!');
        // Simulate call to external fish price calculator
        return mockFishPriceCalculatorApi(amount);
    }

    const currentPrice = calculatePrice();


    return (
        <div>
            <div>
                <button style={{padding:'20px 20px', marginBottom: '30px'}} onClick={toggleToReRender}>Re-render</button>
            </div>
            <h1>How much is the fish? 🐟</h1>
            <label>
                Amount of fish:
                <input onChange={updateAmount} type="number" name="budget" value={amount} placeholder={500}/> 
            </label>
            <h2>{`Current price is: ${currentPrice}`}</h2>
        </div>
    )
}

export default ExampleUseMemo