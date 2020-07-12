const express = require('express');

const router = express.Router();

router.get('/:project', (req, res) => {
    res.render('index', { title: 'James T Lee', scripts: ['animations.js'] });
});

module.exports = router;
