require("dotenv").config();
const { Sequelize } = require('sequelize');
const config = require('../config/config');

// Crear la instancia de Sequelize
const sequelize = new Sequelize(
  config.dbNAME, // nombre de la base de datos
  config.dbUser, // usuario de la base de datos
  config.dbPassword, // contraseña de la base de datos
  {
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false, // Desactivar logs de Sequelize
  }
);

// Sincronizar la base de datos
async function syncDatabase() {
  try {
    console.log("Sincronizando sequelize...");
    await sequelize.sync({ force: false }); // Sincronización sin forzar la recreación de tablas
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}

syncDatabase();

module.exports = sequelize;
