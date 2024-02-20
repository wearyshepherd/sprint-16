import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import { fetchRandomPokemon } from './utils/api/pokemonApi'; 

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

  // Re-declare the capitalizeFirstLetter function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Me</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={
          <main className="main-container">
            <h1>Pokémon Generator</h1>
            <button className="generate-button" onClick={generatePokemon}>Generate Pokémon</button>
            <div className="pokemon-container">
              {pokemonData.map(pokemon => (
                <div className="pokemon" key={pokemon.id}>
                  <img src={pokemon.image} alt={pokemon.name} />
                  <p>{capitalizeFirstLetter(pokemon.name)}</p>
                </div>
              ))}
            </div>
          </main>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="App-footer">
        Created by Trippleten Student Carlos Chavez
      </footer>
    </div>
  );
}

export default App;
