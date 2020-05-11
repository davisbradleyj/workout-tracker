const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// per seeds.js, day (is Date) and exercises, with specifics for each (controlled by type and name for each)
const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now()},
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
}, { toJSON: { virtuals: true}}
);

WorkoutSchema.virtual("totalDuration").get(function(){
    // the reduce method is applied to the exercises array 
   return this.exercises.reduce((total, exercise) => {
    // it takes in two arguments, the total - which is the total or first duration, and
    // second parameter which is the current ot last duration that was entered. 
    // the virtual "totalDuration" returns the cummulative sum .. because you dont want to add everything 
    // again right? you want to add the total value(the last calculated total) to a new value ( this new value after the user adds another exercise)
        return total + exercise.duration;},0) 
    // the initial value of the total is set to zero for when the reduce function starts looping. If we did not include the zero, then the first element
    //of the array will be the first duration the user enters. I tried it without the zero and it did not work. The field was "undefined"
    //Hat tip to Juliet George for this information
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;