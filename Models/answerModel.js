const mongoose = require('mongoose');

const answer = mongoose.Schema({
    idUser : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    
   idForm : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form'},

    answerQuestion: [
       {
           idQuestion : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'} ,
            answer : String
       }
    ]
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Answer', answer);