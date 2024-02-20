function timeLimit(fn, ms) {
  return function(...args) {
    return new Promise((res, rej) => {
      fn(...args).then((val) => {
        res(val);
        clearInterval(timer);
      },
      (err) => {
        rej(err);
        clearInterval(timer);
      });
      const timer = setTimeout(() => {
        rej('Time Limit Exceeded');
      }, ms);
    });
  }
  }


  const foo = () => x;
  const x = 5;


const fn = name => new Promise(resolve => {
  setTimeout(() => resolve(`Hello, ${name}!`), 500);
});

const fn250 = timeLimit(fn, 10_000);

console.time("xxx");

fn250("World").then(
  value => {
    console.timeEnd("xxx");
    console.log("1 >>", value);
  },
  reason => {
    console.timeEnd("xxx");
    console.log("2 >>", reason); // "Time Limit Exceeded"
  },
);
