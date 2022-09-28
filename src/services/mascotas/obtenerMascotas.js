const MascotaModel = require("../../models/mascotas.model")

const obtenerMascotasService = async () => {
    const mascotas = await MascotaModel.find();
    return mascotas;
}

module.exports = obtenerMascotasService;