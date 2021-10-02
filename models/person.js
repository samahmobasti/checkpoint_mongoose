const mongoose = require('mongoose')
//schema creation
const Schema = mongoose.Schema
const personSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods:[String],
  })
//model creation
const person = mongoose.model('person', personSchema)
//export
module.exports = person


