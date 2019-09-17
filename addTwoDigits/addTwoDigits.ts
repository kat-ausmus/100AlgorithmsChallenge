const addTwoDigits= (n: any): number => {
    const nStr = n.toString();
    const digitArr = nStr.split('');
    return digitArr.reduce ( (accumulator, digit) => {
        return  accumulator + Number(digit);
    }, 0);

};

console.log(addTwoDigits(29));
console.log(addTwoDigits(99));
console.log(addTwoDigits(54));