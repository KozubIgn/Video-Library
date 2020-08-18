const express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
const pool = require("./poolDb");
const videosArr = require("./Videos");
const routes = require("./routes/videos");

const PORT = process.env.PORT || 8000;

const app = express();


//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static files path
app.use(express.static(path.join(__dirname, 'public')));

//Route handlers
app.use("/", routes);

// app.get('/', function (req, res) {
//     res.render("videos", {
//         videos: videosArr
//     });
//
//     console.log(videosArr);
// });

// app.get('/videos', async (req, res) => {
//     try {
//         const client = await pool.connect();
//         const result = await client.query('SELECT * FROM videos');
//         const results = {'results': (result) ? result.rows : null};
//         res.send(JSON.stringify(results));
//         client.release();
//         pool.end();
//
//     } catch (err) {
//         console.error(err);
//         res.send('Error' + err);
//     }
// })

//Running server
app.listen(PORT, function () {
    console.log(`server started on port ${PORT}...`);
})