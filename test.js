const mongoose = require('mongoose')
const PathPost = require('./src/models/pathPost')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})

//creating items in the database

PathPost.create({
    title: 'Testing Stuff',
    body: 'Testing more stuff'
}, (error, pathPost) =>{
    console.log(error, pathPost)
})

//Finding items in the database
// PathPost.find({},(error, pathPost) =>{
//     console.log(error, pathPost)
// })

//Finding by Certian words

// PathPost.find({
//     title: /The/},
//     (error, pathPost)=>{
//         console.log(error, pathPost)
//     })

//Updating title based on id
// var id = "628835d6e518d48db9e29d9f";
// PathPost.findByIdAndUpdate(id, {
//     title:'Updated title 2'
// }, (error, pathPost) => {
//     console.log(error, pathPost)
// })

//Deleting single record
// PathPost.findByIdAndDelete(id, (error, pathPost) => {
//     console.log(error, pathPost)
// })
