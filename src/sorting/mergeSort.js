let counter = 0;

// 2N - 1 вызовов
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

//                   A     B
function mergeArrays(arr1, arr2) { // O(A + B)
  let result = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      counter++;
      result.push(arr1[i1]);
      i1++;
    } else {
      counter++;
      result.push(arr2[i2]);
      i2++;
    }
  }
  while (i2 !== arr2.length) {
    counter++;
    result.push(arr2[i2]);
    i2++;
  }
  while (i1 !== arr1.length) {
    counter++;
    result.push(arr1[i1]);
    i1++;
  }
  return result;
}


const N = 100_000;
const arr = Array(N).fill(0);

mergeSort(arr);

console.log({ counter, nlogn: Math.floor(N * Math.log2(N)) })

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


// { '2': 1, '3': 3, '5': 2, '7': 2, '9': 1 }
function solve(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in map) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  return arr.sort((a, b) => {
    // 2 3
    if (map[a] > map[b]) {
      return -1;
    }
    if (map[b] > map[a]) {
      return 1;
    }
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  })
}

// https://maxcode.dev/problems/object-group-by

function solve(arr) {
  const groups = Object.groupBy(arr, x => x);
  return Object.values(groups).sort((a, b) => b.length - a.length).flat();
}

console.log(solve([2,3,5,3,7,9,5,3,7]));

// {
//   "2": [
//       2
//   ],
//   "3": [
//       3,
//       3,
//       3
//   ],
//   "5": [
//       5,
//       5
//   ],
//   "7": [
//       7,
//       7
//   ],
//   "9": [
//       9
//   ]
// }
