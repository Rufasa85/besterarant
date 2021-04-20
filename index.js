const path = require("path")
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

const tables = [{
    name:"Billy",
    phone:"123",
    email:"Billy@b.com",
    id:1
}];
const waitlist=[
    {
        name:"Bobby",
        phone:"456",
        email:"Bobby@b.com",
        id:2
    }
];

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"))
})
app.get("/tables",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/tables.html"))
})
app.get("/reserve",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/reserve.html"))
})

//retrieve users who have a table
app.get("/api/tables",(req,res)=>{
    res.json(tables)
})
//retrieve users on the waitlist
app.get("/api/waitlist",(req,res)=>{
    res.json(waitlist)
})
//reserve a table if there is space, otherwiise waitlist

app.post("/api/reserve",(req,res)=>{
    let hasTable = false;
    if(tables.length<5){
        tables.push(req.body)
        hasTable=true;
    } else {
        waitlist.push(req.body)
    }
    res.json({
        reservationData:req.body,
        hasTable:hasTable
    })
})

app.listen(PORT,()=>{
    console.log("listenin on port " + PORT)
})

