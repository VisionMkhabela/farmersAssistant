const express = require('express');
const router = new express.Router()

router.get('/stepFive', (req, res) => {
    res.render('stepFive');
})

router.post('/stepFive', (req, res) => {
    res.render('complete');
})


module.exports = router;