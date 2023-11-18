const express = require('express');
const router = express.Router();

// Importando controllers
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const youngApprenticeController = require('../controllers/yougApprenticeController');

// Rotas de autenticação
router.post('/auth/register', loginController.registerUser);
router.post('/auth/login', loginController.loginUser);
router.get('/auth/:id', loginController.authenticateUser);

// Rotas de usuário
router.get('/user/:id', userController.getUserById);
router.get('/user', userController.getUsers);
router.delete('/user/deleteUser/:id', userController.deleteUser);

// Rotas de Jovem Aprendiz
router.get('/youngApprentice/:id', youngApprenticeController.getYoungApprenticeById);
router.get('/youngApprentice', youngApprenticeController.getYoungApprentices);
router.post('/youngApprentice/register', youngApprenticeController.registerYoungApprentice);
router.delete('/youngApprentice/delete/:id', youngApprenticeController.deleteYoungApprentice);
router.put('/youngApprentice/update/:id', youngApprenticeController.updateYoungApprentice);
router.get('/youngApprentice/generatePDF/:id', youngApprenticeController.generatePDF);

module.exports = router;
