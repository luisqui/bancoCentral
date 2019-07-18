module.exports = (app) => {

    //Funciones que responden a los metodos get post put delete
    app.get('/', function(reg, res){
        let persona = {
            'nombre': 'Luis',
            'edad': '25',
        };
        res.send(persona);
    });

    app.post ('/personas', (req, res) => {
        let nombre = req.body.nombre;
        let edad = req.body.edad;
        let miPersona = {
            'elNombre': nombre,
            'laEdad': edad
        };
        res.send(miPersona);
    })
}