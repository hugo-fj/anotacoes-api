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

        connection.query("SELECT * FROM anotacoes WHERE id = ?",[id],(error,results)=>{
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
    },
    add: (titulo,anotacao) =>{
         return new Promise((resolve,reject)=>{

            connection.query("INSERT INTO anotacoes (titulo,anotacao) VALUES (?,?)",
                [titulo,anotacao],
                (error,results)=>{
                    if(error){
                        reject(error);
                        return;
                    }
                    resolve(results.insertId);
            })
         })
    },
    update:(id,titulo,anotacao)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE anotacoes SET titulo = ?,anotacao =? Where id=?',
                [titulo,anotacao,id],
                (error,results)=>{
                    if(error){
                        reject(error);
                        return;
                    }
                    resolve(results);
                }
            );
        })
    },
    delete:(id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM anotacoes WHERE id = ?',[id],(error,results)=>{
                if(error){
                    reject(error);
                    return
                }
                resolve(results);
            }            
            );
        })
    }

}