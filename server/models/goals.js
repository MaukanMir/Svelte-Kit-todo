

const Schema = mongoose.Schema;

const GoalsSchema = new Schema({
    
    id:Number,
    goal:String,
    how:String,
    setDate:String,
    studyTime:Number

});

module.exports = mongoose.model("Goals", GoalsSchema)

