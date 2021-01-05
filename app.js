const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is an AWS test! Can this be changed? Sure it can!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
