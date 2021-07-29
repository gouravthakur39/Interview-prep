function destinationCoordinates(n) {
  let c = "R";
  let x,y = 0;
  for (let i = 0; i < n; i++) {
    if (c == "R") {
      x = x + 10;
      y = y;
      c = "U";
    } else if (c == "U") {
      y = y + 20;
      c = "L";
    } else if (c == "L") {
      x = -(x + 10);
      c = "D";
    } else if (c == "D") {
      y = -y;
      c = "R";
    }
  }
  return x, y;
}

// test cases
console.log(destinationCoordinates(3));
console.log(destinationCoordinates(5));
console.log(destinationCoordinates(0));

