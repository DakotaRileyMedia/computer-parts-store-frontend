const mongoose = require('mongoose');

const processorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Processor', processorSchema);
