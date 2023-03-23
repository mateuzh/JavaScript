const pessoas = require('../db/banco');

class PessoaController {
    
    listar(res, req){
        res.json(pessoas);
    }

    buscarId(res, req){
        const idReq = req.params.id;
        const pessoa = pessoas.find(p => p.id == id);
        res.json(pessoa);
    }

    salvar(res, req){
        const pessoa = req.body;
        pessoas.push(pessoa);
        res.json(pessoas);
    }

    atualizar(res, req){
        const id = req.params.id;
        const pessoa = req.body;
        const idx = pessoas.findIndex(p => p.id == id);
        pessoas[idx] = pessoa;
        res.json(pessoas);
    }

    remover(res, req){
        const id = req.params.id;
        const idx = pessoas.findIndex(p => p.id == id);
        pessoas.splice(idx, 1);
        res.json(pessoas);
    }
}

module.exports = new PessoaController();