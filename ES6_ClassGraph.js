const expect = require('expect');

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  addEdge(v1, v2) {
    this.edges[v1].push(v2);
    this.edges[v2].push(v1);
    this.numberOfEdges++;
  }

  relations() {
    return this.numberOfEdges;
  }

  print() {
    return (this.vertices.map(v => {
      return (v + ' -> ' + this.edges[v].join(', ')).trim();
    }, this).join(' | '));
  }
}

const testGraph = () => {
  const graph = new Graph();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  graph.addVertex(5);
  graph.addVertex(6);
  graph.addEdge(2, 6);
  graph.addEdge(4, 3);

  expect(
    graph.print()
  ).toEqual('1 -> | 2 -> 6 | 3 -> 4 | 4 -> 3 | 5 -> | 6 -> 2');
};

testGraph();
console.log('All tests passed');
