// Реализуйте функцию для глубокого сравнения двух объектов.

const o1 = {
  x: 1,
  y: {
    z: "qwe",
    m: {
      t: false,
    }
  },
};

const o2 = {
  x: 1,
  y: {
    z: "qwe",
    m: {
      t: false,
    }
  },
};

function deepCompare(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for(let key in o1) {
    if (typeof o1[key] === 'object' && o1[key] !== null) {
      const result = deepCompare(o1[key], o2[key]);
      if (!result) {
        return false;
      }
    } else {
      if (o1[key] !== o2[key]) {
        return false;
      }
    }
  }
  return true;
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function deepCompare2(o1, o2) {
  // if (!isObject(o1) && isObject(o2)) {
  //   return false;
  // }
  // if (isObject(o1) && !isObject(o2)) {
  //   return false;
  // }
  // if (!isObject(o1) && !isObject(o2)) {
  //   return o1 === o2;
  // }

  if (!isObject(o1) || !isObject(o2)) {
    return o1 === o2;
  }

  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for(let key in o1) {
    if (!deepCompare2(o1[key], o2[key])) {
      return false;
    }
  }
  return true;
}

function deepCompare3(o1, o2) {
  if (!isObject(o1) || !isObject(o2)) {
    return o1 === o2;
  }

  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  return Object.keys(o1).every((key) => deepCompare(o1[key], o2[key]));
}

// console.log(deepCompare(o1, o2)); // true
// o1 = {"x":{"m":1,"n":3,"k":5},"y":{"g":"g","h":"h","f":"f"}}
// o2 = {"x":{"m":1,"n":3,"k":5},"y":{"g":"g","h":"h2","f":"f"}}
const a = {
  a: 1,
  x: {},
  b: {
    c: 1
  },
};
const b = {
  a: 2,
  x: {},
  b: {
    c: 2
  },
};

console.log(deepCompare3(a, b)); // true


function deepCompareStack(a, b) {
  let stack = [[a, b]];
  while(stack.length) {
    const [top1, top2] = stack.pop();
    if (!isObject(top1) || !isObject(top2)) {
      if (top1 !== top2) {
        return false
      }
    } else {
      if (Object.keys(top1).length !== Object.keys(top2).length) return false;
      for (let key in top1) {
        stack.push([top1[key], top2[key]]);
      }
    }
  }
  return true;
}

console.log(deepCompare3(a, b)); // true
