const mongoose = require('mongoose');

const model = new mongoose.Schema({
  "id" : {type: Number},
  "showing_id": {type: Number},
  "seat_id": {type: mongoose.Schema.Types.ObjectId},
  "given_name": {type: String},
  "family_name":  {type: String},
  "payment_key": {type: String},
  "email": {type: String},
  "phone": {type: String},

}, {collection: 'reservations'});

module.exports=mongoose.model('reservation', model);