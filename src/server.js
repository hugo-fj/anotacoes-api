require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');


const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));


server.use('/api',routes);



server.listen(process.env.PORTA,()=>{
    console.log(`Aplicação sendo executado em http://localhost:${process.env.PORTA}`)
});