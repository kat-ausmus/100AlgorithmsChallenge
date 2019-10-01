const boxBlur = image => {
    const resolution = [];
    // look at y coords
    // length -2 to avoid the edges
    console.log(`image has length ${image.length}`);
    for (let y = 0; y < image.length - 2; y++) {
        // console.log(`---------`);
        // console.log(`y is ${y}`);
        const line = [];
        for (let x = 0; x < image[y].length - 2; x++) {
            // console.log(`x is ${x}`);
            let sum = 0;
            let count = 0;
            // 3x3 pixel
            for (let a = y; a < y + 3; a++) {
                // console.log(`a is ${a}`);
                for (let b = x; b < x + 3; b++) {
                    // console.log(`b is ${b}`);
                    sum += image[a][b];
                    count++;
                }
            }
            line.push(Math.floor(sum / count));
        }
        resolution.push(line);
    }
    return resolution;
};

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));

console.log(boxBlur([[1, 1, 1,4], [1, 7, 1,4], [1, 1, 1,4]]));
