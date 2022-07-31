const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    contactNo:{type:String,required:true},
    address:{type:String,required:true},
    bio:{type:String}
});

module.exports = mongoose.model('User',userSchema);