const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
})

connection.connect(function(error) {
    if(error){
        console.error('Erro ao tentar se conectar ao Banco de dados: '+ error.stack);
        return;
    }
    
  console.log(`Conexão realizada com sucesso ao Banco de Dados: ${process.env.DB_NAME}`);
});
module.exports = connection;