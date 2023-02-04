//Create goal model schema here
const Schema = mongoose.Schema;
const GoalsSchema = new Schema({
    
    id:{type:Number, defualt:1, unquie:true},
    goal:{type:String},
    how:{type:String},
    setDate:{type:String},
    studyTime:{type:Number}

},
{timestamps:true}
);

module.exports = mongoose.model("Goals", GoalsSchema)

