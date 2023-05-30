const express=require("express")
const Controller=require("../App/Controller/Control")
const router=express.Router()


router.get("/home",Controller.home)
router.post("/register",Controller.register)
router.put("/update/:name",Controller.update)
router.get("/view",Controller.view)
router.delete("/delete/:name",Controller.delete)
router.post("/login",Controller.login)

module.exports=router

