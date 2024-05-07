const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 방법2 : : 정렬 후 한번만 돌리기
const sortedInput = input.slice(1).sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let firstEnd = 0;

const count = sortedInput.reduce((sum, cur) => {
  if (firstEnd <= cur[0]) {
    firstEnd = cur[1];
    return sum + 1;
  }
  return sum;
}, 0);

console.log(count);
