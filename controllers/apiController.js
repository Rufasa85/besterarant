const express = require("express");
const Customer = require("../models/Customer")
const router = express.Router();

const {tables} = require("../data/tables")
const {waitlist} = require("../data/waitlist")

router.get("/tables",(req,res)=>{
    res.json(tables)
})
//retrieve users on the waitlist
router.get("/waitlist",(req,res)=>{
    res.json(waitlist)
})
//reserve a table if there is space, otherwiise waitlist

router.post("/reserve",(req,res)=>{
    let hasTable = false;
    const newCustomer = new Customer(req.body.name,req.body.email,req.body.phone,req.body.id)
    if(tables.length<5){
        tables.push(newCustomer)
        hasTable=true;
    } else {
        waitlist.push(newCustomer)
    }
    res.json({
        reservationData:newCustomer ,
        hasTable:hasTable
    })
})

module.exports = router;
