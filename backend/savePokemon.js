const fs = require('fs');

async function savePokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();

    const pokemons = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(p.url);
        const info = await res.json();
        return {
          name: info.name,
          image: info.sprites.front_default,
          types: info.types.map(t => t.type.name),
          abilities: info.abilities.map(a => a.ability.name)
        };
      })
    );

    fs.writeFileSync('pokemons.json', JSON.stringify(pokemons, null, 2));
    console.log('Arquivo pokemons.json criado com sucesso!');
  } catch (err) {
    console.error('Erro ao buscar ou salvar os pokémons:', err);
  }
}

savePokemons();
