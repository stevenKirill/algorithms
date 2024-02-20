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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// https://maxcode.dev/courses/bintree
// https://leetcode.com/problems/maximum-width-of-binary-tree/description/

//       ×
//      / \
//     ×   ×
//    /     \
//   ×       ×
//          /
//         ×

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
 * @return {number}
 */

// https://magma.com/d/KqtPlw7Kzq

//  используя big int решить задачу проблема больших чисел
var widthOfBinaryTree = (root) => {
  const arr = [];

  function dfs(root, index = 0, depth = 0) {
    if (root === null) {
      return;
    }
    console.log({val: root.val, index, depth});
    arr[depth] ??= {min: index, max: index};
    arr[depth].min = Math.min(arr[depth].min, index);
    arr[depth].max = Math.max(arr[depth].max, index);

    dfs(root.left, 2 * index, depth + 1);
    dfs(root.right, 2 * index + 1, depth + 1)
  };

  dfs(root);

  return Math.max(...arr.map(({ min, max }) => max - min + 1));
}

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
    right: {
      val: 7,
      right: null,
      left: null,
    },
    left: null,
  },
}
//        1 [0]       1
//      /  \
// [0] 5    2  [1]    2
//      \    \
//   [1] 7    3 [3]   3
//

console.log(widthOfBinaryTree(obj2));
// 1 2 3 5
// [0, 1, 0, 1, 3]
// [1, 2, 3]


const widthOfBinaryTree = root => {
  let l = [], r = [], queue = [ [ root, 0, 0 ] ]
  while ( queue.length ) {
      let [ node, level, i ] = queue.shift()
      if ( !node ) continue
      l[level] = l[level] || i, r[level] = i - l[level]
      queue.push( [ node.left, level+1, i*2-1 ], [ node.right, level+1, i*2 ] )
  }
  return Math.max( ...r ) + 1
}


// const widthOfBinaryTree = root => {
//   let l = [], r = []
//   const f = ( node, level, i ) => {
//       if ( !node ) return
//       l[level] = l[level] || i, r[level] = i - l[level]
//       f( node.left, level+1, i*2-1 ), f( node.right, level+1, i*2 )
//   }
//   f( root, 0, 0 )
//   return Math.max( ...r ) + 1
// }
