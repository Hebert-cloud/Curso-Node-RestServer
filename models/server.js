const express = require('express');
var cors = require('cors');
const req = require('express/lib/request');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user'

        //Middlewares    *NOTA: son funciones que ejecutan otras*
        this.middlewares();

        //rutas de mi app
        this.routes();
    }

    routes(){
        
        this.app.use(this.userPath, require('../routes/user'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor Corriendo en el Puerto: ', this.port);
        });
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //lectura y parse del body 
        this.app.use(express.json());

        //ruta estatica 
        this.app.use(express.static('public'))
    }
}

module.exports = Server;
