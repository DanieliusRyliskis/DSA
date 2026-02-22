from typing import List

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
    
        memo = {}

        def dfs(sum):
            if sum == amount:
                return 0
            if sum in memo:
                return memo[sum]

            ans = 1e9
            for j in coins:
                if sum + j <= amount:
                    ans = min(ans, 1 + dfs(sum + j))

            memo[sum] = ans
            return ans

        ans = dfs(0)
        return -1 if ans >= 1e9 else int(ans)
