const agregarMascotaService = require("../services/mascotas/agregarMascota");
const modifcarMascotaService = require("../services/mascotas/modificarMascota");
const obtenerMascotasService = require("../services/mascotas/obtenerMascotas");

const agregarMascota = async (req, res) => {
    try {
        await agregarMascotaService(req);
        res.json({message: "Mascota agregada con exito."})
    } catch (error) {
        const msg = error.message
        res.json({message: "Ocurrió un error. " + msg})
    }
}

const obtenerMascotas = async (req, res, next) => {
    try {
        const mascotas = await obtenerMascotasService();
    res.json({mascotas})
    } catch (error) {
        next(error)
    }
}

const modificarMascota = async (req, res, next) => {
    try {
        await modifcarMascotaService(req);
        res.json({message: 'Mascota modificada con exito.'})
    } catch (error) {
        next(error)
    }
}
module.exports = {agregarMascota, obtenerMascotas, modificarMascota};