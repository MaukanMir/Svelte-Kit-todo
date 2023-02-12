
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    
    id:{type:Number},
    email:{type:String},
    password:{type:String},
    createdAt:{type:String},

},
{timestamps:true}
);

module.exports = mongoose.model("user", UserSchema)