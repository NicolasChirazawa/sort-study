const { randomInt } = require('node:crypto');

const { bubbleSort, insertSort, selectSort, mergeSort, quickSort, bucketSort, countSort, radixSort, heapSort, verifySorts } = 
    require('./sort-study.js');

const { invalidNumberQuantity, invalidNumbersList, invalidAlgorithm, incorrectSortedArray } = require('../error/error.js');

function generateRandomNumbersList (quantityNumber, quantityList) {
    try {
        if (
            isNaN(Number(quantityNumber)) === true || Number(quantityNumber) <= 0
        ) { 
            throw new invalidNumberQuantity(quantityNumber) 
        };
    } catch (e) {
        const destructException = Object.entries(e);
        let response = {};

        for (let i = 0; i < destructException.length; i++) {
            response[`${destructException[i][0]}`] = `${destructException[i][1]}`;
        }
        return response;
    }

    try {
        if (
            isNaN(Number(quantityList)) === true || Number(quantityList) <= 0
        ) { 
            throw new invalidNumbersList(quantityList) 
        };
    } catch (e) {
        const destructException = Object.entries(e);
        let response = {};

        for (let i = 0; i < destructException.length; i++) {
            response[`${destructException[i][0]}`] = `${destructException[i][1]}`;
        }
        return response;
    }

    let lists = [];

    for (let i = 0; i < quantityList; i++) {
        let list = [];
        for (let i = 0; i < quantityNumber; i++) {
            list.push(randomInt(1, 100000));
        }
        lists.push(list);
    }

    const response = { 'lists': lists };
    return response;
}

function getSortedArrayByAlgorithm (arrayLists, choosedAlgorithm) {
    let sortedTimes = [];
    let sortMedia = 0;

    try {
        for (let i = 0; i < arrayLists.length; i++) {
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