function productExceptSelf(nums) {
    const answer = Array.from({ length: nums.length });
    let curr = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = curr;
        curr = curr * nums[i];
    }
    curr = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * curr;
        curr = curr * nums[i];
    }
    return answer;
}
;
productExceptSelf([1, 2, 3, 4]);
