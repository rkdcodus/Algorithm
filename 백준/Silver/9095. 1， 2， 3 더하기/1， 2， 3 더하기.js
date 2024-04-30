const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

T = input[0];

const sum_dp = (n) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      dp[i]++;
      continue;
    }
    if (i === 2) {
      dp[i] += dp[i - 1];
      dp[i]++;
      continue;
    }
    if (i === 3) {
      dp[i] += dp[i - 1];
      dp[i] += dp[i - 2];
      dp[i]++;
      continue;
    }
    dp[i] += dp[i - 1];
    dp[i] += dp[i - 2];
    dp[i] += dp[i - 3];
  }
  console.log(dp[n]);
};

input.slice(1).forEach((elem) => {
  sum_dp(elem);
});
