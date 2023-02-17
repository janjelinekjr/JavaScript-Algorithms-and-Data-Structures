class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
        return this.adjacencyList
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        const indexV1 = this.adjacencyList[vertex2].indexOf(vertex1)
        const indexV2 = this.adjacencyList[vertex1].indexOf(vertex2)

        this.adjacencyList[vertex1].splice(indexV2, 1)
        this.adjacencyList[vertex2].splice(indexV1, 1)
    }

    removeVertex(vertex) {
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            this.removeEdge(vertex, this.adjacencyList[vertex][i])
        }
        // while(this.adjacencyList[vertex].length){
        //     const adjacentVertex = this.adjacencyList[vertex].pop()
        //     this.removeEdge(vertex, adjacentVertex)
        // }
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(startNode) {
        let result = []
        let visited = {}
        const list = this.adjacencyList

        function dfsHelper(vertex) {
            if (!vertex) return undefined
            visited[vertex] = true
            result.push(vertex)
            for (let i = 0; i < list[vertex].length; i++) {
                const visitedValues = Object.keys(visited)
                if (!visitedValues.includes(list[vertex][i])) {
                    dfsHelper(list[vertex][i])
                }
            }
        }

        dfsHelper(startNode)
        return result
    }
}

graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log(graph)

console.log(graph.depthFirstRecursive("A"))


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F