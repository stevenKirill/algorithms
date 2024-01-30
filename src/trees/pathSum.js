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
 * @param {number} targetSum
 * @return {boolean}
 */
// 1 завести переменную и на каждом шаге складывать children
// 2  проверить что они равны если да то true нет false
var hasPathSumLoop = function(root, targetSum) {
  let counter = 0;
  while(targetSum !== counter) {
    if (counter > targetSum) {
      return false;
    }
    if (targetSum === counter) {
      return true;
    }
    if (root.right && !root.left) {
      counter += root.right;
      root = root.right;
    }
    if (root.left && !root.right) {
      counter += root.left;
      root = root.left;
    }
  }
};

//     1
//      \
//       2
//        \
//         3

// targetSum = 6

var hasPathSum = function(root, targetSum) {
  if (root === null) {
    return false;
  }
  // if (root.right !== null && root.left === null) {
  //   return hasPathSum(root.right, targetSum - root.val);
  // }
  // if (root.left !== null && root.right === null) {
  //   return hasPathSum(root.left, targetSum - root.val);
  // }
  if (root.left === null && root.right === null) {
    return targetSum - root.val === 0;
  }
  // if (root.right !== null && root.left !== null) {
    let hasPathRight = hasPathSum(root.right, targetSum - root.val);
    let hasPathLeft = hasPathSum(root.left, targetSum - root.val);
    return hasPathRight || hasPathLeft;
  // }
};

const obj = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: null,
      left: null,
    },
    left: null,
  },
  left: null,
}


console.log(hasPathSum(obj, 6));

const obj2 = {
  val: 1,
  right: {
    val: 2,
    right: {
      val: 3,
      right: null,
      left: null,
    },
    left: null,
  },
  left: {
    val: 5,
    right: null,
    left: null,
  },
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum2 = function(root, targetSum, arr = []) {
  if (root === null) {
    return [];
  }
  if (root.left === null && root.right === null) {
    if (targetSum - root.val === 0) {
      return [[...arr, root.val]]
    } else {
      return [];
    }
  }
  return [...pathSum2(root.right, targetSum - root.val, [...arr, root.val]), ...pathSum2(root.left, targetSum - root.val, [...arr, root.val])];
};

console.log(pathSum2(obj2, 6), '1');

