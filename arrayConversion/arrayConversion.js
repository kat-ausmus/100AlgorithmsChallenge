const arrayConversion = (inputArray) => {
  if (!inputArray) {
    return undefined;
  }
  let odd = true;
  let output = inputArray;
  while (output.length > 1) {
    output = odd ? doSum(output) : doProduct((output));
    odd = !odd;
  }
  return output[0];
};

const doSum = (inputArray) => {
  console.log('doSum: ' + inputArray);
  const sumArray = [];
  const workerArray = getWorkerArray(inputArray);
  const workerLen = workerArray.length;
  for (let i = 0; i < workerLen; i = i + 2) {
    const sum = workerArray[i] + workerArray[i + 1];
    sumArray.push(sum);
  }
  console.log(`sumArray is ${JSON.stringify(sumArray)}`);
  return sumArray;
};

const doProduct = (inputArray) => {
  console.log('doProduct: ' + inputArray);
  const prodArray = [];
  const workerArray = getWorkerArray(inputArray);
  const workerLen = workerArray.length;
  for (let i = 0; i < workerLen; i = i + 2) {
    prodArray.push(workerArray[i] * workerArray[i + 1]);
  }
  console.log(`prodArray is ${JSON.stringify(prodArray)}`);
  return prodArray;
};

const getWorkerArray = (inputArray) => {
  const len = inputArray.length;
  const isOddLen = len % 2 !== 0;
  return isOddLen ? inputArray.slice(0, len - 1) : [...inputArray];
};

console.log("test1 " + arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(
    "test2 " + arrayConversion([-9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
