const pessoaController = require('./controllers/pessoaController');
const express = require("express");
const srv = express();
srv.use(express.json());

srv.get('/pessoas', pessoaController.listar);
srv.get('/pessoas/:id', pessoaController.buscarId);
srv.post('/pessoas', pessoaController.salvar);
srv.put('/pessoas/:id', pessoaController.atualizar);
srv.delete('/pessoas:id', pessoaController.remover);

//Testar para ver se o banco de dados está funcionando
require("./db/mongo");

const mongoose = require('mongoose');

const ModeloExemplo = mongoose.model('Exemplo', {nome: String});
const objetoExemplo = new ModeloExemplo({nome: "Teste"});

objetoExemplo.save().then(()=> console.log("Salvou!"));

srv.get('/', function(req, res){
    res.send('srv.get()');
})

srv.post('/', function(req, res){
    res.send('Resposta em srv.post(/)');
})

srv.put('/', function(req, res){
    res.send('Resposta em srv.put(/)');
})

srv.delete('/', function(req, res){
    res.send('Resposta em srv.delete(/)');
})

srv.listen(3000, function(){
    console.log('Servidor rodando na porta 3000!')
})

