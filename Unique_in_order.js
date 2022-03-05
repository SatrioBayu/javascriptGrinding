// Src: (https://www.codewars.com/kata/54e6533c92449cc251001667/javascript)

// Example input = [1,2,3,4] => output = [1,2,3,4]
//         input = [1,1,2,3] => output = [1,2,3]
//         input = [1,1,2,3,3,4,2] => output = [1,2,3,4,2]

// My Code
function uniqueInOrder(input) {
  let result = [];
  // Input can be object(array) or else. So i checked first because if the input number we need to insert into array first
  if (typeof input != "object") {
    let arrInput = String(input).split("");
    for (let i = 0; i < arrInput.length; i++) {
      if (arrInput[i] == arrInput[i + 1]) { // We need the output to be unique in order. So if there's same char we can skip it until it different.
        continue;
      } else {
        result.push(arrInput[i]);
      }
    }
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == input[i + 1]) {
        continue;
      } else {
        result.push(input[i]);
      }
    }
  }
  return result;
}
