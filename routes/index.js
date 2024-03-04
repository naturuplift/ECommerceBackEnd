// Include packages needed for this application
// Import Router function from express package
const router = require('express').Router();
// Import API routes from ./api directory
const apiRoutes = require('./api');

// Use API routes for requests to /api
router.use('/api', apiRoutes);

// Catch-all route for any requests not handled by defined routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export router to make it available for use
module.exports = router;