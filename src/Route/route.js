const express=require('express')
const router = express.Router()


const UserController= require("../controllers/userControllers")

 
 
router.post("/register",UserController.createUser)
router.post("/login", UserController.loginUser)



















module.exports= router;
