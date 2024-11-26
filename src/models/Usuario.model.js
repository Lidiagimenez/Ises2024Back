const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');  // Asegúrate de que este sea el archivo correcto

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,  // Solo INTEGER, sin longitud
    primaryKey: true,
    autoIncrement: true
  },
  clave: {
    type: DataTypes.STRING,  // Usar STRING sin longitud especificada
    allowNull: false
  },
  dni: {
    type: DataTypes.INTEGER,  // Solo INTEGER, sin longitud
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.STRING,  // Usar STRING sin longitud especificada
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,  // Usar STRING sin longitud especificada
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,  // Usar STRING sin longitud especificada
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,  // Usar STRING sin longitud especificada
    allowNull: false
  },
  correo1: {
    type: DataTypes.STRING,  // Usar STRING sin longitud especificada
    allowNull: false
  },
  correo2: {
    type: DataTypes.STRING,  // Usar STRING sin longitud especificada
    allowNull: true
  },
  telefono1: {
    type: DataTypes.BIGINT,  // BIGINT está bien para PostgreSQL
    allowNull: false
  },
  telefono2: {
    type: DataTypes.INTEGER,  // Solo INTEGER, sin longitud
    allowNull: true
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,  // No hay cambio necesario
    allowNull: false
  },
  id_tipo_usuario: {
    type: DataTypes.INTEGER,  // Solo INTEGER, sin longitud
    allowNull: false
  },
  id_estado_usuario: {
    type: DataTypes.INTEGER,  // Solo INTEGER, sin longitud
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: false  // Si no necesitas los campos createdAt y updatedAt
});

module.exports = Usuario;
