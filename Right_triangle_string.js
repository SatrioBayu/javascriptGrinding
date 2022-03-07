// Src = I just got it from my "instructor"


//  Description:
  
//  Make right triangle pattern with string.
//  To make it more interesting, if string index is odd print it normal but if string index is even print it backward
  
//  Example1: string = "Bayu"
//  Output:    u
//            yu
//           uya
//          bayu
          
//  Example2: string = "ilovecoding"
//  Output:          g
//                  gn
//                 ing
//                gnid
//               oding
//              gnidoc
//             ecoding
//            gnidocev
//           ovecoding
//          gnidocevol
//         ilovecoding
//

// My Code
function rightTriangle(str) {
  let arr = str.split(""); // String to array
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      result += " "; // Print whitespace until array.length-1 / i
    }
    if (i % 2 != 0) {
      for (let x = arr.length - 1; x >= i; x--) {
        result += arr[x]; // If it's odd then result will be add backward
      }
    } else {
      for (let x = i; x <= arr.length - 1; x++) {
        result += arr[x]; // If it's even then result will be add forward/normal
      }
    }
    if (i != 0) {
      result += "\n";
    }
  }
  return result;
}
console.log(rightTriangle("ilovecoding"));
