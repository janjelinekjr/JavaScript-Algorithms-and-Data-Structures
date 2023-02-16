class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
        } else {
            let currLast = this.last
            currLast.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        let firstNode = this.first
        if (!this.first) return null
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = firstNode.next
        }
        this.size--
        return firstNode.value
    }

}

const queue = new Queue()

queue.enqueue(49)
queue.enqueue(23)
queue.enqueue(78)
queue.enqueue(90)

console.log(queue.dequeue())
console.log(queue)
