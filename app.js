const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a Test Application Venkatesh Prabhanjan Lakshminarayana (632994)! Updated for Review'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
