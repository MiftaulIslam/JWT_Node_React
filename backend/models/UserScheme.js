const mongoose = require('mongoose')

const UserScheme = new  mongoose.Schema({
username:{type:String},
email:{type:String, required:true, unique:true},
password:{type:String, required:true}
})
module.exports = mongoose.model('user', UserScheme)