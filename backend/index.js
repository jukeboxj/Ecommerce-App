if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

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

const STATIC = path.join(__dirname, '..', 'build');
const INDEX = path.join(STATIC, 'index.html');

app.use(express.static(STATIC));

app.use((req, res) => {
    res.sendFile(INDEX)
})

// app.get('*', (req, res) => {
//     res.sendFile(INDEX)
// });

// app.get('/campgrounds', async (req, res) => {
//     const campgrounds = await Campground.find({});
//     res.render('campgrounds/index', { campgrounds })
// });
// app.get('/campgrounds/new', (req, res) => {
//     res.render('campgrounds/new');
// })

// app.post('/campgrounds', async (req, res) => {
//     const campground = new Campground(req.body.campground);
//     await campground.save();
//     res.redirect(`/campgrounds/${campground._id}`)
// })

// app.get('/campgrounds/:id', async (req, res,) => {
//     const campground = await Campground.findById(req.params.id)
//     res.render('campgrounds/show', { campground });
// });

// app.get('/campgrounds/:id/edit', async (req, res) => {
//     const campground = await Campground.findById(req.params.id)
//     res.render('campgrounds/edit', { campground });
// })

// app.put('/campgrounds/:id', async (req, res) => {
//     const { id } = req.params;
//     const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
//     res.redirect(`/campgrounds/${campground._id}`)
// });

// app.delete('/campgrounds/:id', async (req, res) => {
//     const { id } = req.params;
//     await Campground.findByIdAndDelete(id);
//     res.redirect('/campgrounds');
// })


app.listen(8000, () => {
    console.log('Serving on port 8000')
})
