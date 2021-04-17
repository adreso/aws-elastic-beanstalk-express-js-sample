const express = require('express');
const app = express();
const port = 8080;

console.log('hey esta vaina sirve?');

app.get('/', (req, res) => res.send('Hello World andrew!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);