// function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
//   const q: Array<TreeNode | null> = [root, subRoot];
//
//   while (q.length > 0) {
//     const n1 = q.shift()
//     const n2 = q.shift()
//     if (!n1 && !n2) continue;
//     if (!n1 || !n2) return false;
//     if (n1.val !== n2.val) return false;
//     q.push(n1.left)
//     q.push(n2.left)
//     q.push(n1.right)
//     q.push(n2.right)
//   }
//   return true;
// }
function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) return true;
  if (root && subRoot && root.val === subRoot.val) {
    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right) 
  }
  return false
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
