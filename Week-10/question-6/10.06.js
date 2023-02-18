/* All path from source to target
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible 
paths from node 0 to node n - 1 and return them in any order.
The graph is given as follows: graph[i] is a list of all nodes you can visit from node i 
(i.e.,there is a directed edge from node i to node graph[i][j]) */

var allPathsSourceTarget = function (graph) {
  const paths = [];
  const dfs = (index, path) => {
    if (path[path.length - 1] == graph.length - 1) {
      paths.push(path);
      return;
    }
    for (let i = 0; i < graph[index].length; i++) {
      dfs(graph[index][i], [...path, graph[index][i]]);
    }
  };
  dfs(0, [0]);
  return paths;
};
