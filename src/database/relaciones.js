const tipoUser = require("../models/tipo_usuario");
const User = require("../models/usuarios.model");
const estadoUser = require("../models/estado_usuario");

try {
  // Relación: un tipo de usuario tiene muchos usuarios
  tipoUser.hasMany(User, {
    foreignKey: "id_tipo_usuario",
  });
  User.belongsTo(tipoUser, {
    foreignKey: "id_tipo_usuario",
  });

  // Relación: un usuario tiene un estado de usuario
  estadoUser.hasOne(User, {
    foreignKey: "id_estado_usuario",
  });
  User.belongsTo(estadoUser, {
    foreignKey: "id_estado_usuario",
  });

  console.log("Relaciones establecidas correctamente");
} catch (error) {
  console.error("Error al establecer relaciones:", error);
}

module.exports = {
  tipoUser,
  User,
  estadoUser,
};
