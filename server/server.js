const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;


//Middleware
app.use(express.json());
app.use(express.urlendcoded({extended:true}));
app.use(cors());

// initiate MongoDB and start server

// app.listen(PORT, () =>{
//     mongoose.connect(process.env.M)
// })