const express = require("express");
const promises = require("../videosPromise");
const router = express.Router();


router.post('/search', async (req, res) => {
    const arr = await promises.getSearchPromise(req.body.search).then(value => {
        return value;
    })
    res.render("home", {
        videos: arr
    });
});

module.exports = router;