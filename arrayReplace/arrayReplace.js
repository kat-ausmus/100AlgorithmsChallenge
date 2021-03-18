const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return inputArray.reduce((accumulator, element) => {
    if (element === elemToReplace) {
      accumulator.push(substitutionElem)
    } else {
      accumulator.push(element);
    }
    return accumulator;
  }, [])

};

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace([1, 2, 1, 5, 11, 34, 56, 2, 3], 2, 100));
