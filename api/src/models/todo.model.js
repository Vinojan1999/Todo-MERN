const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Todo = mongoose.model('Todo', TaskSchema)     // should create using singular form 'task'
// This model is finding the plural form in Database

module.exports = Todo