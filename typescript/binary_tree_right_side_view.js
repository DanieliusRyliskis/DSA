function rightSideView(root) {
    const q = [root];
    const res = [];
    while (q.length) {
        const level = [];
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const curr = q.shift();
            if (curr) {
                level.push(curr.val);
                q.push(curr.left);
                q.push(curr.right);
            }
        }
        if (level.length) {
            const r = level.pop();
            res.push(r);
        }
    }
    return res;
}
;
