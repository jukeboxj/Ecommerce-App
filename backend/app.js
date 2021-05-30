const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');

const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
app.use(express.json())

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const STATIC = path.join('views', 'build');
const INDEX = path.resolve(STATIC, 'index.html');

app.use(express.static(STATIC));
app.get('*', (req, res) => {
    res.sendFile(INDEX)
});


app.listen(8000, () => {
    console.log('Serving on port 8000')
});
