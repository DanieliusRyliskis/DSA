function levelOrder(root: TreeNode | null): number[][] {
  const q: TreeNode[] = [root]
  const res: number[][] = []

  while (q.length > 0) {
    const level: number[] = [];
    const qSize: number = q.length;
    for (let i = 0; i < qSize; i++){
      const curr = q.shift()
      if (curr) {
        level.push(curr.val)
        q.push(curr.left)
        q.push(curr.right)
      }
    }
    if (level.length) res.push(level)
  }
  return res;
};
