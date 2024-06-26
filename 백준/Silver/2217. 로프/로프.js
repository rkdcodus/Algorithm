// n개의 로프를 이용해서 들 수 있는 최대 중량 구하기
// 내림차순으로 정렬
// max 와 i번째 중량 * i 비교
// 더 큰 값 max 로 갱신..

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...arr] = input;

arr.sort((a, b) => b - a);
let max = 0;

arr.map((w, k) => {
  max = Math.max(max, w * (k + 1));
});

console.log(max);
