/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  let map = {};
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    map[i] = prefixSum;
  }
  console.log(map);
};
//                          0 5  9  17 19 20 23 24 32 34
console.log(checkSubarraySum([5, 4, 8, 2, 1, 3, 1, 8, 2], 6))
//                               ----
//                             12 = 17 - 5

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
