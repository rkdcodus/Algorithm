const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const Xs = [...input[1]];
const sorted_X = [...new Set(input[1].sort((a, b) => a - b))];
const answer = [];

const binarySearch = (target, start, end) => {
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (target === sorted_X[mid]) {
      return answer.push(mid);
    } else if (target < sorted_X[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

Xs.map((x) => {
  binarySearch(x, 0, sorted_X.length - 1);
});

console.log(answer.join(" "));
