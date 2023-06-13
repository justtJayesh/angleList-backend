const mongoose = require("mongoose");

const connection = mongoose.connect(
    `mongodb+srv://jayesh:mate@cluster0.wrqhanf.mongodb.net/AngleList?retryWrites=true&w=majority`
);

module.exports = { connection };
