const ObjectID = require("mongoose").Types.ObjectId;
const Answer = require('../models/answerModel');
//const User = require('../Models/userModel');
//const Form = require('../Models/FormModel');
//const Question = require('../Models/questionModel');
exports.createAnswer = (req, res) => {
    const answer = new Answer(req.body);
    //console.log(answer);
    answer.save()
        .then((answer) => {
            return res.status(201).json({ answer })

        })
        .catch((error) => { return res.status(400).json({ error }) })
}


exports.updateAnswer = (req, res) => {

    Answer.findOneAndUpdate(req.params.id, req.body)
        .then(data =>
            res.send({ message: "Answer Updated successfully." }))
        .catch(err => res.status(500))
}

exports.findOneAnswer = (req, res) => {
    Answer.findById(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.status(500))
}

exports.getAllAnswer = async (req, res) => {

    const answer = await Answer.find().populate('idUser idForm answerQuestion.idQuestion')
    console.log(answer)
    return res.status(200).json({ answer })

    /*.then((answer, err) => {
        if (err) return res.status(500)
        return res.status(200).json({ answer })
    })*/
    //.catch((error) => { return res.status(400).json({error}) });
}

exports.deleteAnswer = (req, res) => {

    Answer.deleteOne({ _id: req.params.id })

        .then((answer) => {
            res.json("Answer deleted. ")
        })
        .catch(error => console.error(error))
}

/*.populate(
        { path: "idUser",
          model: "User"},

        { path: "idForm",
          model: "Form"},

        { path: "idQuestion",
          model: "Question"}
        ) */