const express = require("express")
const app = express();
const {connection} = require("./config/db")
const {usersController} = require("./routes/user.routes")
require('dotenv').config()

const cors = require("cors");
app.use(express.json())
app.use(cors());
app.get("/", (req, res)=>{  
    res.send("welcome")
})

app.use("/users", usersController)


app.listen(8080, async(req, res)=>{
    try{
        await connection;
        console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log(`listening to port`)
})