const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ipRouter = require('./routes/ip.router');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/ip', ipRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});