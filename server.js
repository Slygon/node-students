var http = require('http');

// this is useless :)
//var mysql = require('mysql');

// Every require must be install into the folder with 'npm install <required>'
// like: 'npm install mongodb'

// For reading parameters from query:
var url = require('url');

// For accessing mongoDB:
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

// For sending html:
var fs=require('fs');

// For listening...
var myPort = 3000;
var myHost = '127.0.0.1';

var server = http.createServer(function (req, res) {

  //writing the headers of our response
  
// ----------------- OLD-CODE --------------------------

  //creating the connection with the mysql server
  // var connection = mysql.createConnection({
  //   host: '127.0.0.1',
  //   user: 'root',
  //   password: 'MyNewPassword',
  //   database: 'galit&koby',
  //   port: 3306 });

  //initiating the connection
  //connection.connect();

  // ----------------- NEW-CODE --------------------------
console.log('Starting. Listening on port: ' + myPort);


// Let's read the object that came with the url query (GET)
var parsedUrl = url.parse(req.url, true); // true to get query as object
  var queryAsObject = parsedUrl.query;

// For debug:  
console.log('Your Query: \r\n' + JSON.stringify(queryAsObject));

// Let's open the db:
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    
  if(err) {
      console.log('Could not access DB! Shutting down... ');
      res.end('error');

      throw err;
  }

  console.log('DB Open!')

// Examples of using mongodb:

  // var collection = db.collection('test_insert');
  // collection.insert({a:2}, function(err, docs) {

  //   collection.count(function(err, count) {
  //     console.log(format("count = %s", count));
  //   });

  //   // Locate all the entries using find
  //   collection.find().toArray(function(err, results) {
  //     console.dir(results);

  // Let's close the db
  db.close();
  console.log('DB closed!')


  // ----------------- Answering the client -----------------

  // // 1) -- How to write back a string:
  // res.end("Done!");
  // 
  // console.log('string sent...');



  // // 2) -- How to write back an html page:
  // fs.readFile("main.html", function (err, data){
  //   if (err) {
  //     console.log("Could not find 'main.html' ");
  //     res.end('error');

  //     throw err;
  //   }

  //   res.writeHead(200, {'Content-Type':'text/html'});
  //   res.end(data);   

  //   console.log('HTML sent...');
  // });



  // 3) -- How to write back a json:
  res.writeHead(200, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
  res.end(JSON.stringify(queryAsObject));

  console.log('JSON sent...');
});


// ----------------- More OLD-CODE --------------------------
  //   });
  // })

});


server.listen(myPort, myHost);