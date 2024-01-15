// 5 6 2 3
// 2 6 5 3
// 2 3 5 6
// 2 3 5 6
// 2 3 5 6

function selectionSort(arr, cb) {
  for(let j = 0; j < arr.length; j++) {
    let minIndex = j;
    for(let i = j; i < arr.length; i++) {
      if (cb(arr[i], arr[minIndex]) < 0) {
        minIndex = i;
      }
    }
    let tmp = arr[j];
    arr[j] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

// console.log(selectionSort([5, 6, 2, 3], (a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// }))

// console.log(["qwe", "a", "zzzzzzz", "mm", "tt"]
//     .sort((a, b) => b.length - a.length)
// );
// console.log(
//   selectionSort(
//       ["qwe", "a", "zzzzzzz", "mm", "tt"],
//       (a, b) => b.length - a.length,
//     )
// );


function standardSort(arr, callback) {
  return selectionSort(arr, callback);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
// https://maxcode.dev/problems/selection-sort


// console.log([{x: 1}, {x: 5}, {x: 2}, {x : 3}]
//     .sort((a, b) => a.x - b.x)
// );
const N = 100_000;
const array = Array(N).fill().map(() => Math.random());
const copy = [...array];
console.time('selectionSort');
selectionSort(array, (a, b) => a - b);
console.timeEnd('selectionSort');

console.time('array.sort');
array.sort((a, b) => a - b);
console.timeEnd('array.sort');
