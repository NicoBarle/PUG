var express = require('express');
var app = express();

const people = require('./people.json'); //Copia il file people.json dentro la variabile people

app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
  res.render('index', {
   title: 'Homepage',
   people: people.profiles, //Passa il vettore profiles alla pagina index.pug
   content : 'Questa pagina parla del mondo e di tanto altro'
 });
});

app.get('/profile', (req, res) => {
  const person = people.profiles.find((p) => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

app.listen(3000, function () {
  console.log('SALAME VEGANO');
});