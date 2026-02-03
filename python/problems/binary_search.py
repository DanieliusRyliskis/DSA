from typing import List 
import math

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l < r:
            m = l + (r - l) // 2
            # < target when looking for first target value
            # <= target when looking for the last target value
            if nums[m] < target:
                # next point is when earliest point could be located 
                l = m + 1
            else: 
                r = m
        return l if nums and nums[l] == target else -1


