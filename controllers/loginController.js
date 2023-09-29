const bcrypt = require('bcrypt');
const User = require('../models/userModel');

//Rota login

exports.Login = async (req, res) => {
    try{
        const{username , password } = req.body;

        //Procurar usuário no banco de dados

        const user = users.find(user => user.username === username);
        if (!user){
            return res.status(401).json({message: 'Nome de usuário ou senha incorretos.'})
        }

        //Comprara hash

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({message: 'Nome de usuário ou senha incorretos.'})
        }

        res.status(200).json({message:'Login bem sucedido.'});
    } catch(erro){
        console.error(error);
        res.status(500).json({message: 'Ocorreu um erro no servidor.'})
    }
};
