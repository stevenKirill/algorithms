function all(iterable) {
  let result = [];
  let counter = 0;
  let length = 0;
  return new Promise((res, rej) => {
    for(const item of iterable) {
      let index = length;
      length++;
      Promise.resolve(item).then((val) => {
        counter++;
        result[index] = val;
        if (counter === length) {
          res(result);
        }
      },
      (err) => {
        rej(err);
      });
    }
    if (length === 0) {
      return res([]);
    }
  });
}

const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));


const it = function*() {
  yield p1;
  yield p2;
  yield p3;
  yield p4;
}()

all(it).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
