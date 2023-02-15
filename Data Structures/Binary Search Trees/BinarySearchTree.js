class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (!this.root) {
            return this.root = newNode
        } else {
            let current = this.root
            while (true) {
                if (val === current.value) return undefined
                if (val < current.value) {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.value) {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find(val) {
        if (!this.root) return undefined

        if (val === this.root.value) {
            return true
        } else {
            let currentNode = this.root
            while (true) {
                if (val < currentNode.value) {
                    if (!currentNode.left) {
                        return undefined
                    } else if (val === currentNode.left.value) {
                        return currentNode.left
                    } else {
                        currentNode = currentNode.left
                    }
                } else if (val > currentNode.value) {
                    if (!currentNode.right) {
                        return undefined
                    } else if (val === currentNode.right.value) {
                        return currentNode.right
                    } else {
                        currentNode = currentNode.right
                    }
                }
            }
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.find(16))