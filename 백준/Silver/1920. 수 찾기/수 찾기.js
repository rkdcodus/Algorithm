const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const n_list = input[1].sort((a, b) => a - b);
const m_list = input[3];
const answer = [];

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      answer.push(1);
      return;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer.push(0);
};

m_list.map((m) => {
  binarySearch(n_list, m, 0, n - 1);
});
console.log(answer.join("\n"));
