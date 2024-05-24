const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ");
const Ks = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let start = 1;
let end = Ks[K - 1];
let answer = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  const count = Ks.reduce((count, k) => count + parseInt(k / mid), 0);
  if (count >= N) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
