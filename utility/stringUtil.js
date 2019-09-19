export const longestStrLength = strArray =>  {
    if(!strArray) {
        return 0;
    }
    return strArray.reduce( (accumulator, str)=> {
        return  accumulator < str.length ? str.length : accumulator;
    }, 0)
};

export const maxIntegerAndPositionInArray = intArray => {
    if(!intArray) {
        return undefined;
    }
    return intArray.reduce( (accumulator, num, index) => {
        const storedMax = accumulator['max'];
            if(storedMax < num){
                accumulator['max'] = num;
                accumulator['index'] = index;
            }
            return accumulator;
        }
    ,{max: 0, index: -1})
};
