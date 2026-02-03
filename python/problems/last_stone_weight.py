import heapq
from typing import List

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-s for s in stones]
        heapq.heapify(stones)
        while len(stones) > 1:
            y = -heapq.heappop(stones) 
            x = -heapq.heappop(stones) 
            if y != x:
                v = y - x    
                heapq.heappush(stones, -v) 
        if len(stones) == 1:
            return -stones[0]
        else:
            return 0

        
obj = Solution()
print(obj.lastStoneWeight([2,7,4,1,8,1]))
