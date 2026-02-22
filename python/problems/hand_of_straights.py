from typing import List
from collections import Counter

class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize:
            return False

        hand.sort()
        freq = Counter(hand)

        for c in hand:
            # 0 is a falsy value
            if freq[c]: 
                for i in range(c, c + groupSize):
                    if not freq[i]:
                        return False
                    freq[i] -= 1

        return True

