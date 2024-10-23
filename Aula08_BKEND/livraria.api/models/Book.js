const mongoose = require('mongoose') //variavel mongoose que irá armazenar a conexão futura com o mongo

//Define a estrutura para salvar o livro no banco de dados

const BookSchema = new mongoose.Schema({

//titulo, tipo string, require indica que o parâmetro é obrigatorio

    title: {type: String, required: true}, 
        author: {type: String, required: true},
            year:{ type: Number}
});

//Exportando o modelo para salvar os livros

module.exports = mongoose.model('Book', BookSchema)
