const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  city: { type: String, required: true },
  contact_number: { type: String, required: true },
});

module.exports = mongoose.model('Person', personSchema,'Person');
