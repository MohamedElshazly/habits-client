const mongoose = require('mongoose')
const Schema = mongoose.Schema

const habit = new Schema({
    content: {
        type: String, 
        required: true
    }, 
    streak: {
        type: Number, 
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('habits', habit)