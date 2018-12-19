const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');


const app = express();

//staticfolder
app.use(express.static(path.join(__dirname, 'public')));

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//index route
app.get('/', (req, res) => {
    res.render('index')
});



const host = 'localhost';
const port = 5000 || process.env.PORT;

app.listen(port, host, () => {
    console.log(`server started on http://${host}:${port}`);
})