from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        ans = []

        for i in range(n):
            if nums[i] > 0:
                break
            # Check for the same values 
            elif i > 0 and nums[i] == nums[i - 1]:
                continue

            l, r = i + 1, n - 1
            while l < r:
                total = nums[i] + nums[l] + nums[r]
                if total == 0:
                    ans.append([nums[i], nums[l], nums[r]])
                    l, r = l + 1, r - 1
                    # Check for the same values 
                    # Even though different indexes, would provide duplicate answer
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                    while l < r and nums[r] == nums[r + 1]:
                        r -= 1
                elif total < 0:
                    l += 1
                else:
                    r -= 1
        return ans
