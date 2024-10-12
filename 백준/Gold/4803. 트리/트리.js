// 4803 백준 골드4
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// dfs 깊이 우선 탐색, 완탐, 현재 노드 방문 처리, 연결된 노드 재귀적으로 방문

// 사이클이 존재한다면 true를 반환, true일 경우 트리가 아님.
const dfs = (visited, x, prev) => {
  visited[x] = 1;

  for (i of graph[x]) {
    if (!visited[i]) {
      if (dfs(visited, i, x)) return true;
    } else if (i != prev) return true;
  }
  return false;
};

let line = 0;
let case_count = 0;
let graph = [];
let visited = [];

const print = (num) => {
  if (num === 0) return "No trees.";
  if (num === 1) return "There is one tree.";
  return `A forest of ${num} trees.`;
};

for (let i = 0; i < input.length; i++) {
  if (i === line) {
    // 노드를 전부 방문할 때까지 dfs => dfs 돌린 개수 트리 개수.
    let count = 0;

    for (let j = 1; j < visited.length; j++) {
      if (visited[j]) continue;
      if (!dfs(visited, j)) count += 1;
    }
    if (i !== 0) {
      console.log(`Case ${case_count}: ${print(count)}`);
    }

    // 다음 tc를 위한 초기화
    case_count += 1;
    line += input[i][1] + 1;
    graph = Array.from({ length: input[i][0] + 1 }, () => []);
    visited = Array.from({ length: input[i][0] + 1 }, () => 0);
    continue;
  }
  const [x, y] = input[i];
  graph[x].push(y);
  graph[y].push(x);
}
