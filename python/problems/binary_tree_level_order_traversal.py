from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        ans = []
        q = deque()
        q.append(root)

        while q:
            level = []
            for i in range(len(q)):
                curr = q.popleft()
                if curr:
                    level.append(curr)
                    q.append(curr.left)
                    q.append(curr.right)
            if level:
                ans.append(level)

        return ans 
