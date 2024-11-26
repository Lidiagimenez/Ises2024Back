const express = require("express");

// Importar los routers de cada módulo
const usersRouter = require("./usuarios.routes");
const materiasRouter = require("./materias.routes");
const carrerasRouter = require("./carreras.routes");
const alumnosRouter = require("./alumnos.routes");
const autentificacionRoute = require("./autentificacionRoute");

function routerApi(app) {
  const router = express.Router();

  // Definir las rutas
  router.use("/materias", materiasRouter);
  router.use("/users", usersRouter);
  router.use("/carreras", carrerasRouter);
  router.use("/alumnos", alumnosRouter);
  router.use("/autentificacion", autentificacionRoute);

  // Usar el router en la ruta base
  app.use("/api/v1", router);
}

module.exports = routerApi;
