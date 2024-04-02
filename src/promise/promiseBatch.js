const fn1 = () => {
  console.log("fn1");
  return new Promise(r => setTimeout(r, 3400, "a"));
}
const fn2 = () => {
  console.log("fn2");
  return new Promise(r => setTimeout(r, 600, "b"));
}
const fn3 = () => {
  console.log("fn3");
  return new Promise(r => setTimeout(r, 2000, "c"));
}
const fn4 = () => {
  console.log("fn4");
  return new Promise(r => setTimeout(r, 1400, "d"));
}
const fn5 = () => {
  console.log("fn5");
  return new Promise(r => setTimeout(r, 1800, "e"));
}
const fn6 = () => {
  console.log("fn6");
  return new Promise(r => setTimeout(r, 400, "f"));
}

function run(fns, limit) {
  if (fns.length === 0) {
    return Promise.resolve([]);
  }
  const promises = fns.slice(0, limit).map(fn => fn());
  return Promise.all(promises).then((res) => {
    return run(fns.slice(limit), limit).then((result) => {
      return res.concat(result);
    });
  });
}


run([fn1, fn2, fn3, fn4, fn5, fn6], 3)
.then(arr => {
  console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
});


// fn1 -----------------
// fn2 ---
// fn3                  ----------
// fn4                  -------
// fn5                            --------
// fn6                            --


// fn1 -----------------
// fn2 ---
// fn3 ----------
// fn4 -------
// fn5                  --------
// fn6                  --
