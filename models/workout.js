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
            distance: {
                type: Number,

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

});

const workout = mongoose.model("workout", workoutSchema, "workout");

module.exports = workout;