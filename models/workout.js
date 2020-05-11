const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// per seeds.js, day (is Date) and exercises, with specifics for each (controlled by type and name for each)
const WorkoutSchema = new Schema({
    day: {
        type: Date, default: Date.now()},
    exercises: {
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
    }
});
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;