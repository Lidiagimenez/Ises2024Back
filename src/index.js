const sequelize = require("./database/database");
const app = require("./app.js");
const config = require("./config/config");

// Obtener el puerto de la configuración
const port = config.port;

async function main() {
  try {
    // Autenticar la conexión a la base de datos
    await sequelize.authenticate();

    // Cargar relaciones
    require("./database/relaciones");

    // Iniciar la aplicación
    app.listen(port, () => {
      console.log(`App funcionando en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
  }
}

main();
