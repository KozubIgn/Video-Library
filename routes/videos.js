const express = require("express");
const promises = require("../videosPromise");
const router = express.Router();
const pool = require("../poolDb");


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
router.post('/video/:id', function (req, res) {
    const updateVideo = {
        id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        url: req.body.url
    }
    pool.query('UPDATE videos SET id=$1, title=$2, description=$3, tags=$4, url=$5 WHERE id ='+ req.params.id,
        [updateVideo.id, updateVideo.title, updateVideo.description, updateVideo.tags, updateVideo.url], (err, results) => {
            if (err) {
                throw err;
            }
            res.status(201).send('Video updated !')
            console.log(updateVideo);
        });
})
    router.get('/video/:id', async (req, res) => {
        const result = await promises.getIdPromise(req.params.id).then(value => {
            return value;

        })
        console.log(result);
        res.render("updateForm", {
            id: result[0].id,
            title: result[0].title,
            description: result[0].description,
            tags: result[0].tags,
            url: result [0].url
        })
    })

// console.log(arr);
module.exports = router;