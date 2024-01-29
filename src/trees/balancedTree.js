/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let counter = 0;
var maxDepth = function(root) {
  if (!root) return 0;
  counter++;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 1 понять как вызвать на левом дереве и на правом дереве
// 2 посчитать высоту левой части и посчитать высоту правой части
// 3 сравнить высоты
// 4 если они отличаются на 1 тогда тру если больше чем на 1 тогда фалсе
var isBalanced = function(root) {
  if (root === null) {
    return true;
  }
  const r = maxDepth(root.right);
  const l = maxDepth(root.left);
  if ((r - l === 1 || r - l === -1 || r - l === 0)
  && isBalanced(root.right)
  && isBalanced(root.left)) {
    return true;
  }
  return false;
};

// console.log(perfectTree(3))
//      0
//    /   \
//   0     0
//  / \   / \
// 0   0 0   0

// perfectTree(2)
//      0
//    /   \
//   0     0

// perfectTree(1)
//      0

// perfectTree(0)


function perfectTree(height) {
  if (height === 0) {
    return null
  }
  return {
    value: 0,
    left: perfectTree(height - 1),
    right: perfectTree(height - 1),
  }
}

// const H = 20;
// const N = 2 ** H - 1;

// const perfectTreeInstance = perfectTree(H);
// isBalanced(perfectTreeInstance);
// const formula = (N + 1) * (Math.log2(N + 1) - 1) - (N - 1);
// const approx = N * Math.log2(N);

// console.log({counter, formula, approx});


for (let H = 0; H < 1000; H++) {
  const N = 2 ** H - 1;
  // const perfectTreeInstance = perfectTree(H);
  // counter = 0;
  // console.time(N);
  // isBalanced(perfectTreeInstance);
  // console.timeEnd(N);
  const formula = (N + 1) * (Math.log2(N + 1) - 1) - (N - 1);
  const approx = N * Math.log2(N);
  console.log(approx / formula);
  // console.log({counter, formula, approx});
  // console.log({counter, formula, approx});
}

// {
//   left: {
//     left: { left: null, right: null },
//     right: { left: null, right: null }
//   },
//   right: {
//     left: { left: null, right: null },
//     right: { left: null, right: null }
//   }
// }

// https://magma.com/d/C300dDZZrH


// https://leetcode.com/problems/path-sum/description/
// https://leetcode.com/problems/count-complete-tree-nodes/description/
// https://leetcode.com/problems/most-frequent-subtree-sum/description/
