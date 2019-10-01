const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
};

const bishopAndPawn = (bishop, pawn) => {
    const bishopX = board[bishop[0]];
    const bishopY = parseInt(bishop[1],10);

    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1],10);

    const leftSide = bishopX + bishopY === pawnY + pawnX;
    const rightSide = bishopX + pawnY === pawnX + bishopY;
    return leftSide || rightSide;
};

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('d4', 'a1'));
console.log(bishopAndPawn('d4', 'g1'));
console.log(bishopAndPawn('d4', 'g2'));
