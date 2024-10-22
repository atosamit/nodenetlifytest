// netlify/functions/api.js

const express = require('express');
const serverless = require('serverless-http');

const app = express();

// First GET route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Second GET route
app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Goodbye, World!' });
});

// Use the router with a base path
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
