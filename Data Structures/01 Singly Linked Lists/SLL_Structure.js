class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let currNode = this.head
        let newTailNode = currNode

        while (currNode.next) {
            newTailNode = currNode
            currNode = currNode.next
        }

        this.tail = newTailNode
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return currNode
    }

    shift() {
        if (this.length === 0) return undefined
        const currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let currentNode = this.head
        if (index === 0) return currentNode

        for (let i = 1; i < this.length; i++) {
            currentNode = currentNode.next
            if (index === i) {
                return currentNode
            }
        }
    }

    set(index, val) {
        let oldNode = this.get(index)

        if (oldNode) {
            oldNode.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        const newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next

        prevNode.next = newNode
        newNode.next = nextNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        let prevNode = this.get(index - 1)
        let removingNode = prevNode.next
        prevNode.next = removingNode.next

        this.length--
        return removingNode
    }

    reverse() {
        let currentNode = this.head
        this.head = this.tail
        this.tail = currentNode
        let prev = null
        let next

        for (let i = 0; i < this.length; i++) {
            next = currentNode.next
            currentNode.next = prev
            prev = currentNode
            currentNode = next
        }
        return this
    }
}

const list = new SinglyLinkedList()

list.push(81)
console.log(list)
list.push(65)
list.push(5)
console.log(list)

console.log(list.pop())
console.log(list)

console.log(list.shift())
console.log(list)

console.log(list.unshift(4))
console.log(list.unshift(76))

console.log(list.get(0))

console.log(list)
console.log(list.set(0, 5))
console.log(list)

console.log(list.insert(1, 14))
console.log(list)

console.log(list.remove(1))
console.log(list)

console.log(list.reverse())