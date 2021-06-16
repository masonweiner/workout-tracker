const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
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
      distance: {
        type: Number,
        required: "Must have a distance",
      },
    },
  ],
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
