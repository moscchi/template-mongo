const MascotaModel = require("../../models/mascotas.model");

const agregarMascotaService = async (req) => {
  const mascota = req.body;
  const newMascota = new MascotaModel(mascota);
  await newMascota.save();
};

module.exports = agregarMascotaService;
