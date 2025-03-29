const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const { verifyToken } = require('../middlewares/authMiddleware');

// Todas las rutas requieren un token válido
router.use(verifyToken);

// Operación para listar (accesible para ambos roles)
router.get('/', crudController.listItems);

// Operaciones exclusivas para Admin ( crear, actualizar y eliminar)
router.post('/', crudController.createItem);
router.put('/:id', crudController.updateItem);
router.delete('/:id', crudController.deleteItem);

module.exports = router;
