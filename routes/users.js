const express = require('express');
const router = express.Router();
const { validateUser } = require('../middlewares/validators');

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
    res.json({ message: 'Lista de usuarios' });
});

// Ruta para obtener un usuario específico
router.get('/:id', (req, res) => {
    res.json({ message: `Detalles del usuario ${req.params.id}` });
});

// Ruta para crear un nuevo usuario
router.post('/', validateUser, (req, res) => {
    res.json({ message: 'Usuario creado', data: req.body });
});

// Ruta para actualizar un usuario
router.put('/:id', (req, res) => {
    res.json({ message: `Usuario ${req.params.id} actualizado`, data: req.body });
});

// Ruta para eliminar un usuario
router.delete('/:id', (req, res) => {
    res.json({ message: `Usuario ${req.params.id} eliminado` });
});

// Ruta para activar un usuario
router.post('/:id/active', (req, res) => {
    res.json({ message: `Usuario ${req.params.id} activado` });
});

// Ruta para obtener el estado de activación de un usuario
router.get('/:id/active', (req, res) => {
    res.json({ active: true });
});

module.exports = router;