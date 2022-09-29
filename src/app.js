const express = require("express");
const app = express();
const MensRoutes = require('./routers/mens')
const bodyParser = require('body-parser');
require("../src/db/conn")
var cors = require('cors');

const port = process.env.PORT || 8000;
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get("/",async(req,res)=>{
    res.send("hello there");

});

app.use('/mens',MensRoutes);

app.listen(port, ()=>{
console.log(`connection is live at port no ${port}`)
})
module.exports=app;