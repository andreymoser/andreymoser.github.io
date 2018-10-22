const express = require('express');
const openBrowsers = require('open-browsers');

const app = express();

app.use(express.static('.'));

app.listen(8080, () => {
  const url = 'http://localhost:8080';
  console.log(`Express server running on ${url}`);
  openBrowsers(url);
})