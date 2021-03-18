const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
  const mine = yourLeft + yourRight;
  const friend = friendsLeft + friendsRight;
  return mine === friend;
};

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(10, 10, 5, 15));
console.log(areEquallyStrong(12, 28, 30, 10));
