function isBalanced(root) {
    function walk(curr) {
        if (!curr)
            return 0;
        const l = walk(curr.left);
        const r = walk(curr.right);
        if (l === -1 || r === -1 || Math.abs(l - r) > 1)
            return -1;
        return 1 + Math.max(l, r);
    }
    return walk(root) !== -1;
}
;
