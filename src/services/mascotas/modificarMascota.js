const MascotaModel = require("../../models/mascotas.model");

const modifcarMascotaService = async (req) => {
    const mascota = req.body;
    const { name } = req.params
    const updateMascota = await MascotaModel.findOne({ name });
    updateMascota.name = mascota.name;
    updateMascota.animal = mascota.animal;
    updateMascota.rescatado = mascota.rescatado;
    updateMascota.adquirido = mascota.adquirido;
    await updateMascota.save();
};

module.exports = modifcarMascotaService;