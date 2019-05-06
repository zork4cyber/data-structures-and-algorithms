'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
    this._size = 0;
  }

  addVertex(value){
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this._size++;
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight){
    let edges = this.adjacencyList.get(startVertex);
    edges.push(new Edge(endVertex, weight));
  }

  addUndirectedEdge(start, end, weight){
    this.addDirectedEdge(start, end, weight);
    this.addDirectedEdge(end, start, weight);
  }

  print(){
    for(const[key,value] of this.adjacencyList){
      console.log(key,value);
    }
  }
}

const graph = new Graph();
let a = graph.addVertex('Washington');
let b = graph.addVertex('North Dakota');
let c = graph.addVertex('California');

graph.addUndirectedEdge(a,b,10);
graph.addDirectedEdge(b,c,90);
graph.addDirectedEdge(a,c,9);

graph.print();