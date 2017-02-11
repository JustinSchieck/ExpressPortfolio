/**
* @Author: Justin Schieck
* @Date:   2017-02-11T14:05:27-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-02-11T14:30:46-05:00
*/


let mongoose = require('mongoose');

//creates new class
var contactInfo = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    phone: {
        type: Number,
        min: 10,
        max: 11
    },
    email: {
        type: String
    },
    Comment:{
        type: String
    }
  });

//make it public
module.exports = mongoose.model('Contact', _contact);
