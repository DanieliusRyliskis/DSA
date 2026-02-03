function maxProfit(prices) {
    let l = 0;
    let r = 1;
    let maxProfit = 0;
    while (r < prices.length) {
        if (prices[l] > prices[r])
            l = r;
        const curr = prices[r] - prices[l];
        if (curr > maxProfit)
            maxProfit = curr;
        r++;
    }
    if (maxProfit > 0)
        return maxProfit;
    return 0;
}
;
// const input = [7,1,5,3,6,4] 
// console.log(maxProfit(input))
