const express = require('express');
const router = express.Router();
const Processor = require('../models/processor');

// All Processors Route
router.get('/', async (req, res) => {
  // Search for name
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i');
  }

  try {
    // Get all Processors
    const processors = await Processor.find(searchOptions);
    // Display Processors
    res.render('processors/index', {
      processors: processors,
      searchOptions: req.query,
    });
  } catch {
    res.redirect('/');
  }
});

// New Processors Route
router.get('/new', (req, res) => {
  res.render('processors/new', { processor: new Processor() });
});

// Create Processors Route
router.post('/', async (req, res) => {
  const processor = new Processor({
    name: req.body.name,
  });
  try {
    const newProcessor = await processor.save();
    // res.redirect(`processors/${newProcessor.id}`);
    res.redirect(`processors`);
  } catch {
    res.render('processors/new', {
      processor: processor,
      errorMessage: 'Error creating Processor',
    });
  }
});

// Export our router module
module.exports = router;
