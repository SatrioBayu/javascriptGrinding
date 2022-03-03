
// Src: Codewars (https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript)

// My Code
function digPow(n, p){

  let arrNum = String(n).split("").map(num => Number(num));
    for(let i=0; i<arrNum.length; i++){
      arrNum[i] = Math.pow(arrNum[i],p);
      p++;
    }
  let num = arrNum.reduce((acc,cur)=>{
      return acc+cur;});
  if(num%n==0){
    return num/n;
  } 
  else{
    return -1;
  }
}
