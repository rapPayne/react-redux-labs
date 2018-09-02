const mongoose = require('mongoose');

const model = new mongoose.Schema({
  "id" : {type: Number},
  "film_id" : {type: Number},
  "theater_id" : {type: Number},
  "showing_time" : {type: Date},
  "reservations" : [{type: mongoose.Schema.Types.ObjectId}]
}, { collection:"showings"});

module.exports=mongoose.model('showing', model);