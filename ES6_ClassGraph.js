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

  traverseDFS(vertex, cb) {
    let visited = [];
    if (!this.vertices.includes(vertex)) {
      return console.log('Vertex Not Found');
    }
    this._traverseDFS(vertex, visited, cb);
  }

  _traverseDFS(vertex, visited, cb) {
    visited[vertex] = true;
    if(this.edges[vertex]) {
      cb(vertex)
    }
    this.edges[vertex].forEach(v => {
      if(!visited[v]) {
        this._traverseDFS(v, visited, cb)
      }
    })
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
  graph.addEdge(1, 2);
  graph.addEdge(1, 5);
  graph.addEdge(2, 3);
  graph.addEdge(2, 5);
  graph.addEdge(3, 4);
  graph.addEdge(4, 5);
  graph.addEdge(4, 6);
  graph.traverseDFS(1, (x) => console.log(x));
  expect(
    graph.print()
  ).toEqual('1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4');
};

testGraph();
console.log('All tests passed');
