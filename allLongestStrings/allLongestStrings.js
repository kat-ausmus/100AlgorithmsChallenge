import {longestStrLength} from '../utility';

function allLongestStrings(inputArray) {
  if (!inputArray) {
    return undefined;
  }
  const longestWordLen = longestStrLength(inputArray);
  return inputArray.reduce((longWordArr, word) => {
    if (word.length === longestWordLen) {
      longWordArr.push(word);
    }
    return longWordArr;
  },);

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["baba", "aarat", "ad", "abvcd", "aba"]));
