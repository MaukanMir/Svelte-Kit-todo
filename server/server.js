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
const editGoals = require("./routes/editgoals");
const deleteGoals = require("./routes/deletegoals");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const statRoutes = require("./routes/addStats");

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


//API routing here
app.use("/api/creategoals", createGoalsRoute);
app.use("/api/getgoals", getAllGoals);
app.use("/api/editgoals",editGoals);
app.use("/api/deletegoals", deleteGoals);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/stats", statRoutes);


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
