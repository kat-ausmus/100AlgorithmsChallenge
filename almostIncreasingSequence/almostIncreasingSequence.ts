const almostIncreasingSequence = (sequence: number[]): boolean =>  {
    if(!sequence){
        return false;
    }
    const lesserArr = [];
    let prev=sequence[0];
    sequence.forEach( number => {
        if(prev > number) {
            lesserArr.push(lesserArr);
        }
        prev = number;
    });
    console.log(lesserArr.length);
    return (lesserArr.length <= 1);

};

 console.log(almostIncreasingSequence([1, 3, 2, 1]));
 console.log(almostIncreasingSequence([1, 3, 2]));
 console.log(almostIncreasingSequence([1, 3, 2,4,6,7,10,15,2]));