const express = require("express");

var cors = require('cors')
var app = express()

app.use(cors())

app.use("/advocates", require("./routes/advocates.js"))
app.use("/companies", require("./routes/companies.js"))

app.listen(3000, function(){
    console.log("RUNNING!");
})