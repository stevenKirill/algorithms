Promise.resolve(1)  // 1
  .then(x => x * 2) // 2
  .then(x => x * 3, x => x + 5) // 6
  .catch(x => x + 10) // cb = cb if (status == reject) { cb() }
  .then(x => {
    console.log(x); // 6 +++++++++++++++++++++++
    return x + 1; // 7
  })
  .then(x => {
    throw x * 2; // 14
  }) // R 14
  .then(x => x * 4) // R 14
  .then(x => x + 1, x => x + 3) // F 17
  .catch(x => {
    console.log(x); // 14
    throw x + 30; // 44
  }) // F 17
  .catch(x => {
    console.log(x); // 44
    throw x + 50; // 94
  }) // F 17
  .then(x => x * 20) // 340
  .catch(x => {
    console.log(x);
    return x + 3
  })
  .then(x => {
    console.log(x); // 340 ++++++++++++++++++++++++++
  });
