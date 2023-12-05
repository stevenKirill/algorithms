// https://leetcode.com/problems/find-pivot-index/description/

// N = 3_000 → 0.12 × 3_000² === 0.12 × 9_000_000
// N = 6_000 → 0.12 × 6_000² === 0.12 × 36_000_000
//     2                            4

// O(N)
var pivotIndex = function (nums: number[]) { // nums.length === N
  const sum = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    let right = sum - left - nums[i];
    if (left === right) return i;
    left += nums[i]
    console.log(left);
  }
  return -1;
};

//                                   i===2
console.log(">>", pivotIndex([1, 7, 3, 6, 5, 6])); // === 3

//


const N = 64_000_000;
const array = Array(N).fill(0);
array[N - 1] = 1;
// 0 0 0 0 0 0 0 0 0 1


console.time(String(N));
// console.log(pivotIndex(array));
console.timeEnd(String(N));

//              1             2             3
//       5000: 28.378ms
//      10000: 83.812ms
//      20000: 294.839ms
//      40000: 1.143s       648.903ms
//      80000: 4.526s       2.534s
//     160000: 18.097s      10.073s        8.649ms
//    1600000:                             23.194ms
//   16000000:                             120.606ms
//   32000000:                             234.014ms
//   64000000:



// 32_000_000 чисел

// 8 байт

// 32_000_000 × 8 === 256_000_000 байт = 256 мегабайт

// console.time("for");
// for(let i = 0; i < 1e9; i++);
// console.timeEnd("for");

// for: 478.305ms

// Частота ЦП	3,20 ГГц
// гига герц = 1_000_000_000 герц

// петабайт =
// терабайт =
// гигабайт = 1_000_000_000 байт
// мегабайт = 1000 килобайт = 1_000_000 байт
// килобайт = 1000 байт


// https://leetcode.com/problems/range-sum-query-immutable/description/
// https://leetcode.com/problems/subarray-sum-equals-k/description/
// https://leetcode.com/problems/contiguous-array/description/
