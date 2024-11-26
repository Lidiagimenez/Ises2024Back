const User = require("../models/usuarios.model");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {}

  async find() {
    console.log("find ");
    const res = await User.findAll();
    return res;
  }

  async findOne(id) {
    console.log("findOne");
    const res = await User.findByPk(id);
    return res;
  }

  async create(data) {
    const hashedPassword = await bcrypt.hash(data.clave, 10);
    data.clave = hashedPassword;
    const res = await User.create(data);
    console.error("Usuario creado");
    return res;
  }
  catch(error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }

  async update(id, data) {
    const User = await this.findOne(id);
    const res = await User.update(data);
    return res;
  }

  async alta_baja(id, data) {
    const User = await this.findOne(id);
    const res = await User.update(data);
    return res;
  }

  async delete(id) {
    const User = await this.findOne(id);
    console.log("delete find one");
    const res = await User.destroy();
    return res;
  }
}

module.exports = UserService;
