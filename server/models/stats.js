//Create goal model schema here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StatsSchema = new Schema({
    
    username:{type:String, required:true, unique:true},
    goalCompleted:[
        {
            goal:{type:String},
            goalId:{type:Number},
            startDate:{type:String},
            endDate:{type:String},
            studyTime:{type:Number},
            numberOfDays:{type:Number}
        }
    ],
    numberOfGoalsCompleted:{type:Number},
    hoursStudied:{type:Number},
    studyStreak:{type:Number}

},
{timestamps:true}
);

module.exports = mongoose.model("stats", StatsSchema)

// User logs in
// Vists goals check in page
// Updates goals metrics
// We give users badges and additional information on their progress
// This could potentially increase user stickness