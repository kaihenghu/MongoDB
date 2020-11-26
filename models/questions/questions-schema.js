const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
    question: String,
    options: Array,
    quizId: String
}, { collection: 'questions' })
module.exports = questionsSchema