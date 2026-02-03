function isAlphanumeric(char) {
    return ((char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9'));
}
function isPalindrome(s) {
    const arr = [...s];
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        while (l < r && !isAlphanumeric(arr[l])) {
            l++;
        }
        while (r > l && !isAlphanumeric(arr[r])) {
            r--;
        }
        if (arr[l].toLowerCase() !== arr[r].toLowerCase())
            return false;
        l++;
        r--;
    }
    return true;
}
// const input: string = 'A man, a plan, a canal: Panama';
// console.log(isPalindrome(input));
