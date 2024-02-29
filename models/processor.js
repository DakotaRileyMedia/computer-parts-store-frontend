const mongoose = require('mongoose');

const processorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // description: {
  //   type: String,
  // },
  // brand: {
  //   type: String,
  //   required: true,
  // },
  // socket: {
  //   type: String,
  // },
  // processorGeneration: {
  //   type: Number,
  // },
  // processorClass: {
  //   type: String,
  // },
  // coreCount: {
  //   type: Number,
  // },
  // threadCount: {
  //   type: Number,
  // },
  // baseClock: {
  //   type: Number,
  // },
  // maxTurboClock: {
  //   type: Number,
  // },
  // l1Cache: {
  //   type: String,
  // },
  // l2Cache: {
  //   type: String,
  // },
  // l3Cache: {
  //   type: String,
  // },
  // tdp: {
  //   type: Number,
  // },
  // integratedGraphics: {
  //   type: Boolean,
  // },
  // coolerIncluded: {
  //   type: Boolean,
  // },
  // productImage: {
  //   type: String,
  // },
});

module.exports = mongoose.model('Processor', processorSchema);
