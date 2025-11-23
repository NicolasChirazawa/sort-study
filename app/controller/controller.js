const utils = require('../utils/utils.js')

const generateRandomNumbersList = (req, res) => {
    const NUMBERS_LIST = process.env.NUMBERS_LIST;
    const quantity = req.params.quantity;
    
    const response = utils.generateRandomNumbersList(quantity, NUMBERS_LIST);

    res.send(response);
};

const getSortedArrayByAlgorithm = (req, res) => {
    const NUMBERS_LIST     = process.env.NUMBERS_LIST;
    const choosedAlgorithm = req.params.algorithm_name;
    const arrayLists       = req.body.array_lists;

    const response = utils.getSortedArrayByAlgorithm(arrayLists, choosedAlgorithm, NUMBERS_LIST);
    
    if (response.exception) {
        return res.status(400).send(response);
    } else {
        return res.status(200).send(response);
    }
};

module.exports = { generateRandomNumbersList, getSortedArrayByAlgorithm }