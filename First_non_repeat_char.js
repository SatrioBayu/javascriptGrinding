// src = (https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript)

// My Code
function firstNonRepeatingLetter(s) {
  let first=''; // If the parameter is empty string or the string didn't have non repeat. Example = 'lool'
  if(s.length==1){
    return s; // If the parameter only 1 character
  } else{
    for(let i=0; i<s.length; i++){
      let counter=1;
      // Check the duplicate onward
      for(let j=i+1; j<s.length; j++){
        if(s[i]==s[j]||s[i].toUpperCase()==s[j]||s[i].toLowerCase()==s[j]){
          counter++;
        }
      }
      // Check the duplicate backward (Example: 'Broom' if code below deleted then the first non repeat char is the second 'o' because it didn't check backward)
      for(let g=i-1; g>=0; g--){
        if(s[i]==s[g]||s[i].toUpperCase()==s[g]||s[i].toLowerCase()==s[g]){
          counter++;
        }
      }
      if(counter==1){
        first = s[i];
        break;
      }
    }
    return first;
  }
}
