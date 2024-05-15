const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M, V] = input[0];
const G = Array.from({ length: N + 1 }, () => []);
const Visited = Array.from({ length: N + 1 }, () => 0);
const dfs_answer = [];
const bfs_answer = [];

input.slice(1).map((n) => {
  G[n[0]].push(n[1]);
  G[n[1]].push(n[0]);
});

G.forEach((ns) => {
  ns.sort((a, b) => a - b);
});

const dfs = (n) => {
  if (!dfs_answer.includes(n)) {
    dfs_answer.push(n);
  } else {
    return;
  }
  G[n].forEach((i) => {
    dfs(i);
  });
};

const bfs = (n) => {
  const D = [n];
  while (D.length) {
    const d = D.shift();
    if (!Visited[d]) bfs_answer.push(d);
    Visited[d] = 1;
    G[d].map((i) => {
      if (!Visited[i]) D.push(i);
    });
  }
};

dfs(V);
bfs(V);
console.log(dfs_answer.join(" "));
console.log(bfs_answer.join(" "));
