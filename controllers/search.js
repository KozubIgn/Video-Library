const express = require("express");
const pool = require("../poolDb");
const url = require('url');
const querystring = require('querystring');
const promises = require("../videosPromise");
const router = express.Router();


router.post('/search', async (req, res) => {
    console.log("lalalal");
    let queryObject = req.query.result;
    console.log(queryObject)
    const arr = await promises.getSearchPromise(queryObject).then(value => {
        return value;
    })
    console.log(queryObject);
    res.render("searchHome", {
        searchInput: queryObject,
        videos: arr
    });

});

module.exports = router;