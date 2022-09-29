const mongoose = require('mongoose');
mongoose.connect("copy and paste mongodb url")
.then(()=>{
    console.log("connection successful")
})
.catch(()=>{
    console.log("no connection")
})
