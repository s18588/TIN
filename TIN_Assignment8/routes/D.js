
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


router.post("/", (req, res) => {
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.json({requestBody : (req.body)});
});

module.exports = router;