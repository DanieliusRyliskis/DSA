function rightSideView(root: TreeNode | null): number[] {
  const q: TreeNode[] = [root]
  const res: number[] = []

  while (q.length) {
    const level: number[] = []
    const size: number = q.length
    for (let i = 0; i < size; i++){
      const curr = q.shift();
      if (curr){
        level.push(curr.val);
        q.push(curr.left);
        q.push(curr.right);
      }
    }
    if (level.length){
      const r: number = level.pop()
      res.push(r)
    }
  }
  return res
};
