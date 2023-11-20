// function flattenArray(arr){
//   return arr.reduce(function(flat, toFlatten){
//     return flat.concat(Array.isArray(toFlatten)?flattenArray(toFlatten):toFlatten);
//   },[]);
// }
// const inputArray = [1,2,[3,4,5,[6,7],[8,9,[10]]],[11,12]];
// const outputArray = flattenArray(inputArray);
// console.log(outputArray);

const inputArray = [1,2,[3,4,5,[6,7],[8,9,[10]]],[11,12]];
const outputArray = inputArray.flat(Infinity);
console.log(outputArray);