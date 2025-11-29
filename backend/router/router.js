const express = require('express');
const router = express.Router();

const sortLogic = require('../controller/controller.js');

router.get('/generateRandomNumbers/:quantity', sortLogic.generateRandomNumbersList);
router.post('/sortLists/:algorithm_name', sortLogic.getSortedArrayByAlgorithm);

module.exports = router;