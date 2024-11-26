const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Alumnos = sequelize.define(
  "alumnos",
  {
    id_alumno: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, // Solo INTEGER, sin especificar longitud
    },
    legajo: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'legajo',
    },
    fecha_inscripcion: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'fecha_inscripcion',
    },
    id_carrera: {
      allowNull: false,
      type: DataTypes.INTEGER, // Solo INTEGER sin longitud
      field: "id_carrera",
    },
    id_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER, // Solo INTEGER sin longitud
      field: "id_usuario",
    },
  },
  {
    timestamps: false, // Si no necesitas las columnas de timestamps (createdAt, updatedAt)
  }
);

module.exports = Alumnos;
