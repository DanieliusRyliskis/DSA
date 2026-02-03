class MinHeap {
    public data: number[] = [1, 2, 2, 2, 3];
    private length: number = 5;

    insert(v: number): void {
        this.data[this.length] = v;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number | number[] {
        if (this.length === 0) return -1;
        const root = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return root;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        const v: number[] = this.data.splice(0, this.length);
        return v;
    }

    private heapifyDown(i: number): void {
        const lI: number = this.leftChild(i);
        const rI: number = this.rightChild(i);
        // Conditions have equal sign because indexes are zero based and length is not
        // Second condition checks if there is any children left, because heap is filled from left to right
        const v: number = this.data[i];
        if (i >= this.length) return;
        if (lI < this.length && rI < this.length) {
            const lV: number = this.data[lI];
            const rV: number = this.data[rI];
            if (rV < lV && v > rV) {
                this.data[i] = rV;
                this.data[rI] = v;
                this.heapifyDown(rI);
            } else if ((lV < rV && v > lV) || (lV === rV && v > lV)) {
                this.data[i] = lV;
                this.data[lI] = v;
                this.heapifyDown(lI);
            }
        } else if (lI < this.length && rI >= this.length) {
            const lV: number = this.data[lI];
            this.data[i] = lV;
            this.data[lI] = v;
            this.heapifyDown(lI);
        }
    }

    private heapifyUp(i: number): void {
        if (i === 0) {
            return;
        }
        const p: number = this.parent(i);
        const pV: number = this.data[p];
        const v: number = this.data[i];
        if (v < pV) {
            this.data[p] = v;
            this.data[i] = pV;
            this.heapifyUp(p);
        }
    }

    private parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }
    private leftChild(i: number): number {
        return 2 * i + 1;
    }
    private rightChild(i: number): number {
        return 2 * i + 2;
    }
}

const heap = new MinHeap();
console.log(heap.delete());
