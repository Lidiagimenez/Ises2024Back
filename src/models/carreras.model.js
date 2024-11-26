const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Carreras = sequelize.define(
  "carreras",
  {
    id_carrera: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, // Solo INTEGER sin longitud
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'nombre',
    },
    id_estado_carrera: {
      allowNull: false,
      type: DataTypes.INTEGER, // Solo INTEGER sin longitud
      field: "id_estado_carrera",
    },
    alta_baja: {
      allowNull: false,
      type: DataTypes.INTEGER, // Solo INTEGER sin longitud
      field: "alta_baja",
    },
  },
  {
    timestamps: false, // Si no necesitas las columnas de timestamps (createdAt, updatedAt)
  }
);

module.exports = Carreras;
