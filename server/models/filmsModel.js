const mongoose = require('mongoose');

const model = new mongoose.Schema({
  "id": { type: Number },
  "title": { type: String },
  "homepage": { type: String },
  "overview": { type: String },
  "poster_path": { type: String },
  "release_date": { type: String },
  "runtime": { type: Number },
  "tagline": { type: String },
  "vote_average": { type: Number },
  "vote_count": { type: Number },
});

module.exports = mongoose.model('film', model);