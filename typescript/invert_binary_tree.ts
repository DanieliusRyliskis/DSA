/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
 class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
     this.val = (val===undefined ?  0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
   }
 }

// function walk(curr: TreeNode | null): void{
//   if (!curr) return;
//   walk(curr.left);
//   walk(curr.right);
//   const tmp = curr.left;
//   curr.left = curr.right;
//   curr.right = tmp;
//   // Or
//   // [curr.left, curr.right] = [curr.right, curr.left]
// }

function invertTree(root: TreeNode | null): TreeNode | null {
  walk(root)
  return root;
};
