const avoidObstacles = inputArray => {
  inputArray = inputArray.sort((a, b) => a - b);
  const len = inputArray.length;
  const largestVal = inputArray[len - 1];

  for (let i = 1; i < largestVal + 1; i++) {
    if (inputArray.every(element => element % i !== 0)) {
      return i;
    }
  }
};

console.log(avoidObstacles([5, 3, 6, 7, 9]));
