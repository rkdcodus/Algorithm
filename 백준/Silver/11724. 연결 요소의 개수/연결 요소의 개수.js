const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const [n, m] = input[0];
const G = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0)); // 무방향 그래프 배열
const V = Array.from({ length: n + 1 }, () => 0); // Visited
let result = 0;

input.slice(1).map((v) => {
  G[v[0]][v[1]] = 1;
  G[v[1]][v[0]] = 1;
});

const bfs = (notVisited) => {
  let q = [notVisited];

  while (q.length) {
    const v = q.shift();
    V[v] = 1;

    G[v].map((value, idx) => {
      if (value && !V[idx]) {
        V[idx] = 1;
        q.push(idx);
      }
    });
  }
};

for (let i = 1; i <= n; i++) {
  if (!V[i]) {
    bfs(i);
    result += 1;
  }
}

console.log(result);
