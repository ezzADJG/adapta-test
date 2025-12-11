const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre de la carrera es obligatorio."],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria."],
    },
    // 👇 NUEVOS CAMPOS AÑADIDOS AQUÍ
    degrees: {
      type: [String], // Un array de strings
      required: [true, "Es necesario especificar al menos un grado o título."],
    },
    duration: {
      type: String, // ej. "10 Ciclos" o "5 Años"
      required: [true, "La duración es obligatoria."],
    },
    coordinator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    institution: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institution",
      required: true,
    },
    curriculum: [
      {
        cycleNumber: {
          type: Number,
          required: true,
        },
        courses: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Eliminado índice global problemático que impedía ciclos repetidos en diferentes carreras
// careerSchema.index(
//   { "curriculum.cycleNumber": 1 },
//   { unique: true, sparse: true }
// );

module.exports = mongoose.model("Career", careerSchema);
