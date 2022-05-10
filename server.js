//enables the middleware in this server file to handle requests

// require('dotenv').config();

// const express = require('express') //backened setup
// const cors = require('cors') // express middleware for enabling cross-origin resource sharing requests. Gives the ability to access the API in different applications
// const bodyParser = require('body-parser') // parses the incoming requerst body before your handlers, and makes it avalilbe under req.body property. simplifies incoming requests
// const jwt = require('jsonwebtoken'); // used to securely transfer information over the web(between two parties) used for authentication process

// const app = new express()
// // const port = process.env.port || 4000;

// const userData = {
//     userId: "1",
//     password: "Knight",
//     name: "Elden Ring",
//     username: "Knightx50",
//     isAdmin: true
// }

// //enable CORS
// app.use(cors());
// //parse application/json
// app.use(bodyParser.json());
// // parse applicaiton/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// //middleware that checks if the JWT exists and verigies it if it does exist.
// //In all future routes, this helps to know if the request is authenticated

// app.use(function (req, res, next){
//     //check header or url parameters or post parameters for token
//     var token = req.header['authorization'];
//     if (!token) return next(); //if not token, continue

//     token = token.replace('Bearer ', '');
//     jwt.verify(token, process.env.JWT_SECRET, function (err, user){
//         if (err){
//             return res.status(401).json({
//                 error: true,
//                 message: "Invalid user"
//             });
//         } else {
//             req.user = user; // set the user to req so other routes can use it
//             next();
//         }
//     });
// });

// app.get('/', (req, res) => {
//     if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.'})
//     res.send('Welcome to Path Investments -' + req.user.name);
// })

// //request handlers
// app.get('/', (req, res) =>{
//     res.send('Welcome to Path Investments  -' + req.user.name)
// })

// app.post('/user/signin', function(req, res) {
//     const user = req.body.username
//     const pwd = req.body.password

//     //reutn 400 status if username/password does not exist
//     if(!user || !pwd) {
//         return res.status(400).json({
//             error: true,
//             message: "Username or Password is required"
//         });
//     }

//     //return 401 status if the credential is not a match
//     if (user !== userData.username || pwd !== userData.password) {
//         return res.status(401).json({
//             error: true,
//             message: "Username or Password is wrong"
//         });
//     }

//     //generate token
//     const token = utils.generateToken(userData)
//     //get basic user details
//     const userObj = utils.getCleanUser(userData)
//     //return the token along with user details
//     return res.json({ user: userObj, token})
// })

// //APi to verify the token
// //verify the token and trun it if it's invalid
// app.get('/verifyToken', function(req, res){
//     var token = req.query.token;
//     if (!token){
//         return res.send(400).json({
//             error: true,
//             message: "Token is required."
//         });
//     }

//     //check token that was passed by decoding token using secret4
//     jwt.verify(token, process.env.JWT_SECRET, function (err, user){
//         if(err) return res.status(401).json({
//             error: true,
//             message: "Invalid token"
//         });

//         if (user.userId !== userData.userId){
//             return res.status(401).json({
//                 error:true,
//                 message: "Invalid User"
//             })
//         }
//         var userObj = utils.getCleanUser(userData);
//         return res.json({ user: userObj, token})
//     })
// })




