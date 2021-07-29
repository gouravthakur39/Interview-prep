// 1, 1, 2, 3, 4, 9, 8, 27, 16, 81, 32, 243,64, 729, 128, 2187 ….

function numberSeries(num) {
  if (num % 2 == 0) {
    num = num / 2;
    return Math.pow(3, num - 1);
  } else {
    num = Math.floor(num / 2 + 1);
    return Math.pow(2, num - 1);
  }
}

// test cases
console.log(numberSeries(16));
console.log(numberSeries(13));
