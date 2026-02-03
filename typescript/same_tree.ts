function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue: Array<TreeNode | null> = [p, q];

  while (queue.length > 0){
    const curr1 = queue.shift()
    const curr2 = queue.shift()
    if (!curr1 && !curr2) continue;
    if (!curr1 || !curr2) return false;
    if (curr1.val !== curr2.val) return false;
    queue.push(curr1.left)
    queue.push(curr2.left)
    queue.push(curr1.right)
    queue.push(curr2.right)
  }
  return true;
};
