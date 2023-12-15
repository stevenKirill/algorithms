// O(N³)
function subarraySumQubic(nums, k) {
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      counter += nums.slice(i, j + 1).reduce((a, b) => a + b, 0) === k ? 1 : 0;
    }
  }
  return counter;
};

// O(N²)
function subarraySumSquare(nums, target) {
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === target) {
        counter++;
      }
    }
  }
  return counter;
};


// O(N)
function subarraySumLinear(nums, target) {
  const map = { 0: 1 };
  let counter = 0 // кол-во искомых отрезков с суммой target
  let prefixSum = 0; // сумма всех элементов, начиная с нулевого до текущего
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    const diff = prefixSum - target;
    counter += map[diff] ?? 0;

    map[prefixSum] ??= 0;
    map[prefixSum] += 1;
  }
  return counter;
};

// //                             0   0  0  0  1  2   3  4   5   7  8  9
// //                             4   2  3  5  8  6   8  7   5   8  10 11
// console.log(subarraySumLinear([4, -2, 1, 2, 3, -2, 2, -1, -2, 3, 2, 1], 3));

// {
//   1: 1,
//   3: 1,
//   4: 1,
// }
//                          0  1  3  4
// console.log(subarraySumLinear([1, 2, 1], 3));
//                             ====
//                                ----

// target === 6

//  0  2  7   5  8   7  9 13  10 16  ← prefix sums
//     2  5  -2  3  -1  2  4  -3  6
//                      ---- ← sum (2+4)
//           ---------------
//        --------                -

// console.log(subarraySum2([1, 7, 2, 4], 0)); //

// 1 8 10 14
// 7 9 13
// 2 6
// 4


// const N = 4e7;
// const arr = Array(N).fill(1);

// console.time(N);
// console.log(subarraySumLinear(arr, 6));
// console.timeEnd(N);

//           O(n³)       O(n²)         O(n)
//  500     47.497ms
//  1000    227.77ms
//  2000    1.544s       9.045ms
//  4000    10.343s      18.067ms
//  8000                 36.849ms
// 16000                 153.004ms
// 32000                 424.457ms
// 64000                 1.633s
// 1000000:                           35.631ms
// 10000000:                          218.001ms
// 20000000:                          378.622ms

// https://sinyakov.com/leetcode/prefix-sum.html


// + + +7 === 7
// // [1] [2] [3] [1 2] [2 3] [1 2 3]
// console.log(subarraySum2([1, 2, 3], 3)); //
// // console.log(subarraySum([1, 1, 1], 2)); // 2
// // console.log(subarraySum([1, 2, 1, 2, 1], 3)); // 4 // [1, 2] // [2, 1], [1, 1, 1]


// https://leetcode.com/problems/range-sum-query-2d-immutable/

