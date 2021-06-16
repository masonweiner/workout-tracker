const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  day: {
    type: Date,
    unique: true,
    required: "Must have a date",
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Must have an exercise type",
      },
      name: {
        type: String,
        required: "Must have an exercise name",
      },
      duration: {
        type: Number,
        required: "Must have a duration",
      },
      weight: {
        type: Number,
        required: "Must have a weight",
      },
      reps: {
        type: Number,
        required: "Must have a number of reps",
      },
      sets: {
        type: String,
        required: "Must have a number of sets",
      },
    },
  ],
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;
