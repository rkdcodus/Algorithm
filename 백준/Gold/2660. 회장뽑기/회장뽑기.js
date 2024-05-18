const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const G = Array.from({ length: n + 1 }, () => []);
let answer = [];

const q = [];

input.slice(1, -1).map((v) => {
  G[v[0]].push(v[1]);
  G[v[1]].push(v[0]);
});

const bfs = (n, visited, dist) => {
  visited[n] = 1;
  q.push(n);
  while (q.length) {
    const v = q.shift();
    G[v].map((i) => {
      if (!visited[i]) {
        q.push(i);
        dist[i] = dist[v] + 1;
        visited[i] = 1;
      }
    });
  }
};
let c = 51;
for (let i = 1; i < n + 1; i++) {
  const dist = Array(n + 1).fill(0);
  const visited = Array(n + 1).fill(0);
  bfs(i, visited, dist);
  const m = Math.max(...dist);
  if (m === c) {
    answer.push(i);
  } else if (m < c) {
    answer = [i];
    c = m;
  }
}

console.log(c, answer.length);
console.log(answer.join(" "));
