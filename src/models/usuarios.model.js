const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const User = sequelize.define(
  "usuarios",
  {
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, // Eliminar la longitud
      field: "id_usuario",
    },
    clave: {
      allowNull: false,
      type: DataTypes.STRING, // Eliminar la longitud
      field: "clave",
    },
    dni: {
      allowNull: false,
      type: DataTypes.INTEGER, // Eliminar la longitud
      field: "dni",
    },
    nacionalidad: {
      allowNull: false,
      type: DataTypes.STRING, // Eliminar la longitud
      field: "nacionalidad",
    },
    direccion: {
      allowNull: false,
      type: DataTypes.STRING, // Eliminar la longitud
      field: "direccion",
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING, // Eliminar la longitud
      field: "nombre",
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING, // Eliminar la longitud
      field: "apellido",
    },
    correo1: {
      allowNull: false,
      type: DataTypes.STRING, // Eliminar la longitud
      field: "correo1",
    },
    correo2: {
      allowNull: true,
      type: DataTypes.STRING, // Eliminar la longitud
      field: "correo2",
    },
    telefono1: {
      allowNull: false,
      type: DataTypes.BIGINT, // Eliminar la longitud
      field: "telefono1",
    },
    telefono2: {
      allowNull: true,
      type: DataTypes.BIGINT, // Eliminar la longitud
      field: "telefono2",
    },
    fecha_nacimiento: {
      allowNull: false,
      type: DataTypes.DATEONLY, // No hay cambio necesario
      field: "fecha_nacimiento",
    },
    id_tipo_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER, // Eliminar la longitud
      field: "id_tipo_usuario",
    },
    id_estado_usuario: {
      allowNull: false,
      type: DataTypes.INTEGER, // Eliminar la longitud
      field: "id_estado_usuario",
    },
    alta_baja: {
      allowNull: false,
      type: DataTypes.INTEGER, // Eliminar la longitud
      field: "alta_baja",
    },
  },
  {
    timestamps: false, // Si no necesitas las columnas createdAt y updatedAt
  }
);

module.exports = User;
