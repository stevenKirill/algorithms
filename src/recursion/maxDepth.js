// Напишите функцию, которая определяет глубину объекта.
// Эта функция определяет, сколько раз мы можем максимально «спуститься вниз», обращаясь по ключу.
// Глубину не объектов и пустых объектов мы считаем равной нулю.

const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: {
    f: {
      g: 4,
      h: 5,
    },
  },
  i: 6,
};

// обратились три раза и дошли до примитива:
// obj.e.f.g

// console.log(depth(obj)); // 3


function depth(arg) {
  if (Array.isArray(arg)) {
    return 0;
  }
  if (arg === null) {
    return 0;
  }
  if (typeof arg !== 'object' || Object.keys(arg).length === 0) {
    return 0;
  }
  let level = 1;
  for (let key in arg) {
    if (typeof arg[key] === 'object') {
      let d = depth(arg[key]) + 1;
      level = Math.max(d, level);
    }
  }
  return level;
}

console.log(depth(obj))
