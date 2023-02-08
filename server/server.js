//Declare variables and imports here
const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const createGoalsRoute = require("./routes/creategoal");
const getAllGoals = require("./routes/getgoals");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//API routing here
app.use("/api/creategoals", createGoalsRoute);
app.use("/api/getgoals", getAllGoals);


// get rid of annyoing error
mongoose.set("strictQuery",false);
// Set up Mongoose connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connection is successful")
    app.listen(port,()=>{
        console.log("Backend server is running on: ", port)
    })
})
.catch((err)=>{
    console.log(err)
})
