from typing import List

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        def backtrack(i, path):
            total = sum(path) 
            if total == target:
                res.append(path[:])
                return
            if total > target or i == len(candidates):
                return
            # Make choice
            path.append(candidates[i])
            backtrack(i, path)
            # Undo
            path.pop()
            # Don't make choice
            backtrack(i+1, path)

        backtrack(0, [])
        return res

