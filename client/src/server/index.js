const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('server listening on port 3000');
});

app.use('*', (req, res, next) => {
    next();
});


app.use('/', express.static('dist/'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});