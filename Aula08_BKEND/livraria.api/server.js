// arquivo principal da api
// inicia o servidor

const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')

// iniciando o app

const app = express();
app.use(cors());
app.use(express.json());

// conexao com o Mongo DB
// mongodb+srv://lrodrigues:Senhor@21@library.m9biu.mongodb.net/
mongoose.connect('mongodb+srv://lrodrigues:Senhor13@library.m9biu.mongodb.net/?retryWrites=true&w=majority&appName=library',{
    useNewUrlParser:true,
    useUnifiedTopology: true

}).then(()=>console.log('Mongodb conectado')).catch(err=>console.error('Erro ao conectar no mongo', err));

//Importação das rotas

const bookRoutes = require('../livraria.api/Routes/books');
app.use('/api/books', bookRoutes); // ira retornar a rota dos livros

// define a porta do servidor

app.listen(3000, ()=>{
    console.log('Servidor executando na porta 3000');
});