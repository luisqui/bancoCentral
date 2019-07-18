const express = require('express');
const bodyParser = require('body-parser');
// Instanciar express
const app = express();
// Uso de body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Funciones que responden a los metodos get post put delete
app.get('/', function(reg, res){
    res.send('Hello World');
})
app.listen(3500,function(){
    console.log('el servidor esta corriendo en el puerto 3500');
});