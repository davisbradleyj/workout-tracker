const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Workout = mongoose.model("Workout", WorkoutSchema);
const WorkoutSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number,
    date: Date,
});

module.exports = Workout;