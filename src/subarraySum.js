// Input: nums = [1,1,1], k = 2
// Output: 2

// Input: nums = [1,2,3], k = 3
// Output: 2

// O(N³) // как оптимизировать до n2 или до n
function subarraySum(nums, k) {
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      counter += nums.slice(i, j + 1).reduce((a, b) => a + b, 0) === k ? 1 : 0;
    }
  }
  return counter;
};


const N = 4000;
const arr = Array(N).fill(1);

// console.time(N);
// console.log(subarraySum(arr, 3));
// console.timeEnd(N);

// 500: 47.497ms
// 1000: 227.77ms
// 2000: 1.544s
// 4000: 10.343s

// + + +7 === 7
// // [1] [2] [3] [1 2] [2 3] [1 2 3]
console.log(subarraySum([1, 2, 3], 3)); //
// // console.log(subarraySum([1, 1, 1], 2)); // 2
// // console.log(subarraySum([1, 2, 1, 2, 1], 3)); // 4 // [1, 2] // [2, 1], [1, 1, 1]


// https://leetcode.com/problems/range-sum-query-2d-immutable/
