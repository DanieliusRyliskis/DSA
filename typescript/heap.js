var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.data = [1, 2, 2, 2, 3];
        this.length = 5;
    }
    MinHeap.prototype.insert = function (v) {
        this.data[this.length] = v;
        this.heapifyUp(this.length);
        this.length++;
    };
    MinHeap.prototype.delete = function () {
        if (this.length === 0)
            return -1;
        var root = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return root;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        var v = this.data.splice(0, this.length);
        return v;
    };
    MinHeap.prototype.heapifyDown = function (i) {
        var lI = this.leftChild(i);
        var rI = this.rightChild(i);
        // Conditions have equal sign because indexes are zero based and length is not
        // Second condition checks if there is any children left, because heap is filled from left to right
        var v = this.data[i];
        if (i >= this.length)
            return;
        if (lI < this.length && rI < this.length) {
            var lV = this.data[lI];
            var rV = this.data[rI];
            if (rV < lV && v > rV) {
                this.data[i] = rV;
                this.data[rI] = v;
                this.heapifyDown(rI);
            }
            else if ((lV < rV && v > lV) || (lV === rV && v > lV)) {
                this.data[i] = lV;
                this.data[lI] = v;
                this.heapifyDown(lI);
            }
        }
        else if (lI < this.length && rI >= this.length) {
            var lV = this.data[lI];
            this.data[i] = lV;
            this.data[lI] = v;
            this.heapifyDown(lI);
        }
    };
    MinHeap.prototype.heapifyUp = function (i) {
        if (i === 0) {
            return;
        }
        var p = this.parent(i);
        var pV = this.data[p];
        var v = this.data[i];
        if (v < pV) {
            this.data[p] = v;
            this.data[i] = pV;
            this.heapifyUp(p);
        }
    };
    MinHeap.prototype.parent = function (i) {
        return Math.floor((i - 1) / 2);
    };
    MinHeap.prototype.leftChild = function (i) {
        return 2 * i + 1;
    };
    MinHeap.prototype.rightChild = function (i) {
        return 2 * i + 2;
    };
    return MinHeap;
}());
var heap = new MinHeap();
console.log(heap.delete());
