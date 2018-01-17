// server.js
var express = require('express');
var nodemailer = require('nodemailer');
require('dotenv').config()
var bodyParser = require('body-parser');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.json({ type: 'application/x-www-form-urlencoded'})); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//send email once received contact form post
app.post('/contactform', function (req, res) {
        let data = req.body
        console.log(req.body)       

        if (!data) {
            res.json({ error: 40000 })
            return;
        }
        let transporter = nodemailer.createTransport({
            service: 'Hotmail',
            auth: {
                user:  process.env.hotmail_user,
                pass: process.env.hotmail_pass
            } 
        })
        let mailOptions = {
            from: 'viddamaowj@hotmail.com', // sender address
            to: 'info@newtouchdigital.com', // list of receivers
            subject: 'Contact form', // Subject line
            text: 'Name: ' + data.name+ '\n' 
            +  'Time: ' + data.time + '\n' 
            + 'Company Name: ' + data.companyName +'\n'
            + 'Email: ' + data.email + '\n' 
            + 'Content: ' + data.msg // plaintext body
            };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
    
   res.json({ success: 1 });
});

var port =process.env.PORT || 5000
app.listen(port);
 
console.log('server started '+ port);
