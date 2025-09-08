let todosPokemons = [];

async function getPokemon() {
  try {
    const response = await fetch('http://localhost:8000/pokemon');
    const pokemons = await response.json();

    todosPokemons = pokemons;
    mostrarPokemons(todosPokemons);
  } catch (err) {
    console.error('Erro ao buscar pokémons:', err);
  }
}

function mostrarPokemons(pokemons) {
  const list = document.getElementById('pokemon-list');
  list.innerHTML = '';

  pokemons.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    card.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
      <p>${pokemon.types ? pokemon.types.join(', ') : ''}</p>
    `;

    card.addEventListener('click', () => {
      abrirModal(pokemon);
    });

    list.appendChild(card);
  });
}

function abrirModal(pokemon) {
  const modal = document.getElementById('pokemon-modal');
  document.getElementById('pokemon-name').textContent = pokemon.name;
  document.getElementById('pokemon-image').src = pokemon.image;
  document.getElementById('pokemon-types').textContent = `Tipos: ${pokemon.types ? pokemon.types.join(', ') : '-'}`;
  document.getElementById('pokemon-abilities').textContent = `Habilidades: ${pokemon.abilities ? pokemon.abilities.join(', ') : '-'}`;

  modal.style.display = 'flex';
}

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('pokemon-modal').style.display = 'none';
});

function procurarPokemon() {
  const termo = document.getElementById('search').value.toLowerCase();
  const filtrados = todosPokemons.filter(p => p.name.toLowerCase().includes(termo));
  mostrarPokemons(filtrados);
}

document.getElementById('search').addEventListener('input', procurarPokemon);

getPokemon();
