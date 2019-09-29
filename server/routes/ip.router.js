const express = require ('express');
const router = express.Router();

var request = require('request');

request('http://ip-api.com/json/', function(err, resp) {
    if (err) console.log(err.message);
    else {
        var ipInfo = JSON.parse(resp.body);
        console.log(resp);
    }
})

module.exports = router;