const express = require('express');
const router = new express.Router()

router.get('/stepThree', (req, res) => {
    res.render('stepThree');
})

module.exports = router;