function mergeSort(arr) {
  if (arr.length <= 1) {
    return [...arr];
  }
  let center = Math.floor(arr.length / 2);
  let left = arr.slice(0, center);  // 2 5 8 1 // 2 3 8 1
  let right = arr.slice(center); // 4 6 3 7 9 // 4 6 3 7 9
  const result = mergeArrays(mergeSort(left), mergeSort(right));
  return result;
}

// [4, 2, 1, 3] 1 2 3 4
// [4, 2] // [3, 1]  2 4 1 3
// [4] [2] [3] [1]

const x = [3];
const y = mergeSort(x);

y.push(100);

console.log(x)
console.log(y)


// console.log(mergeSort([2, 5, 8, 1, 4, 6, 3, 7, 9]));


//                   A     B
function mergeArrays(arr1, arr2) { // O(A + B)
  let result = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
    } else {
      result.push(arr2[i2]);
      i2++;
    }
  }
  while (i2 !== arr2.length) {
    result.push(arr2[i2]);
    i2++;
  }
  while (i1 !== arr1.length) {
    result.push(arr1[i1]);
    i1++;
  }
  return result;
}
// 1 2
// 1 2
// 3 2
// 3 5
// 4 5
// console.log(
//   mergeArrays(
//     //             ↓
//     [
//       1, 1, 3, 4, 7, 9, 9, 15, 20, 100, 101, 101, 101, 101, 101, 101, 101, 101,
//       101,
//     ], // 11
//     [2, 5, 6, 7, 18, 19, 88, 105, 106, 107, 300, 302, 303, 304, 305] // 12
//     //    ↑
//   )
// ); // 1 1 2 3 4 5 6 7 7 9 9 ...

// [
//   1,   1,   2,
//   3,   4,   5,
//   6,   7,   7,
//   9,   9,   15,
//   18,  19,  20,
//   88,  100, 101,
//   105, 106, 107,
//   300, 302, undefined
// ]
