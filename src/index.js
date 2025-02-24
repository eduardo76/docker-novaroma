const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('<h1>Hello, Docker with Express!</h1>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});