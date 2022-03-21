import { useEffect } from 'react';
import { useState, useCallback } from 'react';


const ExampleUseCallback = () => {
    const [hourOfDay, setHourOfDay] = useState(0);
    
    // 1. callOutHour uten useCallback
/*     const callOutHour = () => {
        console.log(`🦉 Cuckoooo! It's ${hourOfDay} o clock!`);
    } */
    
    // 2. callOutHour med useCallback
    const callOutHour = useCallback(() => {
        console.log(`🦉 Cuckoooo! It's ${hourOfDay} o clock!`);
    }, [hourOfDay])

    const goOneHourForward = () => {
        setHourOfDay((prev) => prev + 1);
    }

    useEffect(() => {
        callOutHour();
    }, [callOutHour]);


    // Don't worry about this part 👇
    console.log('Rendering');
    const [toggle, setToggle] = useState(false);
    const toggleToReRender = () => {
        setToggle(!toggle);
    }

    return (
    <div>
        <h2>{`The time is: 0${hourOfDay}:00 o clock`}</h2>
        <button style={{padding:'40px 20px', 'marginRight': '40px'}} onClick={goOneHourForward}>Go an hour forward</button>
        <button style={{padding:'40px 20px'}} onClick={toggleToReRender}>Re-render</button>
    </div>)
}

export default ExampleUseCallback