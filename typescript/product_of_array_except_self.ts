function productExceptSelf(nums: number[]): number[] {
    const answer: number[] = Array.from({length: nums.length});
    let curr: number = 1;

    for (let i = 0; i < nums.length; i++){
        answer[i] = curr
        curr = curr * nums[i]
    }

    curr = 1

    for (let i = nums.length - 1; i >= 0; i--){
        answer[i] = answer[i] * curr
        curr = curr * nums[i] 
    }
    
    return answer
};

productExceptSelf([1,2,3,4])
