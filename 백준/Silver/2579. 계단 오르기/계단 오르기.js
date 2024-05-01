const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = Array.from({ length: input[0] + 1 }, () => [0, 0]);
// 첫번째 배열은 계단 위치
// 계단은 연속 2번까지만 밟을 수 있기 때문에 크기가 2인 두번째 배열을 선언
// 두번째 배열의 index 0은 지금 밟은 위치의 계단i가  연속 1번일 경우,
// 즉, 전 계단은 못밟고 전전계단에서 올라왔다는 소리. (연속 2번의 기회가 초기화)
// index 1은 연속 2번으로 밟았단 소리, 즉, 전 계단을 밟았단 소리 이때 전 계단은 연속 1번째이였어야하므로 dp[i][0]일 때의 값을 뽑아오면 됨.

dp[1][0] = input[1];
dp[1][1] = input[1];
if (input.length > 2) {
  dp[2][0] = input[2];
  dp[2][1] = input[1] + input[2];
}

for (let i = 3; i < input[0] + 1; i++) {
  for (let j = 0; j < 2; j++) {
    if (!j) {
      dp[i][j] = Math.max(dp[i - 2][0], dp[i - 2][1]) + input[i];
      continue;
    }
    dp[i][j] = dp[i - 1][0] + input[i];
  }
}

console.log(Math.max(dp[input[0]][0], dp[input[0]][1]));
