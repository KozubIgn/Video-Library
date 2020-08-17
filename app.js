const express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
const PORT = process.env.PORT || 8000;
const app = express();

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//set static Path
app.use(express.static(path.join(__dirname, 'public')));

//route handlers
app.get('/', function (req, res) {
    res.send('hello World!');
});

app.listen(PORT, function () {
    console.log(`server started on port ${PORT}...`);
})