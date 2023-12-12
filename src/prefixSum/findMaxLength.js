// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.


// 1) найти все подмассивы
// 2) посчитать количество нулей и единиц в массиве
// 3) если два числа равны то сложить их
// очень тяжелое решение

function findMaxLength(nums) {
  let allArrays = [];
  for (let i = 0; i < nums.length; i++) {
    for(let j = i; j < nums.length; j++) {
      const a = nums.slice(i, j + 1).reduce((acc, curr) => {
        if (curr === 0) {
          acc[0]++;
          return acc;
        }
        if (curr === 1) {
          acc[1]++
          return acc;
        }
      }, [0 ,0]);
      if (!allArrays.includes(a)) {
        allArrays.push(a);
      }
    }
  }
  console.log(allArrays);
};

// сравнивать текущее число со следующим ?

function findMaxLengthCopy(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    for(let j = i; j < nums.length; j++) {
      const a = nums.slice(i, j  + 1);
      if (!map.has(a)) {
        map.set(i, a);
      }
    }
  }
  console.log(map);
};

// console.log(findMaxLength([0,1]));
console.log(findMaxLength([0,1,1,0,1,1,1,0])); // 4

console.log(findMaxLengthCopy([0,1,1,0,1,1,1,0])); // 4

// [0, 1, 1, 0, 0, 0]  [0, 1, 0]
