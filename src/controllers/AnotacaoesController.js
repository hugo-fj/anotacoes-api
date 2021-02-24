const Anotacao = require('../models/Anotacao')

module.exports = {
    ping: (req,res)=>{
        res.json({pong:true});
    },
    home:(req,res)=>{
        res.send('Seja bem-vindo a página inicial!');
    },
    anotacoes: async (req,res)=>{
        let json = {error:'',result:[]};

        let anotacoes = await Anotacao.getAnotacoes();
            
                for(let i in anotacoes){
                    json.result.push({
                        id: anotacoes[i],
                        titulo: anotacoes[i].titulo
                    });
                }
        res.json(json);
    },
    anotacao : async(req,res)=>{
        let json = {error:'',result:{}};
        let id = req.params.id;
        let anotacao = await Anotacao.findById(id);

        if(anotacao){
            json.result = anotacao;
        }
        res.json(json);
    },
    adicionar:async(req,res)=>{

    },
    editar:async(req,res)=>{

    },
    apagar:async(req,res)=>{

    }
}