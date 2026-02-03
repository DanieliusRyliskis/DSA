function topKFrequent(nums, k) {
    const freq = new Map();
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    const answer = [];
    for (const n of nums) {
        if (freq.has(n)) {
            const curr = freq.get(n);
            freq.set(n, curr + 1);
        }
        else {
            freq.set(n, 1);
        }
    }
    for (const [k, v] of freq.entries()) {
        buckets[v].push(k);
    }
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            for (const n of buckets[i]) {
                answer.push(n);
                if (answer.length === k)
                    return answer;
            }
        }
    }
}
;
const nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2];
const answer = topKFrequent(nums, 2);
console.log(answer);
