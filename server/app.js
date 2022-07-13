const express=require("express");
 const app=express();
const dotenv=require("dotenv");
const cors=require("cors");
const paymentrouter=require("./route/paymentroute")
dotenv.config({path:"./config/config.env"});

app.use("/api",paymentrouter);
app.use(cors())
 
module.exports=app