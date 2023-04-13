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
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }

    pop() {
        if (!this.head) return undefined

        const removedNode = this.tail
        let current = this.head
        let prev
        while (current.next) {
            prev = current
            current = current.next
        }
        this.tail = prev
        prev.next = null

        this.length--
        return removedNode
    }

    get(index) {
        if (index === 0) return this.head
        if (index > this.length - 1) return null

        let currentNode = this.head
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    insert(index, val) {
        const newNode = new Node(val)

        if (index < 0) return false
        if (index > this.length - 1) return false
        if (index === 0) {
            const oldHead = this.head
            this.head = newNode
            this.head.next = oldHead
            return true
        } else if (index === this.length - 1) {
            this.push(val)
            return true
        }

        const prevNode = this.get(index - 1)
        const indexNode = this.get(index)

        prevNode.next = newNode
        newNode.next = indexNode

        this.length++
        return true
    }

    set(index, val) {
        const currNode = this.get(index)

        if (currNode) {
            currNode.val = val
            return true
        }

        return false
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        const foundIndex = this.get(index)

        if (foundIndex) {
            const prevNode = this.get(index - 1)
            prevNode.next = foundIndex.next
        }

        this.length--
        return foundIndex
    }
}

const singlyLinkedList = new SinglyLinkedList()

// push
// singlyLinkedList.push(5); // singlyLinkedList
// singlyLinkedList.push(10)
// singlyLinkedList.push(20)
// console.log(singlyLinkedList)

// pop
// singlyLinkedList.pop()
// console.log(singlyLinkedList)

//get
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.get(3))
// singlyLinkedList.get(0).val // 5
// singlyLinkedList.get(1).val // 10
// singlyLinkedList.get(2).val // 15
// singlyLinkedList.get(3).val // 20
// singlyLinkedList.get(4) // null

//insert
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.insert(1,12)) // true
// console.log(singlyLinkedList.insert(100,12)) // false

// set
// singlyLinkedList.push(5).push(10).push(15).push(20);
// console.log(singlyLinkedList.set(1, 12)) // true
// console.log(singlyLinkedList)

// remove
singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.remove(1))
console.log(singlyLinkedList)