const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "workout type"
            },
            name: {
                type: String,
                trim: true,
                required: "workout name"
            },
            distance: {
                type: Number,

            },
            duration: {
                type: Number,
                required: "Enter an exercise duration in minutes"
            },
            weight: {
                type: Number,

            },
            sets: {
                type: Number,

            },
            reps: {
                type: Number,

            }
        }]

},
    {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    });
workoutSchema.virtual("totalDuration").get(function () {

    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
})

const workout = mongoose.model("workout", workoutSchema, "workout");

module.exports = workout;