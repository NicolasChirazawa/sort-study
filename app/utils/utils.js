const { randomInt } = require('node:crypto');

const { bubbleSort, insertSort, selectSort, mergeSort, quickSort, bucketSort, countSort, radixSort, heapSort, verifySorts } = 
    require('./sort-study.js')
const { invalidAlgorithm, incorrectSortedArray } = require('../error/error.js');

function generateRandomNumbersList (quantity, NUMBERS_LIST) {
    let lists = [];

    console.log(process.env.NUMBERS_LIST);
    console.log(NUMBERS_LIST);

    for (let i = 0; i < NUMBERS_LIST; i++) {
        let list = [];
        for (let i = 0; i < quantity; i++) {
            list.push(randomInt(1, 100000));
        }
        lists.push(list);
    }

    const response = { 'lists': lists };
    return response;
}

function getSortedArrayByAlgorithm (arrayLists, choosedAlgorithm, NUMBERS_LIST) {
    let sortedTimes = [];
    let sortMedia = 0;

    try {
        for (let i = 0; i < NUMBERS_LIST; i++) {
            let sortedArray = []; 
            const start = performance.now();

            switch (choosedAlgorithm) {
                case 'bubbleSort':
                    sortedArray.push(bubbleSort(arrayLists[i]));
                    break;
                case 'insertSort':
                    sortedArray.push(insertSort(arrayLists[i]));
                    break;
                case 'selectSort':
                    sortedArray.push(selectSort(arrayLists[i]));
                    break;
                case 'mergeSort':
                    sortedArray.push(mergeSort(arrayLists[i]));
                    break;
                case 'quickSort':
                    sortedArray.push(quickSort(arrayLists[i]));
                    break;
                case 'bucketSort':
                    sortedArray.push(bucketSort(arrayLists[i]));
                    break;
                case 'countSort':
                    sortedArray.push(countSort(arrayLists[i]));
                    break;
                case 'radixSort':
                    sortedArray.push(radixSort(arrayLists[i]));
                    break;
                case 'heapSort':
                    sortedArray.push(heapSort(arrayLists[i]));
                    break;
                default:
                    throw new invalidAlgorithm(choosedAlgorithm);
            }

            const end = performance.now();
            const performanceTime = end - start;

            let isArraySorted = verifySorts(sortedArray);
            if (!isArraySorted) { throw new incorrectSortedArray(choosedAlgorithm, arrayLists[i], sortedArray) }

            sortMedia += performanceTime;
            sortedTimes.push(`${performanceTime}ms`);
        }
    } catch (e) {
        const destructException = Object.entries(e);
        let response = {};

        for (let i = 0; i < destructException.length; i++) {
            response[`${destructException[i][0]}`] = `${destructException[i][1]}`;
        }
        
        return response;
    }

    sortMedia = `${sortMedia/sortedTimes.length}ms`;

    const respose = {
        'algorithm': `${choosedAlgorithm}`,
        'sortTimes': `${sortedTimes}`,
        'sortMedia': `${sortMedia}`,
    }

    return respose;
}

module.exports = { generateRandomNumbersList, getSortedArrayByAlgorithm }