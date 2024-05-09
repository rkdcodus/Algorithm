// S의 최솟값을 구하기 위해선
// B의 최대값은 A의 제일 적은 수와 곱해야한다..
// 갭이 커야한다.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, A, B] = input;
let S = 0;

A.sort((a, b) => a - b);

for (let i = 0; i < n[0]; i++) {
  const max = Math.max(...B);
  S += A[i] * max;
  B.splice(B.indexOf(max), 1);
}

console.log(S);
