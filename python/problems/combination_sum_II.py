from typing import List

class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []
        candidates.sort()

        def backtracking(pos, path):
            total = sum(path)
            if total == target:
                ans.append(path[:])
                return
            if pos==len(candidates) or total > target:
                return
            prev = -1
            for i in range(pos, len(candidates)):
                if candidates[i] == prev:
                    continue
                path.append(candidates[i])
                backtracking(i+1, path)
                path.pop()
                prev = candidates[i]


        backtracking(0, [])
        return ans
