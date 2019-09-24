const getAdjacentSum = ({ start, numElements, inputArray }) => {
    const len = inputArray.length;
    const lastPosition = start + numElements < len ? start + numElements : len;
    // console.log(`lastPosition  is ${lastPosition}`);
    let sum = undefined;
    for (let begin = start; begin < lastPosition; begin++) {
        const element = inputArray[begin];
        if (!sum) {
            sum = element;
        } else {
          sum += element;
        }
    }
    return sum;
};

const arrayMaxConsecutiveSum = (inputArray, k) => {
    if (!inputArray) {
        throw new Error('input Array is empty or not defined');
    }
    // console.log(`******************`);
    const len = inputArray.length;
    let highestSum = undefined;

    for (let i = 0; i < len; i++) {
        const adjacentSum = getAdjacentSum({ start: i, numElements: k, inputArray });
        // console.log(`adjacent sum is ${adjacentSum}`);
        if (!highestSum) {
            highestSum = adjacentSum;
        } else {
            highestSum = highestSum > adjacentSum ? highestSum : adjacentSum;
        }
        // console.log(`highest sum is ${highestSum}`);
    }
    return highestSum;
};

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4));
