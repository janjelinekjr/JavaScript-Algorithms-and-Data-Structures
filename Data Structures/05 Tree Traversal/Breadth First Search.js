class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    contains(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let visited = []
        let queue = []
        let node = this.root

        if (this.root) queue.push(node)
        while (queue.length) {
            node = queue.shift()
            visited.push(node)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }

    DFS_PreOrder() {
        let visited = []
        let current = this.root

        function helper(node) {
            visited.push(node.value)
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
        }

        helper(current)
        return visited
    }

    DFS_PostOrder() {
        let visited = []
        let current = this.root

        function helper(node) {
            if (node.left) helper(node.left)
            if (node.right) helper(node.right)
            visited.push(node.value)
        }

        helper(current)
        return visited
    }

    DFS_InOrder() {
        let visited = []
        let current = this.root

        function helper(node) {
            if (node.left) helper(node.left)
            visited.push(node.value)
            if (node.right) helper(node.right)
        }

        helper(current)
        return visited
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.BFS())
console.log(tree.DFS_PreOrder())
console.log(tree.DFS_PostOrder())
console.log(tree.DFS_InOrder())