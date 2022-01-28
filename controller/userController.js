// const { where } = require("sequelize/dist")
const userDB=require("../models/User")

let addUser=async(req,res)=>{
    // let data=req.body
    console.log("HELLLOOO")
    let data=new userDB(req.body)
    await data.save()
    return res.json({status:true,message:"User added"})
}


let getUsers=async(req,res)=>{
    let users=await userDB.findAll()
    return res.json({status:true,data:users})
}


let updateUser=async(req,res)=>{
    await userDB.update(req.body,{where:{id:req.params.id}})
    return res.json({status:true,message:"User updated"})
}


module.exports={addUser,getUsers,updateUser}