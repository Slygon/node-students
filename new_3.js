var http = require('http');
var mysql = require('mysql');

var server = http.createServer(function (req, res) {
  //writing the headers of our response
  res.writeHead(200, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

  //creating the connection with the mysql server
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'Galit&Koby',
    port: 3306 });

  //initiating the connection
  connection.connect();

  //performing a query
      var query = connection.query(
          'SELECT image, name, description, link FROM business join coupons ON (id=business_id) WHERE area="North"',
          function (err, result, fields) {
              if (err) {
                  console.log('error' + err);
              }
			  else console.log('ok');
              res.end(JSON.stringify(result));
              res.end();

              //releasing the connection resources
			  connection.end();
          }); 
});

server.listen(1400, '127.0.0.1');