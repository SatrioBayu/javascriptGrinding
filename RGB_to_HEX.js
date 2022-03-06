// Src = (https://www.codewars.com/kata/513e08acc600c94f01000001/javascript)

// My Code
function rgb(...rgbhex){
  // complete this function  
  let result=''
  let arrRgb = rgbhex.map(x=> x>255? x=255: x<0? x=0: x)
  .map(y=> y<16? result+='0'+y.toString(16).toUpperCase(): result+=y.toString(16).toUpperCase());
  return result;
}
