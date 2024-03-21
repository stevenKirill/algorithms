Promise.prototype.myCatch = function (fn) {
  return new Promise((resolve, reject) => {
    this.then((x) => {
      resolve(x)
    }, (e) => {
      try {
        if (typeof fn !== "function") {
          reject(e)
        }
        const res = fn(e);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  });
};



// Promise.resolve(10) // fulfilled<10>
//   .then(x => x + 100) // pending → fulfilled<110>
//   .then(x => {
//     throw x * 2;
//   }) // pending → rejected<220>
//   .then(x => x + 20, x => { throw x; }) // pending → rejected<220>
//   .then(x => x + 30, x => { throw x; }) // pending → rejected<220>
//   .myCatch(x => {
//     console.log(x, 'x'); // 220
//     return x / 10;
//   }) // pending → fulfilled<22>
//   .then(x => {
//     console.log(x); // 22
//   }); // pending → fulfilled<undefined>

// Promise.resolve(10) // fulfilled<10>
// .myCatch(x => {
//   throw(x);
// })

// Promise.reject(10)
//   .myCatch((x) => {
//     return x;
//   })
//   .then(x => {
//     console.log(x, 'x')
//   }, (e) => {
//     console.log(e, 'e')
//   })

  // Promise.reject(10)
  // .myCatch((x) => {
  //   return x;
  // })
  // .then(x => {
  //   console.log(x, 'x')
  // }, (e) => {
  //   console.log(e, 'e')
  // })

  // Promise.reject(10)
  // .myCatch((x) => {
  //   return new Promise((resolve, reject) => {
  //     resolve(1)
  //   })
  // })
  // .then(x => {
  //   console.log(x, 'x')
  // }, (e) => {
  //   console.log(e, 'e')
  // })

  // Promise.reject(10)
  // .myCatch((x) => {
  //   return new Promise((resolve, reject) => {
  //     reject(1)
  //   })
  // })
  // .then(x => {
  //   console.log(x, 'x')
  // }, (e) => {
  //   console.log(e, 'e')
  // })

// Promise.resolve(10)
//   .catch((x) => {
//     return new Promise((resolve, reject) => {
//       reject(1)
//     })
//   })
//   .then(x => {
//     console.log(x, 'x')
//   }, (e) => {
//     console.log(e, 'e')
//   })

// Promise.resolve(10)
//   .myCatch(null)
//   .then(x => {
//     console.log(x, 'x')
//   }, (e) => {
//     console.log(e, 'e')
//   })
// Promise.reject(20)
//   .myCatch(null)
//   .then(x => {
//     console.log(x, 'x')
//   }, (e) => {
//     console.log(e, 'e')
//   })


Promise.prototype.myCatch = function (fn) {
  return this.then(undefined, fn);
};

const originalThen = Promise.prototype.then;

Promise.prototype.then = function(...args) {
  console.log(">>>>>", args);
  return originalThen.apply(this, args);
}


Promise.reject(123).catch(function foo() {
  console.log(`1`)
});

// Promise.reject(123).then(undefined, function foo() {});
