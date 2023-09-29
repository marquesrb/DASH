const bcrypt = require('bcrypt');
const User = require('../models/userModel');

//Rotas para criar um novo usuário (registro)

exports.Register = async (req, res) => {
    console.log(req.body);

    try{
        const {username,password} = req.body;

        //Verifica se o usuário já existe

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Nome de usuário já existe' });
        }

        //Criptorafa a senha usando bcrypt

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);

        //Armazena o novo usuário no banco de dados

        const newUser = new User({
            username,
            password: hashedPassword
        });
        await newUser.save();

        res.status(201).json({message: 'Usuário criado com sucesso.'});
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Ocorreu um erro no servidor.'});
    }
};

