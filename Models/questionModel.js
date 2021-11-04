const mongoose = require('mongoose');

var question = mongoose.Schema({
    //type: Object,
    contenu: String,
    answertype: String
  });

module.exports = mongoose.model('Question', question);