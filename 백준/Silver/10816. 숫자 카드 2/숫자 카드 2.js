const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 방법 2
const n_list = input[1].reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

const m_list = input[3].map((m) => (n_list[m] ? n_list[m] : 0)).join(" ");
console.log(m_list);