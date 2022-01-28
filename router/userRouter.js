const express=require("express")
const router=express.Router()
const control=require("../controller/userController")

router.post("/addUser",control.addUser)
router.get("/getUsers",control.getUsers)
router.put("/updateUser/:id",control.updateUser)

module.exports=router