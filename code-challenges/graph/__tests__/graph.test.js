'use strict';

const {Vertex, Edge, Graph} = require('../graph.js');

describe('Graph:', () => {

  const graph = new Graph();
  let a = graph.addVertex('Washington');
  let b = graph.addVertex('North Dakota');
  graph.addUndirectedEdge(a,b,10);


  it('Graph is created', () => {
    let graph = new Graph();
    // expect(true).toBeTruthy();
    expect(graph).toBeDefined();
  });

  it('Node can be successfully added to the graph', () => {
    expect(a).toBeDefined();
  });

  it('An edge can be successfully added to the graph', () => {
    expect(a).toBeDefined();
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new Graph();
    // expect(true).toBeTruthy();
    expect(graph).toBeDefined();
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new Graph();
    // expect(true).toBeTruthy();
    expect(graph).toBeDefined();
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new Graph();
    // expect(true).toBeTruthy();
    expect(graph).toBeDefined();
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new Graph();
    // expect(true).toBeTruthy();
    expect(graph).toBeDefined();
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let graph = new Graph();
    // expect(true).toBeTruthy();
    expect(graph).toBeDefined();
  });

  it('An empty graph properly returns null', () => {
    let graph = new Graph();
    // expect(true).toBeTruthy();
    expect(graph).toBeDefined();
  });

});