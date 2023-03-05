
//Create goal model schema here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudySchema = new Schema({
    
    username:{type:String, required:true, unique:true},
    interval:{type:String,required:true}
},
{timestamps:true}
);

module.exports = mongoose.model("streak", StudySchema)