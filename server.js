const express = require('express');
const bodyParser = require('body-parser');
// Instanciar express
const app = express();
// Uso de body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./api/router.js')(app);
app.listen(3500,function(){
    console.log('el servidor esta corriendo en el puerto 3500');
});