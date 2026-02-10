const user = require("../models/user");
const bcrypt=require('bcrypt');
const obj={
getALLuser:(req,res)=>{
     User.find().then((data)=>{
         return res.status(200).json(data);
      });
    },

    addNewuser:(req,res)=>{
     const uid = req.body.uid;
     User.find({ uid: uid }).then((data) => {
       if (data.length > 0) {
         return res
           .status(200)
           .json({ message: `user id ${uid} already exist` });
       } else {
         User.insertOne(req.body).then((use) => {
           return res.status(200).json(use);
         });
       }
     });
    },

    adduserById:  (req,res)=>{
 const uid=req.params.id;
      User.insertOne(req.body).then((use)=>{
         return res.status(200).json(use);
      });
    },    
    updateuserById: (req,res)=>{
        const uid=req.params.id;
             User.updateOne({uid},req.body).then((use)=>{
                return res.status(200).json(use);
             });

},

deleteuserById: (req,res)=>{
     const uid=req.params.id;
          User.deleteOne({uid}).then((use)=>{
             return res.status(200).json(use);
          });
      
    } ,

    getuserbyid: (req,res)=>{
      const id=req.params.id;
          User.find({uid:id}).then((use)=>{
             return res.status(200).json(use);
          });
    
    } ,
login:(req,res)=>{
     const uid = req.body.uid;
     User.find({ uid: uid }).then((data) => {
       if (data.length > 0) {
         return res
           .status(200)
           .json({ message: `user id ${uid} already exist` });
       } else {
         User.insertOne(req.body).then((use) => {
           return res.status(200).json(use);
         });
       }
     });
    },

    
    register:(req,res)=>{
      const{username,password,fullname}=req.body;

     User.find({ username: uid }).then((data) => {
       if (data.length > 0) {
         return res
           .status(200)
           .json({ message: `user Already Exics` });
       } else {
        bcrypt.hash(pass,10).then((hashPass)=>{
   User.insertOne(username,hashPass,fullname).then((use) => {
           return res.status(200).json({message:"Registered Succsefully"});
        })
         });
       }
     });
    },
}
module.exports=obj