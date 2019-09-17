const alternatingSums = (a: number[]): number[] => {
    const result = [0,0];
    const arrLength = a.length;
    for(let i = 0; i < arrLength; i++){
        const even = (i+1) % 2 === 0;
        if(!even) {
            result[0]+=a[i];
        } else {
            result[1]+=a[i];
        }
    }
    return result;
};

console.log(alternatingSums([50, 60, 60, 45, 70]));
console.log(alternatingSums([50, 60, 60, 45, 70, 100,5]));
