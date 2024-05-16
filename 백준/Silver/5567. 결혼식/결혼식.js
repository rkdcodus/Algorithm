const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const G = Array.from({ length: n + 1 }, () => []);
let answer = [];

input.slice(2).map((v) => {
  G[v[0]].push(v[1]);
  G[v[1]].push(v[0]);
});

const dfs = (v, n) => {
  if (n > 3) return;
  if (!answer.includes(v)) answer.push(v);
  G[v].forEach((i) => {
    dfs(i, n + 1);
  });
};

dfs(1, 1);
console.log(answer.length - 1);
