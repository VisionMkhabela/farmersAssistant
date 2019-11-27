const express = require('express');
const router = new express.Router()

router.get('/application', (req, res) => {
    res.render('stepOne');
})

module.exports = router;