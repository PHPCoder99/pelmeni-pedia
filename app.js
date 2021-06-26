const express = require('express');
const path = require('path');
const data = require('./recipes.json');
const app = express();

app.listen(3000, () => console.log(__dirname));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/public', express.static('public'))

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/recipe', function (req, res){
  res.sendFile(__dirname + '/public/recipe.html');
})
