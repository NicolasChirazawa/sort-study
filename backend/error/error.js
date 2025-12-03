class invalidNumberQuantity {
    constructor (numberQuantity) {
        this.numberQuantity = numberQuantity;
        this.exception = 'invalid_number_quantity';
        this.statusError = 400;
    }
}

class invalidNumbersList {
    constructor (numbersList) {
        this.numbersList = numbersList;
        this.exception = 'invalid_numbers_list';
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

module.exports = { invalidNumberQuantity, invalidNumbersList, invalidAlgorithm, incorrectSortedArray }