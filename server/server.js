const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const createGoalsRoute = require("./routes/createGoal")

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/creategoals", createGoalsRoute);


// get rid of annyoing error
mongoose.set("strictQuery",false);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to db")
    app.listen(port,()=>{
        console.log("Backend server is running on: ", port)
    })
})
.catch((err)=>{
    console.log(err)
})
