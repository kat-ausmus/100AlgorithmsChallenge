const frequencyObj  = (intArr) => {
    return intArr.reduce( (accumulator, num) => {
        accumulator[num] = accumulator[num] ? accumulator[num] + 1 : 1;
        return accumulator;
        }
    ,{})
};
const areSimilar = (a, b) => {
    const freqA = frequencyObj(a);
    const freqB = frequencyObj(b);
    const freqALength = Object.keys(freqA).length;
    const freqBLength = Object.keys(freqB).length;
    if(freqALength!== freqBLength){
        return false;
    }

    const keys = Object.keys(freqA);
    for(let k of keys){
        if(freqA[k] !== freqB[k]){
            return false;
        }
    }
    return true;
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 2,3], [2, 3, 1, 2]));
