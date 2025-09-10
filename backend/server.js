const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path')

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend')));

let pokemon = JSON.parse(fs.readFileSync('pokemons.json'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.get('/pokemon', (req, res) => {
  res.json(pokemon);
});

app.listen(8000, () => {
  console.log('Site rodando em http://localhost:5500/frontend');
});