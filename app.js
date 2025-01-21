const express = require('express');
const mustacheExpress = require('mustache-express'); 
const path = require('path');
const { validateUser } = require('./middlewares/validators');
const app = express();
const port = 3000;

//Importar rutas
const usersRoutes = require('./routes/users');
const teachersRoutes = require('./routes/teachers');
const studentsRoutes = require('./routes/students');

//Condiguración de mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));

//Middleware de login
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

//Rutas básicas
app.get('/', (req, res) => {
    res.render('index', {title: 'index'});
});
app.get('/login', (req, res) => {
    res.render('login', { title: 'Iniciar sesión' });
});

// Usar las rutas
app.use('/api/users', usersRoutes);
app.use('/api/teachers', teachersRoutes);
app.use('/api/students', studentsRoutes);

//Middleware manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal!', error: err.message });
});

//Inicialización servidor
app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});