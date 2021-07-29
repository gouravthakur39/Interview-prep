function primeNumber(num) {
  if (num == (1 || 0)) {
    return `${num} is NOT a prime number`;
  } else if (num % num == 0) {
    return `${num} is a prime number`;
  } else {
    return `${num} is NOT a prime number`;
  }
}

//test cases
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(43));
console.log(primeNumber(1));
console.log(primeNumber(0));
