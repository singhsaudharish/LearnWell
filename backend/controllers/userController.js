const User=require("../models/User");

exports.getProfile=async(req,res)=>{

res.json({
user:req.user
});

};

exports.updateProfile=async(req,res)=>{

const {name,bio,avatar}=req.body;

const user=await User.findByIdAndUpdate(

req.user._id,

{
name,
bio,
avatar
},

{
new:true
}

).select("-password");

res.json({
message:"Profile Updated",
user
});

};