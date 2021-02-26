const express = require('express');
const router = express.Router();
const AnotacoesController = require('../controllers/AnotacaoesController')

router.get('/home',AnotacoesController.home) 

router.get('/listar',AnotacoesController.listar);

router.get('/anotacao/:id',AnotacoesController.anotacao);

router.post('/adicionar',AnotacoesController.adicionar);

router.put('/anotacao/:id',AnotacoesController.editar);

router.delete('/anotacao/:id',AnotacoesController.remover);

module.exports = router;