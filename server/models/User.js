import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
     _id : {
        type: String,
        required:true
     },
     email : {
        type : String,
        required : true
     },
     full_name : {
        type : String,
        required : true
     },
     username : {
        type : String,
        unique : true,
        required : true
     },  
     bio : {
        type : String,
        default : "Hey there! I am on SphereNet"
     },
     profile_picture : {
        type : String,
        required : true
     },
     cover_photo : {
        type : String,
        default : ""
     },
     location : {
        type : String,
     },
    followers : [
      {
        type: String,
        ref: 'User', 
      },
    ],
    following : [
      {
        type: String,
        ref: 'User', 
      },
    ],
    connections : [
      {
        type: String,
        ref: 'User', 
      },
    ]
    },
    {
        timestamps : true
    }
)

const User = model('User',userSchema)

export default User;