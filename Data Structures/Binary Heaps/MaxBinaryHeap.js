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

    switch(firstNodeIndex, secondNodeIndex) {
        let temp = this.values[firstNodeIndex]
        this.values[firstNodeIndex] = this.values[secondNodeIndex]
        this.values[secondNodeIndex] = temp
        firstNodeIndex = secondNodeIndex
    }

    extractMax() {
        let maxValue = this.values[0]
        this.values[0] = this.values[this.values.length - 1]
        this.values[this.values.length - 1] = maxValue
        const removedMax = this.values.pop()

        let currentRootIndex = 0
        while (true) {
            const leftNodeIndex = (currentRootIndex * 2) + 1
            const rightNodeIndex = (currentRootIndex * 2) + 2

            if (this.values[currentRootIndex] < this.values[leftNodeIndex] && this.values[currentRootIndex] < this.values[rightNodeIndex]) {
                if (this.values[leftNodeIndex] > this.values[rightNodeIndex]) {
                    this.switch(currentRootIndex, leftNodeIndex)
                } else if (this.values[leftNodeIndex] < this.values[rightNodeIndex]) {
                    this.switch(currentRootIndex, rightNodeIndex)
                }
            } else if (this.values[currentRootIndex] < this.values[leftNodeIndex]) {
                this.switch(currentRootIndex, leftNodeIndex)
            } else if (this.values[currentRootIndex] < this.values[rightNodeIndex]) {
                this.switch(currentRootIndex, rightNodeIndex)
            } else {
                break
            }
        }

        return removedMax
    }
}

const heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(1)
heap.insert(45)
console.log(heap.extractMax())
console.log(heap)