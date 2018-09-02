const mongoose = require('mongoose');

const model = new mongoose.Schema({
  "id" : {type: Number},
  "theater_id" : {type: Number},
  "table_number" : {type: Number},
  "x" : {type: Number},
  "y" : {type: Number},
  "seats" : [{type: mongoose.Schema.Types.ObjectId, ref: "seat"}]
}, {collection: 'tables'});

module.exports=mongoose.model('table', model);