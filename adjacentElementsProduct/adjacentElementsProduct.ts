function adjacentElementsProduct(inputArray: number[]): number {
    const inputLen = inputArray.length;
    let highestProduct =0;
    for(let i = 0; i < inputLen; i++){
        const left = inputArray[i];
        if(i < inputLen -1) {
            const right = inputArray[i + 1];
            const product = left * right;
            highestProduct = highestProduct > product? highestProduct : product;
        }
    }
    return highestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([5, 6, -2, 7, 7, 4]));
