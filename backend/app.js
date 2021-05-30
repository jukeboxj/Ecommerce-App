const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Items = require('./models/items');

mongoose.connect('mongodb://localhost:27017/kirkfall', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json())


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const STATIC = path.resolve('views', 'build');
const INDEX = path.resolve(STATIC, 'index.html');

app.use(express.static(STATIC));
app.get('*', (req, res) => {
    res.sendFile(INDEX)
});


app.listen(8000, () => {
    console.log('Serving on port 8000')
});
