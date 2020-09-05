const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutDataSchema = new Schema({
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

    },
});

const workoutData = mongoose.model("workoutData", workoutDataSchema);

module.exports = workoutData;