const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const n = input[0];
const m = input[1];
const result = [];
const visited = new Array(n).fill(0);

const backtracking = () => {
  if (result.length === m) return console.log(result.join(" "));
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    if (result && result.at(-1) > i) continue;
    visited[i] = 1;
    result.push(i);
    backtracking();
    result.pop();
    visited[i] = 0;
  }
};

backtracking();
