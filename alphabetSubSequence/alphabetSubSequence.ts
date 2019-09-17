const  alphabetSubsequence = (s: string): boolean => {
    if(!s){
        return false;
    }
    let prevCharCode;
    const strLength = s.length;
    for(let i = 0; i< strLength; i++ ){
        const letterCharCode = s.charCodeAt(i);
        if(!prevCharCode){
            prevCharCode = letterCharCode;
            continue;
        }
        if(prevCharCode >= letterCharCode) {
            return false;
        }
        prevCharCode = letterCharCode;
    }
    return true;
};

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
console.log(alphabetSubsequence('xyz'));
console.log(alphabetSubsequence('abcdefghyzxyz'));
