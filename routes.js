const express = require('express');
const index = require('./routes/index');
const portfolioproject = require('./routes/portfolioproject');

const router = express.Router();

router.get('/', index);
router.get('/project', portfolioproject);

module.exports = router;
