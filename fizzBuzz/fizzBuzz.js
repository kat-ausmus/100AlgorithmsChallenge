const fizzBuzz = (maxNum) => {
  const fizz = "Fizz";
  const buzz = "Buzz";
  for (let i = 1; i <= maxNum; i++) {
    const m3 = i % 3 === 0;
    const m5 = i % 5 === 0;
    if (m3 && m5) {
      console.log(fizz + buzz);
    } else if (m3) {
      console.log(fizz);
    } else if (m5) {
      console.log(buzz);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);
