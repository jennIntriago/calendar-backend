const express = require("express");

//* Crear servidor de express
const app = express();

// * Rutas
app.get("/", (req, res) => {
  console.log("se requiere el /");
});

//Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
