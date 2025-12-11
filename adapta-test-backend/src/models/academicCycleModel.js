const mongoose = require("mongoose");

const academicCycleSchema = new mongoose.Schema(
  {
    name: {
      // ej: "2026-I", "Verano 2027"
      type: String,
      required: true,
      // unique: true, <--- ELIMINADO: La unicidad ahora es compuesta por institución
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      // Para saber cuál es el ciclo actual
      type: Boolean,
      default: false,
    },
    institution: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institution",
      required: true,
    },
  },
  { timestamps: true }
);

// Asegurar unicidad por nombre E institución (Compound Index)
academicCycleSchema.index({ name: 1, institution: 1 }, { unique: true });

module.exports = mongoose.model("AcademicCycle", academicCycleSchema);
