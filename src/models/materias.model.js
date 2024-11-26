const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Materias = sequelize.define(
  "materias",
  {
    id_materia: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, // Solo INTEGER, sin longitud
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING, // Sin longitud especificada
      field: 'nombre',
    },
    id_tipo_materia: {
      allowNull: false,
      type: DataTypes.INTEGER, // Solo INTEGER, sin longitud
      field: "id_tipo_materia",
    },
    id_estado_materia: {
      allowNull: false,
      type: DataTypes.INTEGER, // Solo INTEGER, sin longitud
      field: "id_estado_materia",
    },
    alta_baja: {
      allowNull: false,
      type: DataTypes.INTEGER, // Solo INTEGER, sin longitud
      field: "alta_baja",
    },
  },
  {
    timestamps: false, // Si no necesitas las columnas de timestamps (createdAt, updatedAt)
  }
);

module.exports = Materias;
