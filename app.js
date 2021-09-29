const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); //Assigns setting name to value. You may store any value that you want, 
//but certain names can be used to configure the behavior of the server
//also the second argument here should match with file extension which template enginees will use
//e.g. 404.hbs in views
app.set('views', 'views'); // directory or an array of directories for the application's views

const adminData = require('./routes/admin');
// const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
// app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); was returning static file
    res.status(404).render("404", { docTitle: "Page Not Found"}); //now render dynamic template through pug template-engine
});

app.listen(3000);
