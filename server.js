const express = require("express")
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard',
    { useNewUrlParser: true });
require("./http/quizzes-http-api.js")(app)
require("./http/questions-http-api.js")(app)
app.listen(3010)