var express    = require('express');   
var bodyParser = require('body-parser');
var exphbs     = require('express-handlebars');
var nodemailer = require('nodemailer');
var path       = require('path');

var app = express();


// Set EJS engine
// app.set('view engine', 'ejs');


// Set Handlears engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars');


// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about-us', function(req, res){
    res.render('about-us');
});
app.get('/all-news', function(req, res){
    res.render('all-news');
});
app.get('/category', function(req, res){
    res.render('category');
});
app.get('/contact', function(req, res){
    res.render('contact');
});
app.get('/gallery', function(req, res){
    res.render('gallery');
});
app.get('/news', function(req, res){
    res.render('news');
});
app.get('/pod-category', function(req, res){
    res.render('pod-category');
});
app.get('/stock', function(req, res){
    res.render('stock');
});
app.get('/tovar', function(req, res){
    res.render('tovar');
});


app.listen(3000, () => console.log('Server started...'));