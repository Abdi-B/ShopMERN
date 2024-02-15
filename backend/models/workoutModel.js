const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})
// the first argument is also used to create collection with the same name
module.exports = mongoose.model('Workout', workoutSchema)