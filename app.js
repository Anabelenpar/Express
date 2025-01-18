const express = require('express');
const mustacheExpress = require('mustache-express'); 
const path = require('path');
const app = express();
const port = 3000;

//Condiguración de mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.set('partials', path.join(__dirname, 'views/partials'));

//Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas básicas
app.get('/', (req, res) => {
    res.render('index', {title: 'index'});
});
app.get('/login', (req, res) => {
    res.render('login', { title: 'Iniciar sesión' });
  });

//Inicialización servidor
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});