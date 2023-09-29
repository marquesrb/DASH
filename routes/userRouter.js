const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/register', (req,res)=>{
    const registerFilePath = path.join(__dirname, '../views/users/register.html');
    res.sendFile(registerFilePath);
});

router.get('/login', (req,res)=>{
    const registerFilePath = path.join(__dirname, '../views/users/login.html');
    res.sendFile(registerFilePath);
});

const userRegister = require('../controllers/registerController');
const userLogin = require('../controllers/loginController');

// Rota para registrar um novo usuário
router.post('/register', userRegister.Register);

// Rota para login 
router.post('/login', userLogin.Login);

module.exports = router;