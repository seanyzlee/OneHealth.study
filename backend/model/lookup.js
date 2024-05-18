// lookup.js
const Mongoose = require('mongoose')
const LookupSchema = new Mongoose.Schema({

    age: {
        type: "Number",
        required: true,
    },
    gender: {
        type:"String",
        required: true,
    },

    symptoms: {
        type: "String",
        unique: true,
        required: true,
        options: String
    }
})

const Lookup = Mongoose.model("lookup", LookupSchema)

module.exports = Lookup