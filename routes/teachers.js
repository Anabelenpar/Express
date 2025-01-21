const express = require('express');
const router = express.Router();

// Ruta para obtener todos los profesores
router.get('/', (req, res) => {
    res.json({ message: 'Lista de profesores' });
});

// Ruta para obtener un profesor específico
router.get('/:id', (req, res) => {
    res.json({ message: `Detalles del profesor ${req.params.id}` });
});

// Ruta para crear un nuevo profesor
router.post('/', (req, res) => {
    res.json({ message: 'Profesor creado', data: req.body });
});

// Ruta para actualizar un profesor
router.put('/:id', (req, res) => {
    res.json({ message: `Profesor ${req.params.id} actualizado`, data: req.body });
});

// Ruta para eliminar un profesor
router.delete('/:id', (req, res) => {
    res.json({ message: `Profesor ${req.params.id} eliminado` });
});

// Ruta para obtener los estudiantes de un profesor
router.get('/:teacher_id/students', (req, res) => {
    res.json({ message: `Estudiantes del profesor ${req.params.teacher_id}` });
});

module.exports = router;