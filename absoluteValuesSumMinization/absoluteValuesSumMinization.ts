function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;
    const arrLen = a.length;
    return isEven? a[arrLen / 2 -1]: a[Math.floor(arrLen/2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4,  6, 6, 7, 8]));
