import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  const generatePokemon = () => {
    const pokemonArray = [];
    for (let i = 0; i < 6; i++) {
      fetchRandomPokemon(i + 1).then(data => {
        pokemonArray.push(data);
        if (pokemonArray.length === 6) {
          setPokemonData(pokemonArray);
        }
      });
    }
  };

  const fetchRandomPokemon = async (pokemonNumber) => {
    const pokemonId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    return {
      id: pokemonNumber,
      name: capitalizeFirstLetter(data.name),
      image: data.sprites.front_default
    };
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Generator</h1>
        <button id="generateButton" onClick={generatePokemon}>Generate Pokémon</button>
        <div className="pokemon-container">
          {pokemonData.map(pokemon => (
            <div className="pokemon" key={pokemon.id}>
              <img src={pokemon.image} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
