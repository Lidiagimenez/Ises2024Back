const UserService = require('../services/usuarios.service');
const service = new UserService();

const create = async (req, res) => {
    console.log("Datos recibidos:", req.body);  // Agregar este registro
    try {
        const { nombre, apellido, clave, dni, nacionalidad, direccion, correo1, correo2, telefono1, telefono2, fecha_nacimiento, id_tipo_usuario, id_estado_usuario, alta_baja } = req.body;

        // Validar campos requeridos
        if (!nombre || !apellido || !clave || !dni) {
            return res.status(400).send({ success: false, message: 'Faltan campos requeridos: nombre, apellido, clave y dni son obligatorios.' });
        }

        // Verificar y establecer valores por defecto
        const usuarioData = {
            nombre,
            apellido,
            clave,
            dni,
            nacionalidad,
            direccion,
            correo1,
            correo2: correo2 || null,  // Establece null si correo2 está vacío
            telefono1,
            telefono2: telefono2 || null, // Establece null si telefono2 está vacío
            fecha_nacimiento,
            id_tipo_usuario,
            id_estado_usuario,
            alta_baja
        };

        const response = await service.create(usuarioData);
        res.json({ success: true, data: response });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).send({ success: false, message: error.message });
    }
};

const get = async (req, res) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        console.log("error en lugar 1");
        res.status(500).send({ success: false, message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const alta_baja = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

module.exports = {
    create, get, getById, update, _delete, alta_baja
};
