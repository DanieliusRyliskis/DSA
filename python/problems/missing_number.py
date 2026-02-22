from typing import List

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        ans = 0

        for i in range(n):
            ans = ans ^ nums[i]
        for i in range(n + 1):
            ans = ans ^ i

        return ans 

