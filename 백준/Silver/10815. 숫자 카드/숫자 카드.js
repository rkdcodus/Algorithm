const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const Ns = input[1];
const Ms = input[3];
const answer = [];

const set = new Set();

Ns.map((n) => {
  set.add(n);
});

Ms.map((m) => {
  set.has(m) ? answer.push(1) : answer.push(0);
});

console.log(answer.join(" "));
