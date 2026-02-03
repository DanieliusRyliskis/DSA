from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        print(len(nums))
        def backtrack(i, curr):
            if i == len(nums):
                # Otherwise res would store a reference which mutates
                res.append(curr[:])
                return
            # Don't pick
            backtrack(i+1, curr)
            # Pick 
            curr.append(nums[i])
            backtrack(i+1, curr)
            # Undo
            curr.pop()

        backtrack(0, [])
        return res


obj = Solution()
obj.subsets([1,2,3])
        
