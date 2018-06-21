  var Client = require('node-rest-client').Client;
  var client = new Client();
  var args = process.argv.slice(2);

  args.forEach(function (val, index, array) {
    client.get("http://urbanscraper.herokuapp.com/define/"+val, function (data, response) {
        // parsed response body as js object
        console.log(data.term+" : " + data.definition);
        // console.log(response);
    });

  });
