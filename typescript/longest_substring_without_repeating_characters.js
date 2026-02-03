function lengthOfLongestSubstring(s) {
    const arr = [...s];
    let l = 0;
    let len = 0;
    const singular = new Set();
    for (let r = 0; r < arr.length; r++) {
        // Don't need an if statement, while already does check the condition
        while (singular.has(arr[r])) {
            singular.delete(arr[l]);
            l++;
        }
        singular.add(arr[r]);
        if (singular.size > len)
            len = singular.size;
    }
    return len;
}
;
// const input = "pwwkew" 
// console.log(lengthOfLongestSubstring(input))
