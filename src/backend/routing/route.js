'Access-Control-Allow-Origin'
const express = require('express');
const route = express.Router();
const mypatt = require('../schimapattern/schima');




// post / create  api
route.post("/create",async(req,res)=>{
    const {name,email,phone,city,state,gender,pass,sources} = req.body;
    const adduser = new mypatt({
        name,email,phone,city,gender,pass,state,sources
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);
});

route.get("/getdata",async(req,res)=>{
    const alldata = await mypatt.find();
    res.json(alldata);
    console.log(alldata);
});

// route.get("/filterdata",async(req,res)=>{
//     try{
//     const search=parseInt(req.query.search || "")
//     const sort=parseInt(req.query.sort || "name")
//     const datesort=parseInt(req.query.sort || "date")
//     }catch(err){
//         console.log(err);
//     }
// });



// get single data api
route.get("/view/:id",async(req,res)=>{
    const {id} = req.params;
    const singleuser = await mypatt.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});


// delete api
route.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await mypatt.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});


// update api
route.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mypatt.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});


/*login api */
route.post("/login", async(req,res)=>{
    console.log(req.body);
    const {email,pass} = req.body;
      
    if(!email || !pass){
        return res.status(422).json({error:"user and phone no dont match"});
       
    }
    else{
        const uservalidation = await mypatt.findOne({email:email});
        console.log(uservalidation);
        if(uservalidation.email===email && uservalidation.pass===pass)
        {
            res.status(200).json({message:'welcome',status: 201}); 
        }
        else{
            res.status(250).json({error:"password not match"});
        }
    }
});





module.exports = route
