const mongoose = require('mongoose');

const DATABASE = "mongodb+srv://admin:CMxhFZudUbphEDje@cluster0.kivfxme.mongodb.net/";

mongoose.connect(DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));