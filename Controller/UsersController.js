const { response } = require('express')
const users = require('../Models/Users')
//--------------------------get--------------------------
const getuser = async (req,res) =>{
    try {
        const userdata = await users.find();
        res.send(userdata)
    } catch(error){
        res.send(error)
    }
}

//---------------------get individual data------------------
const partgetuser = async (req,res) =>{
    try{
        const _id = req.params.id;
        const userdata = await users.findById(_id);
        res.send(userdata);
    } catch(error){
        res.send(error)
    }
}

//-------------------------post----------------------------------------
const postuser = async (req,res) =>{
    try{
        const postuser = new users(req.body);
        const createuser = await postuser.save();
        res.status(201).send(createuser)
    }
    catch(error){
        res.status(400).send(error)
    }
}


//-------------------put-------------------------------------

const putuser = async(req,res) =>{
    try{
console.log(req.params)
const updateusers = await users.updateOne(req.params,
    {
        $set: req.body
    }
);
res.send(updateusers);
}
catch(error){
res.status(400).send(error)
    }
}
//------------------------------------patch-----------------------------------------------------
const patchuser = async(req,res) =>{
    try{
      const _id = req.params.id;
      const patchuser = await users.findByIdAndUpdate(_id,req.body,{
        new:true
      });
      res.send(patchuser)
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports ={getuser ,partgetuser,postuser,putuser,patchuser}