from typing import List

class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = []

        for i in range(0, n + 1):
            curr = 0
            # log(i) + 1 = amount of bits needed to represent i
            while i:
                if i & 1:
                    curr += 1
                i = i >> 1
            ans.append(curr)

        return ans


        
