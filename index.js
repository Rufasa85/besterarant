const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

const htmlRoutes = require("./controllers/htmlController");
app.use(htmlRoutes);

const apiRoutes = require("./controllers/apiController");
app.use("/api",apiRoutes);


app.listen(PORT,()=>{
    console.log("listenin on port " + PORT)
})

