const express    = require('express');
const path       = require('path'); // Charge le middleware des routes
const logger     = require('morgan'); // Charge le middleware de logging
const bodyParser = require('body-parser'); // Parser le formulaire

const routes     = require('./routes') // Charge le fichier routes.js

const app        = express();

app.set('view engine','ejs' ); // Indique qu'il y a des fichiers ejs
app.set('views', path.resolve(__dirname, 'views')); // Indique le chemin du le dossier views
//("set" => indique)

app.use(express.static(path.resolve(__dirname, 'public'))); // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base) à utiliser
app.use(logger('dev')); // Active le middleware de logging
app.use(bodyParser.urlencoded({ extended: true }));
// console.log(bodyParser);
app.use(routes) ;
//("use" => utilise les middlewares)

app.listen(8000, 'localhost', () => {
  console.log('Server port:8000');
});
