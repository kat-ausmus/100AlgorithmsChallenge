

const alphabeticShift= (inputString) => {
    const strArr = inputString.split("");
    const shiftArr = strArr.reduce( (accumulator, letter)  => {
        const charCode = letter.charCodeAt(0) ;
        const charCodeNext = (charCode + 1) % 123 === 0? 97 : (charCode + 1) % 123;
        const shiftedCharCode = String.fromCharCode(charCodeNext).toString();
        accumulator.push(shiftedCharCode);
        return accumulator;
    },);


    return shiftArr.join('');
};

console.log(alphabeticShift('crazy'));
