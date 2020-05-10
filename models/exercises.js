const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Workout = mongoose.model("Workout", WorkoutSchema);
// per seeds.js, day (is Date) and exercises, with specifics for each (controlled by type and name for each)
const WorkoutSchema = new Schema({
    day: Date,
    exercises: [{
        type: {
            type: String,
            required: "Required"
        },
        name: {
            type: String,
            required: "Required"
        },
        distance: {type: Number},
        duration: {type: Number},
        weight: {type: Number},
        sets: {type: Number},
        reps: {type: Number}
    }]
});

module.exports = Workout;