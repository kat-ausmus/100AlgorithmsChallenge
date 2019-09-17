
const longestStrLength = strArray => {
    return strArray.reduce( (accumulator, str)=> {
        return  accumulator < str.length ? str.length : accumulator;
    }, 0)
};

const createBorder = (character, length) => {
    return character.repeat(length);
};


const addBorder = (picture: string[]): string[] => {
    const bordered = [];
    const wordLen = longestStrLength(picture);
    const asterisk = "*";
    const border = createBorder(asterisk, wordLen+2);
    bordered.push(border);
    picture.forEach( word => {
        bordered.push(`${asterisk}${word}${asterisk}`);
    });
    bordered.push(border);

    return bordered;
};

console.log(addBorder(["abc", "ded"]));
