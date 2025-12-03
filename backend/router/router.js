const express = require('express');
const router = express.Router();

const sortLogic = require('../controller/controller.js');

router.post('/generateRandomNumbers/:quantityList/:quantityNumber', sortLogic.generateRandomNumbersList);
router.post('/sortLists/:algorithm_name', sortLogic.getSortedArrayByAlgorithm);

module.exports = router;