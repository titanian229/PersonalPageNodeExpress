const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'James T Lee', scripts: ['indexanimations.js', 'indexlisteners.js'] });
});

module.exports = router;
