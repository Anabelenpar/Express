const express = require('express');
const router = express.Router();

// Ruta para obtener todos los estudiantes
router.get('/', (req, res) => {
    res.json({ message: 'Lista de estudiantes' });
});

// Ruta para obtener un estudiante específico
router.get('/:id', (req, res) => {
    res.json({ message: `Detalles del estudiante ${req.params.id}` });
});

// Ruta para crear un nuevo estudiante
router.post('/', (req, res) => {
    res.json({ message: 'Estudiante creado', data: req.body });
});

// Ruta para actualizar un estudiante
router.put('/:id', (req, res) => {
    res.json({ message: `Estudiante ${req.params.id} actualizado`, data: req.body });
});

// Ruta para eliminar un estudiante
router.delete('/:id', (req, res) => {
    res.json({ message: `Estudiante ${req.params.id} eliminado` });
});

module.exports = router;