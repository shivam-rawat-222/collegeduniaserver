const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },
    mail: {
        type: String,
        required: [true]
    },
    number: {
        type: String,
        required: [true]
    },
    location: {
        type: String,
        required: [true]
    },
    course: {
        type: String,
        required: [true]
    }
})
module.exports = mongoose.model("clients", schema);