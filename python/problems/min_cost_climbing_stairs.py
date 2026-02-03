from typing import List

class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        memo = {}

        # Subproblem - what is the minimum cost of steps starting from i 
        def dfs(i):
            if i in memo:
                return memo[i]

            if i >= len(cost):
                return 0

            # Current cost + cheapest path of subsequent branches
            # Memoization also work, because previous decisions doesn't effect the current value
            memo[i] = cost[i] + min(dfs(i + 1), dfs(i + 2)) 
            return memo[i]

        return min(dfs(0), dfs(1))


        
