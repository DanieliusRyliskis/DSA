function evalRPN(tokens: string[]): number {
    const s: Map<string, Function> = new Map([
        ['+', (a: number, b: number) => a + b],
        ['-', (a: number, b: number) => a - b],
        ['*', (a: number, b: number) => a * b],
        ['/', (a: number, b: number) => Math.trunc(a / b)],
    ]);
    const stack: number[] = [];

    for (const t of tokens) {
        if (s.has(t) && stack.length === 0) return 0;
        if (s.has(t) && stack.length >= 2) {
            const o1:number = stack.pop();
            const o2:number = stack.pop();
            const result: number = s.get(t)(o2,o1)
            stack.push(result)
        } else {
          stack.push(Number(t))
        }
    }
    return stack[stack.length - 1]
}


// const input: string[] = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
// console.log(evalRPN(input))
