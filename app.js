const express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
const pool = require("./poolDb");
const videosArr = require("./videosPromise");
const routes = require("./routes/videos");
const searchByTag = require("./controllers/searchByTag");
const PORT = process.env.PORT || 8000;
const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Set static files path
app.use('/public', express.static('public'));

//Route handlers
app.use("/", searchByTag);
app.use("/", routes);


app.get('/add', function (req, res) {
    res.render('form');
});
//POST
app.post('/add', function (req, res) {
    const newVideo = {
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        url: req.body.url
    }
    pool.query('INSERT INTO videos (title, description, tags, url) VALUES ($1, $2, $3, $4)',
        [newVideo.title, newVideo.description, newVideo.tags, newVideo.url], (err, results) => {
            if (err) {
                throw err;
            }
            res.status(201).send('Video added !')
            console.log(newVideo);
        });
});
app.listen(PORT, function () {
    console.log(`server started on port ${PORT}...`);
})