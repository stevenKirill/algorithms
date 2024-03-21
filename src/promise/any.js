function any(iterable) {
  const reasons = [];
  let counter = 0;
  let length = 0;
  return new Promise((resolve, reject) => {
    for(const promise of iterable) {
      let index = length;
      length++;
      Promise.resolve(promise).then((val) => {
        resolve(val);
      }, (err) => {
        counter++;
        reasons[index] = err;
        if (counter === length) {
          reject(new AggregateError(reasons, "All promises were rejected"));
        }
      })
    }
    if (length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }
  })
}

const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

any([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
