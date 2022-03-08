// Src = (https://www.codewars.com/kata/52449b062fb80683ec000024/javascript)

// My First Code
function generateHashtag (str) {
  let emptyRegex = /\w+/g;
  let newStr = str.split(' '); // String to array
  return emptyRegex.test(str)==false? false : newStr.join('').length < 140 // Check the str length first
  ? '#'+newStr.map(st=> st.charAt(0).toUpperCase()+st.slice(1)).join('') // Add # and make the first character each word to uppercase
  : false
}
