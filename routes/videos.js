const express = require("express");
const videosArrayPromise = require("../Videos");
const router = express.Router();


//There should be random 5 videos on home page
router.get("/", async (req, res) => {
    const arr = await videosArrayPromise().then(value => {
        return value;
    })
    res.render("home", {
        videos: arr
    });



    console.log(arr);
})



module.exports = router;