function all(promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }
  return new Promise((res, rej) => {
    let result = [];
    let counter = 0;
    for (let p = 0; p < promises.length; p++) {
      promises[p].then((val) => {
        result[p] = val;
        counter++;
        if (counter === promises.length) {
          res(result);
        }
      });
    }
  });
}


const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

all([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value), // ["A", "B", "C", "D"]
    reason => console.log("2 >>>", reason),
);


console.log(Promise.all([]).then((val) => console.log(val)))
