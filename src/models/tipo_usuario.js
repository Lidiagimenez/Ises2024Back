const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const tipoUser = sequelize.define(
  "tipo_usuario",
  {
    id_tipo_usuario: {
      type: DataTypes.INTEGER, // Solo INTEGER sin longitud
      autoIncrement: true,
      primaryKey: true,
    },
    detalle: {
      type: DataTypes.STRING, // Usar STRING sin longitud
    },
    descripcion_permisos: {
      type: DataTypes.STRING, // Usar STRING sin longitud
    },
  },
  {
    timestamps: false, // Si no necesitas las columnas de timestamps (createdAt, updatedAt)
  }
);

module.exports = tipoUser;
