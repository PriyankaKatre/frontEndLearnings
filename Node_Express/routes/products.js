var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
    res.send('Get Request for Products')
})

router.get('/get-product-details' ,(req, res) => {
    res.send('get-product-details')
})

module.exports = router
