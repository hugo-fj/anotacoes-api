const express = require('express');
const router = express.Router();
const AnotacoesController = require('../controllers/AnotacaoesController')

router.get('/home',AnotacoesController.home)
   
router.get('/ping',AnotacoesController.ping);

router.get('/anotacoes',AnotacoesController.anotacoes);

router.get('/anotacao/:id',AnotacoesController.anotacao);

router.post('/anotacao',AnotacoesController.adicionar);

router.put('/anotacao/:id',AnotacoesController.editar);

router.delete('/anotacao/:id',AnotacoesController.apagar);




module.exports = router;