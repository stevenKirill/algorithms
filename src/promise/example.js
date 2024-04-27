// просто понять что удадено а что было добавлено
// разницу полей

let array = [
  {
    size: 32,
    stroke: 1,
  },
  {
    size: 24,
    stroke: 1,
  },
  {
    size: 20,
    stroke: 1,
  },
];

const array2 = [
  {
    size: 32,
    stroke: 1,
  },
  {
    size: 24,
    stroke: 1,
  },
];

const array3 = [
  {
    size: 32,
    stroke: 1,
  },
  {
    size: 24,
    stroke: 1,
  },
  {
    size: 20,
    stroke: 1,
  },
];

const array4 = [
  {
    size: 32,
    stroke: 3,
  },
  {
    size: 16,
    stroke: 1,
  },
  {
    size: 8,
    stroke: 1,
  },
];

function diff(before, after) {
  const observableKeys = ["size", "stroke"];

  function equal(obj1, obj2) {
    return observableKeys.every((k) => obj1[k] === obj2[k]);
  }

  function partialEqual(obj1, obj2) {
    return observableKeys.some((k) => obj1[k] === obj2[k]);
  }

  const removed = [];
  const unchanged = [];
  const changed = [];

  let beforeStack = [...before];
  let afterStack = [...after];

  const tmp = [];
  while (beforeStack.length !== 0) {
    const top = beforeStack.pop();
    const equalIndex = afterStack.findIndex((obj) => equal(obj, top));

    if (equalIndex !== -1) {
      unchanged.push(top);
      afterStack.splice(equalIndex, 1);
    } else {
      tmp.push(top);
    }
  }
  beforeStack = tmp;

  while (beforeStack.length !== 0) {
    const top = beforeStack.pop();
    const partialEqualIndex = afterStack.findIndex((obj) =>
      partialEqual(obj, top)
    );

    if (partialEqualIndex !== -1) {
      changed.push(top);
      afterStack.splice(partialEqualIndex, 1);
    } else {
      removed.push(top);
    }
  }

  return {
    unchanged,
    changed,
    removed,
    added: afterStack,
  };
}

console.log(diff(array3, array4));

// before
// {a: 1, b: 2, id: "A"}
// {a: 1, b: 2, id: "B"}
// {a: 4, b: 3, id: "C"}

// after
// {a: 1, b: 2, id: "Y"}
// {a: 1, b: 2, id: "X"}
// {a: 1, b: 2, id: "Z"} +

// unchanged: A→Y, B→X
// added: Z
// removed: C


