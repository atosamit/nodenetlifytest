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

module.exports.handler = serverless(app);
