const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath, "utf-8").trim();
const n = +input;

const arr = Array.from({ length: n + 1 }, () => 0);

for (let i = 2; i <= n; i++) {
  arr[i] = arr[i - 1] + 1;
  if (i % 2 == 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
  if (i % 3 == 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
}

console.log(arr[n]);
