const express = require('express');
const router = new express.Router()

router.get('/government', (req, res) => {
    res.render('government')
 })

module.exports = router;