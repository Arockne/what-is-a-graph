class Graph {
  constructor(paths) {
    this.graph = {};
    for (const path of paths) {
      for (let i = 0; i < path.length; i += 1) {
        const currentNode = path[i]
        if (!this.graph[currentNode]) {
          this.graph[currentNode] = new Set();
        }
        if (path[i-1]) {
          this.graph[currentNode].add(path[i-1])
        }
        if (path[i+1]) {
          this.graph[currentNode].add(path[i+1])
        }
      }
    }
  }

  isAdjacent(vertexA, vertexB) {
    return this.graph[vertexA].has(vertexB)
  }

  // array is an adjacency list
  addVertex(vertex, array) { 
    for (const node of array) {
      if (!this.graph[vertex]) {
        this.graph[vertex] = new Set();
      }
      if (!this.graph[node]) {
        this.graph[node] = new Set()
      }
      
      this.graph[node].add(vertex)
      this.graph[vertex].add(node)
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  let graph = new Graph([]);

  console.log("Expecting: {}");
  console.log(graph.graph);

  console.log("");

  graph = new Graph([["a", "b", "c"], ["b", "d"]]);

  console.log('Expecting: { a: { "b" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b" }}');
  console.log(graph.graph);

  console.log("");

  console.log("Expecting: true");
  console.log(graph.isAdjacent("a", "b"));

  console.log("");

  console.log("Expecting: false");
  console.log(graph.isAdjacent("a", "c"));

  console.log("");

  graph.addVertex("e", ["a", "d"]);
  console.log('Expecting: { a: { "b", "e" }, b: { "a", "c", "d" }, c: { "b" }, d: { "b", "e" }, e: { "a", "d" } }');
  console.log(graph.graph);

  console.log("")
}

module.exports = Graph;

// Please add your pseudocode to this file
// And a written explanation of your solution
