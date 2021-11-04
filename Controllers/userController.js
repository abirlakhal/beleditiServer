const User = require('../models/userModel');


exports.createUser = (req, res) => {
    const user = new User(req.body);
    //console.log(form);
    user.save()
    .then((user) => {
        return res.status(201).json({user})

    })
    .catch((error) => {return res.status(400).json({error}) })
}

exports.findOneUser = (req, res) => {
    User.findById( req.params.id)
    .then(data => res.send (data))
    .catch(err => res.status(500))
}

exports.updateUser = (req, res) => {

    User.findOneAndUpdate(req.params.id , req.body)
    .then(data => 
        res.send({message: "User Updated successfully."}) )
    .catch( err => res.status(500))
}


exports.getAllUser = (req, res) => {

    User.find()
    .then((user) => { return res.status(200).json({user})} )
    .catch((error) => { return res.status(400).json({error}) });
}

exports.deleteUser = (req, res) => {
   
    User.deleteOne({_id : req.params.id})
    
    .then((user) => {
        res.json("User deleted. ")
    })
    .catch(error => console.error(error))
}






