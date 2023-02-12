const Schema = mongoose.Schema;
const StatsSchema = new Schema({
    
    id:{type:Number},
    goalsCompleted:{type:Number},
    duration:{type:Number},
    hoursStudied:{type:Number},
    consistency:{type:Number}

},
{timestamps:true}
);

module.exports = mongoose.model("goals", StatsSchema)