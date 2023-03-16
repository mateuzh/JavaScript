const pessoas = require('../db/banco');

class PessoaController{

    listar(req, res){
        res.json(pessoas);
    }

    buscarPorID(req, res){

    }

    salvar(req, res){

    }

    atualizar(req, res){

    }

    excluir(req, res){

    }
    
    
}

module.exports = new PessoaController();