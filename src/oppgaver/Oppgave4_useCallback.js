import { useEffect } from 'react';
import { useState, useCallback } from 'react';

const vehicleOptions = [
    {
        name: 'car',
        price: 200000,
    },
    {
        name: 'bike',
        price: 15000,
    },
    {
        name: 'skateboard',
        price: 1000,
    },
    {
        name: 'feet',
        price: 0,
    },
]

// OPPGAVE 5 - useCallback igjen!
// 
// Her har vi en liste, vehicleOptions, over mulige transportmidler man kan gå til anskaffelse av, og deres pris
//
// Vi ønsker å gi brukeren mulighet til å tilpasse sitt budsjett, og direkte se hvilke transportmidler som er 
// innenfor budsjett.
//
// Men når vi bruker filterfunksjonen vår inne i en useEffect får vi en evig loop!
//
// Bruk useCallback for å fikse problemet!

const Oppgave5_useCallback = () => {
    const [budget, setBudget] = useState(1000);
    const [availableVehicles, setAvailableVehicles] = useState([]);

    const filterOnBudget = () => {
        return vehicleOptions.filter(vehicle => vehicle.price <= budget)
    }

    useEffect(() => {
        setAvailableVehicles(filterOnBudget());
    }, [filterOnBudget]);

    const updateBudget = (event) => {
        setBudget(event.target.value)
    }

    // Code to let you re-render by pushing the Re-render button. No need to change this
    const [toggle, setToggle] = useState(false);
    const toggleToReRender = () => {
        setToggle(!toggle);
    }

    return (
    <div>
        <button style={{padding:'20px 20px'}} onClick={toggleToReRender}>Re-render</button>
        <h2>{`Your budget is: ${budget},-`}</h2>
        <div>
            <label>
                Your budget:
                <input onChange={updateBudget} type="number" name="budget" value={budget} placeholder={500}/> 
            </label>
        </div>
        <h3>Your available vehicles are:</h3>
        <ul>
            {availableVehicles.map(prod => <li key={prod.name}>{prod.name}</li>)}
        </ul>
    </div>)
}

export default Oppgave5_useCallback