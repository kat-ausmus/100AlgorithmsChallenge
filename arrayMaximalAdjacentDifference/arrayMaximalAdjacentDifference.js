const arrayMaximalAdjacentDifference = inputArray => {
    if (!inputArray) {
        throw new Error('input Array is empty or not defined');
    }
    const len = inputArray.length;
    let highestDifference = undefined;

    for (let i = 0; i < len; i++) {
        const element = inputArray[i];
        const j = i + 1;
        if (j === len) {
            continue;
        }
        const adjacentElement = inputArray[j];
        const diff = Math.abs(element - adjacentElement);

        if (!highestDifference) {
            highestDifference = diff;
        } else {
            highestDifference = highestDifference > diff ? highestDifference : diff;
        }
    }
    return highestDifference;
};

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

console.log(arrayMaximalAdjacentDifference([-15, 0, 2, 4, 1, 5, 15, 45]));
