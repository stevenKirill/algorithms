// Реализуйте функцию smartSum, которая считает сумму элементов в массиве со всех уровней.
function smartSumRecursion(arr) {
  let result = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      result += smartSum(item);
    } else {
      result += item;
    }
  }
  return result;
}
// 120743,4563,4,5,672,3,4,5,6,708888
const arr = [1, [2, [[3, [4]], 5, 6], 7], [[[8]]]];

console.log(smartSumRecursion(arr)); // 36


function smartSum(arr) {
  let result = 0;
  let stack = [arr];
  while(stack.length) {
    let top = stack.pop();
    if (Array.isArray(top)) {
      stack.push(...top);
    } else {
      result += top;
    }
  }
  return result;
}

const arr2 = [1, [2, [[3, [4]], 5, 6], 7], [[[8]]]];

console.log(smartSum(arr)); // 36
