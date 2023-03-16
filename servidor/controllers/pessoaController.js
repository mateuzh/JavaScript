const pessoas = require('../db/banco.js');

class PessoasController {
    
    listar(res, req){
        res.json(pessoas);
    }

    buscarId(res, req){
        
    }

    salvar(res, req){
        
    }

    atualizar(res, req){
        
    }

    remover(res, req){
        
    }
}

module.exports = new PessoasController();