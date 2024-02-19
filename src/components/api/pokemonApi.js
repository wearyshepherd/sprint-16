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

export { fetchRandomPokemon, capitalizeFirstLetter };
