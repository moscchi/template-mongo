const { Schema, model } = require("mongoose");

const MascotaSchema = new Schema({
  name: { type: String, required: [true, "La mascota necesita un nombre"] },
  animal: { type: String, enum: ["conejo", "perro", "gato"], required: true },
  rescatado: { type: Boolean, default: false },
  adquirido: { type: Date, default: Date.now },
});

const MascotaModel = model("Mascota", MascotaSchema);

module.exports = MascotaModel;
