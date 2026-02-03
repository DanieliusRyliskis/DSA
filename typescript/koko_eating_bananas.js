function minEatingSpeed(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let k = r;
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        let hours = 0;
        for (const p of piles) {
            hours += Math.ceil(p / m);
        }
        if (hours <= h) {
            k = m;
            r = m - 1;
        }
        else
            l = m + 1;
    }
    return k;
}
;
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
