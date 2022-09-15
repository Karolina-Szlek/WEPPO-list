var http = require('http');
var express = require('express');
var session = require('express-session');

// Wxpress-session - You can use sessions to communicate data to middleware that's executed later, or to retrieve it later on,
// on subsequent requests.

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');//stawiasz serwer

app.use("/", (req, res) => {
    res.render("index", { formData:// listy wyboru typu checkbox
        {
           // label:"label",
            id:"id"
        }
    } );
   });

http.createServer(app).listen(3000);