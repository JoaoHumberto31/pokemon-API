const express = require('express'); // Importa o Express
const cors = require('cors');

const app = express(); //Cria o servidor


//Para permitir receber json nas requisições
app.use(express.json());
app.use(cors());

//request - requisição
//response - respota
app.get('/pokemons', (req, res) => {
    res.json(pokemons);
  });
  app.listen(8000, () => {
    console.log(`Servidor rodando na porta 8000`);
  });