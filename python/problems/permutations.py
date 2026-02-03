from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []
        def backtrack(path):
            if len(path) == len(nums):
                ans.append(path[:])
                return
            for x in nums:
                if x not in path:
                    path.append(x)
                    backtrack(path)
                    path.pop()

        backtrack([])
        return ans

