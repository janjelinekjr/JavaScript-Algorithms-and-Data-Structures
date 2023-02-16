// undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
        return this.adjacencyList
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        const indexV1 = this.adjacencyList[vertex2].indexOf(vertex1)
        const indexV2 = this.adjacencyList[vertex1].indexOf(vertex2)

        this.adjacencyList[vertex1].splice(indexV2, 1)
        this.adjacencyList[vertex2].splice(indexV1, 1)
    }

    removeVertex(vertex){
        for(let i = 0; i < this.adjacencyList[vertex].length; i++){
            this.removeEdge(vertex, this.adjacencyList[vertex][i])
        }
        // while(this.adjacencyList[vertex].length){
        //     const adjacentVertex = this.adjacencyList[vertex].pop()
        //     this.removeEdge(vertex, adjacentVertex)
        // }
        delete this.adjacencyList[vertex]
    }
}

graph = new Graph()
// graph.addVertex('Tokyo')
// graph.addVertex('Berlin')
// graph.addVertex('Prague')
// graph.addVertex('Milan')
// // console.log(graph)
//
// graph.addEdge('Prague', 'Berlin')
// graph.addEdge('Tokyo', 'Berlin')
// graph.addEdge('Prague', 'Tokyo')
// graph.addEdge('Milan', 'Berlin')
// console.log(graph)
//
// graph.removeVertex('Berlin')
// console.log(graph)
//
// graph.removeEdge('Berlin', 'Tokyo')
// graph.removeEdge('Berlin', 'Milan')
// console.log(graph)

graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong")
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Aspen");
console.log(graph)
graph.removeVertex('Hong Kong')
console.log(graph)