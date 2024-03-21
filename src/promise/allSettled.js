const allSettled = (array) => {
  let result = [];
  let counter = 0;
  let length = 0;
  return new Promise((resolve, _reject) => {
    for (const p of array) {
      let index = length;
      length++;
      Promise.resolve(p)
        .then(
          (value) => ({
            value,
            status: "fulfilled",
          }),
          (reason) => ({
            status: "rejected",
            reason,
          })
        )
        .then((value) => {
          counter++;
          result[index] = value;
          if (counter === length) {
            resolve(result);
          }
        });
    }
    if (length === 0) {
      return resolve([]);
    }
  });
};

const rand = () => Math.random() * 2000;

const p1 = new Promise((r) => setTimeout(r, rand(), "A"));
const p2 = new Promise((r) => setTimeout(r, rand(), "B"));
const p3 = new Promise((r) => setTimeout(r, rand(), "C"));
const p4 = new Promise((r) => setTimeout(r, rand(), "D"));

allSettled([p1, p2, p3, p4]).then(
  (value) => console.log("1 >>>", value),
  (reason) => console.log("2 >>>", reason)
);
