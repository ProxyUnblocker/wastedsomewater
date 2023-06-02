const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (including index.html)
app.use(express.static('public'));

// Proxy route
app.get('/proxy', (req, res) => {
  const url = req.query.url;

  // Make a request to the provided URL
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send('Error');
    } else {
      res.send(body);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
