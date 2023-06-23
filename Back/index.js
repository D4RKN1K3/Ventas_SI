const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//Rutas
app.get('/', (req, res) => {
    res.send('Servidor Arriba');
});

//Conexion a la base de datos
mongoose
    .connect(process.env.MONGODB_URI).then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('Servidor en el puerto',port));
