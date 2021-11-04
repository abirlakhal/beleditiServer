const Question = require('../models/questionModel');


exports.createQuest = (req, res) => {
    const question = new Question(req.body);
    //console.log(form);
    question.save()
    .then((question) => {
        return res.status(201).json({question})

    })
    .catch((error) => {return res.status(400).json({error}) })
}

exports.findOneQuest = (req, res) => {
    Question.findById( req.params.id)
    .then(data => res.send (data))
    .catch(err => res.status(500))
}

exports.updateQuest = (req, res) => {

    Question.findOneAndUpdate(req.params.id , req.body)
    .then(data => 
        res.send({message: "Question Updated successfully."}) )
    .catch( err => res.status(500))
}


exports.getAllQuest = (req, res) => {

    Question.find()
    .then((question) => { return res.status(200).json({question})} )
    .catch((error) => { return res.status(400).json({error}) });
}

exports.deleteQuest = (req, res) => {
   
    Question.deleteOne({_id : req.params.id})
    
    .then((question) => {
        res.json("Question deleted. ")
    })
    .catch(error => console.error(error))
}
