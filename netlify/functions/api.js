// netlify/functions/api.js

const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// First GET route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Second GET route
router.get('/goodbye', (req, res) => {
  res.json({ message: 'Goodbye, World!' });
});

// Use the router with a base path
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
