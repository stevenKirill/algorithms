
// then
function compose(fns) {
  return function(arg) {
    return new Promise((resolve, reject) => {
      let promise;
      let res;
      for (let i = 0; i < fns.lenght; i++) {
        if (i === 0) {
          promise = fn(arg)
        }
        promise.then((x) => {
          res = fn(x)
          resolve(res)
        })
      }
      resolve(res)
    })
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

const square = x => new Promise(r => setTimeout(r, 2000, x ** 2));
const divideBy5 = x => new Promise(r => setTimeout(r, 1500, x / 5));
const multiplyBy3 = x => new Promise(r => setTimeout(r, 500, x * 3));

const foo = compose2([square, divideBy5, multiplyBy3]);

console.time("xxx");
foo(10).then(value => {
  console.log(value);
  console.timeEnd("xxx");
});
