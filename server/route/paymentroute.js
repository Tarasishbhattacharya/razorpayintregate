const express=require("express");
const checkout = require("../controllers/paymentcontroller");
const router=express.Router();

router.route("/checkout").post(checkout)
module.exports=router;