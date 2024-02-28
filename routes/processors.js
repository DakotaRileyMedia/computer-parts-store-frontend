const express = require('express');
const router = express.Router();

// All Processors Route
router.get('/', (req, res) => {
  res.render('processors/index');
});

// New Processors Route
router.get('/new', (req, res) => {
  res.render('processors/new');
});

// Create Processors Route
router.post('/', (req, res) => {
  res.send('Create');
});

// Export our router module
module.exports = router;
