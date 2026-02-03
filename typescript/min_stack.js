class MinStack {
    stack;
    minStack;
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        const isMinStackEmpty = this.minStack.length === 0;
        if (isMinStackEmpty) {
            this.minStack.push(val);
            return;
        }
        const currentMin = this.minStack[this.minStack.length - 1];
        this.minStack.push(val < currentMin ? val : currentMin);
    }
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
