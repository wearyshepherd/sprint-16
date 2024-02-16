import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState(Array(6).fill(null));

  const generatePokemon = () => {
    // Your existing logic to generate Pokémon
    // Update the state with the fetched Pokémon data
  };

  return (
    <div className="container">
      <h1>Pokémon Generator</h1>
      <button id="generateButton" onClick={generatePokemon}>Generate Pokémon</button>
      <div className="pokemon-container">
        {pokemons.map((pokemon, index) => (
          <div className="pokemon" key={index}>
            {pokemon && (
              <>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
