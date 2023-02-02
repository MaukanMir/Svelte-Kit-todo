const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require('cors');
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;


//Middleware
app.use(express.json());
app.use(cors());

// initiate MongoDB and start server
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Db connection successful"))
.catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log("Backend server ius running: ", port)
})