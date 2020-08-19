const express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
const pool = require("./poolDb");
const PORT = process.env.PORT || 8001;
const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//set static Path
// app.use(express.static(path.join(__dirname, 'public')));

//route handlers
app.get('/', function (req, res) {
    res.send('hello World!');
});

app.get('/add', function (req, res) {
    res.render('form');
});

app.get('/videos', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM videos');
        const results = {'results': (result) ? result.rows : null};
        res.send(JSON.stringify(results));
        client.release();
        pool.end();

    } catch (err) {
        console.error(err);
        res.send('Error' + err);
    }
});

//POST
app.post('/add', function (req, res) {
    let newVideo = {
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        url: req.body.url
    }
    pool.query('INSERT INTO videos (title, description, tags, url) VALUES ($1, $2, $3, $4)',
        [newVideo.title, newVideo.description, newVideo.tags, newVideo.url], (err, results) => {
        if (err) {
            throw err
        }
        response.status(201).send(`Video added with ID: ${result.insertId}`)
            console.log(newVideo);
        });

});

app.listen(PORT, function () {
    console.log(`server started on port ${PORT}...`);
})