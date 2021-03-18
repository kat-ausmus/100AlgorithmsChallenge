const arrayPreviousLess = inputArray => {
  if (!inputArray) {
    throw new Error('input Array is empty or not defined');
  }
  const len = inputArray.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      result.push(-1);
      continue;
    }
    const val = inputArray[i];
    for (let j = i - 1; j >= 0; j--) {
      const prev = inputArray[j];
      if (val > prev) {
        result.push(prev);
        break;
      }
      if (j === 0) {
        result.push(-1);
      }
    }
  }
  return result;
};

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

console.log(
    arrayPreviousLess([3, 5, 200, 101, 5, 7, 20, 45, 109, 188, 198, 197, 196]));
