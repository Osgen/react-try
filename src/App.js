import React,{useState} from 'react';
import './App.css';
import Button from './Button';
import TextBox from './TextBox';
import Title from './Title';
import axios from 'axios';



function App() {

  const [name, setName] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState({name:'', id:''});

  const getPokemonByNameId = ()=>{
  
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then((response)=>{
        setSelectedPokemon({name:response.data.name, id:response.data.id, image:response.data.sprites.front_default});
      })
      .catch((err)=> {
        console.error(err);
      });
  }

  return (
    <>
    <Title>Pokedex</Title>
    <TextBox type="text" name="" id="buttonSearch" value={name} onChange={setName}></TextBox>
    <Button onClick={()=>{getPokemonByNameId()}}>Enviar</Button>
    <br></br>
    <span>{selectedPokemon.name} {selectedPokemon.id}</span>
    <img src={selectedPokemon.image}></img>
    </>
  );
}

export default App;
