// Function Pyramid
function pyramid(row) {
  let result = "";
  // Print as much as row
  for (let i = 0; i < row; i++) {
    // Print space until row-1-i
    for (let j = 0; j < row - 1 - i; j++) {
      result += " ";
    }
    // result += with x or o as much as that condition
    for (let x = 0; x < 2 * row - (2 * row - 2 * i - 1); x++) {
      if (x % 2 == 0) {
        result += "x"; // result += 'x' if x is even
      } else {
        result += "o"; // result += 'o' if x is odd
      }
    }
    if (i != row - 1) {
      result += "\n";
    }
  }
  return result;
}
console.log(pyramid(10));

