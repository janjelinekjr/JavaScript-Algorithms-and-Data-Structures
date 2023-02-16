class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
        // this.date = Date.now() // for sibling nodes with same priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.values.length - 1
        const element = this.values[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element.priority <= parent.priority) {
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

    dequeue() {
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
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
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

const ER = new PriorityQueue()
ER.enqueue('cold', 5)
ER.enqueue('gunshot', 1)
ER.enqueue('fever', 4)
ER.enqueue('broken arm', 2)
console.log(ER)
console.log(ER.dequeue())
console.log(ER)