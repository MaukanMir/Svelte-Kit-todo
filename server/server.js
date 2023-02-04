const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const createGoalsRoute = require("./routes/createGoal")

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/createGoals", createGoalsRoute);

// initiate MongoDB and start server
// async function connect(){
//     try{
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("Connected to Mongodb")
//     }catch(err){console.log(err)}
// }

// connect();

const client = new MongoClient(process.env.MONGO_URL, 
{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {

  client.close();
});

app.listen(port,()=>{
    console.log("Backend server is running on: ", port)
})