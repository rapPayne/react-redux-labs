const mongoose = require('mongoose');

const model = new mongoose.Schema({
  "table_id" : {type: mongoose.Schema.Types.ObjectId},
  "seat_number" : {type: Number},
  "price": {type: Number},
});

module.exports=mongoose.model('seat', model);