const mongoose = require('mongoose');

const youngApprenticeSchema = mongoose.Schema(
  {
    class: { type: String, required: [true] },
    name: { type: String, required: [true] },
    role: { type: String, required: [true] },
    instructor: { type: String, required: [true] },
    city: { type: String, required: [true] },
    cnpj: { type: String, required: [true] },
    phone: { type: String, required: [true] },
    birthDate: { type: String, required: [true] },
    admission: { type: String, required: [true] },
    end: { type: String, required: [true] },
    contractPeriod: { type: String, required: [true] },
    cpf: { type: String, required: [true] },
    rg: { type: String, required: [true] },
    practiceHours: { type: String, required: [true] },
    theoreticalHours: { type: String, required: [true] },
    model: { type: String, required: [true] },
    active: { type: Boolean, required: [true] },
    contractExpiration: { type: String, required: [true] },
    terminationReasons: { type: String, required: [false] },
    terminationMethods: { type: String, required: [false] },
    attendance: { type: String, required: [false] },
    participation: { type: String, required: [false] },
    interpersonalRelationships: { type: String, required: [false] },
    goalAchievement: { type: String, required: [false] },
    technicalSkills: { type: String, required: [false] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('YoungApprentice', youngApprenticeSchema);