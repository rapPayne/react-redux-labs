const mongoose = require('mongoose');

const model = new mongoose.Schema({
  "id" : {type: Number},
  "name" : {type: String},
  "tables" : [{type: mongoose.Schema.Types.ObjectId}]
}, {collection: 'theaters'});

module.exports=mongoose.model('theater', model);