const mongoose = require('mongoose')
const pathPost = require('./models/pathPost')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

pathPost.create({
    title: 'Testing Stuff',
    body: 'Testing more stuff'
}, (error, pathPost) =>{
    console.log(error, pathPost)
})