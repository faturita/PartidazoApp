//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var assert = require('assert');
var Comment = require('./model/Comment');

//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 8081;


/**
app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});
**/


//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//adding the /comments route to our /api router
router.route('/comments')
//retrieve all comments from the database
.get(function(req, res) {
  //looks at our Comment Schema
  Comment.find(function(err, comments) {
    if (err)
    res.send(err);
    //responds with a json object of our database comments.
    res.json(comments)
  });
})
//post new comment to the database
.post(function(req, res) {
  var comment = new Comment();
  //body parser lets us use the req.body
  comment.author = req.body.author;
  comment.text = req.body.text;
  comment.save(function(err) {
    if (err)
    res.send(err);
    res.json({ message: 'Comment successfully added!' });
  });
});

//Adding a route to a specific comment based on the database ID
router.route('/comments/:comment_id')
//The put method gives us the chance to update our comment based on
//the ID passed to the route
.put(function(req, res) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err)
    res.send(err);
    //setting the new author and text to whatever was changed. If
    //nothing was changed we will not alter the field.
    (req.body.author) ? comment.author = req.body.author : null;
    (req.body.text) ? comment.text = req.body.text : null;
    //save comment
    comment.save(function(err) {
      if (err)
      res.send(err);
      res.json({ message: 'Comment has been updated' });
    });
  });
})
//delete method for removing a comment from our database
.delete(function(req, res) {
  //selects the comment by its ID, then removes it.
  Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
    if (err)
    res.send(err);
    res.json({ message: 'Comment has been deleted' })
  })
});



//Use our router configuration when we call /api


app.use('/api', router);

app.use(express.static(`${__dirname}/ui-react/build`));

var fs = require('fs');

var ca = [ fs.readFileSync(__dirname + "/servercert.crt") ];

var options = {
  mongos: {
    ssl: false,
    sslValidate: false,
    sslCA: ca
  }
}

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('open', function (err) {
  assert.equal(null, err);
  mongoose.connection.db.listCollections().toArray(function(err, collections) {
    assert.equal(null, err);
    collections.forEach(function(collection) {
      console.log(collection);
    });
    //mongoose.connection.db.close();
    //process.exit(0);
  })
});

// Let's open that connection
var MONGODB_URL=""

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('dev.properties');

// fully qualified name
var property = properties.get('MONGODB_URL');

console.log(property)

if (!property)
{
  var MONGODB_URL = process.env.MONGODB_URL;
} else {
  var MONGODB_URL = property;
}

mongoose.connect(MONGODB_URL, options);

console.log('Connection open')

//starts the server and listens for requests
app.listen(port, function() {
  console.log('api running');
});

require("cf-deployment-tracker-client").track();

// systemd-run  -p WorkingDirectory=/srv/checkout -p Restart=always -p User=site -E API_PORT=8080 node server.js