const connection = require('../db');

module.exports = {
    getAnotacoes:() =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM anotacoes',(error,results)=>{
                if(error){
                        reject(error);
                    return;
                }
                resolve(results);
            })
        });
            
    },
    findById: (id) =>{
      return new Promise((resolve,reject)=>{

        connection.query("SELECT * FROM anotacao WHERE id = ?",[id],(error,results)=>{
            if(error){
                reject(error);
            return;
            }
            if (results.length>0){
                resolve(results[0]);
            } else {
                resolve(false);
            }
                
        });
      });
    }
}