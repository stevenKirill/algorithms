// https://leetcode.com/problems/range-sum-query-immutable/description/

class NumArray {
  #numbers;
  constructor(nums) { // nums.length === N
    this.#numbers = nums;
    this.resultIndex = [0];
    for (let i = 0; i < nums.length; i++) {
      this.resultIndex.push(this.resultIndex[i] + nums[i]);
    }
  }
  // K — calls
  sumRange(left, right) {
    return this.resultIndex[right + 1] - this.resultIndex[left -1 + 1];
  }

  sumRangeFromStart(right) {
    return this.resultIndex[right + 1]
  }
}

// //                        0   1   2   3   4   5   6   7
// //                                    ↓           ↓
// //                    0   1   5   7  12  14  17  18  20
// const obj = new NumArray([1,  4,  2,  5,  2,  3,  1,  2])
// //                                   [------11------]
// console.log(obj.sumRange(3, 6)); // 11
// console.log(obj.sumRange(0, 2)); // 7
//   18       -    7
//   right+1      left-1+1


// time O(1)  space O(1)
// const obj = new NumArray([-2, 0, 3, -5, 2, -1]); // 0 -2 -2 1 -4 -2 -3
// [
//   0, -2, -2, 1,
//  -4, -2, -3
// ]

// console.log(obj.sumRangeFromStart(3)); // -4

// console.log(obj.sumRange(0, 2)); // time O(N)
// console.log(obj.sumRange(2, 5));
// console.log(obj.sumRange(0, 5));

const N = 40_000;
const arr = Array(N).fill(1);

console.time(N);
const obj = new NumArray(arr); //  O(N)
for(let i = 0; i < N; i++) { // K calls
  obj.sumRange(0, N - 1); // O(1)
}
console.timeEnd(N);

// time O(N) + K × O(1) === O(N) + O(K) === O(N + K)
// space O(N)

// 20000: 380.192ms
// 40000: 1.366s

// time O(1) + K × O(N) === O(1) + O(K × N) === O(K × N)
// space O(1)

// O(N² + 100N) === O(N²)
// 100N / N² === 100/N → 0

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
// 17 - 1 = 16
// 0 1   6  15 17 21
// 0   1  2  3  4
// [1, 5, 9, 2, 4] // 1 3
//     -------
//        16
