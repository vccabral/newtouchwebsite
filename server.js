// server.js
var express = require('express');
//var nodemailer = require('nodemailer');
/*
var smtpTransport = nodemailer.createTransport("SMTP", {

    service: 'Gmail',
    auth: {
        // enter your gmail account
        user: 'GMAIL_USER',
        // enter your gmail password
        pass: 'GMAIL_PASS'
    }
});
*/
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

//send email once received contact form
app.get('/contactform', function (req, res) {

    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.firstname  + " " + req.query.lastname+ "<br>" +
               "User's email: " + req.query.user + "<br>" +    
                "Message: " + req.query.text
    }

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});
*/

var port = process.env.PORT || 5000;
app.listen(port);
 
console.log('server started '+ port);