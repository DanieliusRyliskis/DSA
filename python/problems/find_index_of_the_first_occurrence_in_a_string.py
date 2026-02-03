class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(haystack) < len(needle):
            return -1
        
        h = [x for x in haystack]
        n = [x for x in needle]
        r = 0
        valid_range = len(h) - len(n) + 1

        for i in range(valid_range):  
            if h[i] == n[r]:
                for l in range(len(n)):
                    if h[i+l] != n[r]:
                        r = 0
                        break
                    r += 1
                else:
                    return i
        return -1        

    ## How do return statements work in python
        
