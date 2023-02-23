const Schema = mongoose.Schema;
const StatsSchema = new Schema({
    
    username:{type:String, required:true, unique:true},
    goalsCompleted:{type:Number},
    duration:{type:Number},
    hoursStudied:{type:Number},
    consistency:{type:Number}

},
{timestamps:true}
);

module.exports = mongoose.model("goals", StatsSchema)

// User logs in
// Vists goals check in page
// Updates goals metrics
// We give users badges and additional information on their progress
// This could potentially increase user stickness