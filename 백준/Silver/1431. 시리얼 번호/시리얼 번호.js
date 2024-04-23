// 1431 시리얼 번호
// 1. 짧은 것이 먼저 온다
// 2. 숫자인 것에서의 합이 작은게 먼저 온다.
// 3. 사전 순 비교 -> 글자 끼리 비교 숫자가 나오면 숫자 나온 애가 앞으로
// 문자끼리라면 문자 중 사전순으로 비교

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const result = input.slice(1).sort((a, b) => {
  if (a.length < b.length) return -1;
  if (a.length === b.length) {
    let sumA = 0,
      sumB = 0;

    for (let i = 0; i < a.length; i++) {
      if (+a[i]) sumA += +a[i];
      if (+b[i]) sumB += +b[i];
    }

    if (sumA < sumB) return -1;
    if (sumA > sumB) return 1;

    for (let i = 0; i < a.length; i++) {
      if (+a[i] && +b[i]) {
        if (a[i] < b[i]) return -1;
        else if (a[i] > b[i]) return 1;
        else continue;
      }
      if (+a[i] && !+b[i]) return -1;
      if (!+a[i] && +b[i]) return 1;

      if (a[i] < b[i]) return -1;
      else if (a[i] > b[i]) return 1;
      else continue;
    }
    return 0;
  }
});

result.map((elem) => console.log(elem));
