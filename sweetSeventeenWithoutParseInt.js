function val(c) {
  if (c >= "0".charCodeAt() && c <= "9".charCodeAt())
    return c - "0".charCodeAt();
  else return c - "A".charCodeAt() + 10;
}

function sweetSeventeen(params) {
  const base = 17;
  let len = params.length;
  let power = 1;
  let num = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (val(params[i].charCodeAt()) >= base) {
      return -1;
    }
    num += val(params[i].charCodeAt()) * power;
    power = power * base;
  }
  return num;
}

console.log(sweetSeventeen("1A"));
console.log(sweetSeventeen("23GF"));
