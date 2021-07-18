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
     console.log(req.body.Question);
     const poll = new Poll({
         Question:req.body.Question,
         OptionData:options
     });
     for(let i=0; i<options.length; i++)
     {
          poll.Options.push(options[i]);
     }
     console.log(poll);
     const createPoll = await poll.save();
     res.status(200).send(createPoll);
});

route.put('/vote', async (req, res) => {
     const poll = await Poll.updateOne({_id:req.body.pollId,"Options._id":req.body.optionId},
    {$inc:{"Options.$.vote":1}});
    res.status(200).send(poll);
});

route.get('/result/:id', async (req,res)=>{
   const poll = await Poll.findById(req.params.id);
   if(!poll) return res.status(400).send("NO poll found");
   res.status(200).send(poll);
});

module.exports = route;
