function fetchPokemon(nextName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Все пропало покемона с именем ${nextName} нет`)
    );
  });
}

export default fetchPokemon;
