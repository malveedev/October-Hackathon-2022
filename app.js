const express = require("express");
const path = require("path")
var cors = require('cors')
var app = express()

app.use(cors())

app.use("/advocates", require("./routes/advocates.js"))
app.use("/companies", require("./routes/companies.js"))

app.get("/", function(req,res){
    res.sendFile( path.join(__dirname , "./error.html"))
})

app.listen(3000, function(){
    console.log("RUNNING!");
})