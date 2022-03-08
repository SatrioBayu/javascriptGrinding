// Src = (https://www.codewars.com/kata/52449b062fb80683ec000024/javascript)

// My First Code
function generateHashtag (str) {
  let emptyRegex = /\w.*/g; // Check if the string is empty. "   " is also considered empty
  let deleteSpaceRegex = /\w+/g // Select word without space
  if(emptyRegex.test(str)==false){
    return false // If the string is empty or not
  } else{
    let arrString = ['#',...str.match(deleteSpaceRegex)]; // Add '#' to first array and add array string using spread operator after get check with str.match to delete the space
    for(let i=0; i<arrString.length;i++){
      let temp = arrString[i][0].toUpperCase()+arrString[i].slice(1) // Make to first character in every word (array) to uppercase using temporary variable
      arrString[i] = temp;
    }
    arrString = arrString.join(''); // Join the array to string
    if(arrString.length-1<140){ // Check if the string length-1 < 140 or not. It's -1 because '#' doesn't count
      return arrString;
    } else{
      return false;
    }
  }
}
