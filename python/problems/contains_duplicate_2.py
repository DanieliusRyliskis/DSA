from typing import List

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        l = 0
        s = set()
        WINDOW_SIZE = k

        for r in range(len(nums)):
            if nums[r] in s:
                return True

            s.add(nums[r])

            if (r - l) == WINDOW_SIZE:
                s.remove(nums[l])
                l+=1

        return False

