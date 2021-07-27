// base 17 to integer
function sweetSeventeen(params) {
  const integerNumber = parseInt(params, 17);
  return integerNumber;
}

console.log(sweetSeventeen("1A"));
console.log(sweetSeventeen("23GF"));

// integer to base 17

function sweetSeventeenToBase(params) {
  const base = params.toString(17);
  return base;
}

console.log(sweetSeventeenToBase(27));
console.log(sweetSeventeenToBase(10980));
