const first = () => new Promise(r => setTimeout(r, 1000, 'first'));
const second = () => new Promise(r => setTimeout(r, 2000, 'second'));


function solution() {
  return [
    { log: "second", time: 3 },
    { log: undefined, time: 1000 },
    { log: "first", time: 1000 },
    { log: "second", time: 3000 },
  ]
}

first().then(function () {
  return second();
}).then(console.log);

first().then(function () {
  second();
}).then(console.log);

first().then(second()).then(console.log);
first().then(x => x).then(console.log);

// identity

first().then(second).then(console.log);

