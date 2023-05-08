const arr1 = [-21, -67, -37, -18, -20, 4000, -3999, -65];
const arr2 = [-21, -6, -3, -1, 0, 1, 98, 21];
const arr3 = [-4, 3, -2, 4, -1, 10, 4];
const arr4 = [-2, -3, 4, -1, -2, 1, 5, -9];

const findLowestSumClosestToZero = (arr) => {
  arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  let lowest = arr[0] + arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    if (Math.abs(sum) < Math.abs(lowest)) {
      lowest = sum;
    }
  }
  return lowest;
};

console.log(findLowestSumClosestToZero(arr1));
console.log(findLowestSumClosestToZero(arr2));
console.log(findLowestSumClosestToZero(arr3));
console.log(findLowestSumClosestToZero(arr4));
console.log(findLowestSumClosestToZero(arr5));
