var express = require('express');
var app = express();

const lego = require('./lego.json'); //Copia il file lego.json dentro la variabile lego

app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
  res.render('index', {
   title: 'Homepage',
   lego: lego.profiles, //Passa il vettore profiles alla pagina index.pug
   content : 'Questa pagina parla del mondo e di tanto altro'
 });
});

app.get('/profile', (req, res) => {
 const object = lego.profiles.find((p) => p.SetNumber === req.query.SetNumber);
  res.render('profile', {
    title: `About ${object.SetTheme} ${object.SetName}`,
    istruzioni: `xd ${object.istruzioni}`,
    object,
  });
});

app.listen(3000, function () {
  console.log('SALAME VEGANO');
});