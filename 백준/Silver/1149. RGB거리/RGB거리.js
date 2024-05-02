const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 2차원 배열 D[i][j]
// i는 N개의 집
// j는 r, g, b 색의 비용 최솟값.
// i번째의 r, g, b일 경우마다 최소 비용값을 구한다. -> i-1집의 가능한 색 중 더 작은 비용을 가진 값 + i번째의 r, g, b색 비용.
// 예를 들어, i번째 r일 땐, i-1번째 집의 g, b일 경우 중 더 작은 비용 합산이 나온 색이 g일 경우 i번째 r일 때의 값은 i-1의 g 값 + i의 r값.

const D = Array.from({ length: input[0] }, () => [0, 0, 0]);

D[0][0] = input[1][0];
D[0][1] = input[1][1];
D[0][2] = input[1][2];

for (let i = 1; i < input[0]; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 0) {
      D[i][j] = Math.min(D[i - 1][1], D[i - 1][2]) + input[i + 1][0];
    } else if (j === 1) {
      D[i][j] = Math.min(D[i - 1][0], D[i - 1][2]) + input[i + 1][1];
    } else if (j === 2) {
      D[i][j] = Math.min(D[i - 1][0], D[i - 1][1]) + input[i + 1][2];
    }
  }
}

console.log(Math.min(...D[input[0] - 1]));
