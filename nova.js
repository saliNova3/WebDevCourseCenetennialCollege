const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/public', express.static('public', { 'Content-Type': 'text/css' }));


app.use(morgan('dev'));

app.listen(3000);

/* app.get('/', (req, res) => {
    res.render('index', {title: 'Home Page'});
});

app.get('/about', (req, res) => {
    res.render('aboutMe', {title: 'About'});
});

app.get('/contact', (req, res) => {
    res.render('contactMe', {title: 'Contact'});
});

app.get('/projects', (req, res) => {
    res.render('project', {title: 'Projects'});
});

app.get('/services', (req, res) => {
    res.render('service', {title: 'Service'});
});

app.use((req, res) => {
    
 
    res.status(404).render('404', {title: '404!'});
 }); */

const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/aboutMe');
const contactRouter = require('./routes/contactMe');
const projectRouter = require('./routes/projects');
const serviceRouter = require('./routes/service');

app.use('', homeRouter);
app.use('/', aboutRouter);
app.use('/', contactRouter);
app.use('/', projectRouter);
app.use('/', serviceRouter);

