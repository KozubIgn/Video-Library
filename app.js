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
app.use('/api/add', require('./routes/api/add'));

app.get('/', function (req, res) {
    res.send('hello World!');
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

app.listen(PORT, function () {
    console.log(`server started on port ${PORT}...`);
})