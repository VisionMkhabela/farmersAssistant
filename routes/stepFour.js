const express = require('express');
const router = new express.Router()

router.get('/stepFour', (req, res) => {
    res.render('stepFour');
})

module.exports = router;