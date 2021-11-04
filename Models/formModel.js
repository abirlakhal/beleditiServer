const mongoose = require('mongoose');

/*
var questions = mongoose.Schema({
    //type: Object,
    contenu: String,
    answertype: String
  });

*/

const form = mongoose.Schema({
    title: String ,
    
    question:[{ 
               type: mongoose.Schema.Types.ObjectId,
                ref: 'Question'}]
},
{
    timestamps: true,
});

module.exports = mongoose.model('Form',form);