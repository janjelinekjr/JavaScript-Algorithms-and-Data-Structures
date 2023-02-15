class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
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
            let oldTail = this.tail
            oldTail.next = newNode
            this.tail = newNode
            this.tail.prev = oldTail
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let removingTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removingTail.prev
            this.tail.next = null
            removingTail.prev = null
        }

        this.length--
        return removingTail
    }

    shift() {
        if (!this.head) return undefined
        let removingHead = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = removingHead.next
            this.head.prev = null
            removingHead.next = null
        }
        this.length--
        return removingHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            let oldHead = this.head
            this.head = newNode
            oldHead.prev = this.head
            this.head.next = oldHead
        }

        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) return this.head

        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        let setNode = this.get(index)
        if (setNode) {
            setNode.val = val
            return true
        } else {
            return false
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)

        const newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode

        this.length++
        return true

    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removingNode = this.get(index)
        let prevNode = removingNode.prev
        let nextNode = removingNode.next

        prevNode.next = nextNode
        nextNode.prev = prevNode
        removingNode.prev = null
        removingNode.next = null

        this.length--
        return removingNode
    }
}

const list = new DoublyLinkedList()
list.push(5)
list.push(10)
list.push(50)
console.log(list)

console.log(list.pop())
console.log(list)

console.log(list.shift())
console.log(list)

console.log(list.unshift(49))

list.push(80)
list.unshift(78)
console.log(list.get(3))

console.log(list.set(1, 3))
console.log(list)

console.log(list.insert(2, 9))
console.log(list)

console.log(list.remove(1))
console.log(list)


