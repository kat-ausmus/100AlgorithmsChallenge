const add = (param1, param2) => {
    return param1+param2;
};

const add2 = (...param1) =>  {
    let total = 0;
    param1.forEach( num => total += num);
    return total;
 };

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));
