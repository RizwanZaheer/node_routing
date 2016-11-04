var app = require('express')(),
    port = process.env.port || 8080,
    morgan = require('morgan'),
    bodyParser = require('body-parser');

//App configure
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

// App routing
app.get('', function(req, res) {
    res.send('this is first page!');
});

app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
    res.json({
        message: "this is a message!"
    });
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html')
});

//
app.post('/contact', function(req, res) {
    console.log(req.body);
    res.send('Hello ' + req.body.name + ' Nice to Meet You!');
});


app.get('/@:username/:post_slug', function(req, res) {
    console.log(`You are reading ${req.params.post_slug} by ${req.params.username}`);
    res.send(`You are reading ${req.params.post_slug} by ${req.params.username}`);
});


app.listen(port, function(req, res) {
    console.log(`App is listen at http://localhost:${port}`);
});