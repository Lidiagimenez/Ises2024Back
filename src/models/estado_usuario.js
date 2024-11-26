const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

// Definición del modelo estado_usuario
const estadoUser = sequelize.define(
  "estado_usuario",
  {
    id_estado_usuario: {
      type: DataTypes.INTEGER, // Usar solo INTEGER sin longitud
      autoIncrement: true,
      primaryKey: true,
    },
    detalle: {
      type: DataTypes.STRING, // Usar STRING sin longitud especificada
    },
  },
  {
    timestamps: false, // No activar campos de timestamps (createdAt, updatedAt)
  }
);

module.exports = estadoUser;
