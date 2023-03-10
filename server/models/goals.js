//Create goal model schema here
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const GoalsSchema = new Schema({

    userId:{type:String,required:true},
    id:{type:Number, required:true, unique:true},
    goal:{type:String},
    how:{type:String},
    date:{type:String},
    setDate:{type:String},
    studyTime:{type:Number},
    checkIn:{type:Number},
    completed:{type:Boolean}

},
{timestamps:true}
);

module.exports = mongoose.model("goals", GoalsSchema)

