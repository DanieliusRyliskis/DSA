from typing import List

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        l = 0
        ans = 0
        length = 0

        nums.sort()

        for r in range(len(nums)):
            length += 1 
            while nums[r] - nums[l] > 1:
                length -= 1
                l += 1
            if nums[r] - nums[l] == 1:
                ans = max(ans, length)

        return ans


obj = Solution()
print(obj.findLHS([1, 1, 1, 1]))
