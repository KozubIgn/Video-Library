const express = require("express");
const router = express.Router();

//There should be random 5 videos on home page
router.get("/", (req, res) => {
    res.render("home");
})

module.exports = router;