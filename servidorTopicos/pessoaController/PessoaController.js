const pessoas = require('../db/banco');

class PessoaController {
    listar(req, res) {
        res.json(pessoas);
    }
}