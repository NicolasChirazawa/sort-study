const { randomInt } = require('node:crypto');

function generateRandomNumbersList (quantity) {
    let list = [];
    for (let i = 0; i < quantity; i++) {
        list.push(randomInt(1, 100000));
    }
    return list;
}

module.exports = { generateRandomNumbersList }