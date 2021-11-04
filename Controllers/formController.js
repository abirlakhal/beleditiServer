const Form = require('../models/formModel');
const ObjectID = require("mongoose").Types.ObjectId;

exports.createForm = (req, res) => {
    const form = new Form(req.body);
    console.log(form);
    form.save()
    .then((form) => {
        return res.status(201).json({form})

    })
    .catch((error) => {return res.status(400).json({error}) });
}

exports.getOneForm = (req, res) => {
  console.log(req)
    const id = req.params.id;
    console.log(id)

    Form.findOne({_id: id})
    .then((Forms) => {return res.status(200).json({Forms})} )
    .catch((error) => {return res.status(400).json({error}) });
}

exports.getAllForm = (req, res) => {

    Form.find()
    .then((Forms) => { return res.status(200).json({Forms})} )
    .catch((error) => { return res.status(400).json({error}) });
}

exports.updateForm = (req, res) => {
    
  
    try {
      // Form.findOneAndUpdate(
      //   {_id: req.params.id, "question._id": "616eadaaa87b91656836c9e9" }, 
      //   { "$set": { "question.$.answertype": "hello" } }
      // )

      /* var objForUpdate = {};

      if (req.body.title) objForUpdate.title = req.body.title;
      if (req.body.question) objForUpdate.question = req.body.question;
       
    
      objForUpdate = { $set: objForUpdate }

        */
      Form.findOneAndUpdate(
          {_id: req.params.id}, 
          { $set : {title : req.body.title, question: req.body.question}} ,
        { new: true, upsert: true, setDefaultsOnInsert: true },
        (err, docs) => {
          if (!err) return res.send(docs);
          if (err) return res.status(500).send({ message: err });
        }
      );
    } catch (err) {
      return res.status(505).json({ message: err });
    }
}
  
exports.deleteForm = (req, res) => {
    
    Form.deleteOne({_id : req.params.id})
    
    .then((form) => {
        res.json("Form deleted. ")
    })
    .catch(error => console.error(error))
}
