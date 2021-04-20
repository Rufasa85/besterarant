const path =require("path");
const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"))
})
router.get("/tables",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/tables.html"))
})
router.get("/reserve",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/reserve.html"))
})



module.exports = router;