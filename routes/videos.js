const express = require("express");
const promises = require("../videosPromise");
const router = express.Router();

//There should be random 5 videos on home page
router.get("/", async (req, res) => {
    const arr = await promises.getVideosPromise().then(value => {
        return value;
    })
    res.render("home", {
        videos: arr
    });
})
    
// UPDATE
router.get('/video/:id', async (req, res) => {
    const result = await promises.getIdPromise(req.params.id).then(value => {
        return value;

    })
    console.log(result);
    res.render("updateForm", {
        title: result[0].title,
        description: result[0].description,
        tags: result[0].tags,
        url: result [0].url
    })
})
// console.log(arr);
module.exports = router;