const mongoose = require('mongoose')
const Schema = mongoose.Schema

const journal = new Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    }, 
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('journal', journal)