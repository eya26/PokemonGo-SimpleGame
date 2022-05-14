import React, {useState, useEffect} from 'react' ;
import axios from 'axios'
function DeletePokemon () {
   // const [number, setNumber] = useState(0);
    const [pokemons, setPokemons] = useState([{number:0,name:'',types:[],imageUrl:''}])
    /*useEffect(() => {
        fetch('./pokemon')
        .then(res => res.json())
        .then(pokemons => setPokemons({pokemons}, () => console.log('Pokemons fetched', pokemons)))
    }, [])*/
     useEffect(() => {
      axios.get('./pokemon')
      .then((response) => setPokemons(response.data))
    }, []);

    /*Delete = () => {
        axios.delete('./pokemon/:number', {
            number: this.state.number,
            name: this.state.name,
            types: this.state.types,
            imageUrl: this.state.imageUrl

      })
      .then(res => {
        const pok = this.state.pokemons.filter(c => c.number !== res);
    this.setState({ pok })})
      .catch(error =>console.log(error.message))
    }

    handleDelete = item => {
        const Newpokemons = this.state.pokemons.filter(c => c.number !== item.number);
        this.setState({ pokemons: Newpokemons });
    };*/

    const DeleteOnePokemon = (number) => {
      axios.delete (`./pokemon/${number}`)
      .then(res => console.log(res))
      .catch(error =>console.log(error.message))   

    }
    
        return(
        <div>
           <h2 class="titlePok">List Of Pokemons</h2>
           <ul>
               {pokemons.map(pokemon => 
                <li key={pokemon.number}>
                  <div> Name :{pokemon.name} </div>
                  <div> types: {pokemon.types} </div>
                   <img src={pokemon.imageUrl} width={100} height={100} alt='ok'/> 
                   <button  onClick={DeleteOnePokemon(pokemon.number)}> Delete </button> 
                <button > Edit </button> </li>)}
           </ul>    
            </div>
            );
    
  }
    


 
export default DeletePokemon;