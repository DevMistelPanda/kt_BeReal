const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the photo submission page
router.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/submit.html'));
});

// Serve the photo cloud visualization page
router.get('/cloud', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/cloud.html'));
});

// Optional: Redirect root URL to submit page
router.get('/', (req, res) => {
  res.redirect('/submit');
});

// Optional: Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Optional: 404 handler for undefined routes
router.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

module.exports = router;