// Реализуйте аналог стандартного метода Array#flat.

// Функция flattenArr принимает массив и опционально глубину,
// на которую нужно срезать этот массив.

function flattenArrWithoutDepth(arr, depth = 1) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flattenArr(arr[i]))
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const xxx = [1,6, [8]];
const yyy = xxx.flat(0);

yyy.push(123456);

// console.log({xxx, yyy});


function flattenArr(arr, depth = 1) {
  if (depth === 0) {
    return [...arr];
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flattenArr(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]]; // [1, 2, 3, 4, 5, 6, 7, 8]

// flattenArr(x) === [1, [2, [3, 4, [5]], 6], [7], 8];

// flattenArr(x, 0) === [1, [[2, [3, 4, [5]], 6], [7]], [8]]

// flattenArr(x, 2) === [1, 2, [3, 4, [5]], 6, 7, 8]

// flattenArr(x, Infinity) === [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(flattenArr(x, 5));


function flattenArrStack(arr, depth = 1) {
  if (depth === 0) {
    return [...arr];
  }
  let stack = [arr];
  let result = [];
  while (stack.length) {
    const top = stack.pop();
    // [1,2,3]
    if (Array.isArray(top)) {
      // stack.push(...top); // почему так плохо писать
      for(let i = top.length - 1; i >= 0; i--) {
        stack.push(top[i]);
      }
    } else {
      result.push(top);
    }
  }
  return result;
}

console.log(flattenArrStack(x, 5));
