const Anotacao = require('../models/Anotacao')

module.exports = {
    home:(req,res)=>{
        res.send('Seja bem-vindo a página inicial!');
    },
    listar: async (req,res)=>{
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
        let json ={error:'',result:{}};
        let titulo =req.body.titulo;
        let anotacao = req.body.anotacao;
        
        if(titulo && anotacao){

            let anotacaoId = await Anotacao.add(titulo,anotacao);
            json.result ={
                id:anotacaoId,
                titulo,
                anotacao
            }

        }else{
            json.error = 'Campos não enviados.';
        }


        res.json(json)
    },
    editar:async(req,res)=>{
        let json ={error:'',result:{}};

        let id = req.params.id;
        let titulo = req.body.titulo;
        let anotacao = req.body.anotacao;

        if(id && titulo && anotacao){
            await Anotacao.update(id,titulo,anotacao);
                json.result = {
                    id,
                    titulo,
                    anotacao
                };
            
        }else{
            json.error='Campos não enviados.'
        }
        
        res.json(json);
        
    },
    remover:async(req,res)=>{
        let json = {error:'',result:{}};

        await Anotacao.delete(req.params.id);
        
        res.json(json);

    }
}