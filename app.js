// Configura o servidor e inicia a aplicação

const express = require('express'); 
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');

const app = express(); 

//Configuração do servidor
const porta = 3000;

//Conectar ao MongoDB

const uri = "mongodb+srv://master:dsxPjhjGlBOzog8E@cluster0.gfansdc.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conexão com o banco de dados estabelecida!");
}).catch((error) => {
  console.log("Erro de conexão com o banco de dados:", error);
});

//Importar arquivos estáticos

app.use(express.static('public'));

//Importar rota de usuários
const usersRouter = require('./routes/userRouter');

app.use(express.json());

app.use('/users', usersRouter);

app.listen(porta, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});