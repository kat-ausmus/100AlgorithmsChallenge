import { maxIntegerAndPositionInArray } from '../utility';

const arrayChange = (inputArray: number[]): number => {
    const maxObj = maxIntegerAndPositionInArray(inputArray);
    // console.log(`${JSON.stringify(maxObj)}`);
    const intArrLen = inputArray.length;
    let steps = 0;
    let prev=inputArray[0];
    const arrSequence = [];
    for (let i = 0; i < intArrLen; i++) {
        const current = inputArray[i];
        if (i === maxObj.index) {
            arrSequence.push(current);
            prev = current;
        }
        else {
            if (prev && (prev < current)) {
                arrSequence.push(current);
                prev = current;
                continue;
            }
            const diff = (prev - current)+1;
            // console.log(diff);
            steps += diff;
            prev = current+diff;
            arrSequence.push(prev);
        }
    }
    // console.log(`${JSON.stringify(arrSequence)}`);
    return steps;
};

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([15, 1, 1]));
console.log(arrayChange([-1, 15, 1, 1]));
