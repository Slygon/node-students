/**
 * Created by Galit Schayek on 27/08/14.
 */
var http = require('http');
var mysql = require('mysql');
var url = require('url');

var server = http.createServer(function (req, res) {
    //writing the headers of our response
    res.writeHead(200, {'Content-Type':'text/html'});

    //creating the connection with the mysql server
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'MyNewPassword',
        database: 'galit&koby',
        port: 3306 });

    //initiating the connection
    connection.connect();

    //checking the query string
    var queryObject = url.parse(req.url,true).query;
    if (queryObject=="North"){
        console.log("query north")
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
});

server.listen(1400,'127.0.0.1');