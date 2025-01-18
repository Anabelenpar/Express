const express = require('express');
const mustacheExpress = require('mustache-express'); 
const app = express();
const port = 3000;

//Condiguración de mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set("views", __dirname + "/views");

//Middleware para parsear JSON
app.use(express.json());

//Rutas básicas
app.get('/', (req, res) => {
    res.render('index', {title: 'index'});
});

//Inicialización servidor
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});