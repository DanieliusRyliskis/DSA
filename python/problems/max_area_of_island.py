from typing import List
from collections import deque

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        max_area = 0;
        visit = set()
        rows, cols = len(grid), len(grid[0])

        def bfs(r, c):
            q = deque()
            size = 1;
            q.append((r, c))
            visit.add((r, c))
            

            while q:
                row, col = q.popleft()
                directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
                for dc, dr in directions:
                    r, c = row + dr, col + dc
                    if ((r) in range(rows) and
                        (c) in range(cols) and
                        grid[r][c] == 1 and
                        (r, c) not in visit):
                            q.append((r, c))
                            visit.add((r, c))
                            size += 1
            return size


        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1 and (r, c) not in visit:
                    area = bfs(r, c)
                    if area > max_area:
                        max_area = area


        return max_area
