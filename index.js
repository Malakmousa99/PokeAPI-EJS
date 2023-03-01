
const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const pokemon1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const pokemon2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const pokemon3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    
    const data = {
      pokemon1: pokemon1.data,
      pokemon2: pokemon2.data,
      pokemon3: pokemon3.data,
    };
    
    res.render('index', { data });
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'),
console.log('http://localhost:3000')
);