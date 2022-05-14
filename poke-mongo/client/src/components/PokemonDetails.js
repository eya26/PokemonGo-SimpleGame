import axios from 'axios';
import React, {useEffect,useState} from 'react';
function PokemonDetails() {
    const [pokemon, setPokemon] = useState({})
    const [number, setNumber] = useState(1)
    const [numberFromButtonClick, setNumberFromButtonClick] = useState(1)
    const handleClick = () => {
        setNumberFromButtonClick(number)
    }

    useEffect(() => {
        axios
        .get(`./pokemon/${numberFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPokemon(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }, [numberFromButtonClick])
    
    return ( 
        <div>
            <input 
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetched pokemon</button>
            <div>{pokemon.types}</div>
        </div>
     );
}

export default PokemonDetails;