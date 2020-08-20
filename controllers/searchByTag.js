const express = require("express");
const pool = require("../poolDb");
const url = require('url');
const querystring = require('querystring');
const promises = require("../videosPromise");
const router = express.Router();


router.get('/results', async (req, res) => {
    const queryObject = req.query;
    console.log(queryObject.tag)
    const arr = await promises.getTagPromise(queryObject.tag).then(value => {

        return value;
    })

    res.render("home", {
        videos: arr
    });

});

module.exports = router;