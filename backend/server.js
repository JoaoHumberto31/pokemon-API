const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

// Lê o JSON local
let pokemon = JSON.parse(fs.readFileSync('pokemons.json'));

app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

app.listen(8000, () => {
  console.log('Servidor rodando em http://localhost:8000');
});
