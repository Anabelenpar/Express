const { body, validationResult } = require('express-validator');

const validateUser = [
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('type').isIn(['admin', 'user']).withMessage('Tipo de usuario inválido'),
  body('active').isBoolean().withMessage('El campo active debe ser un booleano'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateUser };