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

module.exports = { invalidAlgorithm, incorrectSortedArray }