# Express-server
Api creada con express y node.
## Almacenar datos
Se hace uso del archivo jsonToApi, al ejecutarlo hará uso del webscraper ("scraperMercedes.json") y mediante la api, introducirá todos los datos en la base de datos.
```ssh
-node jsonToApi.js
```
## Rutas de la api:
### Obtener todos los coches: GET
http://localhost:3000/coches
### Eliminar todo los coches: DELETE
http://localhost:3000/coches
### Insertar un coche: PUT
http://localhost:3000/coches
además de 
```ssh
{
"marca" : "Mercedes",
"modelo" : "CLA",
"tipo" : "320",
"precio" : "20000€",
"imagen" : "rutaImagen"
}
```
### Obtener un coche por id: GET
http://localhost:3000/coches/idCoche
### Eliminar un coche por id: DELETE
http://localhost:3000/coches/idCoche
### Obtener un coche por modelo: GET
http://localhost:3000/coches/mercedes/idCoche
### Actualizar un coche por id: PUT
http://localhost:3000/coches/idCoche
EN DESARROLLO...