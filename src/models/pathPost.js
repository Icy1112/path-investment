const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PathSchema = new Schema({
    title: String,
    body: String
})

const PathPost = mongoose.model('PathPost', PathSchema)
module.exports = PathPost