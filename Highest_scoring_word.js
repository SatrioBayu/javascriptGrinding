// Src = (https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript)

// Note : I know my code is not really the best practice. But it is what it is lol

// My Code
function high(x){
  let arr = x.split(" "); // split the string to an array
  let arrScore = []; // Array for the score from arr
  let biggestScore; // Find the biggest score from arrScore
  for(let i=0; i<arr.length; i++){
    let score=0;
    for(let j=0; j<arr[i].length; j++){
      score += arr[i].charCodeAt(j)-96; // Convert from ASCII code to alphabet order (Example: 'a' in ASCII is 97 so i substract by 96 to make 'a' score is 1)
    }
    arrScore.push(score); // Fill arrScore
  }
  let arrScore2 = [...arrScore]; // Make the arrScore clone to do ascending sorting. So that arrScore index isn't affected
  for(let i=0; i<arrScore2.length; i++){
    for(let j=0; j<arrScore2.length-1; j++){
      if(arrScore2[j]>arrScore2[j+1]){
        [arrScore2[j],arrScore2[j+1]] = [arrScore2[j+1],arrScore2[j]]
      }
    }
  }
  biggestScore = arrScore2[arrScore2.length-1]; // Get the biggest score from arrScore2 after ascending sorting so it's arrScore2.length-1
  let biggestIndex = arrScore.indexOf(biggestScore); // Get the index of biggest score in original array that unsorted yet
  return arr[biggestIndex]; // Return the array contain string from the argument with the index pointing at the biggest score
}
