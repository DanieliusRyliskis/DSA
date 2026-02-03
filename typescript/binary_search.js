function search(nums, target) {
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        if (nums[m] === target)
            return m;
        else if (nums[m] < target)
            l = m + 1;
        else if (nums[m] > target)
            r = m - 1;
    }
    return -1;
}
;
// const input = [-1,0,3,5,9,12]
// search(input, 4)
//
//
//
// 
