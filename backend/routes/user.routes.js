const {Router} = require("express");

const usersController =  Router();

const {UserModel} = require("../models/UserModel")


usersController.get("/",async (req, res)=>{
    
    const user =  await UserModel.find({})
    
    res.send(user)
})
usersController.post("/create", async(req, res)=>{
    const { name, picture} = req.body;
    const datas= new UserModel({
        
        name,
        picture
       
    })
    try{
        await datas.save()
        res.send("user creation successful")
    }
    catch(err){
        console.log(err)
        res.send("error")
    }    
})



usersController.delete("/delete",async (req, res)=>{
    
const data=await UserModel.deleteMany()
res.send(data)
    
})

module.exports = {
    usersController
}