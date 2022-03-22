const initialPeopleHobbies = [
    {
        name: 'Simon',
        hobby: 'guitar',
        faggruppe: 'React 2022'
    },
    {
        name: 'Caroline',
        hobby: 'Zelda',
        faggruppe: 'React 2022'
    },
    {
        name: 'Hein',
        hobby: 'drinking games',
        faggruppe: 'React 2022'
    },
]


const HobbyList = ({ peopleHobbies }) => {

    return (
    <ul>
        {initialPeopleHobbies.map(ph => <li key={ph.name+ph.hobby}>{`${ph.name} i ${ph.faggruppe} driver med ${ph.hobby}`}</li>)}
        {peopleHobbies.map(ph => <li key={ph.name+ph.hobby}>{`${ph.name} i ${ph.faggruppe} driver med ${ph.hobby}`}</li>)}
    </ul>

    )
}

export default HobbyList
