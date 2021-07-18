const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
     Question:{
         type:String,
        //  required:true,
     },
     Options:[{
         OptionData:{
             type:String,
            //  required:true,
         },
         vote:{
             type:Number,
             min:0,
             default:0,
         }
     }]
});

const Poll = mongoose.model('Poll', pollSchema);

exports.Poll = Poll;
