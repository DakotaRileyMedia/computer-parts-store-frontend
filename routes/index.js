const express = require('express');
const router = express.Router();

// Index Route
router.get('/', (req, res) => {
  res.render('index');
});

// Export our router module
module.exports = router;
