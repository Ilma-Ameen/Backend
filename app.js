// console.log ("node js file")

// const express=require('express');
// // const fs= require('fs')
// const App= express();
// const http= require ('http');

// obj = [
//     "laiba" , "fatima" , "ilma " , "inaya" , "ramsha"
// ]


// const server = http.createServer ((req, res)=>
// {
//     if (req.url == "/"){
//         console.log("/Request");
//         res.write("Server Started");
//     };
//     res.end();
// })
// server.listen(3000);


// const jsonString = JSON.stringify(jsonArray); 
// const filePath = 'data.json';
// fs.writeFile(filePath , jsonString , 'utf8' )

// const express = express();
// App.get("/course",(req, res)=>{
// res.send(course);
// });
// App.listen(5000, () => {
//     console.log("server is listening http://localhost:5000");
// }

// );

const express = require("express");
require("dotenv").config();
const courseRoute = require('./routes/courseroute');
const userRoute = require("./routes/userroute");
const { default: mongoose } = require("mongoose");

//jab apke pass fix route bhi ho dynamic route bhi tuo app fix route dynamic route se pehle rhkein gy
const App = express()

App.use(express.json());
App.use("/course",courseRoute);
App.use("/user",userRoute);


mongoose.connect(process.env.DATABASE).then(()=>{
    App.listen(process.env.PORT, () => {
        console.log(`server is listening http://localhost:${process.env.PORT}`)
    });
})