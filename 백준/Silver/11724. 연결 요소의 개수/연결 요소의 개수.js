const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, m] = input[0];
const G = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
const V = Array.from({ length: n + 1 }, () => 0);
let CC = 0;

input.slice(1).map((v) => {
  G[v[0]][v[1]] = 1;
  G[v[1]][v[0]] = 1;
});

const bfs = (q) => {
  while (q.length > 0) {
    const v = q.shift();

    V[v] = 1;
    G[v].map((value, idx) => {
      if (value === 1 && V[idx] === 0) {
        V[idx] = 1;
        q.push(idx);
      }
    });
  }
};

for (let i = 1; i <= n; i++) {
  let q = [];
  if (!V[i]) {
    q.push(i);
  }
  if (q.length > 0) {
    bfs(q);
    CC += 1;
  }
}

console.log(CC);
