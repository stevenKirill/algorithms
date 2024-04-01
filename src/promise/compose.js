
// then и for
function compose(fns) {
  return function(arg) {
    let p = Promise.resolve(arg)

    for(let i = fns.length - 1; i >= 0; i--) {
      // p = p.then((x) => fns[i](x))
      p = p.then(fns[i])
    }

    ["12", "45"].map(Number);

    return p;
  }
}

function composeReduce(fns) {
  return function(arg) {
    return fns.reduceRight(
      (acc, fn) => acc.then(fn),
      Promise.resolve(arg)
    )
  }
}

// + async await и for
// async await и recursion
// then и for
// then и recursion


// async await и for
function compose2(fns) {
  return async function(arg) {
    let res = arg;
    for (let i = fns.length - 1; i >= 0; i--) {
      res = await fns[i](res)
    }
    return res;
  }
}

const square = x => {
  console.log('square')
  return new Promise(r => setTimeout(r, 2000, x ** 2));
}
const divideBy5 = x => {
  console.log('divideBy5')
  return new Promise(r => setTimeout(r, 1500, x / 5));
}
const multiplyBy3 = x => {
  console.log('multiplyBy3')
  return new Promise(r => setTimeout(r, 500, x * 3));
}

const foo = composeReduce([square, divideBy5, multiplyBy3]);

console.time("xxx");
foo(10).then(value => {
  console.log(value, 'value');
  console.timeEnd("xxx");
});
