const app=require("./app");
const Razorpay=require("razorpay")
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });
  


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
module.exports=instance