class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    pop(){
        let firstNode = this.first

        if(!this.first) return null
        if(this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = firstNode.next
        }
        firstNode.next = null
        this.size--
        return firstNode.value
    }
}

const stack = new Stack()

stack.push(4)
stack.push(65)
stack.push(78)
stack.push(12)

console.log(stack.pop())
console.log(stack)