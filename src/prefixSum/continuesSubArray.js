/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  let map = { 0: 0 };
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    map[prefixSum] = i;
    const curr = prefixSum - k;
    if (curr in map) {
    }
    // console.log(prefixSum[i], '-=>prefixSum[i]', i, '=> i')
    // console.log(curr, '=> curr');
  }
  console.log(map);
};
//                         0  23 25 29  35 42
// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
//                          0 5  9  17 19 20 23 24 32 34
// console.log(checkSubarraySum([5, 4, 8, 2, 1, 3, 1, 8, 2], 6))
//                               ----
//                             12 = 17 - 5
// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

var checkSubarraySum2 = function (nums, k) {
  if (nums.length <= 1) {
    return false;
  }
  let prefixSum = 0;
  // let remainders = { 0: -1 };
  let remainders = [-1];

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let remainder = prefixSum % k;
    if ((remainder in remainders) && (i - remainders[remainder] > 1)) {
      return true
    }
    remainders[remainder] ??= i;
  }
  return false;
};
// { '0': 6, '1': 3, '2': 4, '3': 1, '4': 8, '5': 0 }

// https://magma.com/d/JvZPkvi8nO

// prefix                        23  25  29 35 42
// remained                       5   1  5  5
console.log(checkSubarraySum2([23, 2, 4, 6, 7], 6))


// prefix                      5  9 17  19 20 23 24 32 34
// remained                    5  3  5
// console.log(checkSubarraySum2([5, 4, 8, 2, 1, 3, 1, 8, 2], 6))
// console.log(checkSubarraySum2([1, 5, 4], 6))
//                             1  1
// console.log(checkSubarraySum2([1, 6, 4], 6))
// console.log(checkSubarraySum2([6, 6], 6))
// [5,0,0,0]
