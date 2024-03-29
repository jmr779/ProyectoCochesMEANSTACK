'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var CocheSchema = Schema({
    marca: String,
    modelo: String,
    tipo: String,
    precio: String,
    imagen: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Coche', CocheSchema);