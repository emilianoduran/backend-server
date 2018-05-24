// Requires Importación de express
var express = require('express');
var mongoose = require('mongoose')



//inicializar variables

var app = express();

// conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: ONLINE');
})



// Escuchar peticiones

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"))

// rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
})