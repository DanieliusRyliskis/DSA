function isValid(s) {
    const stack = [];
    const closeToOpen = new Map([
        ["}", "{"],
        [")", "("],
        ["]", "["],
    ]);
    for (const c of s) {
        if (closeToOpen.has(c) && stack.length === 0)
            return false;
        if (closeToOpen.has(c) && stack[stack.length - 1] === closeToOpen.get(c)) {
            stack.pop();
        }
        else {
            stack.push(c);
        }
    }
    return stack.length === 0;
}
;
// const input: string = "()[]{}"
// console.log(isValid(input))
