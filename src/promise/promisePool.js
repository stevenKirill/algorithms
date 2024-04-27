// когда выполнится промис на его место вызвать следующий

function run(fns, limit) {
  const array = [];
  let started = 0;
  let finished = 0;

  return new Promise((resolve) => {
    if (fns.length === 0) {
      resolve(array);
    }

    function helper() {
      if (finished === fns.length) {
        resolve(array);
      }
      if (started === fns.length) {
        return;
      }
      const currentIndex = started;
      started++;
      fns[started]().then((arg) => {
        finished++;
        array[currentIndex] = arg;
        helper();
      });
    }

    for (let i = 0; i < limit; i++) {
      helper();
    }
  });
}


const fn1 = () => new Promise(r => setTimeout(r, 3400, "a"));
const fn2 = () => new Promise(r => setTimeout(r, 600, "b"));
const fn3 = () => new Promise(r => setTimeout(r, 2000, "c"));
const fn4 = () => new Promise(r => setTimeout(r, 1400, "d"));
const fn5 = () => new Promise(r => setTimeout(r, 1800, "e"));
const fn6 = () => new Promise(r => setTimeout(r, 400, "f"));


run([fn1, fn2, fn3, fn4, fn5, fn6], 2).then(arr => {
  console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
});
