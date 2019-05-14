'use strict'
// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var MarcaSchema = Schema({
    marca: String,
    coche: { type: Schema.ObjectId, ref: "Coche" }
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Marca', MarcaSchema);