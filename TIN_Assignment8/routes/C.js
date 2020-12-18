const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.body)

    res.render('form.ejs', {
        username : req.body.username,
        password : req.body.password,
        email : req.body.email});
});

module.exports = router;