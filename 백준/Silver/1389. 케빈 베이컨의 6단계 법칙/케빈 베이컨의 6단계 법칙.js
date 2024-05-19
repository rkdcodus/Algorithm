const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const G = Array.from({ length: n + 1 }, () => []);
const answer = [0, 0];

input.slice(1).map((i) => {
  G[i[0]].push(i[1]);
  G[i[1]].push(i[0]);
});

const bfs = (n, visited, dist) => {
  const q = [n];
  visited[n] = 1;
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

for (let i = 1; i < n + 1; i++) {
  const visited = Array(n + 1).fill(0);
  const dist = Array(n + 1).fill(0);
  bfs(i, visited, dist);
  const sum = dist.reduce((sum, acc) => sum + acc);

  if (i === 1) {
    answer[0] = 1;
    answer[1] = sum;
    continue;
  }
  if (answer[1] > sum) {
    answer[0] = i;
    answer[1] = sum;
  } else if (answer[1] === sum) {
    answer[0] = Math.min(i, answer[0]);
  }
}

console.log(answer[0]);
