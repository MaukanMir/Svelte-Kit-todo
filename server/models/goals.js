//Create goal model schema here
const { Double } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const GoalsSchema = new Schema({
    
    id:{type:Number, required:true, unique:true},
    goal:{type:String},
    how:{type:String},
    date:{type:String},
    setDate:{type:String},
    studyTime:{type:Number}

},
{timestamps:true}
);

module.exports = mongoose.model("goals", GoalsSchema)

