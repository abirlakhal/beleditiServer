const mongoose = require('mongoose');

const user = mongoose.Schema({
       name : String
    },
    {
        timestamps: true,
    });

module.exports = mongoose.model('User', user);