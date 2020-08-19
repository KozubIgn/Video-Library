const express = require('express');
const router = express.Router();
const pool = require("../../poolDb");

//POST
router.post('/', function (req, res) {
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
router.get('/', function (req, res) {
    res.render('form');
});
module.exports = router;