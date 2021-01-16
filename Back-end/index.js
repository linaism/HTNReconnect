const express = require('express')
const dotenv= require('dotenv')
const mongoose= require('mongoose')
const app =express();
dotenv.config()
//Importing Routes
const homeRoute= require("./routes/home")
const bodyParser = require('body-parser')

//connect to DB
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true,useUnifiedTopology: true}, () => {
    console.log("connected to db.")
});

//Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json())
// app.use(bodyParser.json())
//Import middlewares
app.use('/api', homeRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});


module.exports = app;