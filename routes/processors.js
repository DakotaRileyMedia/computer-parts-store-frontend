const express = require('express');
const router = express.Router();
const Processer = require('../models/processor');

// All Processors Route
router.get('/', (req, res) => {
  res.render('processors/index');
});

// New Processors Route
router.get('/new', (req, res) => {
  res.render('processors/new', { processor: new Processer() });
});

// Create Processors Route
router.post('/', (req, res) => {
  res.send('Create');
});

// Export our router module
module.exports = router;
