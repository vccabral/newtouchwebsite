// server.js
var express = require('express');
var nodemailer = require('nodemailer');
var dotenv = require('dotenv')

var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

/*
app.get('/', function (req, res) {
    res.sendfile('./dist/index.html');
});

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});
*/

//send email once received contact form
app.get('/contactform', function (req, res) {
     let transporter = nodemailer.createTransport(
        {
            host: 'smtp.hotmail.com',
            port: 587,
            secure: false,
            auth: {
                user:  process.env.hotmail_user,
                pass: process.env.hotmail_pass
            } 
        });

        var mailOptions = {
            from: 'viddamaowj@hotmail.com', // sender address
            to: 'viddamao@gmail.com', // list of receivers
            subject: 'Contact form', // Subject line
            text: data.name + "\n" +  data.publish_time + "\n" + data.email + "\n " + data.content // plaintext body
            };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });

});
/*
var port = config.port || 5000;
app.listen(port);
 
console.log('server started '+ port);
*/

var http = require('http');
http.globalAgent.maxSockets = 10;
var port = 18080;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}


