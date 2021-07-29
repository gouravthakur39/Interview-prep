// 0 0 7 6 14 12 21 18 28 24 35 30 42 36 49

function numberSeries(num) {
  let result = 0;
  if (num % 2 == 0) {
    for (let i = 0; i < num / 2 - 1; i++) {
      result += 6;
    }
    return result;
  } else {
    for (let i = 0; i < num / 2 - 1; i++) {
      result += 7;
    }
    return result;
  }
  return 0;
}

console.log(numberSeries(15));
