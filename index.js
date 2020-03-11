var express = require('express');
var app = express();

/********************************/
/*          index.ejs           */
/********************************/
app.get('/', function (req, res) {
        res.send('index.ejs');
});

/********************************/
/*           form.ejs           */
/********************************/
app.get('/form', function (req, res) {
        res.send('form');
});
app.listen(3000, function () {
});
