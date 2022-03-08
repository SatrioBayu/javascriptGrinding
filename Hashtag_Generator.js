// Src = (https://www.codewars.com/kata/52449b062fb80683ec000024/javascript)

// My First Code
function generateHashtag (str) {
  let emptyRegex = /\w.*/g; // Check if the string is empty. "   " is also considered empty
  return emptyRegex.test(str)==false? false : str.split(' ').join('').length < 140
  ? '#'+str.split(' ').map(st=> st.charAt(0).toUpperCase()+st.slice(1)).join('') 
  : false
}
