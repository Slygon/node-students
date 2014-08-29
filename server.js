var http = require('http');
var mysql = require('mysql');

var server = http.createServer(function (req, res) {
  //writing the headers of our response
  res.writeHead(200, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

  //creating the connection with the mysql server
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'MyNewPassword',
    database: 'galit&koby',
    port: 3306 });

  //initiating the connection
  connection.connect();

  //performing a query
  if (req=="North"){
      var query = connection.query(
          'SELECT image, name, description, link FROM business join coupons ON (id=business_id) WHERE area="North"',
          function (err, result, fields) {
              if (err) {
                  console.log('error' + err);
              }
              res.end(JSON.stringify(result));
              res.end();

              //releasing the connection resources
              connection.end();
          });
  }
    if (req=="Tel Aviv"){
        var query = connection.query(
            'SELECT image, name, description, link FROM business join coupons ON (id=business_id) WHERE area="Tel Aviv"',
            function(err, result, fields) {
                if (err) {
                    console.log('error'+err);
                }
                res.end(JSON.stringify(result));
                res.end();

                //releasing the connection resources
                connection.end();
            });
  }
    if (req=="Sharon"){
        var query = connection.query(
            'SELECT image, name, description, link FROM business join coupons ON (id=business_id) WHERE area="Sharon"',
            function(err, result, fields) {
                if (err) {
                    console.log('error'+err);
                }
                res.end(JSON.stringify(result));
                res.end();

                //releasing the connection resources
                connection.end();
            });
  }
    if (req=="South"){
        var query = connection.query(
            'SELECT image, name, description, link FROM business join coupons ON (id=business_id) WHERE area="South"',
            function(err, result, fields) {
                if (err) {
                    console.log('error'+err);
                }
                res.end(JSON.stringify(result));
                res.end();

                //releasing the connection resources
                connection.end();
            });
  }
    if (req=="Haifa"){
        var query = connection.query(
            'SELECT image, name, description, link FROM business join coupons ON (id=business_id) WHERE area="Haifa"',
            function(err, result, fields) {
                if (err) {
                    console.log('error'+err);
                }
                res.end(JSON.stringify(result));
                res.end();

                //releasing the connection resources
                connection.end();
            });
    }
});

server.listen(1400, '127.0.0.1');