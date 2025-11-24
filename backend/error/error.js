class invalidQuantity {
    constructor (quantity) {
        this.quantity = quantity;
        this.exception = 'invalid_quantity';
        this.statusError = 400;
    }
}

class invalidAlgorithm {
    constructor (algorithmName) {
        this.algorithmName = algorithmName;
        this.exception = 'invalid_algorithm';
        this.statusError = 400;
    }
}

class incorrectSortedArray {
    constructor (algorithmName, array, sortedArray) {
        this.algorithmName = algorithmName;
        this.array = array;
        this.sortedArray = sortedArray;
        this.exception = 'incorrect_sort_verification';
        this.statusError = 500;
    }
}

module.exports = { invalidQuantity, invalidAlgorithm, incorrectSortedArray }