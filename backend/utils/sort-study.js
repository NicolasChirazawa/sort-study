function swap (list, leftCounter, rightCounter) {
    let auxiliarElement = list[rightCounter];
    list[rightCounter] = list[leftCounter];
    list[leftCounter] = auxiliarElement; 
};

function heapify (list, length, n) {
    let largest = n;
    let left    = 2 * n + 1;
    let right   = 2 * n + 2;

    if (left < length && list[largest] < list[left]) {
        largest = left;
    }

    if (right < length && list[largest] < list[right]) {
        largest = right;
    }

    if (largest != n) {
        swap (list, largest, n);
        heapify(list, length, largest);
    }
}

function resetArray () {
    const array = new Array(10);

    for (let i = 0; i < array.length; i++) { array[i] = [] };
    return array;
}

function verifySorts (list) {
    let isArraySorted = true;
    for (let i = 1; i < list; i++) {
        if (list[i] < list[i - 1]) { 
            isArraySorted = false; 
            return isArraySorted;
        }
    };

    return isArraySorted;
}

function bubbleSort (list) {
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length; j++) {
            if (list[i] < list[j]) {
                let auxiliarElement = list[i]
                list[i] = list[j];
                list[j] = auxiliarElement;
            }
        }
    }
    return list;
}

function insertSort (list) {
    for (let i = 1; i < list.length; i++) {
        let listElement = list[i];

        for (let j = i - 1; j >= 0; j--) {
            if (list[j] > listElement) {
                list[j + 1] = list[j];
            } else {
                list[j + 1] = listElement;
                break;
            }

            if (j === 0) { list[j] = listElement } 
        }
    }
    return list;
}

function selectSort (list) {
    for(let i = 0; i < list.length; i++) {
        let smallestElement = i;
        for (let j = i; j < list.length; j++) {
            if (list[smallestElement] > list[j]) {
                smallestElement = j
            }
        }

        let auxiliarElement = list[i];
        list[i] = list[smallestElement];
        list[smallestElement] = auxiliarElement;
    }
    return list;
}

function mergeSort (list) {
    let middle = (list.length % 2);
    let listRange = Math.ceil(list.length / 2);

    let [leftList, rightList] = [[], []];
    let [leftListGroup, rightListGroup] = [[], []]

    if (list.length > 1) {
        for(let i = 0; i < listRange; i++) {
            leftList.push(list[i]);
        }
        leftListGroup = mergeSort(leftList) || [];

        for(let i = listRange; i < (listRange * 2) - middle; i++) {
            rightList.push(list[i]);
        }
        rightListGroup = mergeSort(rightList) || [];
    } else {
        return list;
    }

    let [addLeft, addRight] = [0, 0];
    let newList = [];

    while (addLeft + addRight !== leftListGroup.length + rightListGroup.length) {
        if (
            rightListGroup[addRight] == undefined ||
            (
                rightListGroup[addRight] !== undefined &&
                leftListGroup[addLeft] < rightListGroup[addRight]
            )
        ) {
            newList.push(leftListGroup[addLeft]);
            addLeft = addLeft + 1;
        } else {
            newList.push(rightListGroup[addRight]);
            addRight = addRight + 1;
        }
    }
    return newList;
}

function quickSort (list) {
    if (list.length === 1) {
        return list;
    }

    let pivot = 0;
    let leftCounter = 1;

    for(let rightCounter = 1; rightCounter < list.length; rightCounter++) {
        if (list[pivot] > list[rightCounter]) {           
            if (leftCounter !== rightCounter) {
                swap(list, leftCounter, rightCounter);
            }
            leftCounter++;
        }
    }

    swap(list, pivot, leftCounter - 1);

    let [leftList, rightList] = [[], []];
    for (let i = 0; i < leftCounter - 1; i++) { leftList.push(list[i])  }
    for (let i = leftCounter; i < list.length; i++) { rightList.push(list[i]) }


    if (leftList.length > 0) { leftList = quickSort(leftList)  };
    if (rightList.length > 0) { rightList = quickSort(rightList) };

    return [...leftList, list[leftCounter - 1], ...rightList]
}

function bucketSort (list) {
    let biggestValue = -Infinity;
    for (let i = 0; i < list.length; i++) {
        if (biggestValue < list[i]) { biggestValue = list[i] } 
    } 

    let size = Math.floor(biggestValue/list.length);
    let bucket_itens = [];
    let buckets = {};

    for (let i = 0; i < list.length; i++) { 
        let divisibleBucketValue = Math.floor(list[i] / size);
        if (buckets[divisibleBucketValue] === undefined) {
            bucket_itens.push(divisibleBucketValue);
            buckets[divisibleBucketValue] = [list[i]]; 
        } else {
            buckets[divisibleBucketValue].push(list[i]);
        }
    }

    let response = [];
    bucket_itens = insertSort(bucket_itens);

    for (let i = 0; i < bucket_itens.length; i++) {
        let bucket = buckets[bucket_itens[i]]
        if (bucket.length > 1) {
            bucket = insertSort(bucket);
        }
        response.push(...bucket);
    }
    return response;
}

function countSort (list) {

    let largestNumber = 0;
    for(let i = 0; i < list.length; i++) {
        if (largestNumber < list[i]) { largestNumber = list[i] }
    }

    let auxiliarArray = new Array(largestNumber + 1).fill(0);
    for (let i = 0; i < list.length; i++) {
        auxiliarArray[list[i]] = auxiliarArray[list[i]] + 1;
    }

    for (let i = 1; i < auxiliarArray.length; i++) {
        auxiliarArray[i] += auxiliarArray[i - 1];
    }

    let sortedArray = new Array(list.length);

    for (let i = list.length - 1; i >= 0; i--) {
        let elementBase = list[i];
        sortedArray[auxiliarArray[elementBase] - 1] = elementBase;
        auxiliarArray[elementBase] = auxiliarArray[elementBase] - 1;
    }
   return sortedArray;
}

function radixSort (list) {
    let loop = 0;
    let largestElementLenght = 0;
    
    for (let i = 0; i < list.length; i++) { if (largestElementLenght < String(list[i]).length) { largestElementLenght = String(list[i]).length }}

    while (loop < largestElementLenght) {      
        let array = resetArray();

        for (let i = 0; i < list.length; i++) {
            const listElement = String(list[i]);

            if (listElement.length - loop > 0) {
                array[listElement[listElement.length - 1 - loop]].push(list[i]);
            } else {
                array[0].push(list[i]);
            }
        }

        list = [];
        for (let i = 0; i < array.length; i++) { list.push(...array[i]) }

        loop++;
    }
    return list;
}

function heapSort (list) {
    let loops = Math.floor(list.length/2) - 1;
    for (let i = loops; i >= 0; i--) {
        heapify(list, list.length, i);
    }

    let sortedArray = [];

    while(list.length > 0) {
        swap(list, 0, list.length - 1);
        sortedArray[list.length - 1] = list.pop();
        heapify(list, list.length, 0);
    }
    return sortedArray;
}

module.exports = { bubbleSort, insertSort, selectSort, mergeSort, quickSort, bucketSort, countSort, radixSort, heapSort, verifySorts }