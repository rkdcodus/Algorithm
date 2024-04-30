const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

T = input[0];
const dp = Array.from({ length: 11 }, () => 0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

input.slice(1).forEach((elem) => {
  console.log(dp[elem]);
});
