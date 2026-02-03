// function diameterOfBinaryTree(root: TreeNode | null): number {
//   let res: number = 0;
//
//   function walk(curr: TreeNode | null): number {
//     if (!curr) return 0;
//
//     const l = walk(curr.left)
//     const r = walk(curr.right)
//     res = Math.max(res, l + r)
//     return 1 + Math.max(l, r)
//   }
//
//   walk(root)
//   return res
// };
