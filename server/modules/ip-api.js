const request = require('request');

function init() {
  request('http://ip-api.com/json/', function(err, resp) {
    if (err) console.log(err.message);
    else {
        var ipInfo = JSON.parse(resp.body);
        console.log(resp);
        console.log('this it var ipInfo', ipInfo);
    }
})
}


export {
  init
};