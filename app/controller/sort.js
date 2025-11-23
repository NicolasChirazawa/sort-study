const utils = require('../utils/utils.js')

const generateRandomNumbersList = (req, res) => {
    const quantity = req.params.quantity;
    const list = utils.generateRandomNumbersList(quantity);

    const respose = { 'numbersList': list } 
    res.send(respose);
};

module.exports = { generateRandomNumbersList }