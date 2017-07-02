const express = require('express');
const router = express.Router();
//const models = require("./models");

router.get("/", function (req, res) {
    res.render("index");
})

// This makes sure that it can be used by the main app.js file.
module.exports = router;