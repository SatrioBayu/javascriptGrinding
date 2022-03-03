// Src: Codewars (https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript)

// My Stupid Code

function countSmileys(arr) {
  let counter=0;
  for(let i=0; i<arr.length; i++){
    if(arr[i].length>2){
      if(arr[i][0]===':'||arr[i][0]===';'){
        if(arr[i][1]==='-'||arr[i][1]==='~'){
          if(arr[i][2]===')'||arr[i][2]==='D'){
            counter++;
          }
        }
      }
    }else{
      if(arr[i][0]===':'||arr[i][0]===';'){
        if(arr[i][1]===')'||arr[i][1]==='D'){
          counter++;
        }
      }
    }
  }
  return counter;
}
