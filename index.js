var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

/********************************/
/*          index.ejs           */
/********************************/
app.get('/', function (req, res) {
        return res.render('index');
});

/********************************/
/*           form.ejs           */
/********************************/
app.get('/form', function (req, res) {
        return res.render("form");
});
app.listen(3000, function () {
});
