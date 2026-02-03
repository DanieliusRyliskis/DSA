from typing import List

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        ans = [0 for _ in range(len(temperatures))]
        stack = []

        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][1]:
                stackI, stackT = stack.pop()
                ans[stackI] = (i - stackI)
            stack.append([i, t])

        return ans

