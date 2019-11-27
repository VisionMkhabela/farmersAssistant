const express = require('express');
const router = new express.Router()

router.get('/stepTwo', (req, res) => {
    res.render('stepTwo');
})

module.exports = router;