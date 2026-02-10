const mongoose=require('mongoose');

const Schema= new mongoose.Schema({
    uid:Number,
    username:String,
    password:String
});
module.exports=mongoose.model('user',Schema)