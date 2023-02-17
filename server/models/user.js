
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, unique:true},
    createdAt:{type:String},

},
{timestamps:true}
);

module.exports = mongoose.model("user", UserSchema)

// This will be where the schema used to save  each user's information
// Loging/ register pages will be created
// User will login and then from there we can get more information on the user such as
// Advanced metrics etc