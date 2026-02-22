class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = 0
        # Binary 000000 would be 0
        while n:
            if n & 1:
                ans += 1
            n = n >> 1

        return ans


