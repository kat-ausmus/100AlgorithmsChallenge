export const longestStrLength = strArray =>  {
    if(!strArray) {
        return 0;
    }
    return strArray.reduce( (accumulator, str)=> {
        return  accumulator < str.length ? str.length : accumulator;
    }, 0)
};
