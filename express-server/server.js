// Get dependencies
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/ProyectoCochesMEANSTACK';

// Connect to mongodb
mongoose.connect(dbHost);

// Require all models
var Coche = require("./models/coche.js");
var Marca = require("./models/marca.js");


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

//Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));

/* GET api listing. */
app.get('/', (req, res) => {
  res.send('api works');
});

/* GET all coches. 
app.get('/coches', (req, res) => {
  Coche.find({}, (err, coches) => {
      if (err) res.status(500).send(error)
      res.status(200).json(coches);
  });
});*/

/* DELETE all coches. 
app.delete('/coches', function (req, res) {
  Coche.remove({}, function (err) {
    if (err) {
        res.json({ succes: false, msg: 'Problem with delete coches.' });
    }
    else {
        res.json({ succes: true, msg: 'Coches deleted' });
    }
  });
});*/ 

// POST one coche.
app.post('/coches', function (req, res) {
  var newCoche = new Coche({
      modelo: req.body.modelo,
      tipo: req.body.tipo,
      precio: req.body.precio,
      imagen: req.body.imagen,
  });
  var newMarca = new Marca({
      marca: req.body.marca,
  });
  //Marca.findOne()
  newCoche.save(error => {
    if (error) res.status(500).send(error);
  
    res.status(201).json({
        message: 'Coche created successfully'
    });
  });
});

/* GET one Coche by id. 
app.get('/coches/:id', (req, res) => {
  Coche.findById(req.params.id, function (err, coches) {
    if (!err) {
        console.log('GET /coches/' + req.params.id);
        res.send(coches);
    } else {
        console.log('ERROR: ' + err);
    }
  });
});*/

/*DELETE one coche by id 
app.delete('/coches/:id', (req, res) => {
  Coche.remove({ _id: req.params.id }, function (err) {
    if (err) {
        res.json({ succes: false, msg: 'Problem with delete coche.' });
    }
    else {
        res.json({ succes: true, msg: 'Coche deleted' });
    }
  });
});*/

/* GET coches by modelo. 
app.get('/coches/mercedes/:modelo', (req, res) => {
  Coche.find({modelo: req.params.modelo}, (err, coches) => {
      if (err) res.status(500).send(error)
      res.status(200).json(coches);
  });
});*/


/*UPDATE coches by id
app.put('/coches/:id', function (req, res){
  Coche.findById(req.params.id, function (err, coche) {
    if (!err) {
      console.log('GET /coches/' + req.params.id);
      coche.marca = req.body.marca;
      coche.modelo = req.body.modelo;
      coche.tipo = req.body.tipo;
      coche.precio = req.body.precio;
      coche.imagen = req.body.imagen;

      coche.save(function (err) {
          if (err) {
              res.json({ succes: false, msg: 'Problem updating coche' });
          } else {
              res.json({ succes: true, msg: 'Coche Updated' });
          }
      });
    } else {
      console.log('ERROR: ' + err);
    }      
    });
});*/

/* GET coche by modelo y tipo.
app.get('/coches/mercedes/:modelo/:tipo', (req, res) => {
  Coche.find({modelo: req.params.modelo}, (err, coches) => {
    find({tipo: req.params.tipo}, (err, cars) => {
      if (err) res.status(500) */