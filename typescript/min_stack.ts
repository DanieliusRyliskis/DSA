class MinStack {
    private stack: number[]
    private minStack: number[]
    constructor() {
      this.stack = []
      this.minStack = [];
    }
    public push(val: number): void {
      this.stack.push(val)
      const isMinStackEmpty: boolean = this.minStack.length === 0  
      if (isMinStackEmpty) {
        this.minStack.push(val)
        return
      } 
      const currentMin: number = this.minStack[this.minStack.length - 1]
      this.minStack.push(val < currentMin ? val : currentMin)
    }
    public pop(): void {
      this.stack.pop();
      this.minStack.pop();
    }
    public top(): number {
      return this.stack[this.stack.length - 1]
    }
    public getMin(): number {
      return this.minStack[this.minStack.length - 1]
    }
}
