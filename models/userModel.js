const mongoose = require('mongoose');

//Definição esquema de usuário

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

//Criando o modelo do usuário a partir do esquema

const User = mongoose.model('User', userSchema);

module.exports = User;