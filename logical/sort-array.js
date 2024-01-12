// Sort Array
const array = [2,6,8,3,82,1,54,23,1,3];

function sortArray(array) {
  return array.sort((a,b) => a - b);
}

function sortArrayInverse(array) {
  return array.sort((a,b) => b - a);
}

console.log(sortArray(array));
console.log(sortArrayInverse(array));