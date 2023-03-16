const pessoaController = require('./controllers/pessoaController');
const express = require('express');
const srv = express();
srv.use(express.json());

srv.get('/pessoas', pessoaController.listar);

srv.get('/', function(req, res){
    res.send('Resposta em srv.get(/)');
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

