function checkInclusion(s1, s2) {
    if (s1.length > s2.length)
        return false;
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        // Build initial window
        s2Count[s2.charCodeAt(i) - 97]++;
    }
    if (s1Count.toString() === s2Count.toString())
        return true;
    for (let i = s1.length; i < s2.length; i++) {
        s2Count[s2.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i - s1.length) - 97]--;
        if (s1Count.toString() === s2Count.toString())
            return true;
    }
    return false;
}
;
// const s1 = "ab";
// const s2 = "eidbaooo";
// console.log(checkInclusion(s1, s2));
// function checkInclusion(s1: string, s2: string): boolean {
//   const WINDOW_SIZE: number = s1.length - 1; 
//   const c = s1.split('').sort().join('')
//   const permutation: Set<string> = new Set([c])
//   const arr: string[] = []
//
//   for (let r = 0; r < s2.length; r++) {
//     arr.push(s2[r])
//     if (r >= WINDOW_SIZE){
//       const curr: string = [...arr].sort().join('');
//       if (permutation.has(curr)) return true;
//       arr.splice(0, 1)
//     }
//   }
//   return false
// };
