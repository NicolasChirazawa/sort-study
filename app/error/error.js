class invalidQuantity {
    constructor (quantity) {
        this.quantity = quantity;
        this.exception = 'invalid_quantity';
    }
}

class invalidAlgorithm {
    constructor (algorithmName) {
        this.algorithmName = algorithmName;
        this.exception = 'invalid_algorithm';
    }
}

class incorrectSortedArray {
    constructor (algorithmName, array, sortedArray) {
        this.algorithmName = algorithmName;
        this.array = array;
        this.sortedArray = sortedArray;
        this.exception = 'incorrect_sort_verification';
    }
}

module.exports = { invalidQuantity, invalidAlgorithm, incorrectSortedArray }