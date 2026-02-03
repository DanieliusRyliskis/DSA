function isAlphanumeric(char: string): boolean {
    return (
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9')
    );
}

function isPalindrome(s: string): boolean {
    const arr: string[] = [...s];
    let l: number = 0;
    let r: number = arr.length - 1;

    while (l < r) {
        while (l < r && !isAlphanumeric(arr[l])) {
            l++;
        }
        while (r > l && !isAlphanumeric(arr[r])) {
            r--;
        }
        if (arr[l].toLowerCase() !== arr[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
}

// const input: string = 'A man, a plan, a canal: Panama';
// console.log(isPalindrome(input));
