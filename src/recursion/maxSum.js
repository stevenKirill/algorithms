// Дано бинарное дерево, в вершинах которого хранятся целые числа.
// Определите максимальную сумму значений, которую можно получить,
// спускаясь от корня дерева до листа.
// Корень — вершина, у которой нет родительской вершины.
// Лист — вершина дерева, у которой нет ни одного ребенка.

// Объект, соответствующий первому дереву из примера выше:
const root = {
  value: 1, // ←
  left: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 2, // ←
    left: {
      value: 8,
      left: null,
      right: null,
    },
    right: {
      value: 9, // ←
      left: null,
      right: null,
    },
  },
};

const root2 = {
  "value": 17,
  "left": {
    "value": 3,
    "left": {
      "value": 2,
      "left": null,
      "right": null
    },
    "right": null
  }, // 22
  "right": {
    "value": -10,
    "left": {
      "value": 16,
      "left": null,
      "right": null
    },
    "right": {
      "value": 1,
      "left": {
        "value": 13,
        "left": null,
        "right": null
      },
      "right": null
    }
  } // 23
} // 23
// 17 + 3 + 2 = 22
// 17 + -10 + 16 = 23
// 17 + -10 + 1 + 13 = 21

function maxSum(root) {
  if (root.value === null) {
    return 0;
  }
  let res = [];
  if (root.left !== null && root.right === null) {
    let val = root.value + maxSum(root.left)
    res.push(val);
  }
  if (root.right !== null && root.left === null) {
    let val = root.value + maxSum(root.right)
    res.push(val);
  }
  if (root.right !== null && root.left !== null) {
    let right = root.value + maxSum(root.right);
    let left =  root.value + maxSum(root.left);
    res.push(right);
    res.push(left);
  }
  if (root.right === null && root.left === null) {
    return root.value;
  }
  return Math.max(...res);
}

console.log(maxSum(root2)); // 1 + 2 + 9 === 12
