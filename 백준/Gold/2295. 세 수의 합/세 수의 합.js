const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const U = input.slice(1).sort((a, b) => a - b);
const sums = new Set();
let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    if (U[i] + U[j] < U[n - 1]) {
      sums.add(U[i] + U[j]);
    }
  }
}

for (let i = n - 1; i >= 0; i--) {
  for (let j = 0; j < n; j++) {
    if (sums.has(U[i] - U[j])) {
      answer = U[i];
      break;
    }
  }
  if (answer) break;
}

console.log(answer);
