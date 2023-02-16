class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.values.length - 1
        const element = this.values[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element > parent) {
                this.values[parentIndex] = element
                this.values[index] = parent
                index = parentIndex
            } else {
                break
            }
        }
    }

    // switch(firstNodeIndex, secondNodeIndex) {
    //     let temp = this.values[firstNodeIndex]
    //     this.values[firstNodeIndex] = this.values[secondNodeIndex]
    //     this.values[secondNodeIndex] = temp
    //     firstNodeIndex = secondNodeIndex
    // }

    // extractMax() {
    //     let maxValue = this.values[0]
    //     this.values[0] = this.values[this.values.length - 1]
    //     this.values[this.values.length - 1] = maxValue
    //     const removedMax = this.values.pop()
    //
    //     let currentRootIndex = 0
    //     while (true) {
    //         let leftNodeIndex = (currentRootIndex * 2) + 1
    //         let rightNodeIndex = (currentRootIndex * 2) + 2
    //
    //         if (this.values[currentRootIndex] < this.values[leftNodeIndex] && this.values[currentRootIndex] < this.values[rightNodeIndex]) {
    //             if (this.values[leftNodeIndex] > this.values[rightNodeIndex]) {
    //                 this.switch(currentRootIndex, leftNodeIndex)
    //             } else if (this.values[leftNodeIndex] < this.values[rightNodeIndex]) {
    //                 this.switch(currentRootIndex, rightNodeIndex)
    //             }
    //         } else if (this.values[currentRootIndex] < this.values[leftNodeIndex]) {
    //             this.switch(currentRootIndex, leftNodeIndex)
    //         } else if (this.values[currentRootIndex] < this.values[rightNodeIndex]) {
    //             this.switch(currentRootIndex, rightNodeIndex)
    //         } else {
    //             break
    //         }
    //     }
    //
    //     return removedMax
    // }

    extractMax2() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(1)
heap.insert(45)
console.log(heap)
console.log(heap.extractMax2())
console.log(heap)