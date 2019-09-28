const express = require ('express');
const router = express.Router();

var request = require('request');

request('http://ip-api.com/json/{query}', function(err, resp) {
    if (err) console.log(err.message);
    else {
        console.log(resp);
    }
})

module.exports = router;