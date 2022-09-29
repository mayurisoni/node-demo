const express = require('express');
const MensRanking = require('../models/mens');

module.exports.post_man_details=(req,res)=>{

  const mensranking = new MensRanking({
    Ranking:req.body.Ranking,
    Name:req.body.Name,
    Dob:req.body.Dob,
    Country:req.body.Country,
    Score:req.body.Score,
    Event:req.body.Event

  })
  mensranking.save().then((mens)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    return res.status(201).json({
        message:"members details post successfully",
        RegisteredMemberdetails:mens,
        request: {type: 'GET',
        url:"https://localhost:8000/"}

    })})
    .catch((err) => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  }
  module.exports.get_man_list=(req,res)=>{
   MensRanking.find().exec().then((result)=>{
    res.status(200).json({ message:"get mens list successfully",
    top100list:result.map(r=>{
        return r
    }) })
   }).catch((err) => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  }
  module.exports.get_specific_man_detail=(req,res)=>{
    MensRanking.findById(req.params.mensid).exec().then((result)=>{
     res.status(200).json({ message:`get ${result.Name} Details successfully`,
     mens:result
   })
    }).catch((err) => {
         console.log(err);
         res.status(400).json({ error: err });
       });
   }
   module.exports.update_specific_man_detail=(req,res)=>{
    MensRanking.findByIdAndUpdate(req.params.mensid,req.body,{new:true}).exec().then((result)=>{
     res.status(200).json({ message:`update ${result.Name} Details successfully`,
     mens:result
   })
    }).catch((err) => {
         console.log(err);
         res.status(500).json({ error: err });
       });
   }
   module.exports.delete_specific_man_detail=(req,res)=>{
    MensRanking.findByIdAndDelete(req.params.mensid).exec().then((result)=>{
     res.status(200).json({ message:`delete  Details from successfully`,
     mens:result
   })
    }).catch((err) => {
         console.log(err);
         res.status(500).json({ error: err });
       });
   }