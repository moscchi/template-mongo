
const {
  obtenerMascotas,
  agregarMascota,
  modificarMascota,
} = require("../controller/mascotaController");
const express = require("express");
const MascotaModel = require("../models/mascotas.model");
const router = express.Router();

router.post("/mascota", agregarMascota);
router.get("/mascota", obtenerMascotas);
router.put("/mascota/:name", modificarMascota)
router.delete("/mascota/:name", async (req, res, next) => {
    try {
        const { name} = req.params
        await MascotaModel.deleteOne({name: name })
        res.json({message: "Mascota eliminada con exito"})
    } catch (error) {
        next(error);
    }
})

module.exports = router;
