const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const {Poll} = require('../models/vote')
route.post('/data', async (req, res) => {
     let options=[];
     for(let i=0; i<req.body.OptionData.length; i++)
     {
          const data={
              OptionData:req.body.OptionData[i].value,
              vote:0,
          }
          options.push(data);
     }
     const poll = new Poll({
         Question:req.body.Question,
         OptionData:options
     });
     for(let i=0; i<options.length; i++)
     {
          poll.Options.push(options[i]);
     }
     try{
          const createPoll = await poll.save();
          res.status(200).send(createPoll);
     }
     catch(e)
     {
          res.status(400).send("error");
     }
});

route.put('/vote', async (req, res) => {
     const poll = await Poll.updateOne({_id:req.body.pollId,"Options._id":req.body.optionId},
    {$inc:{"Options.$.vote":1}});
    res.status(200).send(poll);
});

route.get('/result/:id', async (req,res)=>{
   try{
     const poll = await Poll.findById(req.params.id);
     if(!poll) return res.status(400).send("NO poll found");
     res.status(200).send(poll);
   }
   catch(e)
   {
        res.status(400).send("error");
   }
});

module.exports = route;
