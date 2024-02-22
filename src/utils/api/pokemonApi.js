const fetchRandomPokemon = async (pokemonNumber) => {
  try {
    const pokemonId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon. Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      id: pokemonNumber,
      name: capitalizeFirstLetter(data.name),
      image: data.sprites.front_default
    };
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return {
      error: true,
      message: 'Unable to fetch Pokemon. Please try again later.'
    };
  }
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { fetchRandomPokemon };
