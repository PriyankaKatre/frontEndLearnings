const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('user responce')
})

router.get('/all-users', (req, res) => {
    res.send('all users responce')
})

module.exports = router;
