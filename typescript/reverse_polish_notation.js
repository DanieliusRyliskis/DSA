function evalRPN(tokens) {
    const s = new Map([
        ['+', (a, b) => a + b],
        ['-', (a, b) => a - b],
        ['*', (a, b) => a * b],
        ['/', (a, b) => Math.trunc(a / b)],
    ]);
    const stack = [];
    for (const t of tokens) {
        if (s.has(t) && stack.length === 0)
            return 0;
        if (s.has(t) && stack.length >= 2) {
            const o1 = stack.pop();
            const o2 = stack.pop();
            const result = s.get(t)(o2, o1);
            stack.push(result);
        }
        else {
            stack.push(Number(t));
        }
    }
    return stack[stack.length - 1];
}
// const input: string[] = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
// console.log(evalRPN(input))
