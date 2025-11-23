const express = require('express');
const router = express.Router();

const sortLogic = require('../controller/sort.js');

router.get('/generateRandomNumbers/:quantity', sortLogic.generateRandomNumbersList);

module.exports = router;