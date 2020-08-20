const express = require("express");
const pool = require("../poolDb");
const url = require('url');
const querystring = require('querystring');
const promises = require("../videosPromise");
const router = express.Router();


router.get("videos?tag=:tag", async (req, res) => {
    const queryObject = url.parse(req.url, true).query;

    const arr = await promises.getTagPromise(queryObject).then(value => {
        return value;
    });

    console.log(queryObject);

    res.render("home", {
        videos: arr
    });
});

module.exports = router;