// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.


// 0   1  2  2  2  2
// [0, 1, 1, 0, 0, 0]  [0, 1, 0]

//  1  1  2  2  4  4
// [0, 1, 1, 0, 0, 0]

//  0 1 2 2 3 4 5 5
// [0, 1, 1, 0, 1, 1, 1, 0]

// 1  1 2 2 3 4 5 3
// [0, 1, 1, 0, 1, 1, 1, 0]

var findMaxLength2 = function(nums) {
  // создать объект с разницей между 1 и 0 на данный момент (значение индекc)
  let diff2firstOccurrence = { 0: -1 };
  let diff = 0;

  let maxLength = 0;

  // цикл
  for (let i = 0; i < nums.length; i++) {
    // считаем насколько больше единиц чем нулей
    if (nums[i] === 0) {
      diff--;
    } else {
      diff++;
    }
    // записываем индекс разницы нулей и единиц в текущий момент времени
    if (diff in diff2firstOccurrence) {
      const currentMaxLength = i - diff2firstOccurrence[diff];

      maxLength = Math.max(maxLength, currentMaxLength);
      // console.log(i, result, '=> result');
    }
    if (!(diff in diff2firstOccurrence)) {
      diff2firstOccurrence[diff] = i;
    }
  }
  return maxLength;
};

// { '0': -1, '1': 2, '2': 5, '-1': 0 }

// max = 2 max = 4
/*/ {
  -1: 0,
  0: -1,
  1: 2,
  -1: 0,
  2: 5,
}
/*/
//            index         0  1  2  3  4  5  6
//            count        -1  0  1  0  1  2  1
// console.log(findMaxLength2([0, 1, 1, 0, 1, 1, 0])); // 4
// https://magma.com/d/IpD33hMJA8

// index                -1  0  1  2  3  4  5  6  7
// balance               0  1  2  3  4  3  2  1  0
console.log(findMaxLength2([1, 1, 1, 1, 0, 0, 0, 0])); //
