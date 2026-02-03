import heapq
from typing import List

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        res = []
        for x, y in points:
            distance = (x ** 2) + (y ** 2)
            heap.append([distance, x, y])
        heapq.heapify(heap)
        for _ in range(k):
            root = heapq.heappop(heap)
            res.append(root[1:4])
        return res

