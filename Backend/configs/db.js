const mongoose  = require("mongoose");

const connection = mongoose.connect("mongodb+srv://h1:h1@cluster0.biomx38.mongodb.net/ads?retryWrites=true&w=majority");

module.exports = {connection}