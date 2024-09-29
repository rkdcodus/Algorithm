const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input[0][0];
const solution = input[1];

// 배열 중에서 0에 가장 가까운 수를 만들 수 있는 두 수 찾기.
//  start, end의 결정된 mid값이 가장 0이랑 가까워야함..
//  mid값이 양수이면 end를 한칸 앞으로.
// mid값이 음수이면 start를 한칸 앞으로
let start = 0;
let end = n - 1;
let result = [solution[start], solution[end]];
let closer = solution[start] + solution[end];

while (start < end) {
  const mid = solution[start] + solution[end];

  if (mid === 0) {
    result = [solution[start], solution[end]];
    break;
  }

  if (Math.abs(closer) >= Math.abs(mid)) {
    closer = mid;
    result = [solution[start], solution[end]];
  }

  if (mid < 0) {
    start += 1;
  } else {
    end -= 1;
  }
}

console.log(result.join(" "));
