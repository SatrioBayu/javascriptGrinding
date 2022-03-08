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

// Function Gabung Array
function gabungArray(arr) {
  // Cara susah --> Kekurangan: kalo dimensi arr nambah jadi ganti manual
  // let array = [];
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     for (let x = 0; x < arr[i][j].length; x++) {
  //       array.push(arr[i][j][x]);
  //     }
  //   }
  // }

  // Cara gampang1 pake spread operator --> Kekurangan: kalo dimensi arr nambah jadi ganti manual
  // let array = [...arr[0][0], ...arr[0][1]];

  // Cara gampang2 pake built in function --> Kelebihan: dimensi arr nambah ga masalah
  let array = arr.join(",").split(",");
  return array;
}
const array = [
  [
    [
      ["a", "b", "c"],
      ["d", "e", "f"],
    ],
  ],
];
console.log(gabungArray(array));
