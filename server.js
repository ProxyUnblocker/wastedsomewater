const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Proxy route
app.get('/proxy', (req, res) => {
  const url = req.query.url;

  // Make a request to the provided URL
  request.get(url, (error, response, body) => {
    if (error) {
      res.status(500).send('Error');
    } else {
      res.send(body);
    }
  });
});

// Catch-all route for handling other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
